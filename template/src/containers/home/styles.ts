import styled, { css, keyframes } from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 2rem;
`;

export const ColorBox = styled.div`
  height: 4rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  ${({ theme }) => css`
    ${theme.media.sm} {
      background-color: black;
    }
  `}
`;

const SpinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg);  }
`;

export const Spinner = styled.div`
  border: 6px solid ${({ theme }) => theme.colors.primary};
  border-top: 6px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  animation: ${SpinAnimation} 0.6s linear infinite;
`;

export const CustomButton = styled.button`
  cursor: pointer;
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
`;
