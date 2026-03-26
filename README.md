# ⚾ BaseballLineupLive

야구 문자중계와 라인업 변화를 한 화면에서 실시간으로 확인하는 서비스

## 실행 방법

### 1. Node.js 설치 확인
```
node --version   # v18 이상이어야 함
```

### 2. 이 폴더를 VS Code로 열기
```
파일 → 폴더 열기 → baseball-lineup-live 폴더 선택
```

### 3. 터미널에서 패키지 설치
```
npm install
```

### 4. 개발 서버 실행
```
npm run dev
```

### 5. 브라우저에서 확인
```
http://localhost:5173
```

---

## 파일 구조

```
src/
├── types/
│   └── index.ts          # TypeScript 타입 정의
├── data/
│   └── mockData.ts       # 더미 데이터 (나중에 실제 API로 교체)
├── components/
│   ├── Scoreboard.tsx    # 상단 스코어보드
│   ├── LiveTextPanel.tsx # 문자중계 영역
│   ├── LineupPanel.tsx   # 라인업 + 검색
│   └── PlayerModal.tsx   # 선수 기록 모달
└── App.tsx               # 메인 앱
```

## 다음 개발 단계

- [ ] WebSocket 연결로 실시간 데이터 수신
- [ ] KBO API 연동
- [ ] 모바일 반응형 개선
- [ ] 경기 목록 화면 추가
