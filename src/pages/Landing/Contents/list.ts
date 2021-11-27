import map from '@src/assets/images/map.png';
import lighthouse from '@src/assets/images/lighthouse.svg';
import ships from '@src/assets/images/ships.png';
import profile from '@src/assets/images/profile.svg';

const list = [
  {
    main: '하나, 취업 길잡이의\n로드맵 따라가기',
    sub: '취업의 바다에서 길잡이가 되어주다. 되어주다.\n길잡이가 되어주다. 취업의 바다에서 길잡이가 되어주다.\n되어주다. 길잡이가 되어주다.',
    image: map,
    direction: 'row',
  },
  {
    main: '둘, 당신의 역량을 키워라!\n취업 퀘스트 깨기',
    sub: '취업의 바다에서 길잡이가 되어주다. 되어주다.\n길잡이가 되어주다. 취업의 바다에서 길잡이가 되어주다.\n되어주다. 길잡이가 되어주다.',
    image: lighthouse,
    direction: 'reverse',
  },
  {
    main: '셋, 배를 업그레이드 하자\n취준 레벨 업!',
    sub: '취업의 바다에서 길잡이가 되어주다. 되어주다.\n길잡이가 되어주다. 취업의 바다에서 길잡이가 되어주다.\n되어주다. 길잡이가 되어주다.',
    image: ships,
    direction: 'row',
  },
  {
    main: '넷, 나의 역량을 보여주는\n프로필과 경험치',
    sub: '취업의 바다에서 길잡이가 되어주다. 되어주다.\n길잡이가 되어주다. 취업의 바다에서 길잡이가 되어주다.\n되어주다. 길잡이가 되어주다.',
    image: profile,
    direction: 'reverse',
  },
];

export default list;
