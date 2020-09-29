import React from 'react';

import { Container, Navigation, Card } from './styles';

interface Props {
  tech: string;
  img: string;
  color: string;
}

const Cards: React.FC<Props> = ({img, color, tech,...rest}) => {
  return (
    <Container {...rest}>
      <Navigation>
          <Card style={{borderBottom: `1px solid ${color}`}} color={color} key={`card-${tech}`} href="#">
              <img src={img} alt={tech}/>
              <h1>{tech}</h1>
          </Card>
      </Navigation>
    </Container>
  );
};

export default Cards;
