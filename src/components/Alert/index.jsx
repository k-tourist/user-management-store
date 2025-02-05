import { Box, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { hideAlert } from '../../redux/slices/alertSlice';

const Alert = () => {
  const dispatch = useDispatch();
  const { showAlert, message } = useSelector((state) => state.alert);

  if (!showAlert) return null;

  return (
    <Box
      sx={{
        width: '100%',
        height: { xs: '48px', sm: '56px' },
        backgroundColor: '#204464',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <Typography
        sx={{
          color: '#ffffff',
          fontSize: { xs: '16px', sm: '20px' },
          lineHeight: { xs: '20px', sm: '24px' },
          px: { xs: '48px', sm: '64px' },
        }}
      >
        {message}
      </Typography>
      <Button
        onClick={() => dispatch(hideAlert())}
        sx={{
          position: 'absolute',
          right: { xs: '8px', sm: '16px' },
          width: { xs: '44px', sm: '54px' },
          height: { xs: '24px', sm: '27px' },
          backgroundColor: '#E5E7EB',
          color: '#000000',
          fontSize: { xs: '11px', sm: '12px' },
          lineHeight: { xs: '13px', sm: '14.5px' },
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#D1D5DB',
          },
        }}
      >
        Exit
      </Button>
    </Box>
  );
};

export default Alert; 