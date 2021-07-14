import styled from 'styled-components';
import { WrapperProps } from '@atoms/Button/types';
import { getWidth } from '@atoms/Button/helpers';

export const Wrapper = styled.div<WrapperProps>`
  height: 65px;
  position: relative;
  width: ${getWidth}px;
  background-color: ${({ theme, color }) => {
    switch (color) {
      case 'default': return theme.colors.buttonDef;
      case 'blue': return theme.colors.buttonBlue;
      case 'red': return theme.colors.buttonRed;
    }
  }};
  &:hover { cursor: pointer }
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  color: ${({ theme, color }) => color == 'default'
    ? theme.colors.buttonText
    : theme.colors.text
  };
  font-size: ${({ theme, color }) => color == 'default'
    ? theme.fontSize.l
    : theme.fontSize.m
  };
  user-select: none;
  &:after {
    content: '';
    display: block;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    height: 70px;
    width: 100%;
    background-color: ${({ theme, color }) => {
      switch (color) {
        case 'default': return theme.colors.buttonDefShadow;
        case 'blue': return theme.colors.buttonBlueShadow;
        case 'red': return theme.colors.buttonRedShadow;
      }
    }};
    border-radius: 10px;
  }
`;

