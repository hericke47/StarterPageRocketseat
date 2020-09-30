import styled, {css} from 'styled-components';
import { FiBell, FiMessageSquare, FiUser } from 'react-icons/fi';


export const Container = styled.section`
    margin-top: 48px;
    padding-top: 48px;
    border-top: 1px solid rgb(41, 41, 46);
    width: 100%;

    > h2 {
      font-size: 32px;
      font-weight: bold;
      margin-bottom: 1em;
      color: rgb(225, 225, 230);
    }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`;

export const Card = styled.div`
  padding: 40px 35px;
    background: rgb(32, 32, 36);
    border-radius: 5px;
    cursor: not-allowed;

    > p {
      font-size: 16px;
      line-height: 1.5;
      color: rgb(168, 168, 179);
      margin-top: 30px;
    }

`;

export const Header = styled.div`
  display: flex;
  flex-direction: space-between;
  align-items: center;

  h3 {
    font-size: 24px;
    margin-left: 24px;
    color: #fff;
  }
`;

const iconCSS = css`
  flex-shrink: 0;
    width: 30px;
    height: 30px;
    stroke: rgb(4, 211, 97);
    stroke-width: 2;
`;

export const Bell = styled(FiBell)`${iconCSS}`;

export const Message = styled(FiMessageSquare)`${iconCSS}`;

export const User = styled(FiUser)`${iconCSS}`;