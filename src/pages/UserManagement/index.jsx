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
  Tooltip,
} from '@mui/material';
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { setShowAlert } from '../../redux/slices/alertSlice';
import SearchIcon from '@mui/icons-material/Search';
import Popover from '@mui/material/Popover';
import { CustomTable } from '../../components/table/CustomTable';
import { CustomButton } from '../../components/buttons/CustomButton';
import { CustomSelect } from '../../components/inputs/CustomSelect';

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

const CURRENT_USER_ID = 2; // Making the second user as current user

const FilterIcon = () => (
  <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5002 0.75H13.5002C13.9418 0.751319 14.365 0.927337 14.6773 1.23961C14.9895 1.55189 15.1655 1.97504 15.1669 2.41667V4.25C15.1184 4.96587 14.824 5.643 14.3335 6.16667L10.7502 9.33333C10.4914 9.58183 10.2846 9.87919 10.1415 10.2082C9.99848 10.5372 9.92212 10.8913 9.91686 11.25V14.8333C9.90568 15.1105 9.8325 15.3817 9.7027 15.6268C9.57291 15.872 9.38981 16.0849 9.16686 16.25L8.0002 17C7.74511 17.1558 7.45341 17.2416 7.15458 17.2485C6.85575 17.2555 6.56036 17.1835 6.29827 17.0398C6.03618 16.8961 5.81666 16.6857 5.6619 16.43C5.50714 16.1742 5.42261 15.8822 5.41687 15.5833V11.1667C5.37287 10.5302 5.14084 9.9211 4.7502 9.41667L1.58353 6.08333C1.15167 5.62896 0.887193 5.04123 0.833532 4.41667V2.5C0.825748 2.27508 0.862924 2.05086 0.942883 1.84048C1.02284 1.63011 1.14397 1.4378 1.29919 1.27483C1.4544 1.11186 1.64057 0.981493 1.8468 0.891373C2.05303 0.801254 2.27516 0.753191 2.5002 0.75V0.75Z" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M7.10833 0.75L3 7.33333" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
  </svg>

);

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

  const renderCell = (row, column, isCurrentUser) => {
    switch (column.id) {
      case 'role':
        return (
          <CustomSelect
            value={row.role}
            onChange={(e) => handleRoleChange(row.id, e.target.value)}
            options={roles.map(role => ({ value: role, label: role }))}
            size="small"
            color="primary"
            disabled={isCurrentUser}
            sx={{ width: '120px' }}
          />
        );
      case 'actions':
        return (
          <Tooltip 
            title={isCurrentUser ? "You cannot demote yourself from Super Admin" : ""}
            placement="bottom"
            arrow
            componentsProps={{
              tooltip: {
                sx: {
                  bgcolor: '#181D27',
                  width: '147px',
                  height: '64px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  lineHeight: '16px',
                  padding: '12px 8px',
                  textAlign: 'center',
                  '& .MuiTooltip-arrow': {
                    color: '#181D27'
                  }
                }
              }
            }}
          >
            <span>
              <CustomButton
                size="small"
                color="warning"
                onClick={() => handleActAsUser(row)}
                disabled={isCurrentUser}
                sx={{ width: '95px' }}
              >
                Act as User
              </CustomButton>
            </span>
          </Tooltip>
        );
      case 'subscriptionStatus':
        return (
          <CustomButton
            size="small"
            sx={{
              width: '200px',
              color: getSubscriptionStatusColor(row.subscriptionStatus),
              backgroundColor: `${getSubscriptionStatusColor(row.subscriptionStatus)}0D`,
              border: `1px solid ${getSubscriptionStatusColor(row.subscriptionStatus)}`,
              '&:hover': {
                backgroundColor: `${getSubscriptionStatusColor(row.subscriptionStatus)}1A`,
                border: `1px solid ${getSubscriptionStatusColor(row.subscriptionStatus)}`
              }
            }}
          >
            {row.subscriptionStatus}
          </CustomButton>
        );
      default:
        return row[column.id];
    }
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
            endIcon={<FilterIcon />}
            onClick={handleFilterClick}
            sx={{
              height: { xs: '36px', sm: '40px' },
              minWidth: { xs: '36px', sm: '97px' },
              padding: { xs: '6px', sm: '8px 12px' },
              backgroundColor: '#204464',
              border: '1px solid #204464',
              color: '#FFFFFF',
              fontSize: '14px',
              lineHeight: '20px',
              textTransform: 'none',
              '& .MuiButton-endIcon': {
                margin: { xs: 0, sm: '-4px -4px -4px 8px' },
              },
              '& .MuiButton-endIcon > *:nth-of-type(1)': {
                fontSize: { xs: '20px', sm: '24px' },
              },
              '&:hover': {
                backgroundColor: '#1a3850',
                border: '1px solid #1a3850',
              }
            }}
          >
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>Filters</Box>
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

      <CustomTable
        columns={[
          { id: 'name', label: 'Name', width: '180px' },
          { id: 'email', label: 'Email', width: '220px' },
          { id: 'subscriptionStatus', label: 'Subscription Status', width: '200px' },
          { id: 'dateRegistered', label: 'Date Registered', width: '140px' },
          { id: 'lastLogin', label: 'Last Login', width: '140px' },
          { id: 'role', label: 'Roles', width: '120px' },
          { id: 'actions', label: '', width: '120px' },
        ]}
        data={users}
        renderCell={renderCell}
        currentUserId={CURRENT_USER_ID}
      />

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