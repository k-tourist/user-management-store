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
  TextField,
  InputAdornment,
} from '@mui/material';
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { showAlert } from '../../redux/slices/alertSlice';
import SearchIcon from '@mui/icons-material/Search';

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
  const dispatch = useDispatch();

  const getSubscriptionStatusColor = (status) => {
    switch (status) {
      case 'No Subscription':
        return '#B31F0D';  // Red
      case 'Active':
        return '#058205';  // Green
      case 'Trial Expiring in 28 days':
        return '#204464';  // Blue
      case 'Cancelling in 14 days':
        return '#EF6C00';  // Orange/Yellow
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
    setOpenDialog(false);
    dispatch(showAlert(`Role successfully changed to ${selectedUser?.role}`));
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography 
        variant="h4" 
        sx={{ 
          fontSize: {
            xs: '24px', // Mobile
            sm: '32px'  // Desktop
          },
          lineHeight: {
            xs: '28px', // Mobile
            sm: '36px'  // Desktop
          },
          mb: '12px'
        }}
      >
        User Management
      </Typography>
      
      <Typography 
        variant="body1" 
        color="text.secondary" 
        sx={{ 
          fontSize: {
            xs: '16px', // Mobile
            sm: '20px'  // Desktop
          },
          lineHeight: {
            xs: '20px', // Mobile
            sm: '22px'  // Desktop
          },
          maxWidth: '710px',
          mb: '48px'
        }}
      >
        Manage roles, subscriptions and access with ease. Track logins, assign roles and securely impersonate users for support.
      </Typography>

      {/* Add Search Bar */}
      <TextField
        placeholder="Search"
        fullWidth
        sx={{
          maxWidth: {
            xs: '100%',
            sm: '417px'
          },
          mb: '20px',
          '& .MuiOutlinedInput-root': {
            height: '40px',
            backgroundColor: '#F9FAFB',
            '& fieldset': {
              borderColor: '#E5E7EB',
            },
            '&:hover fieldset': {
              borderColor: '#E5E7EB',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#E5E7EB',
              borderWidth: '1px',
            },
            '&.Mui-focused': {
              backgroundColor: '#F9FAFB',
            }
          },
          '& .MuiOutlinedInput-input': {
            padding: '8px 12px',
            fontSize: '14px',
            lineHeight: '20px',
            '&::placeholder': {
              color: '#6B7280',
              opacity: 1,
            },
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" sx={{ ml: 1 }}>
              <SearchIcon sx={{ color: '#6B7280' }} />
            </InputAdornment>
          ),
        }}
      />

      <TableContainer 
        sx={{
          maxWidth: '1040px',
          overflowX: 'auto',
          '& .MuiTable-root': {
            minWidth: '1040px',
            borderCollapse: 'separate',
            borderSpacing: 0,
            border: '1px solid #E5E7EB',
            borderRadius: '12px',
            overflow: 'hidden',
          },
          '& .MuiTableCell-root': {
            borderBottom: '1px solid #E5E7EB',
            borderRight: 'none',
          },
          '& .MuiTableRow-root:last-child .MuiTableCell-root': {
            borderBottom: 'none',
          }
        }}
      >
        <Table>
          <TableHead>
            <TableRow
              sx={{
                height: '48px',
                backgroundColor: '#F9FAFB',
                '& .MuiTableCell-head': {
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  padding: '0 16px',
                  backgroundColor: '#F9FAFB',
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
                              padding: '8px',
                              color: '#204464'
                            }
                          }
                        }
                      }}
                      sx={{ 
                        width: '120px',
                        height: '31px',
                        color: '#204464',
                        backgroundColor: 'rgba(32, 68, 100, 0.05)',
                        '& .MuiSelect-select': {
                          padding: '4px 8px',
                          fontSize: '12px',
                          lineHeight: '14.5px'
                        },
                        '& .MuiSelect-icon': {
                          width: '20px',
                          height: '20px',
                          right: '4px',
                          color: '#204464'
                        },
                        '&:hover': {
                          backgroundColor: 'rgba(32, 68, 100, 0.1)',
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                          border: '1px solid #204464',
                          borderWidth: '1px !important'
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          border: '1px solid #204464',
                          borderWidth: '1px !important'
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          border: '1px solid #204464',
                          borderWidth: '1px !important'
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
                        lineHeight: '14.5px',
                        color: '#EF6C00',
                        backgroundColor: 'rgba(239, 108, 0, 0.05)', // #EF6C00 with 5% opacity
                        border: '1px solid #EF6C00', // Added border with same color
                        '&:hover': {
                          backgroundColor: 'rgba(239, 108, 0, 0.1)', // Slightly darker on hover
                          border: '1px solid #EF6C00' // Maintain border on hover
                        }
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
            width: {
              xs: '100%',    // Full width on mobile
              sm: '685px'    // Fixed width on desktop
            },
            maxWidth: '685px',
            minHeight: '252px',
            borderRadius: '12px',
            p: { xs: 2, sm: 3 }, // Smaller padding on mobile
            m: { xs: 2, sm: 0 }  // Add margin on mobile
          }
        }}
      >
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-start',
          mb: '24px'
        }}>
          <DialogTitle 
            sx={{ 
              fontSize: {
                xs: '24px', // Mobile
                sm: '32px'  // Desktop
              },
              lineHeight: {
                xs: '28px', // Mobile
                sm: '36px'  // Desktop
              },
              p: 0,
              m: 0
            }}
          >
            Confirm Role Change
          </DialogTitle>
          <IconButton
            onClick={() => setOpenDialog(false)}
            sx={{
              p: 0,
              color: '#204464',
              '& .MuiSvgIcon-root': {
                width: {
                  xs: '20px',
                  sm: '24px'
                },
                height: {
                  xs: '20px',
                  sm: '24px'
                }
              }
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <DialogContent sx={{ p: 0 }}>
          <Typography
            sx={{
              fontSize: {
                xs: '14px', // Mobile
                sm: '18px'  // Desktop
              },
              lineHeight: {
                xs: '20px', // Mobile
                sm: '24px'  // Desktop
              },
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
            mt: '32px',
            gap: '12px'
          }}
        >
          <Button 
            onClick={() => setOpenDialog(false)}
            variant="outlined"
            sx={{
              fontSize: '14px',
              lineHeight: '20px',
              height: '40px',
              width: '100px',
              color: '#204464',
              border: 'none',
              '&:hover': {
                border: 'none',
                backgroundColor: 'rgba(0, 0, 0, 0.04)'
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
              width: '100px',
              backgroundColor: '#204464',
              '&:hover': {
                backgroundColor: '#1a3850' // Slightly darker shade for hover
              }
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