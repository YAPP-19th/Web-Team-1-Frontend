import { Text } from '@src/components/atoms';
import toastArrow from '@src/assets/images/toast_arrow.svg';
import './style.scss';

const Toast = () => {
  return (
    <div className="_TOAST_">
      <div className="toast-wrapper">
        <Text fontColor="white" fontSize="medium" fontWeight="bold">
          해당 퀘스트가 등록되었습니다!
        </Text>
        <div>
          <Text fontColor="white" fontWeight="bold">
            로드맵 리스트 확인
          </Text>
          <img alt="toast-arrow" src={toastArrow} />
        </div>
      </div>
    </div>
  );
};

export default Toast;
