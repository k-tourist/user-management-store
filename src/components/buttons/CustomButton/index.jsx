import { Button } from '@mui/material';
import { styles } from './styles';

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
  const getStyles = () => {
    const buttonStyles = [styles.button];
    if (color === 'primary') buttonStyles.push(styles.primaryVariant);
    if (color === 'warning') buttonStyles.push(styles.warningVariant);
    if (size === 'small') buttonStyles.push(styles.smallSize);
    return Object.assign({}, ...buttonStyles, sx);
  };

  return (
    <Button
      variant={variant}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
      sx={getStyles()}
      {...props}
    >
      {children}
    </Button>
  );
}; 