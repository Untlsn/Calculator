import { WrapperProps } from '@atoms/Button/types';

export const getWidth = ({ square, big }: WrapperProps) => square
  ? big ? 155 : 65
  : big ? 225: 100;