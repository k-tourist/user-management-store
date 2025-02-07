import { Box, Typography, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { styles } from './styles';

const CustomAuthList = ({ title, description }) => {
  return (
    <Box>
      <Box sx={styles.container}>
        <Box sx={styles.titleBox}>
          <Typography sx={styles.title}>
            {title}
          </Typography>
          <Typography sx={styles.description}>
            {description}
          </Typography>
        </Box>
        <Button
          variant="outlined"
          startIcon={<AddIcon />}
          sx={styles.addButton}
        >
          Add
        </Button>
      </Box>
    </Box>
  );
};

export default CustomAuthList; 