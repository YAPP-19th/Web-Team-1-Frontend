export interface ProvideQuestId {
  questId: number;
}

export interface ProvideSubQuestId {
  subQuestId: number;
}

export interface ProvideRoadmapId {
  roadmapId: number;
}

export interface ProvideUserId {
  userId: number;
}

export interface ProvideIntro {
  intro: string;
}

export interface PostQuests {
  name: string;
  difficulty: number;
  position: string;
  tagList: {
    name: string;
  }[];
  detail: string;
  thumbnail?: string;
  subQuestList: {
    name: string;
  }[];
}

export interface GetQuests {
  cursor?: number;
  size?: number;
}

export interface GetQuestsSearch {
  keyword: string;
  position?: string;
  cursor?: number;
  size?: number;
}

export interface GetUsersQuests {
  userId: number;
  cursor?: number;
  size?: number;
}

export interface GetUsersQuestsParticipation extends GetUsersQuests {
  completed?: boolean;
}
