import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  Text,
  ProgressBar,
  Icon,
  AchievementBadge,
  Box,
  Textarea,
  Button,
  Dropdown,
  Loading,
} from '@src/components/atoms';
import {
  exp_achievement,
  quest_achievement,
} from '@src/pages/Profile/achievement_data.json';
import cn from 'classnames';
import './style.scss';
import {
  useGetUsersProfileQuery,
  usePatchUsersMeIntroMutation,
  usePatchUsersMeMutation,
} from '@src/services/giljob';
import { useDispatch, useSelector } from 'react-redux';
import {
  profileSelector,
  setUserMe,
  setUserInfo,
  setUserInfoIntro,
  setAbilityList,
  AbilityType,
} from '@src/slices/profileSlice';
import { DropdownListType } from '@src/components/atoms/Dropdown';
import { Writer } from '@src/services/types/response';

interface PositionNameType {
  [key: string]: string;
}

const POSITION_NAME: PositionNameType = {
  FRONTEND: '프론트엔드',
  BACKEND: '백엔드',
  DESIGNER: '디자이너',
};

interface MypageProps {
  user: Writer;
}

const Mypage: React.FC<MypageProps> = ({ user }) => {
  const dispatch = useDispatch();
  const profileState = useSelector(profileSelector);

  const {
    data: profile,
    isSuccess,
    refetch,
  } = useGetUsersProfileQuery({
    userId: user.id,
  });
  const [patchIntro, { isLoading: isIntroPatchLoading }] =
    usePatchUsersMeIntroMutation();
  const [patchMe, { isLoading: isMePatchLoading }] = usePatchUsersMeMutation();

  // local state
  const [isIntroduceEditMode, setIsIntroduceEditMode] =
    useState<boolean>(false);
  const [isPrivacyEditMode, setIsPrivacyEditMode] = useState<boolean>(false);
  const [nickname, setNickname] = useState<string>(user.nickname);
  const [position, setPosition] = useState<DropdownListType>({
    type: 'position',
    value: user.position as string,
  });
  const [intro, setIntro] = useState<string>(user.intro);

  const usersPositionList: DropdownListType[] = useMemo(
    () =>
      profile?.data?.abilityList.map(({ position }) => {
        return { name: POSITION_NAME[position], value: position };
      }) ?? [],
    [profile],
  );
  // 능력치 업적 index
  const pointAchieveIdx: number = useMemo(
    () =>
      profile?.data?.achieve.pointAchieve
        ? profile?.data?.achieve?.pointAchieve - 1
        : 0,
    [profile],
  );
  // 퀘스트 업적 index
  const questAchieveIdx: number = useMemo(
    () =>
      profile?.data?.achieve.questAchieve
        ? profile?.data?.achieve?.questAchieve - 1
        : 0,
    [profile],
  );
  // 직군별 경험치 포인트 합계
  const totalPoints: number = useMemo(
    () =>
      profile?.data?.abilityList.reduce(
        (prev, current) => prev + current.point,
        0,
      ) ?? 0,
    [profile],
  );

  const handlePrivacyEditClick = () => {
    setIsPrivacyEditMode((state) => !state);
  };

  const handlePrivacyEditCancelClick = useCallback(() => {
    setIsPrivacyEditMode((state) => !state);
    setNickname(profileState.userInfo.nickname);
    setPosition({ type: 'position', value: profileState.userInfo.position });
  }, [profileState.userInfo.nickname, profileState.userInfo.position]);

  const handlePrivacyEditCompleteClick = () => {
    patchMe({ nickname, position: position.value as string })
      .unwrap()
      .then(() => {
        setIsPrivacyEditMode((state) => !state);
        dispatch(
          setUserMe({
            nickname,
            position: position.value,
            point:
              profileState.abilityList.find(
                (ability: AbilityType) => ability.position === position.value,
              )?.point ?? 0,
          }),
        );
        refetch();
      });
  };

  const handleIntroEditClick = () => {
    setIsIntroduceEditMode((state) => !state);
  };

  const handleIntroEditCancelClick = useCallback(() => {
    setIsIntroduceEditMode((state) => !state);
    setIntro(profileState.userInfo.intro);
  }, [profileState.userInfo.intro]);

  const handleIntroEditCompleteClick = useCallback(() => {
    patchIntro({ intro })
      .unwrap()
      .then(() => {
        setIsIntroduceEditMode((state) => !state);
        dispatch(setUserInfoIntro(intro));
      });
  }, [intro]);

  const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handlePositionChange = (name: string, value: string | number) => {
    setPosition({ type: 'position', value });
  };

  useEffect(() => {
    if (profile) {
      dispatch(setUserInfo(profile?.data?.userInfo));
      dispatch(setAbilityList(profile?.data?.abilityList));
      setNickname(profile?.data?.userInfo?.nickname);
      setPosition({
        type: 'position',
        value: profile?.data?.userInfo?.position,
      });
      setIntro(profile?.data?.userInfo?.intro);
    }
  }, [profile]);

  return (
    <>
      {(isIntroPatchLoading || isMePatchLoading) && <Loading />}
      <div className="_PROFILE_">
        <Box className="privacy-box" backgroundColor="gil-blue">
          <Icon
            size="profile"
            level={
              (Math.floor(profileState.userInfo.point / 100) + 1) as
                | 1
                | 2
                | 3
                | 4
                | 5
            }
          />
          <div className="privacy-wrapper">
            <Text
              fontColor="white"
              fontSize="medium"
              fontWeight="bold"
              align="center"
            >
              닉네임
            </Text>
            <input
              className={cn(
                'nickname-input',
                isPrivacyEditMode ? 'isPrivacyEditMode' : '',
              )}
              type="text"
              placeholder=""
              value={nickname}
              maxLength={7}
              readOnly={!isPrivacyEditMode}
              onChange={handleNicknameChange}
            />
          </div>
          <div className="privacy-wrapper">
            <Text
              fontColor="white"
              fontSize="medium"
              fontWeight="bold"
              align="center"
            >
              레벨
            </Text>
            <Text fontColor="white" align="center" fontSize="medium">
              Lv.{Math.floor(profileState.userInfo.point / 100) + 1}
            </Text>
          </div>
          <div className="privacy-wrapper">
            <Text
              fontColor="white"
              fontSize="medium"
              fontWeight="bold"
              align="center"
            >
              직군
            </Text>
            {isPrivacyEditMode ? (
              <Dropdown
                fontColor="white"
                placeholder={String(position.value)}
                hasBorder={false}
                list={usersPositionList}
                selected={position.value}
                onDispatch={handlePositionChange}
              />
            ) : (
              <Text fontColor="white" align="center" fontSize="medium">
                {position.value}
              </Text>
            )}
          </div>
          <div className="button-wrapper">
            {isPrivacyEditMode ? (
              <>
                <Button
                  className="button-item"
                  innerText="취소"
                  buttonColor="white"
                  textColor="gil-blue"
                  textSize="small"
                  onHover={false}
                  handleClick={handlePrivacyEditCancelClick}
                ></Button>
                <Button
                  className="button-item"
                  innerText="수정"
                  buttonColor="job-navy"
                  textColor="white"
                  textSize="small"
                  onHover={false}
                  handleClick={handlePrivacyEditCompleteClick}
                ></Button>
              </>
            ) : (
              <button
                type="button"
                className="edit-button"
                onClick={handlePrivacyEditClick}
              ></button>
            )}
          </div>
        </Box>
        <Box className="introduce-box">
          <div className="introduce-title-btn-wrapper">
            <Text align="start" fontSize="medium" fontWeight="bold">
              자기소개
            </Text>
            <div className="button-wrapper">
              {isIntroduceEditMode ? (
                <>
                  <Button
                    className="button-item"
                    innerText="취소"
                    buttonColor="main-gray"
                    textColor="gil-blue"
                    textSize="small"
                    onHover={false}
                    handleClick={handleIntroEditCancelClick}
                  ></Button>
                  <Button
                    className="button-item"
                    innerText="수정"
                    buttonColor="gil-blue"
                    textColor="white"
                    textSize="small"
                    onHover={false}
                    handleClick={handleIntroEditCompleteClick}
                  ></Button>
                </>
              ) : (
                <button
                  type="button"
                  className="edit-button"
                  onClick={handleIntroEditClick}
                ></button>
              )}
            </div>
          </div>
          <Textarea
            hasLimit={isIntroduceEditMode}
            readOnly={!isIntroduceEditMode}
            value={intro}
            onDispatch={setIntro}
          />
        </Box>
        <Box className="achievement-box">
          <AchievementBadge
            id={exp_achievement?.list[pointAchieveIdx]?.id}
            title={exp_achievement?.list[pointAchieveIdx]?.title}
            description={exp_achievement?.list[pointAchieveIdx]?.description}
          />
        </Box>
        <Box className="achievement-box">
          <AchievementBadge
            id={quest_achievement?.list[questAchieveIdx]?.id}
            title={quest_achievement?.list[questAchieveIdx]?.title}
            description={quest_achievement?.list[questAchieveIdx]?.description}
          />
        </Box>
        <Box className="progress-bar-box">
          <Text fontSize="medium" fontWeight="bold">
            경험치 포인트
          </Text>
          <div className="progress-bar-container">
            {isSuccess &&
              profile?.data?.abilityList.map(({ position, point }) => (
                <ProgressBar
                  key={position}
                  title={position}
                  value={point}
                  totalValue={totalPoints}
                />
              ))}
          </div>
        </Box>
      </div>
    </>
  );
};

export default Mypage;
