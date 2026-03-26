import { Game, Player, LiveText } from "../types";

export const MOCK_GAME: Game = {
  id: "game-001",
  homeTeam: "두산",
  awayTeam: "삼성",
  homeScore: 5,
  awayScore: 3,
  inning: "5회초",
  status: "진행중",
  balls: 2,
  strikes: 1,
  outs: 1,
  currentBatter: "김하성",
};

export const MOCK_HOME_LINEUP: Player[] = [
  {
    id: "p1", name: "정수빈", team: "두산", position: "CF", battingOrder: 1,
    isSubstituted: false, isNewPlayer: false,
    stats: { avg: ".315", ops: "0.82", hr: 3 },
    recentGames: [["03/20","삼성","2-4"],["03/18","KT","1-3"],["03/16","LG","3-4"],["03/14","NC","1-4"],["03/12","한화","2-4"]],
    vsStats: { opp: "삼성", v1: ".295", v2: "0.78", v3: "1개" },
  },
  {
    id: "p2", name: "김하성", team: "두산", position: "SS", battingOrder: 2,
    isSubstituted: false, isNewPlayer: false,
    stats: { avg: ".342", ops: "0.98", hr: 12 },
    recentGames: [["03/20","삼성","3-4"],["03/18","KT","1-3"],["03/16","LG","2-3"],["03/14","NC","0-4"],["03/12","한화","3-5"]],
    vsStats: { opp: "삼성", v1: ".380", v2: "1.20", v3: "8개" },
  },
  {
    id: "p3", name: "이정후", team: "두산", position: "RF", battingOrder: 3,
    isSubstituted: false, isNewPlayer: true, replacedPlayer: "박건우", subTime: "4회",
    stats: { avg: ".328", ops: "0.91", hr: 7 },
    recentGames: [["03/20","삼성","—"],["03/18","KT","2-3"],["03/16","LG","1-2"],["03/14","NC","2-3"],["03/12","한화","0-2"]],
    vsStats: { opp: "삼성", v1: ".340", v2: "0.88", v3: "2개" },
  },
  {
    id: "p4", name: "양석환", team: "두산", position: "1B", battingOrder: 4,
    isSubstituted: false, isNewPlayer: false,
    stats: { avg: ".298", ops: "1.14", hr: 18 },
    recentGames: [["03/20","삼성","1-4"],["03/18","KT","2-3"],["03/16","LG","0-3"],["03/14","NC","2-4"],["03/12","한화","1-3"]],
    vsStats: { opp: "삼성", v1: ".310", v2: "0.95", v3: "5개" },
  },
  {
    id: "p5", name: "허경민", team: "두산", position: "3B", battingOrder: 5,
    isSubstituted: false, isNewPlayer: false,
    stats: { avg: ".281", ops: "0.76", hr: 6 },
    recentGames: [["03/20","삼성","1-4"],["03/18","KT","0-3"],["03/16","LG","2-4"],["03/14","NC","1-3"],["03/12","한화","2-4"]],
    vsStats: { opp: "삼성", v1: ".270", v2: "0.74", v3: "2개" },
  },
  {
    id: "p6", name: "전민수", team: "두산", position: "LF", battingOrder: 6,
    isSubstituted: false, isNewPlayer: false,
    stats: { avg: ".265", ops: "0.71", hr: 4 },
    recentGames: [["03/20","삼성","0-4"],["03/18","KT","1-3"],["03/16","LG","1-3"],["03/14","NC","2-4"],["03/12","한화","1-4"]],
    vsStats: { opp: "삼성", v1: ".250", v2: "0.68", v3: "1개" },
  },
  {
    id: "p7", name: "오재원", team: "두산", position: "2B", battingOrder: 7,
    isSubstituted: false, isNewPlayer: false,
    stats: { avg: ".258", ops: "0.69", hr: 3 },
    recentGames: [["03/20","삼성","1-3"],["03/18","KT","0-3"],["03/16","LG","1-4"],["03/14","NC","0-3"],["03/12","한화","2-3"]],
    vsStats: { opp: "삼성", v1: ".242", v2: "0.65", v3: "1개" },
  },
  {
    id: "p8", name: "박세혁", team: "두산", position: "C", battingOrder: 8,
    isSubstituted: false, isNewPlayer: false,
    stats: { avg: ".243", ops: "0.67", hr: 5 },
    recentGames: [["03/20","삼성","1-3"],["03/18","KT","1-4"],["03/16","LG","0-3"],["03/14","NC","1-3"],["03/12","한화","0-4"]],
    vsStats: { opp: "삼성", v1: ".230", v2: "0.64", v3: "2개" },
  },
  {
    id: "p9", name: "곽빈", team: "두산", position: "P", battingOrder: 9,
    isSubstituted: false, isNewPlayer: false,
    stats: { era: "2.81", wins: 3, strikeouts: 74 },
    recentGames: [["03/18","KT","6이닝 2실점"],["03/11","LG","7이닝 1실점"],["03/04","NC","5이닝 3실점"],["02/26","한화","6이닝 0실점"],["02/19","KIA","4이닝 4실점"]],
    vsStats: { opp: "삼성", v1: "3.12", v2: "2승 0패", v3: "삼진 18" },
  },
  {
    id: "p10", name: "박건우", team: "두산", position: "RF", battingOrder: 3,
    isSubstituted: true, isNewPlayer: false, subTime: "4회",
    stats: { avg: ".290", ops: "0.80", hr: 8 },
    recentGames: [["03/18","KT","2-4"],["03/16","LG","1-3"],["03/14","NC","2-4"],["03/12","한화","1-3"],["03/09","KIA","0-3"]],
    vsStats: { opp: "삼성", v1: ".285", v2: "0.79", v3: "3개" },
  },
];

