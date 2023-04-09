import { Box, Button, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import StarBorderPurple500TwoToneIcon from '@mui/icons-material/StarBorderPurple500TwoTone';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';

import { useAuth } from 'hooks/useAuth';
import { logOut } from 'redux/auth/operation';

const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleLogOut = e => {
    dispatch(logOut());
  };
  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '40px',
      }}
    >
      <Box
        component="div"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '5px',
        }}
      >
        <PermIdentityIcon />
        <Typography variant="body1" sx={{ fontSize: '16px', lineHeight: 1.6 }}>
          Hello, {user.name}
        </Typography>
      </Box>

      <Box component="div">
        <Button
          component={Link}
          to="/contacts"
          color="inherit"
          sx={{
            display: 'block',
            backgroundColor: 'rgba(255,255,255,0.1)',
            padding: '8px 15px',
            borderRadius: '10px',
          }}
          onClick={handleLogOut}
        >
          logout
        </Button>
      </Box>
    </Box>
  );
};

export default UserMenu;
