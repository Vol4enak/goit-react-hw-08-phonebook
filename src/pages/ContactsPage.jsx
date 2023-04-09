import ContactForm from 'components/ContactForm';
import Contacts from 'components/Contacts/Contacts';

import { Container } from 'components/SignUp/SignUp.styled';

const ContactsPage = () => {
  return (
    <section>
      <Container
        sx={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 14,
          marginTop: -20,
        }}
      >
        <ContactForm />
        <Contacts />
      </Container>
    </section>
  );
};

export default ContactsPage;
