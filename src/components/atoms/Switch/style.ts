import styled from 'styled-components';

export const Wrapper = styled.div`
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  user-select: none;
  gap: 20px;
`;

export const Numbers = styled.div`
  display: flex;
  gap: 13px;
  position: absolute;
  right: 12px;
  top: -15px;
  font-size: 14px;
`;

export const SwitchWrapper = styled.div`
  width: 70px;
  height: 25px;
  background-color: ${({ theme }) => theme.colors.switchBgc};
  border-radius: 10px;
  position: relative;
  &:hover { cursor: pointer }
`;

export const Leader = styled.div<{position: number}>`
  height: 18px;
  width: 18px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.switchLeader};
  position: absolute;
  top: 3px;
  left: 3px;
  transition: transform .5s;
  transform: translateX(calc(21px * ${({ position }) => position}));
`;