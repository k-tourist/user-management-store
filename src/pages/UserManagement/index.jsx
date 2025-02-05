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
  const [users, setUsers] = useState(mockUsers);
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
    setUsers(prevUsers => 
      prevUsers.map(user => 
        user.id === userId 
          ? { ...user, role: newRole }
          : user
      )
    );
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
      <Typography 
        variant="h4" 
        sx={{ 
          fontSize: '32px',
          lineHeight: '36px',
          mb: '12px' // 12px gap between title and description
        }}
      >
        User Management
      </Typography>
      
      <Typography 
        variant="body1" 
        color="text.secondary" 
        sx={{ 
          fontSize: '20px',
          lineHeight: '22px',
          maxWidth: '710px',
          mb: '48px' // 48px gap between description and table
        }}
      >
        Manage roles, subscriptions and access with ease. Track logins, assign roles and securely impersonate users for support.
      </Typography>

      <TableContainer 
        component={Paper}
        sx={{
          maxWidth: '1040px',
          overflowX: 'auto',
          '& .MuiTable-root': {
            minWidth: '1040px',
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
            {users.map((user) => (
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
      <Dialog 
        open={openDialog} 
        onClose={() => setOpenDialog(false)}
        PaperProps={{
          sx: {
            width: '685px',
            minHeight: '252px',
            borderRadius: '12px',
            p: 3, // Add padding to the dialog
          }
        }}
      >
        <DialogTitle 
          sx={{ 
            fontSize: '32px',
            lineHeight: '36px',
            p: 0, // Remove default padding
            mb: '24px' // Gap between title and description
          }}
        >
          Confirm Role Change
        </DialogTitle>
        <DialogContent sx={{ p: 0 }}> {/* Remove default padding */}
          <Typography
            sx={{
              fontSize: '18px',
              lineHeight: '24px',
            }}
          >
            You are about to change the role of{' '}
            <Box component="span" sx={{ fontWeight: 700 }}>
              {selectedUser?.name}
            </Box>
            {' '}to{' '}
            <Box component="span" sx={{ fontWeight: 700 }}>
              {selectedUser?.role}
            </Box>
            . This action will update their access permissions immediately. Are you sure you want to proceed?
          </Typography>
        </DialogContent>
        <DialogActions 
          sx={{ 
            p: 0,
            mt: 3,
            gap: '12px' // Updated gap to 12px
          }}
        >
          <Button 
            onClick={() => setOpenDialog(false)}
            variant="outlined"
            sx={{
              fontSize: '14px',
              lineHeight: '20px',
              height: '40px',
              width: '100px', // Fixed width
              border: 'none', // Remove border
              '&:hover': {
                border: 'none', // Remove border on hover
                backgroundColor: 'rgba(0, 0, 0, 0.04)' // Optional: light hover effect
              }
            }}
          >
            Cancel
          </Button>
          <Button 
            onClick={handleConfirmImpersonation}
            variant="contained"
            sx={{
              fontSize: '14px',
              lineHeight: '20px',
              height: '40px',
              width: '100px' // Fixed width
            }}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default UserManagement; 