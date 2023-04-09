import { Button, TextField, Box } from '@mui/material';

import { styled } from '@mui/material/styles';

const StyledInput = styled(TextField)({
  width: '100%',
  height: '60px',

  '& label': {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 14,
  },

  '& label.Mui-focused': {
    color: '#fff',
    fontSize: 16,
  },

  '& .MuiInput-underline:after': {
    borderBottomColor: '#fff',
  },

  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'rgba(255,255,255,0.6)',
    },

    '&:hover fieldset': {
      borderColor: '#fff',
    },

    '&.Mui-focused fieldset': {
      borderColor: 'yellow',
    },
  },

  '& .MuiInputBase-input': {
    padding: '10px 12px',
    fontSize: 16,
    color: '#fff',
  },
});

const StyledButton = styled(Button)({
  width: '100%',

  borderRadius: '30px',
  fontSize: 16,
  textTransform: 'uppercase',
  boxShadow: '0 0 20px rgba(255,255,255,0.5)',
  transition: '0.5s',
  backgroundSize: '200% auto',

  backgroundImage:
    'linear-gradient(to right, #50C9C3 0%, #96DEDA  51%, #50C9C3  100%)',

  '&:hover': {
    backgroundPosition: 'right center',
    color: '#fff',
    textDecoration: 'none',
    backgroundColor: '',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});
//

//  .btn-grad {
//     background-image: linear-gradient(to right, #F09819 0%, #EDDE5D  51%, #F09819  100%);
//     margin: 10px;
//     padding: 15px 45px;
//     text-align: center;
//     text-transform: uppercase;
//     transition: 0.5s;
//     background-size: 200% auto;
//     color: white;
//     box-shadow: 0 0 20px #eee;
//     border-radius: 10px;
//     display: block;
//   }

//   .btn-grad:hover {
//     background-position: right center; /* change the direction of the change here */
//     color: #fff;
//     text-decoration: none;
//   }

const Form = styled(Box)`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  padding: 30px 20px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 10px;

  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const Container = styled(Box)`
  display: flex;
  justify-content: center;
`;
export { StyledButton, StyledInput, Form, Container };
