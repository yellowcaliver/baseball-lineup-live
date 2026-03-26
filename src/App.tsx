import { useState } from "react";
import Scoreboard from "./components/Scoreboard";
import LiveTextPanel from "./components/LiveTextPanel";
import LineupPanel from "./components/LineupPanel";
import PlayerModal from "./components/PlayerModal";
import { Player } from "./types";
import { MOCK_GAME, MOCK_HOME_LINEUP, MOCK_AWAY_LINEUP, MOCK_LIVE_TEXTS } from "./data/mockData";

export default function App() {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

  return (
    <div style={{
      fontFamily: "'Pretendard', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif",
      background: "#f8f9fa",
      minHeight: "100vh",
      padding: 12,
    }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>

        {/* 상단 타이틀 */}
        <div style={{ marginBottom: 10, display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: "#185FA5" }}>⚾ BaseballLineupLive</span>
          <span style={{
            fontSize: 11, background: "#E6F1FB", color: "#185FA5",
            padding: "2px 7px", borderRadius: 10, fontWeight: 600,
          }}>LIVE</span>
        </div>

        {/* 스코어보드 */}
        <Scoreboard game={MOCK_GAME} />

        {/* 메인 그리드 */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "60% 40%",
          gap: 10,
        }}>
          <LiveTextPanel items={MOCK_LIVE_TEXTS} />
          <LineupPanel
            homeLineup={MOCK_HOME_LINEUP}
            awayLineup={MOCK_AWAY_LINEUP}
            homeName={MOCK_GAME.homeTeam}
            awayName={MOCK_GAME.awayTeam}
            onPlayerClick={setSelectedPlayer}
          />
        </div>
      </div>

      {/* 선수 기록 모달 */}
      {selectedPlayer && (
        <PlayerModal
          player={selectedPlayer}
          onClose={() => setSelectedPlayer(null)}
        />
      )}
    </div>
  );
}
