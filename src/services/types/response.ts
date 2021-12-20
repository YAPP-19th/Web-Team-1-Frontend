export interface Response<T> {
  status: number;
  message: string;
  data: T;
}

// TODO: property가 3개인 User는 삭제 예정
export interface UserTemp {
  id: number;
  nickname: string;
  point: number;
}

export interface User {
  userId: number;
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
  user: UserTemp;
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
  difficulty: number;
  position: string;
  detail: string;
  participantCnt: number;
  writer: {
    id: number;
    nickname: string;
    point: number;
  };
  tagList: {
    name: string;
  }[];
}

export interface UsersProfile {
  userInfo: User;
  abilityList: {
    position: string;
    point: number;
  }[];
  acheive: {
    pointAchieve: number;
    questAchieve: number;
  };
}
