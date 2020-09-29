import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    max-height: 120px;
    display: flex;
`;

export const Navigation = styled.nav`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 30px;
`;

export const Card = styled.a`

    :hover {
      background:rgb(41, 41, 46);
      transition: background 0.2s ease 0s;
    }
    max-width: 200px;
    max-height: 195px;
    background: #202024;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 36px 24px;
    text-decoration: none;
    border-radius: 5px 5px 0px 0px;

    > h1 {
      color: #fff;
      font-size: 24px;
      margin-top: 24px;
    }
   
    > img {
      width: 70px;
      height: 70px;
      border-radius: 8px;
    }
`;