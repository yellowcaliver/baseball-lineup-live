import { useState } from "react";
import { Player } from "../types";

interface Props {
  homeLineup: Player[];
  awayLineup: Player[];
  homeName: string;
  awayName: string;
  onPlayerClick: (player: Player) => void;
}

export default function LineupPanel({ homeLineup, awayLineup, homeName, awayName, onPlayerClick }: Props) {
  const [tab, setTab] = useState<"home" | "away">("home");
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const lineup = tab === "home" ? homeLineup : awayLineup;

  const filtered = searchQuery
    ? (() => {
        const inHome = homeLineup.some((p) => p.name.includes(searchQuery));
        return (inHome ? homeLineup : awayLineup).filter((p) => p.name.includes(searchQuery));
      })()
    : lineup;

  const handleSearch = (val: string) => {
    setSearchQuery(val);
    if (val) {
      const inHome = homeLineup.some((p) => p.name.includes(val));
      const inAway = awayLineup.some((p) => p.name.includes(val));
      if (inHome) setTab("home");
      else if (inAway) setTab("away");
    }
  };

  return (
    <div style={{
      background: "#fff",
      border: "1px solid #e9ecef",
      borderRadius: 12,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
    }}>
      {/* 헤더 */}
      <div style={{
        padding: "9px 14px",
        borderBottom: "1px solid #f1f3f5",
        fontSize: 12, fontWeight: 600, color: "#6c757d",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <span>라인업</span>
        <button
          onClick={() => { setSearchOpen(!searchOpen); setSearchQuery(""); }}
          style={{
            background: "none", border: "1px solid #e9ecef", borderRadius: 6,
            fontSize: 12, padding: "3px 8px", cursor: "pointer", color: "#6c757d",
          }}
        >
          검색
        </button>
      </div>

      {/* 검색창 */}
      {searchOpen && (
        <div style={{ padding: "7px 12px", borderBottom: "1px solid #f1f3f5" }}>
          <input
            autoFocus
            type="text"
            placeholder="선수 이름..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            style={{
              width: "100%", fontSize: 13, padding: "5px 8px",
              border: "1px solid #e9ecef", borderRadius: 6, outline: "none",
            }}
          />
        </div>
      )}

      {/* 탭 */}
      <div style={{ display: "flex" }}>
        {(["home", "away"] as const).map((t) => (
          <div
            key={t}
            onClick={() => setTab(t)}
            style={{
              flex: 1, padding: "8px", fontSize: 12, textAlign: "center", cursor: "pointer",
              color: tab === t ? "#212529" : "#6c757d",
              fontWeight: tab === t ? 600 : 400,
              borderBottom: tab === t ? "2px solid #185FA5" : "2px solid transparent",
            }}
          >
            {t === "home" ? `${homeName} (홈)` : `${awayName} (원정)`}
          </div>
        ))}
      </div>

      {/* 선수 목록 */}
      <div style={{ overflowY: "auto", maxHeight: 380 }}>
        {(searchQuery ? filtered : lineup).map((player) => (
          <PlayerRow
            key={player.id}
            player={player}
            highlighted={searchQuery !== "" && player.name.includes(searchQuery)}
            onClick={() => onPlayerClick(player)}
          />
        ))}
        {searchQuery && filtered.length === 0 && (
          <div style={{ padding: "16px 14px", fontSize: 13, color: "#adb5bd", textAlign: "center" }}>
            현재 경기에 출전하지 않은 선수입니다
          </div>
        )}
      </div>
    </div>
  );
}

function PlayerRow({ player, highlighted, onClick }: {
  player: Player;
  highlighted: boolean;
  onClick: () => void;
}) {
  const bg = highlighted ? "#E6F1FB" : player.isSubstituted ? "#fff" : player.isNewPlayer ? "#FAEEDA" : "#fff";

  return (
    <div
      onClick={onClick}
      style={{
        display: "flex", alignItems: "center", gap: 8,
        padding: "8px 14px",
        borderBottom: "1px solid #f8f9fa",
        background: bg,
        opacity: player.isSubstituted ? 0.45 : 1,
        cursor: "pointer",
        fontSize: 13,
      }}
    >
      {/* 타순 */}
      <div style={{
        width: 21, height: 21, borderRadius: "50%",
        background: "#f8f9fa", border: "1px solid #e9ecef",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 10, fontWeight: 600, color: "#6c757d", flexShrink: 0,
      }}>
        {player.battingOrder}
      </div>

      {/* 포지션 */}
      <span style={{ fontSize: 11, color: "#6c757d", minWidth: 26 }}>{player.position}</span>

      {/* 이름 */}
      <span style={{
        flex: 1, fontWeight: 600, color: "#212529",
        textDecoration: player.isSubstituted ? "line-through" : "none",
      }}>
        {player.name}
      </span>

      {/* 교체 태그 */}
      {player.isNewPlayer && player.replacedPlayer && (
        <span style={{ fontSize: 10, color: "#BA7517" }}>↑{player.replacedPlayer}</span>
      )}
      {player.isSubstituted && player.subTime && (
        <span style={{ fontSize: 10, color: "#adb5bd" }}>{player.subTime} OUT</span>
      )}
      {player.isNewPlayer && player.subTime && (
        <span style={{ fontSize: 10, color: "#adb5bd" }}>{player.subTime} IN</span>
      )}
    </div>
  );
}
