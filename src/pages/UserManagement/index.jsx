import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Select,
  MenuItem,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  useTheme,
  IconButton,
} from '@mui/material';
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// Mock data for the table
const mockUsers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    subscriptionStatus: 'No Subscription',
    dateRegistered: '2024-01-15',
    lastLogin: '2024-03-10',
    role: 'User',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    subscriptionStatus: 'Active',
    dateRegistered: '2024-02-01',
    lastLogin: '2024-03-15',
    role: 'Admin',
  },
  {
    id: 3,
    name: 'Bob Wilson',
    email: 'bob@example.com',
    subscriptionStatus: 'Trial Expiring in 28 days',
    dateRegistered: '2024-03-01',
    lastLogin: '2024-03-14',
    role: 'User',
  },
  {
    id: 4,
    name: 'Alice Brown',
    email: 'alice@example.com',
    subscriptionStatus: 'Cancelling in 14 days',
    dateRegistered: '2024-02-15',
    lastLogin: '2024-03-13',
    role: 'Super Admin',
  },
];

const roles = ['User', 'Admin', 'Super Admin'];

const UserManagement = () => {
  const theme = useTheme();
  const [selectedUser, setSelectedUser] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const getSubscriptionStatusColor = (status) => {
    switch (status) {
      case 'No Subscription':
        return theme.palette.error.main;
      case 'Active':
        return theme.palette.success.main;
      case 'Trial Expiring in 28 days':
        return theme.palette.info.main;
      case 'Cancelling in 14 days':
        return theme.palette.warning.main;
      default:
        return theme.palette.text.primary;
    }
  };

  const handleRoleChange = (userId, newRole) => {
    // Handle role change logic here
    console.log(`Changed role for user ${userId} to ${newRole}`);
  };

  const handleActAsUser = (user) => {
    setSelectedUser(user);
    setOpenDialog(true);
  };

  const handleConfirmImpersonation = () => {
    // Handle user impersonation logic here
    console.log(`Impersonating user: ${selectedUser.name}`);
    setOpenDialog(false);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        User Management
      </Typography>
      
      <Typography variant="body1" color="text.secondary" paragraph>
        Manage roles, subscriptions and access with ease. Track logins, assign roles and securely impersonate users for support.
      </Typography>

      <TableContainer 
        component={Paper}
        sx={{
          maxWidth: '1040px',
          overflowX: 'auto',
          '& .MuiTable-root': {
            minWidth: '1040px', // Ensures table maintains width on smaller screens
          }
        }}
      >
        <Table>
          <TableHead>
            <TableRow
              sx={{
                height: '48px',
                '& .MuiTableCell-head': {
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  padding: '0 16px',
                }
              }}
            >
              <TableCell width="180px">Name</TableCell>
              <TableCell width="220px">Email</TableCell>
              <TableCell width="200px">Subscription Status</TableCell>
              <TableCell width="140px">Date Registered</TableCell>
              <TableCell width="140px">Last Login</TableCell>
              <TableCell width="160px">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockUsers.map((user) => (
              <TableRow 
                key={user.id}
                sx={{
                  height: '63px',
                  '& .MuiTableCell-body': {
                    padding: '0 16px',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    fontSize: '12px',
                    lineHeight: '14.5px'
                  }
                }}
              >
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Typography
                    sx={{ 
                      color: getSubscriptionStatusColor(user.subscriptionStatus),
                      whiteSpace: 'nowrap',
                      fontSize: '12px',
                      lineHeight: '14.5px'
                    }}
                  >
                    {user.subscriptionStatus}
                  </Typography>
                </TableCell>
                <TableCell>{user.dateRegistered}</TableCell>
                <TableCell>{user.lastLogin}</TableCell>
                <TableCell>
                  <Box sx={{ 
                    display: 'flex', 
                    gap: '16px', 
                    alignItems: 'center',
                    height: '31px'
                  }}>
                    <Select
                      size="small"
                      value={user.role}
                      onChange={(e) => handleRoleChange(user.id, e.target.value)}
                      IconComponent={KeyboardArrowDownIcon}
                      MenuProps={{
                        PaperProps: {
                          sx: {
                            '& .MuiMenuItem-root': {
                              fontSize: '12px',
                              lineHeight: '14.5px',
                              minHeight: 'auto',
                              padding: '8px'
                            }
                          }
                        }
                      }}
                      sx={{ 
                        width: '120px',
                        height: '31px',
                        '& .MuiSelect-select': {
                          padding: '4px 8px',
                          fontSize: '12px',
                          lineHeight: '14.5px'
                        },
                        '& .MuiSelect-icon': {
                          width: '20px',
                          height: '20px',
                          right: '4px',
                        }
                      }}
                    >
                      {roles.map((role) => (
                        <MenuItem key={role} value={role}>
                          {role}
                        </MenuItem>
                      ))}
                    </Select>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => handleActAsUser(user)}
                      sx={{ 
                        height: '31px',
                        width: '95px',
                        padding: '4px 8px',
                        whiteSpace: 'nowrap',
                        fontSize: '12px',
                        lineHeight: '14.5px'
                      }}
                    >
                      Act as User
                    </Button>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Confirmation Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Confirm User Impersonation</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to impersonate {selectedUser?.name}? You will be logged in as this user.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={handleConfirmImpersonation} variant="contained">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default UserManagement; 