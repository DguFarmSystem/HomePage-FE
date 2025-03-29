export interface CheerItem {
  cheerId: number;
  cheerer: {
    name: string;
    profileImageUrl: string;
    generation: number;
    track: string;
  };
  cheered: {
    name: string;
    profileImageUrl: string;
    generation: number;
    track: string;
  };
  content: string;
  tag: 'THANK' | 'HUG' | 'ENCOURAGE' | string;
  createdAt: string;
}