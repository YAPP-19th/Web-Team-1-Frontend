import React, { forwardRef, ReactNode, Ref } from 'react';
import cn from 'classnames';
import './style.scss';
import { FontSize } from '@src/utils';

export interface TextProps {
  children: ReactNode;
  className?: string;
  align?: 'start' | 'center' | 'end';
  fontColor?: 'main' | 'gray' | 'white' | 'gil-blue' | 'job-navy';
  fontSize?: FontSize;
  fontWeight?: 'light' | 'regular' | 'medium' | 'bold';
}

const Text = forwardRef<HTMLDivElement, TextProps>(
  (
    {
      children,
      className,
      align = 'start',
      fontColor = 'main',
      fontSize = 'small',
      fontWeight = 'medium',
    }: TextProps,
    ref: Ref<HTMLDivElement>,
  ) => {
    return (
      <div
        className={cn(
          '_TEXT_',
          className,
          `text-align-${align}`,
          `font-size-${fontSize}`,
          `font-color-${fontColor}`,
          `font-weight-${fontWeight}`,
        )}
        ref={ref}
      >
        {children}
      </div>
    );
  },
);

Text.displayName = 'Text';
export default Text;
