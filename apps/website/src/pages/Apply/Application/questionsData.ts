export interface Question {
    id: number;
    type: "checkbox" | "text"; // 질문 유형 (체크박스 또는 주관식)
    question: string;
    required: boolean; // 필수 여부
    options?: string[]; // 체크박스일 경우 선택지 목록
  }
  
  // 🔹 각 트랙별 질문 데이터
  export const questionsData: { [key: string]: Question[] } = {
    "유니온": [
      { id: 1, type: "text", question: "유니온 트랙에 지원하는 이유를 작성해주세요.", required: true },
      { id: 2, type: "text", question: "자신이 기획하고 싶은 프로젝트가 있다면 설명해주세요.", required: false }
    ],
    "게임/영상": [
      { id: 1, type: "text", question: "게임/영상 트랙에 지원하는 이유를 작성해주세요.", required: true },
      { id: 2, type: "checkbox", question: "아래의 기술 중 관심 있는 기술을 선택해주세요.", required: false, options: ["Unity", "Unreal Engine", "Blender", "After Effects"] }
    ],
    "사물인터넷/로봇": [
      { id: 1, type: "checkbox", question: "사물인터넷/로봇 트랙에서 학습을 희망하는 분야를 선택해주세요.", required: true, options: ["라즈베리파이", "ROS2"] },
      { id: 2, type: "text", question: "위에서 선택한 분야를 공부하고 싶은 이유를 작성해주세요.", required: true }
    ],
    "빅데이터": [
      { id: 1, type: "text", question: "빅데이터 트랙에 지원하는 이유를 작성해주세요.", required: true },
      { id: 2, type: "checkbox", question: "관심 있는 데이터 분석 도구를 선택해주세요.", required: false, options: ["Python", "R", "SQL", "Tableau"] }
    ],
    "보안/웹": [
      { id: 1, type: "text", question: "보안/웹 트랙에 지원하는 이유를 작성해주세요.", required: true },
      { id: 2, type: "checkbox", question: "관심 있는 분야를 선택해주세요.", required: false, options: ["웹 해킹", "네트워크 보안", "OWASP", "서버 보안"] }
    ],
    "인공지능": [
      { id: 1, type: "text", question: "인공지능 트랙에서 관심 있는 연구 분야를 작성해주세요.", required: true },
      { id: 2, type: "checkbox", question: "아래 중 관심 있는 AI 기술을 선택해주세요.", required: false, options: ["딥러닝", "컴퓨터 비전", "자연어 처리", "강화학습"] }
    ]
  };
  