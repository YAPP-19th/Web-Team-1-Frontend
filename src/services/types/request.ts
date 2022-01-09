export interface PostLogin {
  kakaoAccessToken: string;
}

export interface PostRegister extends PostLogin {
  position: string;
  nickname: string;
  intro: string;
}

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

export interface PostRoadmaps {
  name: string;
  position: string;
  questList: { questId: number | null; name: string | null }[];
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
  page?: number;
  size?: number;
}

export interface GetUsersQuestsParticipation extends GetUsersQuests {
  completed?: boolean;
}
export interface GetUsersRoadmaps {
  userId: number;
  page?: number;
  size?: number;
}

export type PostUpload = FormData;
