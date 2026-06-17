import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { personalInfo } from "@/lib/constants";
import { Code2, Trophy, Flame, Calendar } from "lucide-react";

interface LeetCodeData {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  ranking: number;
  streak: number;
  totalActiveDays: number;
}

// Real values from profile — used when API is unreachable
const FALLBACK: LeetCodeData = {
  totalSolved: 278,
  easySolved: 86,
  mediumSolved: 157,
  hardSolved: 35,
  ranking: 520939,
  streak: 109,
  totalActiveDays: 190,
};

async function getLeetCodeStats(): Promise<LeetCodeData> {
  try {
    // Use absolute URL for server component (required in Next.js)
    const baseUrl =
      process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000";

    const res = await fetch(
      `${baseUrl}/api/leetcode?username=${personalInfo.leetcodeUsername}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return FALLBACK;
    const data = await res.json();
    if (data.error) return FALLBACK;
    return {
      totalSolved: data.totalSolved ?? FALLBACK.totalSolved,
      easySolved: data.easySolved ?? FALLBACK.easySolved,
      mediumSolved: data.mediumSolved ?? FALLBACK.mediumSolved,
      hardSolved: data.hardSolved ?? FALLBACK.hardSolved,
      ranking: data.ranking ?? FALLBACK.ranking,
      streak: data.streak ?? FALLBACK.streak,
      totalActiveDays: data.totalActiveDays ?? FALLBACK.totalActiveDays,
    };
  } catch {
    return FALLBACK;
  }
}

const StatCard = ({
  icon: Icon,
  label,
  value,
  sub,
  color,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  sub?: string;
  color?: string;
}) => (
  <div className="card-glass rounded-xl p-5 flex items-start gap-4 hover:border-cyan-400/40 transition-colors">
    <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 shrink-0">
      <Icon size={20} className={color ?? "text-cyan-400"} />
    </div>
    <div>
      <p className="text-xs text-muted-foreground mb-1 font-mono">{label}</p>
      <p className="text-2xl font-bold text-foreground font-mono">{value}</p>
      {sub && <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>}
    </div>
  </div>
);

export async function Dashboard() {
  const s = await getLeetCodeStats();

  return (
    <section id="dashboard" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            number="07."
            title="Dashboard"
            subtitle="Live LeetCode stats — refreshed every hour."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="flex items-center gap-3 mb-6">
            <Code2 size={20} className="text-cyan-400" />
            <span className="font-mono text-foreground font-semibold">
              LeetCode — @{personalInfo.leetcodeUsername}
            </span>
            <a
              href={personalInfo.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors ml-auto"
            >
              View Profile →
            </a>
          </div>

          {/* Top stat cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              icon={Trophy}
              label="Total Solved"
              value={s.totalSolved.toString()}
              sub={`Easy ${s.easySolved} · Med ${s.mediumSolved} · Hard ${s.hardSolved}`}
            />
            <StatCard
              icon={Flame}
              label="Current Streak"
              value={`${s.streak}d`}
              sub="Max streak achieved"
              color="text-orange-400"
            />
            <StatCard
              icon={Calendar}
              label="Active Days"
              value={s.totalActiveDays.toString()}
              sub="Days with a submission"
              color="text-blue-400"
            />
          </div>

          {/* Difficulty breakdown bar */}
          <div className="mt-4 card-glass rounded-xl p-5">
            <p className="text-xs text-muted-foreground font-mono mb-4">Difficulty Breakdown</p>
            <div className="space-y-3">
              {[
                { label: "Easy", value: s.easySolved, total: s.totalSolved, color: "bg-green-400", textColor: "text-green-400" },
                { label: "Medium", value: s.mediumSolved, total: s.totalSolved, color: "bg-yellow-400", textColor: "text-yellow-400" },
                { label: "Hard", value: s.hardSolved, total: s.totalSolved, color: "bg-red-400", textColor: "text-red-400" },
              ].map(({ label, value, total, color, textColor }) => (
                <div key={label} className="flex items-center gap-3">
                  <span className={`text-xs font-mono w-14 ${textColor}`}>{label}</span>
                  <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className={`h-full ${color} rounded-full`}
                      style={{ width: total > 0 ? `${(value / total) * 100}%` : "0%" }}
                    />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground w-8 text-right">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
