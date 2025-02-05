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
  Pagination,
  PaginationItem,
} from '@mui/material';
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { setShowAlert } from '../../redux/slices/alertSlice';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import Popover from '@mui/material/Popover';

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
  const [page, setPage] = useState(1);
  const [tempRole, setTempRole] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('active');
  const [showFilterOptions, setShowFilterOptions] = useState(false);

  const getSubscriptionStatusColor = (status) => {
    switch (status) {
      case 'No Subscription':
        return '#B31F0D';
      case 'Active':
        return '#058205';
      case 'Trial Expiring in 28 days':
        return '#204464';
      case 'Cancelling in 14 days':
        return '#EF6C00';
      default:
        return theme.palette.text.primary;
    }
  };

  const handleRoleChange = (userId, newRole) => {
    setTempRole(newRole);
    setSelectedUser(users.find(user => user.id === userId));
    setOpenDialog(true);
  };

  const handleActAsUser = (user) => {
    dispatch(setShowAlert(`You are acting as ${user.name} (${user.email})`));
  };

  const handleConfirmRoleChange = () => {
    setUsers(prevUsers => 
      prevUsers.map(user => 
        user.id === selectedUser.id 
          ? { ...user, role: tempRole }
          : user
      )
    );
    setOpenDialog(false);
  };

  const handleCancelRoleChange = () => {
    setOpenDialog(false);
    setTempRole(null);
  };

  const handleFilterClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ p: 3, width: '100%' }}>
      <Typography 
        variant="h4" 
        sx={{ 
          fontSize: {
            xs: '24px',
            sm: '32px'
          },
          lineHeight: {
            xs: '28px',
            sm: '36px'
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
            xs: '16px',
            sm: '20px'
          },
          lineHeight: {
            xs: '20px',
            sm: '22px'
          },
          maxWidth: '710px',
          mb: '48px'
        }}
      >
        Manage roles, subscriptions and access with ease. Track logins, assign roles and securely impersonate users for support.
      </Typography>

      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1040px',
          mb: '20px',
          gap: '12px'
        }}
      >
        <TextField
          placeholder="Search"
          sx={{
            maxWidth: {
              xs: 'calc(100% - 109px)',
              sm: '417px'
            },
            '& .MuiOutlinedInput-root': {
              height: { xs: '36px', sm: '40px' },
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
              padding: { xs: '6px 12px', sm: '8px 12px' },
              fontSize: { xs: '12px', sm: '14px' },
              lineHeight: { xs: '16px', sm: '20px' },
              '&::placeholder': {
                color: '#6B7280',
                opacity: 1,
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={{ ml: { xs: 0.5, sm: 1 } }}>
                <SearchIcon sx={{ 
                  color: '#6B7280',
                  fontSize: { xs: '18px', sm: '24px' }
                }} />
              </InputAdornment>
            ),
          }}
        />

        <Box sx={{ display: 'flex', gap: '12px' }}>
          <Select
            size="small"
            defaultValue="recent"
            IconComponent={KeyboardArrowDownIcon}
            sx={{ 
              width: '97px',
              height: { xs: '36px', sm: '40px' },
              backgroundColor: '#F9FAFB',
              '& .MuiSelect-select': {
                padding: { xs: '6px 12px', sm: '8px 12px' },
                fontSize: { xs: '12px', sm: '14px' },
                lineHeight: { xs: '16px', sm: '20px' },
                display: 'flex',
                alignItems: 'center',
              },
              '& .MuiSelect-icon': {
                width: { xs: '16px', sm: '20px' },
                height: { xs: '16px', sm: '20px' },
                right: { xs: '6px', sm: '8px' },
                color: '#6B7280'
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#E5E7EB',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#E5E7EB',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#E5E7EB',
                borderWidth: '1px',
              }
            }}
            MenuProps={{
              PaperProps: {
                sx: {
                  '& .MuiMenuItem-root': {
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: '#6B7280',
                    padding: '8px 12px',
                  }
                }
              }
            }}
          >
            <MenuItem value="recent">Recent</MenuItem>
            <MenuItem value="name">Name</MenuItem>
            <MenuItem value="email">Email</MenuItem>
          </Select>
          
          <Button
            variant="outlined"
            startIcon={<FilterListIcon />}
            onClick={handleFilterClick}
            sx={{
              height: { xs: '36px', sm: '40px' },
              minWidth: '97px',
              padding: '8px 12px',
              backgroundColor: '#F9FAFB',
              border: '1px solid #E5E7EB',
              color: '#6B7280',
              fontSize: { xs: '12px', sm: '14px' },
              lineHeight: { xs: '16px', sm: '20px' },
              '&:hover': {
                backgroundColor: '#F9FAFB',
                border: '1px solid #E5E7EB',
              }
            }}
          >
            Filters
          </Button>

          <Popover
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={handleFilterClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            PaperProps={{
              sx: {
                width: '185px',
                mt: '4px',
                boxShadow: '0px 4px 6px -2px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.10)',
                borderRadius: '12px',
              }
            }}
          >
            <Box
              sx={{
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                px: '16px',
                borderBottom: '1px solid #E5E7EB',
              }}
            >
              <Typography
                sx={{
                  fontSize: '16px',
                  lineHeight: '24px',
                  fontWeight: 600,
                  color: '#111827',
                }}
              >
                Filters
              </Typography>
              <IconButton
                onClick={handleFilterClose}
                sx={{
                  p: 0,
                  color: '#6B7280',
                  '&:hover': {
                    backgroundColor: 'transparent',
                    color: '#111827',
                  }
                }}
              >
                <CloseIcon sx={{ fontSize: '20px' }} />
              </IconButton>
            </Box>

            <Box sx={{ p: '8px' }}>
              <Box
                onClick={() => setShowFilterOptions(!showFilterOptions)}
                sx={{ 
                  height: '40px',
                  backgroundColor: '#F9FAFB',
                  border: '1px solid #E5E7EB',
                  borderRadius: '6px',
                  padding: '8px 12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  '&:hover': {
                    borderColor: '#E5E7EB',
                  }
                }}
              >
                <Typography
                  sx={{
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: '#6B7280',
                  }}
                >
                  {selectedFilter === 'active' ? 'Active' : 
                   selectedFilter === 'no_subscription' ? 'No Subscription' :
                   selectedFilter === 'trial_expiring' ? 'Trial Expiring' : 
                   'Cancelling'}
                </Typography>
                <KeyboardArrowDownIcon 
                  sx={{ 
                    width: '20px',
                    height: '20px',
                    color: '#6B7280',
                    transform: showFilterOptions ? 'rotate(180deg)' : 'none',
                    transition: 'transform 0.2s'
                  }} 
                />
              </Box>

              {showFilterOptions && (
                <Box
                  sx={{
                    mt: '4px',
                    backgroundColor: '#fff',
                    borderRadius: '6px',
                    boxShadow: '0px 4px 6px -2px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.10)',
                    zIndex: 1,
                  }}
                >
                  {[
                    { value: 'active', label: 'Active' },
                    { value: 'no_subscription', label: 'No Subscription' },
                    { value: 'trial_expiring', label: 'Trial Expiring' },
                    { value: 'cancelling', label: 'Cancelling' }
                  ].map((option) => (
                    <Box
                      key={option.value}
                      onClick={() => {
                        setSelectedFilter(option.value);
                        setShowFilterOptions(false);
                      }}
                      sx={{
                        padding: '8px 12px',
                        fontSize: '14px',
                        lineHeight: '20px',
                        cursor: 'pointer',
                        color: selectedFilter === option.value ? '#9CA3AF' : '#111827',
                        backgroundColor: 'transparent',
                        '&:hover': {
                          backgroundColor: '#F9FAFB',
                        }
                      }}
                    >
                      {option.label}
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          </Popover>
        </Box>
      </Box>

      <TableContainer 
        sx={{
          maxWidth: '1040px',
          overflowX: 'auto',
          '& .MuiTable-root': {
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
              <TableCell width="120px">Roles</TableCell>
              <TableCell width="120px"></TableCell>
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
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{ 
                      height: '31px',
                      width: '200px',
                      padding: '4px 8px',
                      whiteSpace: 'nowrap',
                      fontSize: '12px',
                      lineHeight: '14.5px',
                      color: getSubscriptionStatusColor(user.subscriptionStatus),
                      backgroundColor: `${getSubscriptionStatusColor(user.subscriptionStatus)}0D`,
                      border: `1px solid ${getSubscriptionStatusColor(user.subscriptionStatus)}`,
                      '&:hover': {
                        backgroundColor: `${getSubscriptionStatusColor(user.subscriptionStatus)}1A`,
                        border: `1px solid ${getSubscriptionStatusColor(user.subscriptionStatus)}`
                      }
                    }}
                  >
                    {user.subscriptionStatus}
                  </Button>
                </TableCell>
                <TableCell>{user.dateRegistered}</TableCell>
                <TableCell>{user.lastLogin}</TableCell>
                <TableCell>
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
                        lineHeight: '14.5px',
                        display: 'flex',
                        alignItems: 'center',
                        height: '100%'
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
                </TableCell>
                <TableCell>
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
                      backgroundColor: 'rgba(239, 108, 0, 0.05)',
                      border: '1px solid #EF6C00',
                      '&:hover': {
                        backgroundColor: 'rgba(239, 108, 0, 0.1)',
                        border: '1px solid #EF6C00'
                      }
                    }}
                  >
                    Act as User
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box
        sx={{
          mt: '32px',
          display: 'flex',
          justifyContent: 'flex-end',
          maxWidth: '1040px',
          '& .MuiPagination-ul': {
            gap: 0
          }
        }}
      >
        <Pagination
          count={10}
          page={page}
          onChange={(event, value) => setPage(value)}
          renderItem={(item) => (
            <PaginationItem
              slots={{
                previous: () => 'Previous',
                next: () => 'Next',
              }}
              {...item}
              sx={{
                height: { xs: '32px', sm: '47px' },
                minWidth: item.type === 'page' ? { xs: '32px', sm: '47px' } : 'auto',
                padding: item.type === 'page' ? '0' : { xs: '0 8px', sm: '0 16px' },
                border: '1px solid #E5E7EB',
                borderRadius: '8px',
                margin: '0',
                marginRight: '-1px',
                color: '#6B7280',
                fontSize: { xs: '12px', sm: '14px' },
                lineHeight: { xs: '16px', sm: '20px' },
                '&.Mui-selected': {
                  backgroundColor: '#F9FAFB',
                  color: '#204464',
                  border: '1px solid #204464',
                  zIndex: 1,
                  '&:hover': {
                    backgroundColor: '#F9FAFB',
                  }
                },
                '&:hover': {
                  backgroundColor: 'transparent',
                },
                '&.MuiPaginationItem-previousNext': {
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px',
                  '&:hover': {
                    backgroundColor: 'transparent',
                    color: '#204464',
                  }
                },
                '&:first-of-type': {
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                },
                '&:last-of-type': {
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                },
                '&:not(:first-of-type):not(:last-of-type)': {
                  borderRadius: 0,
                }
              }}
            />
          )}
        />
      </Box>

      <Dialog 
        open={openDialog} 
        onClose={() => setOpenDialog(false)}
        PaperProps={{
          sx: {
            width: {
              xs: '100%',
              sm: '685px'
            },
            maxWidth: '685px',
            minHeight: '252px',
            borderRadius: '12px',
            p: { xs: 2, sm: 3 },
            m: { xs: 2, sm: 0 }
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
                xs: '24px',
                sm: '32px'
              },
              lineHeight: {
                xs: '28px',
                sm: '36px'
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
                xs: '14px',
                sm: '18px'
              },
              lineHeight: {
                xs: '20px',
                sm: '24px'
              },
            }}
          >
            You are about to change the role of{' '}
            <Box component="span" sx={{ fontWeight: 700 }}>
              {selectedUser?.name}
            </Box>
            {' '}to{' '}
            <Box component="span" sx={{ fontWeight: 700 }}>
              {tempRole}
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
            onClick={handleCancelRoleChange}
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
            onClick={handleConfirmRoleChange}
            variant="contained"
            sx={{
              fontSize: '14px',
              lineHeight: '20px',
              height: '40px',
              width: '100px',
              backgroundColor: '#204464',
              '&:hover': {
                backgroundColor: '#1a3850'
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