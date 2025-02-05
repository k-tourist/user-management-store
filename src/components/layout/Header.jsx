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

const Header = ({ height, onMenuClick, showMenuIcon }) => {
  const theme = useTheme();

  return (
    <AppBar
      position="fixed"
      sx={{
        height: height,
        backgroundColor: 'background.paper',
        color: 'text.primary',
        boxShadow: 1,
        width: { xs: '100%', md: `calc(100%)` },
      }}
    >
      <Toolbar sx={{ height: '100%' }}>
        {showMenuIcon && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={onMenuClick}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}

        <Typography 
          variant="h6" 
          component="div" 
          sx={{ 
            flexGrow: 1,
            fontSize: { xs: '1rem', sm: '1.25rem' }
          }}
        >
          Dashboard
        </Typography>
        
        <Box sx={{ display: 'flex', gap: { xs: 0.5, sm: 1 } }}>
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