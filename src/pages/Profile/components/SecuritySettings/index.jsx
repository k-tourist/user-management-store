import { useState } from 'react';
import 'react-phone-input-2/lib/material.css';
import PhoneInput from 'react-phone-input-2';
import { Box, Typography, Switch, IconButton, Menu, MenuItem, useMediaQuery, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { EmailIcon, GuardIcon, MarkIcon, MoreVerticalIcon } from '../../../../components/Icons';
import { EditAppVerificationModal } from '../modals/EditAppVerificationModal';
import { EditEmailVerificationModal } from '../modals/EditEmailVerificationModal';
import { EditPhoneVerificationModal } from '../modals/EditPhoneVerificationModal';
import { DeleteConfirmationModal } from '../modals/DeleteConfirmationModal';
import { AddPasswordModal } from '../modals/AddPasswordModal';
import { SelectAddVerificationMethodModal } from '../modals/SelectAddVerificationMethodModal';
import CustomAuthList from '../CustomAuthList';
import { styles } from './styles';

const apps = [
  {
    id: 1,
    app: 'Android App',
    label: 'Work',
    default: true,
  },
  {
    id: 2,
    app: 'Iphone App',
    label: 'Personal',
    default: false,
  },
]

const emails = [
  {
    id: 1,
    email: 'test@test.com',
    label: 'Work',
    default: false
  },
  {
    id: 2,
    email: 'test2@test.com',
    label: 'Personal',
    default: true
  },
  {
    id: 3,
    email: 'test3@test.com',
    label: 'Other',
    default: false

  }
];

const phones = [
  {
    id: 1,
    phone: '1234567890',
    label: 'Work',
    deliveryMethod: 'text',
    default: true

  },
  {
    id: 2,
    phone: '447911123456',
    label: 'Personal',
    default: false,
    deliveryMethod: 'call'
  },


  {
    id: 3,
    phone: '1234567890',
    label: 'Other',
    default: false,
    deliveryMethod: 'call'
  }
];

const SecuritySettings = () => {
  const [mfaEnabled, setMfaEnabled] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedItemType, setSelectedItemType] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const isPhone = useMediaQuery('(max-width: 724px)');
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [showAddPasswordModal, setShowAddPasswordModal] = useState(false);

  const isNew = true;

  const handleCloseVerificationMethod = () => {
    setSelectedMethod(null);
  }

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSelectAddVerificationMethod = (method) => {
    setSelectedMethod(method);
  }

  const handleMenuOpen = (event, id, type, item) => {
    setAnchorEl(event.currentTarget);
    setSelectedItemType(type);
    setSelectedItem(item);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleEditClick = () => {
    setEditModalOpen(true);
    setAnchorEl(null);
  };

  const handleModalClose = () => {
    setEditModalOpen(false);
    setSelectedItemType(null);
    setSelectedItem(null);
  };

  const handleDeleteClick = () => {
    setDeleteModalOpen(true);
    setAnchorEl(null);
  };

  const handleDeleteModalClose = () => {
    setDeleteModalOpen(false);
    setSelectedItemType(null);
    setSelectedItem(null);
  };

  return (
    <>
      <Box sx={styles.container}>
        <Box sx={styles.mfaHeaderContainer}>
          <Typography sx={styles.mfaTitle}>
            Password
          </Typography>
          <Box sx={styles.rightSection}>
            <Button
              variant="outlined"
              sx={styles.addButton}
              onClick={() => setShowAddPasswordModal(true)}
            >
              {isNew ? 'Create Password' : 'Change Password'}
            </Button>
          </Box>
        </Box>
        <Box sx={styles.mfaDescription}>
          Secure your account by setting up or updating your password. If you don’t have a password, create one after verifying your email.
        </Box>
      </Box>
      <Box sx={styles.container}>
        <Box sx={styles.mfaHeaderContainer}>
          <Typography sx={styles.mfaTitle}>
            Multi-Factor Authentication
          </Typography>
          <Box sx={styles.rightSection}>
            <Switch
              checked={mfaEnabled}
              onChange={(e) => setMfaEnabled(e.target.checked)}
              sx={styles.switch}
            />

            <Button
              variant="outlined"
              startIcon={<AddIcon />}
              sx={styles.addButton}
              onClick={handleOpenDialog}
            >
              Add
            </Button>
          </Box>
        </Box>
        <Box sx={styles.mfaDescription}>
          Enhance your account security by enabling multi-factor authentication (MFA). Use an authenticator app, email, or phone verification for additional protection.
        </Box>

        <Box sx={styles.authListContainer}>
          <CustomAuthList
            type="app"
            title="Authenticator App Codes"
            description="Verify one-time codes generated in your preferred third-party authenticator app."
            openDialog={selectedMethod === 'app'}
            handleCloseDialog={handleCloseVerificationMethod}
          />

          <Box sx={styles.appListContainer}>
            {apps.map((app) => (
              <Box key={app.id} sx={styles.appRow}>
                <Box sx={styles.appInfo}>
                  <GuardIcon />
                  <Box sx={styles.appTextContainer}>
                    <MarkIcon />
                    <Typography sx={styles.appName}>{app.app}</Typography>
                  </Box>
                </Box>

                <IconButton
                  sx={styles.moreButton}
                  onClick={(e) => handleMenuOpen(e, app.id, 'app', app)}
                >
                  <MoreVerticalIcon />
                </IconButton>
              </Box>
            ))}
          </Box>

          <Box sx={styles.divider} />

          <CustomAuthList
            type="email"
            title="Email Verification"
            description="Verify one-time codes sent to your registered email address."
            openDialog={selectedMethod === 'email'}
            handleCloseDialog={handleCloseVerificationMethod}
          />
          {emails.map((email) => (
            <Box key={email.id} sx={styles.emailRow}>
              <Box sx={styles.emailInfo}>
                <EmailIcon />
                <Typography sx={styles.emailName}>{email.email}</Typography>
                {email.default && <Box sx={styles.appTextContainer}>
                  <MarkIcon />
                  <Typography sx={styles.appName}>Home Email</Typography>
                </Box>}
              </Box>
              <IconButton
                sx={styles.moreButton}
                onClick={(e) => handleMenuOpen(e, email.id, 'email', email)}
              >
                <MoreVerticalIcon />
              </IconButton>
            </Box>
          ))}
          <Box sx={styles.divider} />

          <CustomAuthList
            type="phone"
            title="Phone Verification"
            description="Verify one-time codes sent to your mobile number."
            openDialog={selectedMethod === 'phone'}
            handleCloseDialog={handleCloseVerificationMethod}
          />
          {phones.map((phone) => (
            <Box key={phone.id} sx={styles.emailRow}>
              <Box sx={styles.emailInfo}>
                <Box sx={styles.phoneFlag}>
                  <PhoneInput
                    country={'uk'}
                    value={phone.phone}
                    disabled
                    enableSearch={false}
                    containerStyle={styles.flagContainer}
                    inputStyle={styles.flagInput}
                    buttonStyle={styles.flagButton}
                    disableDropdown
                    placeholder=""
                    specialLabel=""
                    preferredCountries={['us']}
                  />
                </Box>
                {phone.default && <Box sx={styles.appTextContainer}>
                  <MarkIcon />
                  <Typography sx={styles.appName}>{isPhone ? 'official' : 'Official Number'}</Typography>
                </Box>}
                {phone.default &&
                  <Typography sx={styles.defaultTextStyle}>Default</Typography>}
              </Box>
              <IconButton
                sx={styles.moreButton}
                onClick={(e) => handleMenuOpen(e, phone.id, 'phone', phone)}
              >
                <MoreVerticalIcon />
              </IconButton>
            </Box>
          ))}
        </Box>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          PaperProps={{
            sx: styles.menuPaper
          }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={handleMenuClose} sx={styles.menuItem}>
            Make Default
          </MenuItem>
          <MenuItem onClick={handleEditClick} sx={styles.menuItem}>
            Edit
          </MenuItem>
          <MenuItem onClick={handleDeleteClick} sx={styles.menuItem}>
            Delete
          </MenuItem>
        </Menu>

        <EditAppVerificationModal
          open={editModalOpen && selectedItemType === 'app'}
          onClose={handleModalClose}
          app={selectedItem}
        />

        <EditEmailVerificationModal
          open={editModalOpen && selectedItemType === 'email'}
          onClose={handleModalClose}
          email={selectedItem}
        />

        <EditPhoneVerificationModal
          open={editModalOpen && selectedItemType === 'phone'}
          onClose={handleModalClose}
          phone={selectedItem}
        />

        <DeleteConfirmationModal
          open={deleteModalOpen}
          onClose={handleDeleteModalClose}
        />

        <SelectAddVerificationMethodModal
          open={openDialog}
          onClose={handleCloseDialog}
          onClickNext={handleSelectAddVerificationMethod}
        />
        <AddPasswordModal open={showAddPasswordModal} onClose={() => setShowAddPasswordModal(false)} isNew={isNew} />
      </Box>
    </>
  );
};

export default SecuritySettings;