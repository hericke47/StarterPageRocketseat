import React from 'react';

import { Container, Wrapper, Card, Bell, Header, Message, User } from './styles';

const ExtraContent: React.FC = () => {
  return (
    <Container>
      <h2>Em breve!</h2>
      <Wrapper>
        <Card>
          <Header>
            <Bell />
            <h3>Novos coneúdos</h3>
          </Header>
          <p>
            Mais conteúdos inédito pra te ajudar a avançar para o próximo nível!
          </p>
        </Card>

        <Card>
          <Header>
            <Message />
            <h3>Fórum</h3>
          </Header>
          <p>
            Crie tópicos para resolver suas dúvidas e ajudar outros programadores.
          </p>
        </Card>

        <Card>
          <Header>
            <User />
            <h3>Comunidade</h3>
          </Header>
          <p>
            Participe, cresça junto com ela e se torne um programador ainda melhor!
          </p>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default ExtraContent;
