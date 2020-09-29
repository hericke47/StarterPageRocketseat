import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 50px 30px;

  display: flex;
  flex-direction: column;
  width: 100%;

  > h1 {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 1em;
    color: #fff;
  }
`;

export const Wrapper = styled.div`
  display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 30px;
`;
