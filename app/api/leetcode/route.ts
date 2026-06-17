import { NextResponse } from "next/server";

const LEETCODE_GRAPHQL = "https://leetcode.com/graphql/";

const STATS_QUERY = `
query getUserStats($username: String!) {
  matchedUser(username: $username) {
    profile {
      ranking
    }
    submitStatsGlobal {
      acSubmissionNum {
        difficulty
        count
        submissions
      }
    }
    userCalendar {
      streak
      totalActiveDays
    }
  }
}
`;

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const username = searchParams.get("username");

  if (!username || typeof username !== "string" || !/^[a-zA-Z0-9_-]+$/.test(username)) {
    return NextResponse.json({ error: "Invalid username" }, { status: 400 });
  }

  try {
    const res = await fetch(LEETCODE_GRAPHQL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Referer: "https://leetcode.com",
      },
      body: JSON.stringify({ query: STATS_QUERY, variables: { username } }),
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error(`LeetCode API returned ${res.status}`);
    const json = await res.json();

    const user = json?.data?.matchedUser;
    if (!user) throw new Error("User not found");

    const acCounts = user.submitStatsGlobal?.acSubmissionNum ?? [];
    const get = (diff: string) =>
      (acCounts.find((x: { difficulty: string; count: number }) => x.difficulty === diff)?.count ?? 0);

    const totalSolved = get("All");
    const easySolved  = get("Easy");
    const mediumSolved = get("Medium");
    const hardSolved  = get("Hard");
    const ranking     = user.profile?.ranking ?? 0;
    const streak      = user.userCalendar?.streak ?? 0;
    const totalActiveDays = user.userCalendar?.totalActiveDays ?? 0;

    return NextResponse.json({
      totalSolved,
      easySolved,
      mediumSolved,
      hardSolved,
      ranking,
      streak,
      totalActiveDays,
    });
  } catch (err) {
    console.error("[leetcode-api]", err);
    return NextResponse.json({ error: "fetch_failed" }, { status: 502 });
  }
}
