import styled from '@emotion/styled';

const ContactItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 12px 8px 12px 30px;
  gap: 10px;

  color: #ffff;
  border-radius: 15px;
  border: 1px solid #212121;
  font-size: 18px;

  transition: 0.5s;
  background-size: 200% auto;

  background-image: linear-gradient(
    to right,
    #e99709 0%,
    #b1bd48 51%,
    #d61d1d 100%
  );

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 275px;
    height: 100%;
    width: 1px;
    background-color: #000000;
    border-radius: 5px;
  }
  &:hover {
    background-color: rgb(255, 105, 0);
    background-position: right center;
    color: #ffff;
    background-color: '';
  }
`;
const WrapperPhoneNumber = styled.div`
  width: 40%;
  text-align: center;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 55%;
  gap: 10px;
  margin-left: 120px;
  font-size: 16px;
  line-height: 1.7;
`;

export { ContactItem, WrapperPhoneNumber, Wrapper };
