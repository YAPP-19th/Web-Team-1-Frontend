export interface Response<T> {
  status: number;
  message: string;
  data: T;
}
export interface Writer {
  id: number;
  nickname: string;
  position: string;
  point: number;
  intro: string;
}

export interface Quest {
  id: number;
  name: string;
  position: string;
  participantCount: number;
  writer: Writer;
  difficulty: 1 | 2 | 3 | 4 | 5;
  thumbnail: string;
}

export interface QuestsResponse {
  totalCount: number;
  questList: Quest[];
}

export interface QuestsCount {
  totalQuestCount: number;
  onProgressQuestCount: number;
  totalParticipantCount: number;
}

export interface QuestsPositionsCount {
  position: string;
  questCount: number;
}

export interface QuestsInfo {
  id: number;
  name: string;
  position: string;
  difficulty: number;
  tagList: {
    name: string;
  }[];
  detail: string;
  participantCount: number;
  writer: Writer;
}

export interface SubquestProgress {
  subQuestId: number;
  subQuestName: string;
  isCompleted: boolean;
}

export interface QuestsSubquest {
  progress: number;
  subQuestProgressList: SubquestProgress[];
}

export interface Review {
  review: string;
  reviewCreatedAt: string;
  reviewWriter: Writer;
}

export interface QuestsReviews {
  totalReviewCount: number;
  reviewList: Review[];
}

export interface Roadmap {
  name: string;
  writer: Writer;
  position: string;
  questList: {
    id: number;
    name: string;
    isRealQuest: boolean;
  }[];
  isScraped: boolean;
}

export interface RoadmapListItem {
  id: number;
  name: string;
  position: string;
  writer: Writer;
}

export interface UsersProfile {
  writer: Writer;
  abilityList: {
    position: string;
    point: number;
  }[];
  achieve: {
    pointAchieve: number;
    questAchieve: number;
  };
}

export interface Auth {
  isSignedUp?: boolean;
  accessToken: string;
}

export interface Upload {
  fileUrl: string;
}
