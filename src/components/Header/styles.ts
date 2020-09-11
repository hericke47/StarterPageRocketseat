import styled from 'styled-components';
import { BiArrowBack } from 'react-icons/bi';
import { FiUserPlus } from 'react-icons/fi';
import { AiFillBell } from 'react-icons/ai';


export const HeaderStarter = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 72px;
    padding: 0px 30px;
    background: rgb(32, 32, 36);
    z-index: 9998;
    transition: all 0.5s ease-in-out 0s;
    box-shadow: rgb(18, 18, 20) 0px 1rem 2rem;
`;

export const Container = styled.div`
    width: 100%;
    max-width: 1366px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    color: rgb(255, 255, 255);
    padding: 12px 0px;
`;

export const BackToDashboard = styled.div`

  display: flex;
  align-items: center;

  > img {
    width: 250px;
  }
`;

export const BackIcon = styled(BiArrowBack)`
  color: white;
  width: 20px;
  height: 20px;
  margin-left: 50px;
`;

export const TextIcon = styled.p`
  color: #fff;
  font-weight: bold;
  font-size: 15px;
  margin-left: 15px;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  
  color: #fff;

  > img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 2px solid #7159c1;
  }
`;

export const NameUser = styled.h1`
  margin-right: 15px;
  font-size: 20px;
`;

export const UserIcon = styled(FiUserPlus)`
  width: 60px;
  height: 25px;
`;

export const BellIcon = styled(AiFillBell)`
  width: 60px;
  height: 25px;
`;
