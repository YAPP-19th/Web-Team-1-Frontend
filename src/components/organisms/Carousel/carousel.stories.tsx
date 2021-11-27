import { Story, Meta } from '@storybook/react';
import { Paper } from '@src/components/molecules/';
import { Carousel } from '@src/components/organisms';
import styled from 'styled-components';

export default {
  title: 'Design System/Organisms/Carousel',
  component: Carousel,
  parameters: {
    docs: {
      description: {
        component: 'Carousel',
      },
    },
  },
} as Meta;

const DummyWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const SliderItem = styled.div`
  width: 100%;
`;

const items = [
  { key: 'a' },
  { key: 'b' },
  { key: 'c' },
  { key: 'd' },
  { key: 'e' },
  { key: 'f' },
  { key: 'g' },
  { key: 'h' },
];

const Template: Story = () => (
  <DummyWrapper>
    <Carousel>
      {items.map((item) => (
        <SliderItem key={item.key}>
          <Paper
            category="Front-End"
            name="프론트엔드 개발자가 되는 법"
            level={1}
            author="호랑이형님"
          />
        </SliderItem>
      ))}
    </Carousel>
  </DummyWrapper>
);

export const defaultCarousel = Template.bind({});
