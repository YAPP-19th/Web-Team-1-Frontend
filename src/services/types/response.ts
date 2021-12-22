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
  difficulty: number;
  thumbnail: string;
}

export interface QuestsCount {
  totalQuestCount: number;
  onProgressQuestCount: number;
  totalParticipantCount: number;
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
