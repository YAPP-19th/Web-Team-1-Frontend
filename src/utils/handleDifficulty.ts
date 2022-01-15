const handleDifficulty = (difficulty: number) => {
  switch (difficulty) {
    case 0:
      return '입문';
    case 1:
      return '초급';
    case 2:
      return '중급';
    case 3:
      return '고급';
    case 4:
      return '통달';
    default:
      return '입문';
  }
};

export default handleDifficulty;
