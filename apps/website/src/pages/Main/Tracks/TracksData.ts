import { SongSH, KimDW, LimSS, SeokMK, SunSK } from "@/assets/Images/Professors";

export interface ProfessorDataInterface {
  name: string;
  image: string;
  phone: string;
  email: string;
  location: string;
  education: string;
  major: string;
  research: string;
}

export interface TrackDataInterface {
  name: string;
  professorData: ProfessorDataInterface;
  description: string;
  phases: {
    phase1: string[];
    phase2: string[];
    phase3: string[];
  };
}

export const TracksData: TrackDataInterface[] = [
  {
    name: "게임/영상",
    professorData: {
      name: "송수환 교수님",
      image: SongSH,
      phone: "02-2260-3765",
      email: "songsh@dongguk.edu",
      location: "신공학관 10108호",
      education: "한국과학기술원 전산학부 공학박사",
      major: "로봇 인공지능",
      research: "로보틱스, 인공지능, 컴퓨터비전",
    },
    description:
      "게임/영상 트랙은 창의력과 기술력을 바탕으로 게임 및 영상 제작의 전문성을 기르는 데 중점을 둡니다. Unity와 Unreal Engine을 활용한 게임 설계, 구현, 테스트 과정을 배우며, 실전 프로젝트를 통해 협업 능력을 배양합니다. Blender를 사용해 창의적인 영상 콘텐츠를 제작합니다. 뿐만 아니라 컴퓨터 비전 분야를 학습할 수 있는 기회를 제공합니다.",
    phases: {
      phase1: [
        "게임 개발 프로젝트",
        "게임 개발자 초청 세미나",
        "월별 트랙 정기 세미나",
      ],
      phase2: [
        "개인별 클론코딩 프로젝트",
        "교외 게임 개발 공모전",
      ],
      phase3: [
        "기업 연계 프로젝트",
        "교외 게임 개발 공모전 및 대회 참가",
        "게임 회사 채용설명회",
        "월별 트랙 정기 세미나",
        "FARM 전시회",
    ],
    },
  },
  {
    name: "보안/웹",
    professorData: {
      name: "김동우 교수님",
      image: KimDW,
      phone: "02-2260-3711",
      email: "dongwoo.kim@dgu.ac.kr",
      location: "정보문화관(P) 608호",
      education: "서울대학교 수리과학부 이학박사",
      major: "암호학",
      research:
        "동형암호, zk-SNARK, 안전한 다자간 계산 등 개인정보보호 강화 기술, 개인정보보호 기계학습",
    },
    description: "보안/웹 트랙은 프론트엔드와 백엔드로 나뉘어 웹 프로젝트에 보안 기술을 적용해 안전성과 신뢰성을 강화하는 것을 목표로 합니다. 자신이 개발한 웹 애플리케이션의 보안 취약점을 진단하고, 최신 보안 동향과 국내 보안 학회 논문 주제를 통해 실질적인 보안 솔루션을 프로젝트에 적용합니다. 이를 통해 보안 위협으로부터 안전한 웹 환경을 구축하고, 보다 신뢰할 수 있는 웹 서비스 개발을 경험할 수 있습니다.",
    phases: {
      phase1: [
        "보안 전문가 초청 세미나 (금융결제원)",
        "1차 프로젝트",
        "월별 트랙 정기 세미나",
        "기업 연계 프로그램",
      ],
      phase2: [
        "인공지능 트랙 연합 프로젝트",
        "기업 연계 프로젝트",
        "자율 스터디 (보안, CS, 알고리즘, 면접 대비, 사이드 프로젝트 등)",
        "공개 SW 개발자 대회 참가",
      ],
      phase3: [
        "인공지능 트랙 연합 프로젝트",
        "기업 연계 프로젝트",
        "공개 SW 개발자 대회 세미나",
        "FARM 전시회",
      ],
    },
  },
  {
    name: "인공지능",
    professorData: {
      name: "임상수 교수님",
      image: LimSS,
      phone: "02-2260-3848",
      email: "sslim@dgu.ac.kr",
      location: "정보문화관(P) 621호",
      education: "서울대학교 생물정보학 이학박사",
      major: "생물정보학, 화학정보학",
      research: "인공지능 기반 신약개발, 유전체 빅데이터 분석",
    },
    description:"인공지능 트랙은 머신러닝, 딥러닝 등 AI 핵심 기술을 습득하고, 단계적인 프로젝트를 통해 실전 문제 해결 능력을 기르는 데 중점을 둡니다. NLP, 컴퓨터 비전, 강화학습 등의 세부 분야별 프로젝트를 진행하며 독자적인 AI 솔루션을 구현할 수 있습니다. 이를 통해 인공지능 프로젝트, 자율 스터디, AI 세미나 등의 실무 역량 및 협업 능력을 키울 수 있는 다양한 경험을 제공 받을 수 있습니다.",    phases: {
      phase1: [
        "1차 프로젝트",
        "인공지능 전문가 초청 세미나",
        "자율 스터디(NLP, CV, 강화학습 등)",
      ],
      phase2: [
        "보안/웹 트랙 연합 프로젝트",
        "기업 연계 프로젝트",
        "자율 스터디 (NLP, CV, 강화학습 등)",
        "교외 인공지능 공모전 및 대회 참가",
      ],
      phase3: [
        "보안/웹 트랙 연합 프로젝트",
        "기업 연계 프로젝트",
        "자율 스터디 (NLP, CV, 강화학습 등)",
        "교외 인공지능 공모전 및 대회 참가",
        "FARM 전시회",
      ],
    },
  },
  {
    name: "사물인터넷/로봇",
    professorData: {
      name: "석문기 교수님",
      image: SeokMK,
      phone: "02-2260-3710",
      email: "mgseok@dongguk.edu",
      location: "정보문화관(P) 606호",
      education: "KAIST(한국과학기술원) 전자공학과 공학박사",
      major: "디지털 트윈, 사이버-물리 시스템",
      research: "모델 검증, 시뮬레이션 기반 최적화, 병렬/분산 컴퓨팅, 머신러닝",
    },
    description:"사물인터넷/로봇 트랙은 IoT 기술과 로봇 시스템을 학습하며, 실전 프로젝트를 통해 스마트 IoT 환경 구축과 자동화 기술을 연구합니다. IoT 파트에서는 라즈베리파이, 센서 네트워크, 클라우드 연동을 활용한 데이터 분석을, 로봇 파트에서는 ROS2, SLAM 기반 로봇 설계 및 제어 기술을 익힙니다. 또한, 스마트 양식장, 스마트 홈 등 산업 적용 가능한 IoT 솔루션을 연구합니다.",    phases: {
      phase1: [
        "임베디드 소프트웨어 스터디",
        "ROS 정기 실습",
        "전문가 초청 강연 및 실습"
      ],
      phase2: [
        `외부 경진대회 자율 팀 프로젝트`,
        "ROS 정기 실습",
      ],
      phase3: [
        "임베디드 소프트웨어 스터디",
        "터틀봇 및 로봇팔 제어 실습",
        "전문가 초청 강연 및 실습",
        "FARM 전시회",
      ],
    },
  },
  {
    name: "빅데이터",
    professorData: {
      name: "선석규 교수님",
      image: SunSK,
      phone: "02-2260-3342",
      email: "sukkyu.sun@dongguk.edu",
      location: "법학/만해관 401호",
      education: "서울대학교 바이오엔지니어링전공 공학박사",
      major: "의료인공지능",
      research: "의료영상, 생체 신호 처리",
    },
    description:"빅데이터 트랙은 대용량 데이터를 다루는 방법을 학습하고, 데이터 분석을 통해 인사이트를 도출하는 역량을 키우는 데 집중합니다. 머신러닝, 데이터 시각화, SQL, 그리고 Elastic Search 등 다양한 분석 기법을 실습할 수 있습니다. 또한  프로젝트 및 외부 공모전 참여를 통해 실전 경험을 쌓아나갈 수 있습니다. 뿐만 아니라 자율 스터디, 빅데이터 해커톤 등을 통해 협업 역량을 강화하고 네트워킹 기회를 제공합니다.",    phases: {
      phase1: [
        "Peer-멘토링: 머신러닝, SQL, 시각화, ELK 멘토링 및 kaggle 실습",
        "교외 빅데이터 공모전 및 대회 참가",
        "트랙 내부 해커톤",
      ],
      phase2: [
        "자격증 취득 스터디(ADsP, SQLD)",
        "ELK 스택을 활용한 기업 연계 실전 프로젝트",
        "교외 빅데이터 공모전 및 대회 참가",
      ],
      phase3: [
        "Peer-멘토링: 머신러닝, SQL, 시각화, ELK 멘토링 및 kaggle 실습",
        "ELK 스택을 활용한 기업 연계 실전 프로젝트",
        "교외 빅데이터 공모전 및 대회 참가",
        "FARM 전시회",
      ],
    },
  },
];
