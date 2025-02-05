import { Button } from '@mui/material';

export const CustomButton = ({ 
  children, 
  variant = 'outlined',
  color = 'primary',
  size = 'medium',
  startIcon,
  endIcon,
  onClick,
  sx = {},
  ...props 
}) => {
  const baseStyles = {
    fontSize: '14px',
    lineHeight: '20px',
    height: { xs: '36px', sm: '40px' },
    textTransform: 'none',
    ...(color === 'primary' && {
      backgroundColor: '#204464',
      border: '1px solid #204464',
      color: '#FFFFFF',
      '&:hover': {
        backgroundColor: '#1a3850',
        border: '1px solid #1a3850',
      }
    }),
    ...(color === 'warning' && {
      color: '#EF6C00',
      backgroundColor: 'rgba(239, 108, 0, 0.05)',
      border: '1px solid #EF6C00',
      '&:hover': {
        backgroundColor: 'rgba(239, 108, 0, 0.1)',
        border: '1px solid #EF6C00'
      }
    }),
    ...(size === 'small' && {
      height: '31px',
      fontSize: '12px',
      lineHeight: '14.5px',
      padding: '4px 8px',
    })
  };

  return (
    <Button
      variant={variant}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
      sx={{ ...baseStyles, ...sx }}
      {...props}
    >
      {children}
    </Button>
  );
}; 