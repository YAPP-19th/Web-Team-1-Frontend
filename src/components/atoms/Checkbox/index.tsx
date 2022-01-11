import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import './style.scss';
import { Text } from '@src/components/atoms';
import {
  usePostSubquestsCancelMutation,
  usePostSubquestsCompleteMutation,
} from '@src/services/giljob';

export interface CheckboxProps {
  id?: number;
  title?: string;
  status?: boolean;
  disabled?: boolean;
}

const StyledCheckbox = styled.div<CheckboxProps>`
  width: 2.5rem;
  height: 2.5rem;
  border: solid #0389ff;
  border-width: 0.25rem;
  border-radius: 0.8rem;
  background-color: ${(props) => (props.status ? '#0389ff' : '#ffffff')};
  transition: 0.1s;
`;

const DisabledCheckbox = styled.div<CheckboxProps>`
  width: 2.5rem;
  height: 2.5rem;
  border: solid #d6d6d6;
  border-width: 0.25rem;
  border-radius: 0.8rem;
  background-color: '#dfdfdf';
  &:hover {
    cursor: not-allowed;
  }
`;

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  title,
  status = false,
  disabled = false,
}) => {
  const [currentStatus, setCurrentStatus] = useState(status);
  const [postSubquestsComplete] = usePostSubquestsCompleteMutation();
  const [postSubquestsCancel] = usePostSubquestsCancelMutation();

  const handleClick = useCallback(() => {
    setCurrentStatus(!currentStatus);
    if (currentStatus) {
      postSubquestsCancel({
        subQuestId: id,
      });
      return;
    }
    postSubquestsComplete({
      subQuestId: id,
    });
  }, [currentStatus, id, postSubquestsCancel, postSubquestsComplete]);

  return (
    <div className="_CHECKBOX_">
      {disabled ? (
        <DisabledCheckbox />
      ) : (
        <StyledCheckbox status={currentStatus} onClick={handleClick} />
      )}
      <Text fontColor="main" fontSize="large" fontWeight="regular">
        {title}
      </Text>
    </div>
  );
};

export default Checkbox;
