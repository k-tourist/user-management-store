import {
  Box,
  Typography,
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
  Popover,
} from '@mui/material';
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { setShowAlert } from '../../redux/slices/alertSlice';
import SearchIcon from '@mui/icons-material/Search';
import { CustomTable } from '../../components/table/CustomTable';
import { CustomButton } from '../../components/buttons/CustomButton';
import { CustomSelect } from '../../components/inputs/CustomSelect';
import { styles } from './styles';

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
    role: 'Super Admin',
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
    <Box sx={styles.wrapper}>
      <Typography sx={styles.title}>
        User Management
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        sx={styles.description}
      >
        Manage roles, subscriptions and access with ease. Track logins, assign roles and securely impersonate users for support.
      </Typography>

      <Box sx={styles.actionContainer}>
        <TextField
          placeholder="Search"
          sx={styles.searchField}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={styles.searchIconContainer}>
                <SearchIcon sx={styles.searchIcon} />
              </InputAdornment>
            ),
          }}
        />

        <Box sx={styles.actionButtons}>
          <CustomSelect
            value="recent"
            options={[
              { value: 'recent', label: 'Recent' },
              { value: 'name', label: 'Name' },
              { value: 'email', label: 'Email' }
            ]}
          />

          <CustomButton
            variant="outlined"
            endIcon={<FilterIcon />}
            onClick={handleFilterClick}
            color="primary"
            sx={{
              minWidth: { xs: '40px', sm: '97px' },
              padding: { xs: 0, sm: '8px 12px' },
              '& .MuiButton-endIcon': {
                margin: { xs: 0, sm: '-4px -4px -4px 8px' },
                justifyContent: { xs: 'center', sm: 'flex-start' }
              }
            }}
          >
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>Filters</Box>
          </CustomButton>

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
              sx: styles.popoverPaper
            }}
          >
            <Box sx={styles.filterHeader}>
              <Typography sx={styles.filterTitle}>
                Filters
              </Typography>
              <IconButton
                onClick={handleFilterClose}
                sx={styles.closeButton}
              >
                <CloseIcon sx={{ fontSize: '20px' }} />
              </IconButton>
            </Box>

            <Box sx={styles.filterContent}>
              <Box
                onClick={() => setShowFilterOptions(!showFilterOptions)}
                sx={styles.filterOption}
              >
                <Typography sx={styles.filterOptionText}>
                  {selectedFilter === 'active' ? 'Active' :
                    selectedFilter === 'no_subscription' ? 'No Subscription' :
                      selectedFilter === 'trial_expiring' ? 'Trial Expiring' :
                        'Cancelling'}
                </Typography>
                <KeyboardArrowDownIcon
                  sx={{
                    ...styles.filterArrow,
                    transform: showFilterOptions ? 'rotate(180deg)' : 'none'
                  }}
                />
              </Box>

              {showFilterOptions && (
                <Box sx={styles.filterOptionsContainer}>
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
                        ...styles.filterOptionItem,
                        color: selectedFilter === option.value ? '#9CA3AF' : '#111827'
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

      <Box sx={styles.paginationContainer}>
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
              sx={styles.paginationItem}
            />
          )}
          sx={styles.pagination}
        />
      </Box>

      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        PaperProps={{
          sx: styles.dialog
        }}
      >
        <Box sx={styles.dialogHeader}>
          <DialogTitle sx={styles.dialogTitle}>
            Confirm Role Change
          </DialogTitle>
          <IconButton
            onClick={() => setOpenDialog(false)}
            sx={styles.dialogCloseButton}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <DialogContent sx={{ p: 0 }}>
          <Typography sx={styles.dialogContent}>
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
        <DialogActions sx={styles.dialogActions}>
          <Button
            onClick={handleCancelRoleChange}
            variant="outlined"
            sx={styles.cancelButton}
          >
            Cancel
          </Button>
          <Button
            onClick={handleConfirmRoleChange}
            variant="contained"
            sx={styles.confirmButton}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default UserManagement;