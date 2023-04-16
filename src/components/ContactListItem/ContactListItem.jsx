import { useState } from 'react';
import ItemBar from 'components/ItemBar/ItemBar';
import Modal from 'components/Modal/Modal';

import {
  ContactItem,
  WrapperPhoneNumber,
  Wrapper,
} from './ContactListItem.styled';

const ContactListItem = ({ id, name, number }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <ContactItem>
        <Wrapper>
          <p style={{ maxWidth: '150px' }}>{name}</p>
        </Wrapper>
        <WrapperPhoneNumber>
          <p>{number}</p>
        </WrapperPhoneNumber>
        <ItemBar id={id} isOpenModal={setOpenModal} />
      </ContactItem>
      {openModal && (
        <Modal id={id} name={name} number={number} onClose={setOpenModal} />
      )}
    </>
  );
};

export default ContactListItem;
