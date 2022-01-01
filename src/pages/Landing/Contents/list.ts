import map from '@src/assets/lottie/map.json';
import lighthouse from '@src/assets/lottie/lighthouse.json';
import profile from '@src/assets/lottie/profile.json';
import ships from '@src/assets/lottie/ships.json';

const list = [
  {
    main: '하나, 취업 길잡이의\n로드맵 따라가기',
    sub: '현업자들은 취업을 위해 어떤 커리어를 쌓아 갔을까요?\n취업 길잡이의 로드맵으로 당신의 멋진 커리어를 만들어 보세요.',
    image: map,
    direction: 'row',
  },
  {
    main: '둘, 당신의 역량을 키워라!\n취업 퀘스트 깨기',
    sub: '더 재밌게 커리어를 쌓을 수 있는 방법은 없을까요?\n게임처럼 퀘스트를 하며 커리어를 쌓아 보세요.',
    image: lighthouse,
    direction: 'reverse',
  },
  {
    main: '셋, 배를 업그레이드 하자\n취준 레벨 업!',
    sub: '퀘스트를 완료하면 직무 별 레벨을 올릴 수 있어요.\n직무 별 레벨을 올려서 커리어를 레벨 업 해보세요.',
    image: ships,
    direction: 'row',
  },
  {
    main: '넷, 나의 역량을 보여주는\n프로필과 경험치',
    sub: '완료한 퀘스트에 따라서 각기 다른 직무 별 경험치를 얻을 수 있어요.\n다양한 퀘스트를 완료하고 보다 멋진 커리어를 만들어보세요.',
    image: profile,
    direction: 'reverse',
  },
];

export default list;
