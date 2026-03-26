export interface Game {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  inning: string;
  status: "진행중" | "종료" | "예정";
  balls: number;
  strikes: number;
  outs: number;
  currentBatter: string;
}

export interface Player {
  id: string;
  name: string;
  team: string;
  position: string;
  battingOrder: number;
  isSubstituted: boolean;
  isNewPlayer: boolean;
  replacedPlayer?: string;
  subTime?: string;
  stats: {
    avg?: string;
    ops?: string;
    hr?: number;
    era?: string;
    wins?: number;
    strikeouts?: number;
  };
  recentGames: [string, string, string][];
  vsStats: {
    opp: string;
    v1: string;
    v2: string;
    v3: string;
  };
}

export interface LiveText {
  id: string;
  timestamp: string;
  content: string;
  type: "타격" | "교체" | "득점홈" | "득점원" | "일반";
}
