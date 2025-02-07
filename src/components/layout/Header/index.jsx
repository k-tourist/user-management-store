import { 
  AppBar, 
  Toolbar, 
  Typography, 
  IconButton, 
  Box,
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { styles } from './styles';

const Header = ({ height, onMenuClick, showMenuIcon }) => {
  const theme = useTheme();

  return (
    <AppBar sx={styles.appBar}>
      <Toolbar sx={styles.toolbar}>
        {showMenuIcon && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={onMenuClick}
            sx={styles.menuButton}
          >
            <MenuIcon />
          </IconButton>
        )}

        <Typography sx={styles.title}>
          Dashboard
        </Typography>
        
        <Box sx={styles.iconContainer}>
          <IconButton size={theme.breakpoints.down('sm') ? 'small' : 'medium'}>
            <NotificationsIcon />
          </IconButton>
          <IconButton size={theme.breakpoints.down('sm') ? 'small' : 'medium'}>
            <AccountCircleIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header; 