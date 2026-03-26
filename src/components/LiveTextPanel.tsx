import { LiveText } from "../types";

interface Props {
  items: LiveText[];
}

const TYPE_STYLE: Record<LiveText["type"], { bg: string; color: string }> = {
  교체:   { bg: "#FAEEDA", color: "#633806" },
  득점홈: { bg: "#E6F1FB", color: "#0C447C" },
  득점원: { bg: "#FCEBEB", color: "#791F1F" },
  타격:   { bg: "#fff",    color: "#212529" },
  일반:   { bg: "#fff",    color: "#212529" },
};

export default function LiveTextPanel({ items }: Props) {
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
        fontSize: 12,
        fontWeight: 600,
        color: "#6c757d",
        display: "flex",
        justifyContent: "space-between",
      }}>
        <span>문자중계</span>
        <span style={{ color: "#adb5bd", fontSize: 11 }}>최신순</span>
      </div>

      {/* 중계 목록 */}
      <div style={{ overflowY: "auto", maxHeight: 420 }}>
        {items.map((item) => {
          const style = TYPE_STYLE[item.type];
          return (
            <div
              key={item.id}
              style={{
                display: "flex",
                gap: 8,
                padding: "9px 14px",
                borderBottom: "1px solid #f8f9fa",
                background: style.bg,
                fontSize: 13,
                lineHeight: 1.6,
              }}
            >
              <span style={{ fontSize: 11, color: "#adb5bd", minWidth: 36, marginTop: 2, flexShrink: 0 }}>
                {item.timestamp}
              </span>
              <span style={{ color: style.color, flex: 1 }}>{item.content}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
