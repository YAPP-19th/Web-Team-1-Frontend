import React from 'react';
import { Button, Text, Input, Dropdown, Textarea } from '@src/components/atoms';
import { POSITION_LIST } from '@src/constants/dropdown';
import './style.scss';

const SettingBox: React.FC = () => {
  return (
    <article className="profile-setting">
      <Text
        className="title"
        align="start"
        fontColor="gil-blue"
        fontWeight="bold"
      >
        프로필 설정
      </Text>
      <div className="default-wrapper">
        <div className="nickname">
          <Text fontSize="large" fontColor="main" fontWeight="bold">
            닉네임 <span className="blue-star">*</span>
          </Text>
          <Input hasCount />
        </div>
        <div className="position">
          <Text fontSize="large" fontColor="main" fontWeight="bold">
            직군 <span className="blue-star">*</span>
          </Text>
          <Dropdown placeholder="직군 설정" dropdownList={POSITION_LIST} />
        </div>
      </div>
      <div className="introduce-wrapper">
        <Text fontSize="large" fontColor="main" fontWeight="bold">
          자기 소개 <span className="blue-star">*</span>
        </Text>
        <Textarea hasLimit />
      </div>
      <div className="button-wrapper">
        <Button
          innerText="항해 시작"
          buttonColor="white"
          textColor="gil-blue"
          hasShadow
        />
      </div>
    </article>
  );
};

export default SettingBox;
