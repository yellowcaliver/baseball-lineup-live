import { Player } from "../types";

interface Props {
  player: Player | null;
  onClose: () => void;
}

export default function PlayerModal({ player, onClose }: Props) {
  if (!player) return null;

  const isPitcher = !!player.stats.era;

  const initials = (name: string) =>
    name.length >= 2 ? name[0] + name[name.length - 1] : name;

  return (
    <div
      onClick={(e) => e.target === e.currentTarget && onClose()}
      style={{
        position: "fixed", inset: 0,
        background: "rgba(0,0,0,0.42)",
        zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 16,
      }}
    >
      <div style={{
        background: "#fff",
        borderRadius: 12,
        border: "1px solid #e9ecef",
        width: "100%", maxWidth: 360,
        overflow: "hidden",
      }}>
        {/* 상단: 선수 정보 */}
        <div style={{
          padding: "14px 16px",
          borderBottom: "1px solid #f1f3f5",
          display: "flex", alignItems: "center", gap: 12,
        }}>
          <div style={{
            width: 42, height: 42, borderRadius: "50%",
            background: "#E6F1FB", color: "#185FA5",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 14, fontWeight: 600, flexShrink: 0,
          }}>
            {initials(player.name)}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 16, fontWeight: 600, color: "#212529" }}>{player.name}</div>
            <div style={{ fontSize: 12, color: "#6c757d", marginTop: 1 }}>
              {player.position} · {player.team}
              {player.isSubstituted && " (교체 OUT)"}
              {player.isNewPlayer && " (교체 IN)"}
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "none", border: "none", cursor: "pointer",
              fontSize: 16, color: "#adb5bd", padding: "4px 6px", borderRadius: 6,
            }}
          >
            ✕
          </button>
        </div>

        {/* 시즌 스탯 */}
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
          gap: 1, background: "#f1f3f5",
          borderBottom: "1px solid #f1f3f5",
        }}>
          {isPitcher ? (
            <>
              <StatCell value={player.stats.era!} label="평균자책점" />
              <StatCell value={`${player.stats.wins}승`} label="시즌 승수" />
              <StatCell value={String(player.stats.strikeouts)} label="삼진" />
            </>
          ) : (
            <>
              <StatCell value={player.stats.avg!} label="타율" />
              <StatCell value={player.stats.ops!} label="OPS" />
              <StatCell value={String(player.stats.hr)} label="홈런" />
            </>
          )}
        </div>

        {/* 최근 5경기 */}
        <div style={{ fontSize: 11, fontWeight: 600, color: "#6c757d", padding: "10px 16px 5px" }}>
          최근 5경기
        </div>
        <div style={{ padding: "0 16px 12px" }}>
          {player.recentGames.map(([date, opp, result], i) => {
            let pct = 50;
            if (!isPitcher && result.includes("-")) {
              const [h, ab] = result.split("-").map(Number);
              pct = Math.round((h / Math.max(ab, 1)) * 100);
            }
            return (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: 8,
                padding: "5px 0",
                borderBottom: i < 4 ? "1px solid #f8f9fa" : "none",
              }}>
                <span style={{ fontSize: 11, color: "#adb5bd", minWidth: 46 }}>{date}</span>
                <span style={{ fontSize: 11, color: "#6c757d", minWidth: 40 }}>vs {opp}</span>
                <div style={{ flex: 1, height: 5, background: "#f1f3f5", borderRadius: 3, overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${pct}%`, background: "#378ADD", borderRadius: 3 }} />
                </div>
                <span style={{ fontSize: 11, fontWeight: 600, color: "#212529", minWidth: 32, textAlign: "right" }}>
                  {result}
                </span>
              </div>
            );
          })}
        </div>

        {/* 상대팀 전적 */}
        <div style={{ fontSize: 11, fontWeight: 600, color: "#6c757d", padding: "6px 16px 5px", borderTop: "1px solid #f1f3f5" }}>
          vs {player.vsStats.opp} 시즌 전적
        </div>
        <div style={{ display: "flex", justifyContent: "space-around", padding: "8px 16px 14px" }}>
          <VsItem value={player.vsStats.v1} label={isPitcher ? "평균자책점" : "타율"} />
          <VsItem value={player.vsStats.v2} label={isPitcher ? "전적" : "OPS"} />
          <VsItem value={player.vsStats.v3} label={isPitcher ? "삼진" : "홈런"} />
        </div>
      </div>
    </div>
  );
}

function StatCell({ value, label }: { value: string; label: string }) {
  return (
    <div style={{ background: "#fff", padding: "11px 8px", textAlign: "center" }}>
      <div style={{ fontSize: 19, fontWeight: 600, color: "#212529" }}>{value}</div>
      <div style={{ fontSize: 11, color: "#6c757d", marginTop: 2 }}>{label}</div>
    </div>
  );
}

function VsItem({ value, label }: { value: string; label: string }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: 15, fontWeight: 600, color: "#212529" }}>{value}</div>
      <div style={{ fontSize: 11, color: "#6c757d", marginTop: 2 }}>{label}</div>
    </div>
  );
}
