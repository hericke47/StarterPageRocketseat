import React from 'react';

import { Container, Wrapper } from './styles';
import Header from '../../components/Header';
import Cards from '../../components/Cards';
import js from '../../assets/js.png';
import es6 from '../../assets/es6.png';
import nodejs from '../../assets/nodejs.png';
import reactjs from '../../assets/reactjs.png';
import reactnative from '../../assets/reactnative.png';

const Dashboard: React.FC = () => {
  return (
    <>
    <Header />
      <Container>
          <h1>Conteúdo disponível</h1>
          <Wrapper>
            <Cards img={js} tech="Javascript" color="rgb(246, 218, 58)" />
            <Cards img={es6} tech="Javascript" color="rgb(225, 111, 60)" />
            <Cards img={nodejs} tech="Javascript"  color="rgb(140, 200, 75)" />
            <Cards img={reactjs} tech="Javascript" color="rgb(42, 199, 227)"  />
            <Cards img={reactnative} tech="Javascript" color="rgb(86, 103, 249)" />
          </Wrapper>
      </Container>
    </>
  );
};

export default Dashboard;
