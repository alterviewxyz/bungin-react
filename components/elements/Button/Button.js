import styled, { css } from 'styled-components';
import media from 'styled-media-query';

const Button = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 8px 20px;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.05em;
  color: white;
  background-color: #64B5F6;
  background: linear-gradient(to right, #64B5F6, #82B1FF);
  border: none;
  border-radius: 20px;
  box-shadow: 0 3px 6px rgba(25, 118, 210, 0.2);
  cursor: pointer;
  overflow: hidden;
  transition: box-shadow 0.3s ease-out, transform 0.3s ease-out;
  transform: translateZ(0);

  :hover,
  :focus {
    box-shadow: 0 4px 10px rgba(25, 118, 210, 0.4);
    transform: scale(1.01, 1.01) translateY(-2px) translateZ(0);
  }

  ${({ big }) => big
    && css`
      padding: 11px 24px;
    `}



    ${({ responsive }) => responsive
      && media.lessThan('medium')`
        padding: 6px 16px;
      `}

    ${({ big, responsive }) => big
      && responsive
      && media.lessThan('medium')`
        padding: 9px 20px;
      `}

    ${media.lessThan('470px')`
      letter-spacing: 0;
    `}
`;

export default Button;
