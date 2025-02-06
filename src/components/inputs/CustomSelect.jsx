import { Select, MenuItem } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const CustomSelect = ({
  value,
  onChange,
  options,
  size = 'medium',
  color = 'default',
  disabled = false,
  sx = {},
  ...props
}) => {
  const baseStyles = {
    height: { xs: '36px', sm: '40px' },
    backgroundColor: '#F9FAFB',
    '& .MuiSelect-select': {
      padding: { xs: '6px 12px', sm: '8px 12px' },
      fontSize: { xs: '12px', sm: '14px' },
      lineHeight: { xs: '16px', sm: '20px' },
      display: 'flex',
      alignItems: 'center',
    },
    '& .MuiSelect-icon': {
      width: { xs: '16px', sm: '20px' },
      height: { xs: '16px', sm: '20px' },
      right: { xs: '6px', sm: '8px' },
      color: disabled ? '#9CA3AF' : '#6B7280'
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#E5E7EB',
    },
    ...(color === 'primary' && {
      color: '#204464',
      backgroundColor: 'rgba(32, 68, 100, 0.05)',
      '& .MuiSelect-icon': {
        color: disabled ? '#9CA3AF' : '#204464'
      },
      '& .MuiOutlinedInput-notchedOutline': {
        border: '1px solid #204464',
      },
    }),
    ...(size === 'small' && {
      height: '31px',
      '& .MuiSelect-select': {
        fontSize: '12px',
        lineHeight: '14.5px',
        padding: '4px 8px',
      },
    })
  };

  return (
    <Select
      value={value}
      onChange={onChange}
      size={size}
      disabled={disabled}
      IconComponent={KeyboardArrowDownIcon}
      sx={{ ...baseStyles, ...sx }}
      MenuProps={{
        PaperProps: {
          sx: {
            '& .MuiMenuItem-root': {
              fontSize: size === 'small' ? '12px' : '14px',
              lineHeight: size === 'small' ? '14.5px' : '20px',
              color: color === 'primary' ? '#204464' : '#6B7280',
              padding: size === 'small' ? '8px' : '8px 12px',
            }
          }
        }
      }}
      {...props}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  );
}; 