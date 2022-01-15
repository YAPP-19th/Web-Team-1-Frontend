import React, { useEffect } from 'react';
import './style.scss';
import { Button, Text } from '@src/components/atoms';
import { QuestsInfo } from '@src/services/types/response';

export interface DetailDescProps {
  info?: QuestsInfo;
}

const DetailDesc: React.FC<DetailDescProps> = ({ info }) => {
  useEffect(() => {
    const doc = document.querySelector('.detail-desc-wrapper > ._TEXT_');
    if (doc) {
      doc.innerHTML = info?.detail ?? '';
    }
  }, [info?.detail]);
  return (
    <section className="quest-detail-desc">
      <div className="detail-desc-wrapper">
        <Text fontColor="main" fontSize="medium" fontWeight="regular" />
      </div>
      <div className="detail-tag-wrapper">
        {info?.tagList.map(({ name }) => (
          <Button
            key={name}
            innerText={`#${name}`}
            buttonColor="main-gray"
            textColor="dark-gray"
            textSize="small"
          />
        ))}
        <hr className="detail-hr" />
      </div>
    </section>
  );
};

export default DetailDesc;
