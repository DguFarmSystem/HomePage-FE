export interface Answer {
  questionId: number;
  content: string | null; 
  choiceId: number[];
}

export interface Application {
  applyId: number;
  name: string;
  track: string;
  updatedAt: string;
  major?: string;
  phoneNumber?: string;
  email?: string;
  answers?: Answer[]; 
}
