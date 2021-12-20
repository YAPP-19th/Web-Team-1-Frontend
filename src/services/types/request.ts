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

export interface GetQuestsInfo {
  questId: number;
}

export interface GetUsersQuests {
  userId: number;
  cursor?: number;
  size?: number;
}

export interface GetUsersQuestsParticipation extends GetUsersQuests {
  completed?: boolean;
}

export interface PostSubquests {
  subQuestId: number;
}

export interface PostRoadmapsScrap {
  roadmapId: number;
}

export interface GetUsersProfile {
  userId: number;
}

export interface PatchUsersMeIntro {
  intro: string;
}
