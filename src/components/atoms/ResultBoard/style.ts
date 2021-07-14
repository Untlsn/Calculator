import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 125px;
  padding: 20px;
  font-size: ${({ theme }) => theme.fontSize.xl};
  text-align: right;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.result};
`;