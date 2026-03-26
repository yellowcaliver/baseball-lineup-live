import { Game } from "../types";

interface Props {
  game: Game;
}

export default function Scoreboard({ game }: Props) {
  return (
    <div style={{
      background: "#fff",
      border: "1px solid #e9ecef",
      borderRadius: 12,
      padding: "14px 20px 10px",
      marginBottom: 12,
      boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
    }}>
      {/* 팀 점수 */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 15, fontWeight: 600, color: "#212529" }}>{game.homeTeam}</span>
          <span style={{ fontSize: 32, fontWeight: 700, color: "#185FA5" }}>{game.homeScore}</span>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 11, color: "#adb5bd" }}>진행중</div>
          <div style={{ fontSize: 16, fontWeight: 600, color: "#212529" }}>{game.inning}</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 32, fontWeight: 700, color: "#A32D2D" }}>{game.awayScore}</span>
          <span style={{ fontSize: 15, fontWeight: 600, color: "#212529" }}>{game.awayTeam}</span>
        </div>
      </div>

      {/* 볼카운트 */}
      <div style={{
        display: "flex", alignItems: "center", gap: 10,
        marginTop: 10, paddingTop: 10,
        borderTop: "1px solid #f1f3f5",
        flexWrap: "wrap",
      }}>
        <CountDots label="B" count={game.balls} max={4} color="#378ADD" />
        <CountDots label="S" count={game.strikes} max={3} color="#E24B4A" />
        <CountDots label="O" count={game.outs} max={2} color="#888780" />
        <div style={{ marginLeft: "auto", fontSize: 13, color: "#6c757d" }}>
          타자: <strong style={{ color: "#212529" }}>{game.currentBatter}</strong>
        </div>
      </div>
    </div>
  );
}

function CountDots({ label, count, max, color }: {
  label: string; count: number; max: number; color: string;
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
      <span style={{ fontSize: 11, color: "#6c757d" }}>{label}</span>
      <div style={{ display: "flex", gap: 3 }}>
        {Array.from({ length: max }).map((_, i) => (
          <div key={i} style={{
            width: 10, height: 10, borderRadius: "50%",
            background: i < count ? color : "transparent",
            border: `1.5px solid ${i < count ? color : "#ced4da"}`,
          }} />
        ))}
      </div>
    </div>
  );
}
