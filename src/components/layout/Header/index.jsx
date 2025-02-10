import { Box, Typography, IconButton, Select, MenuItem, Divider, Avatar } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import MonitorIcon from '@mui/icons-material/Monitor';
import { styles } from './styles';
import { useState } from 'react';

const Header = () => {
  const username = "Abraham Sabel";
  const [selectedName, setSelectedName] = useState("Abrarham Sabel");

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  const avatarUrl = null;

  return (
    <Box sx={styles.header}>
      <Typography sx={styles.welcomeText}>
        Welcome {username}!
      </Typography>

      <Box sx={styles.rightSection}>
        <Box sx={styles.section}>
          <IconButton 
            sx={styles.addButton}

            color="primary"
            variant="contained"
          >
            <AddIcon />
          </IconButton>
          <IconButton sx={styles.helpButton}>
            <HelpOutlineIcon />
          </IconButton>
        </Box>

        <Divider orientation="vertical" sx={styles.divider} />

        <Box sx={styles.section}>
          <Select
            value={selectedName}

            onChange={(e) => setSelectedName(e.target.value)}
            sx={styles.select}
          >
            <MenuItem value="Abrarham Sabel">Abrarham Sabel</MenuItem>
          </Select>
        </Box>

        <Divider orientation="vertical" sx={styles.divider} />

        <Box sx={styles.section}>
          <Box sx={styles.trialTag}>

            <MonitorIcon sx={styles.monitorIcon} />
            <Typography sx={styles.trialText}>
              Trial ends in 21 days
            </Typography>
          </Box>
          <Avatar 
            src={avatarUrl}
            alt={username}
            sx={styles.avatar}
          >
            {getInitials(username)}
          </Avatar>
        </Box>
      </Box>
    </Box>
  );
}; 

export default Header;