export const MOCK_AWAY_LINEUP: Player[] = [
  { id: "a1", name: "김성윤", team: "삼성", position: "CF", battingOrder: 1, isSubstituted: false, isNewPlayer: false, stats: { avg: ".295", ops: "0.79", hr: 4 }, recentGames: [["03/20","두산","1-4"],["03/18","NC","2-3"],["03/16","LG","0-3"],["03/14","KT","1-4"],["03/12","KIA","2-4"]], vsStats: { opp: "두산", v1: ".280", v2: "0.75", v3: "1개" } },
  { id: "a2", name: "이재현", team: "삼성", position: "SS", battingOrder: 2, isSubstituted: false, isNewPlayer: false, stats: { avg: ".278", ops: "0.72", hr: 2 }, recentGames: [["03/20","두산","0-3"],["03/18","NC","1-3"],["03/16","LG","2-4"],["03/14","KT","1-3"],["03/12","KIA","0-4"]], vsStats: { opp: "두산", v1: ".265", v2: "0.70", v3: "0개" } },
  { id: "a3", name: "구자욱", team: "삼성", position: "LF", battingOrder: 3, isSubstituted: false, isNewPlayer: false, stats: { avg: ".335", ops: "0.96", hr: 10 }, recentGames: [["03/20","두산","2-4"],["03/18","NC","1-3"],["03/16","LG","3-4"],["03/14","KT","0-3"],["03/12","KIA","2-4"]], vsStats: { opp: "두산", v1: ".360", v2: "1.05", v3: "4개" } },
  { id: "a4", name: "오재일", team: "삼성", position: "1B", battingOrder: 4, isSubstituted: false, isNewPlayer: false, stats: { avg: ".310", ops: "0.89", hr: 9 }, recentGames: [["03/20","두산","1-4"],["03/18","NC","2-4"],["03/16","LG","1-3"],["03/14","KT","2-4"],["03/12","KIA","0-3"]], vsStats: { opp: "두산", v1: ".298", v2: "0.85", v3: "3개" } },
  { id: "a5", name: "강민호", team: "삼성", position: "RF", battingOrder: 5, isSubstituted: false, isNewPlayer: false, stats: { avg: ".302", ops: "0.88", hr: 14 }, recentGames: [["03/20","두산","1-4"],["03/18","NC","2-3"],["03/16","LG","0-3"],["03/14","KT","2-4"],["03/12","KIA","1-3"]], vsStats: { opp: "두산", v1: ".315", v2: "0.92", v3: "3개" } },
  { id: "a6", name: "박계범", team: "삼성", position: "3B", battingOrder: 6, isSubstituted: false, isNewPlayer: false, stats: { avg: ".265", ops: "0.70", hr: 5 }, recentGames: [["03/20","두산","0-3"],["03/18","NC","1-4"],["03/16","LG","2-3"],["03/14","KT","0-3"],["03/12","KIA","1-4"]], vsStats: { opp: "두산", v1: ".250", v2: "0.68", v3: "2개" } },
  { id: "a7", name: "류지혁", team: "삼성", position: "2B", battingOrder: 7, isSubstituted: false, isNewPlayer: false, stats: { avg: ".252", ops: "0.66", hr: 3 }, recentGames: [["03/20","두산","1-3"],["03/18","NC","0-3"],["03/16","LG","1-4"],["03/14","KT","2-3"],["03/12","KIA","0-3"]], vsStats: { opp: "두산", v1: ".240", v2: "0.63", v3: "1개" } },
  { id: "a8", name: "김재성", team: "삼성", position: "C", battingOrder: 8, isSubstituted: false, isNewPlayer: false, stats: { avg: ".238", ops: "0.62", hr: 4 }, recentGames: [["03/20","두산","0-3"],["03/18","NC","1-3"],["03/16","LG","0-4"],["03/14","KT","1-3"],["03/12","KIA","2-4"]], vsStats: { opp: "두산", v1: ".225", v2: "0.60", v3: "1개" } },
  { id: "a9", name: "이승현", team: "삼성", position: "P", battingOrder: 9, isSubstituted: false, isNewPlayer: true, replacedPlayer: "최채흥", subTime: "3회", stats: { era: "3.45", wins: 1, strikeouts: 32 }, recentGames: [["03/18","NC","2이닝 1실점"],["03/15","LG","3이닝 0실점"],["03/12","KT","1이닝 0실점"],["03/09","KIA","2이닝 2실점"],["03/06","한화","3이닝 1실점"]], vsStats: { opp: "두산", v1: "4.10", v2: "0승 1패", v3: "삼진 8" } },
  { id: "a10", name: "최채흥", team: "삼성", position: "P", battingOrder: 9, isSubstituted: true, isNewPlayer: false, subTime: "3회", stats: { era: "3.12", wins: 2, strikeouts: 41 }, recentGames: [["03/18","두산","5이닝 3실점"],["03/11","NC","6이닝 1실점"],["03/04","LG","5이닝 2실점"],["02/26","KT","7이닝 0실점"],["02/19","한화","4이닝 3실점"]], vsStats: { opp: "두산", v1: "2.85", v2: "2승 1패", v3: "삼진 22" } },
];

