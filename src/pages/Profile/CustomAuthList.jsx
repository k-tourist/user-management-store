import { Box, Typography } from '@mui/material';

const CustomAuthList = ({ title, description }) => {
  return (
    <Box
      sx={{
        border: '1px solid #E5E7EB',
        borderRadius: '12px',
        overflow: 'hidden'
      }}
    >
      <Box sx={{ p: '24px' }}>
        <Typography
          sx={{
            fontSize: '16px',
            lineHeight: '24px',
            fontWeight: 600,
            color: '#111827',
            mb: 1
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: '14px',
            lineHeight: '20px',
            color: '#6B7280'
          }}
        >
          {description}
        </Typography>
      </Box>
      <Box
        sx={{
          borderTop: '1px solid #E5E7EB',
          p: '24px',
          backgroundColor: '#F9FAFB'
        }}
      >
        {/* Body content will go here */}
      </Box>
    </Box>
  );
};

export default CustomAuthList; 