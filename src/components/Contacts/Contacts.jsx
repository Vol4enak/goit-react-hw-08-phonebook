import { Badge } from '@mui/material';
import { Box } from '@mui/system';
import ContactsIcon from '@mui/icons-material/Contacts';
import { Stack } from '@mui/system';
import { CircularProgress } from '@mui/material';

import { useGetContactsQuery } from 'redux/phonebook/contactsSlice';
import { SubTitle } from 'components/App/App.styled';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { Form as Container } from 'components/SignUp/SignUp.styled';

const Contacts = () => {
  const { data = [], isFetching } = useGetContactsQuery();

  if (data.length <= 0) {
    return (
      <Container component="div" sx={{ width: '45%', border: 'none' }}>
        <SubTitle>There will be your contacts here</SubTitle>
      </Container>
    );
  }

  return (
    <Container component="div" sx={{ minWidth: '600px', maxWidth: '45%' }}>
      <Filter />
      <Box component="div" sx={{ position: 'relative', width: '100%' }}>
        <SubTitle>Contacts</SubTitle>

        {isFetching && (
          <Stack
            sx={{
              color: 'grey.500',
              position: 'absolute',
              right: '50%',
              transform: 'translate(50%,30%)',
            }}
            spacing={2}
            direction="row"
          >
            <CircularProgress color="success" />
          </Stack>
        )}
      </Box>
      <ContactList />
    </Container>
  );
};

export default Contacts;