export const MOCK_LIVE_TEXTS: LiveText[] = [
  { id: "l1", timestamp: "14:52", content: "5회초 김하성 타석. B2 S1 O1", type: "타격" },
  { id: "l2", timestamp: "14:48", content: "▶ 교체 — 두산 박건우 → 이정후 (대주자)", type: "교체" },
  { id: "l3", timestamp: "14:45", content: "★ 득점! 두산 양석환 우중간 2루타 — 1점 추가 (5-3)", type: "득점홈" },
  { id: "l4", timestamp: "14:41", content: "4회말 삼성 공격 종료", type: "일반" },
  { id: "l5", timestamp: "14:38", content: "★ 삼성 득점! 구자욱 좌전 적시타 — 2점 추가 (4-3)", type: "득점원" },
  { id: "l6", timestamp: "14:33", content: "4회말 삼성 공격. 선두타자 구자욱", type: "일반" },
  { id: "l7", timestamp: "14:28", content: "4회초 두산 공격 종료", type: "일반" },
  { id: "l8", timestamp: "14:21", content: "★ 두산 득점! 허경민 내야 땅볼 — 1점 (4-1)", type: "득점홈" },
  { id: "l9", timestamp: "14:10", content: "▶ 교체 — 삼성 투수 최채흥 → 이승현", type: "교체" },
  { id: "l10", timestamp: "14:05", content: "3회초 김하성 좌중간 2루타", type: "타격" },
  { id: "l11", timestamp: "13:58", content: "3회초 정수빈 볼넷 출루", type: "일반" },
  { id: "l12", timestamp: "13:51", content: "★ 두산 득점! 양석환 3루타 — 2점 (3-1)", type: "득점홈" },
  { id: "l13", timestamp: "13:44", content: "2회말 삼성 공격 종료", type: "일반" },
  { id: "l14", timestamp: "13:31", content: "★ 삼성 득점! 강민호 솔로 홈런 (1-1)", type: "득점원" },
  { id: "l15", timestamp: "13:22", content: "경기 시작. 두산 선발 곽빈, 삼성 선발 최채흥", type: "일반" },
];
