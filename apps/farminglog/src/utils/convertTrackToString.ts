
export const convertTrackToString = (track: string): string => {
  const trackMap: Record<string, string> = {
    SECURITY_WEB: '보안/웹',
    BIGDATA: '빅데이터',
    IOT_ROBOTICS: '사물인터넷',
    AI: '인공지능',
    GAMING_VIDEO: '게임/영상',
  };

  return trackMap[track] || track; 
};
