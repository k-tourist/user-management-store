import { Box, Typography, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const CustomAuthList = ({ title, description }) => {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          py: 3
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: '30px',
              lineHeight: '36px',
              fontWeight: 600,
              color: '#111827',
              mb: 1
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontSize: '18px',
              lineHeight: '22px',
              color: '#6B7280',
              maxWidth: '580px'
            }}
          >
            {description}
          </Typography>
        </Box>
        <Button
          variant="outlined"
          startIcon={<AddIcon />}
          sx={{
            height: '40px',
            color: '#6B7280',
            border: '1px solid #E5E7EB',
            textTransform: 'none',
            fontSize: '14px',
            lineHeight: '20px',
            '&:hover': {
              border: '1px solid #E5E7EB',
              backgroundColor: '#F9FAFB'
            }
          }}
        >
          Add
        </Button>
      </Box>
    </Box>
  );
};

export default CustomAuthList; 