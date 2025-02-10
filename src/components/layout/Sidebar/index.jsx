import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  useTheme,
  useMediaQuery,
  Typography,
  Divider
} from '@mui/material';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import WebAssetOutlinedIcon from '@mui/icons-material/WebAssetOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import { useHistory, useLocation } from 'react-router-dom';
import { styles } from './styles';

const menuItems = [
  { title: 'Dashboard', icon: <DashboardOutlinedIcon /> },
  { title: 'Create a Check', icon: <ControlPointIcon /> },
  { title: 'My Checks', icon: <WysiwygIcon /> },
  { title: 'Payee List', icon: <FormatListBulletedIcon /> },
  { title: 'Bank Accounts', icon: <AccountBalanceOutlinedIcon /> },
  { title: 'My Tags', icon: <LocalOfferOutlinedIcon /> },
  { title: 'Check Register', icon: <LibraryBooksOutlinedIcon /> },
  { title: 'All Mails', icon: <LocalShippingOutlinedIcon /> },
];

const receivablesItems = [
  { title: 'Payment Links', icon: <WebAssetOutlinedIcon /> },
];

const integrationItems = [
  { title: 'Payments', icon: <MonetizationOnOutlinedIcon /> },
];

const adminItems = [
  { title: 'User Management', icon: <PeopleOutlineOutlinedIcon />, url: '/user-management' },
];


const Sidebar = ({ open, onClose, variant }) => {
  const history = useHistory();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isAdmin = true;

  const handleItemClick = (path) => {
    history.push(path);
    if (isMobile) {
      onClose();
    }
  };

  const drawerContent = (
    <Box sx={styles.sidebar}>
      <Box sx={styles.logoContainer}>
        <Typography sx={styles.companyName}>
          SUNCCOS
        </Typography>
      </Box>

      <List sx={styles.menuList}>
        {menuItems.map((item) => (
          <ListItem key={item.title} sx={styles.menuItem}>
            <ListItemIcon sx={styles.menuIcon}>
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.title}
              sx={styles.menuText}
            />
          </ListItem>
        ))}
      </List>

      <Divider sx={styles.divider} />

      <Typography sx={styles.sectionTitle}>
        Receivables
      </Typography>
      <List sx={styles.menuList}>
        {receivablesItems.map((item) => (
          <ListItem key={item.title} sx={styles.menuItem}>
            <ListItemIcon sx={styles.menuIcon}>
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.title}
              sx={styles.menuText}
            />
          </ListItem>
        ))}
      </List>

      <Divider sx={styles.divider} />

      <Typography sx={styles.sectionTitle}>
        Integrations
      </Typography>
      <List sx={styles.menuList}>
        {integrationItems.map((item) => (
          <ListItem key={item.title} sx={styles.menuItem}>
            <ListItemIcon sx={styles.menuIcon}>
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.title}
              sx={styles.menuText}
            />
          </ListItem>
        ))}
      </List>

      {isAdmin && <>
        <Divider sx={styles.divider} />
        <Typography sx={styles.sectionTitle}>
          Admin
        </Typography>
        <List sx={styles.menuList}>
          {adminItems.map((item) => (
            <ListItem key={item.title} sx={styles.menuItem} onClick={() => handleItemClick(item.url)}>
              <ListItemIcon sx={styles.menuIcon}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.title}
                sx={styles.menuText}
              />
            </ListItem>
          ))}
        </List>
      </>}
    </Box>
  );


  return (
    <Drawer
      variant={variant}
      open={open}
      onClose={onClose}
      sx={styles.drawer}
    >
      {drawerContent}
    </Drawer>
  );
};

export default Sidebar; 