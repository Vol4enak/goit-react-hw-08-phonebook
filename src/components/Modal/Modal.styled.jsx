import styled from '@emotion/styled';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Backdrop = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);

  z-index: 1200;
`;

const ModalBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 70px;
  width: 540px;
  padding: 30px 0 10px 0;

  background-color: #ffffffe5;
  border-radius: 20px;
  align-items: center;
`;

const Fieldset = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  max-height: 55px;
  gap: 20px;

  color: #fff;
  border-radius: 10px;
  background-color: #ff9500;
  border: 1px solid #000000;
  font-size: 18px;

  & span {
    width: 100px;
    text-align: center;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 213px;
    height: 100%;
    width: 1px;
    background-color: #000000;
    border-radius: 5px;
  }
`;

const StyledButton = styled(IconButton)`
  display: block;
  margin-top: 20px;
  color: #000;

  transition: color 150ms ease-in-out;
  &:hover {
    color: rgb(26, 172, 48);
  }
`;

const CloseBtn = styled(IconButton)`
  position: absolute;
  top: 5px;
  right: 5px;
`;

const Icon = styled(CloseIcon)`
  color: #000;

  transition: color 150ms ease-in-out;
  &:hover {
    color: red;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  outline: yellow;
  background-color: transparent;
  border: 2px solid transparent;
  border-radius: 10px;
  color: black;

  padding-left: 20px;
  &:placeholder-shown &:focus,
  &:hover {
    border: 2px solid white;
  }

  &:placeholder-shown {
    color: black;
    font-size: 14px;
    font-weight: 500;
  }
`;

const AvatarBgd = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  justify-self: flex-start;
  margin-bottom: -20px;
  border-radius: 50%;
  background-color: grey;
`;

export {
  Backdrop,
  ModalBody,
  Fieldset,
  StyledButton,
  CloseBtn,
  Icon,
  Input,
  AvatarBgd,
};
