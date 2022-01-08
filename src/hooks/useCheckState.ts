import { useCallback } from 'react';

/* 서버와의 통신에 필요한 인풋 값들이 빈 값이 존재하면 안됩니다.
따라서 Redux State을 탐색하며 falsy 값이 있는 경우를 찾습니다. */

const useCheckState = () => {
  const handleCheckState = useCallback((state) => {
    let isEmpty = false;

    Object.values(state).forEach((value) => {
      const valueType = typeof value;
      switch (valueType) {
        case 'string' || 'number':
          if (!value) isEmpty = true;
          break;
        case 'object':
          if (!value) isEmpty = true;
          break;
        default:
          break;
      }

      return !isEmpty;
    });

    return isEmpty;
  }, []);

  return handleCheckState;
};

export default useCheckState;
