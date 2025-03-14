enum ApiErrorMessages {
    BLOG_NOT_FOUND = "블로그를 찾을 수 없습니다.",
    BLOG_DUPLICATED = "이미 신청 처리된 블로그입니다.",
    ALREADY_SUBMITTED = "이미 승인 처리된 블로그입니다.",
  }

  enum Track {
    UNION = "UNION",
    GAMING_VIDEO = "GAMING_VIDEO",
    AI = "AI",
    SECURITY_WEB = "SECURITY_WEB",
    IOT_ROBOTICS = "IOT_ROBOTICS",
    BIGDATA = "BIGDATA",
  }

  interface ApiResponse<T = unknown> {
    status: number;
    message: ApiErrorMessages | "요청이 성공했습니다." | string;
    data?: T;
  }
  
  //blog 신청 요청 
  interface ApiRequest {
    title : string;
    description : string;
    track : Track[]; //트랙은 리스트
    link : string;
  }

  interface BlogpageResquest {
    track : string;
    generation : number;
    page : number; // 페이징
  }
  
  // blog에 POST 요청, POST 응답, GET요청 
  export type BlogPOSTRequest = ApiRequest;
  export type BlogGETResponse = BlogpageResquest;
  export type BlogPOSTResponse = ApiResponse<{ blogId: number }>;