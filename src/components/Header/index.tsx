import React from 'react';

import { HeaderStarter, Container, BackToDashboard, User, NameUser, BackIcon, TextIcon, UserIcon, BellIcon} from './styles';
import rocket from '../../assets/rocket.svg';
import space from '../../assets/space.jpg';

const Header: React.FC = () => {
  return  (
    <HeaderStarter>
      <Container>
        <BackToDashboard>
          <img src={rocket} alt="rocket"/>

          <BackIcon />
          <TextIcon>Voltar</TextIcon>
        </BackToDashboard>

        <User>
          <UserIcon />
          <BellIcon />

          <NameUser>DevSpace</NameUser>

          <img src={space} alt="space"/>
        </User>
      </Container>
    </HeaderStarter>
  )
}

export default Header;