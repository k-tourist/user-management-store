import { Box, Typography, Button, TextField, Step, Checkbox, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import { CustomDialog } from '../../../../../components/dialog/CustomDialog';
import { styles } from './styles';

import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { CustomTable } from '../../../../../components/table/CustomTable';
import { CustomButton } from '../../../../../components/buttons/CustomButton';

export const SendMailModal = ({ open, onClose, checks, onConfirm }) => {
  const theme = useTheme();
  const [step, setStep] = useState(0);
  const [isCheckedAll, setIsCheckedAll] = useState(true);
  const [selectedChecks, setSelectedChecks] = useState(checks);
  const [totalChecks, setTotalChecks] = useState([]);
  // const alreadyMailedChecks = checks.map((c) => c.status === 'Mailed');

  const handleSelectAll = (event) => {
    const checked = event.target.checked;
    setIsCheckedAll(checked);

    if (checked) {
      // Select all check objects
      setSelectedChecks(totalChecks);
    } else {
      // Deselect all checks
      setSelectedChecks([]);
    }
  };

  const handleSelectCheck = (checkId) => {
    if (!totalChecks) return;
    setSelectedChecks(prev => {
      // Find the check object
      const check = totalChecks.find(c => c.id === checkId);
      // Check if the item is already selected
      const isSelected = prev.some(selectedCheck => selectedCheck.id === checkId);

      if (isSelected) {
        // Remove the item if already selected
        return prev.filter(selectedCheck => selectedCheck.id !== checkId);
      } else {
        // Add the check object if not selected
        return [...prev, check];
      }
    });
  };

  useEffect(() => {
    if (!totalChecks) return;
    // Only update if we have checks to compare against
    console.log('a==>', selectedChecks, checks, isCheckedAll, totalChecks);
    if (checks.length > 0) {
      setIsCheckedAll(selectedChecks.length === totalChecks.length);
    }
  }, [selectedChecks, totalChecks]);

  useEffect(() => {
    console.log('checks==>', checks);
    if (checks && checks.filter(c => c.status === 'Mailed').length === 0) {
      setTotalChecks(checks);
      setStep(1);
    } else {
      setTotalChecks(checks.filter(c => c.status === 'Mailed'));
      setStep(0);
    }
  }, [checks]);

  useEffect(() => {
    if (open) {
      setSelectedChecks(totalChecks);
    }
  }, [open]);

  const handleNext = () => {
    // Handle save logic here
    if (step === 0) { 
      setStep(1);
      console.log('sel==>', selectedChecks);
      const newTotalChecks = checks.filter(c => c.status !== 'Mailed' || selectedChecks.find(s => s.id === c.id));
      console.log('new==>', newTotalChecks);
      setTotalChecks(newTotalChecks);
      setIsCheckedAll(true);
      setSelectedChecks(newTotalChecks);
    }
    else {
      onConfirm(selectedChecks);
      onClose();
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Mailed':
        return '#B31F0D';
      case 'Submitted':
        return '#058205';
      case 'Printed':
        return '#204464';
      default:
        return theme.palette.text.primary;
    }
  };

  const renderHeaderCell = (column) => {
    switch (column.id) {
      case 'selected':
        return (
          <Checkbox
            checked={isCheckedAll}
            onChange={handleSelectAll}
            sx={styles.checkbox}
          />
        );
      default:
        return column.label;
    }
  }

  const renderCell = (row, column) => {
    switch (column.id) {
      case 'selected':
        return (
          <Checkbox
            checked={selectedChecks.some(check => check.id === row.id)}
            onChange={() => handleSelectCheck(row.id)}
            sx={styles.checkbox}
          />
        )
      case 'status':
        return (
          <CustomButton
            size="small"
            sx={{
              width: '100px',
              color: getStatusColor(row.status),
              backgroundColor: `${getStatusColor(row.status)}0D`,
              border: `1px solid ${getStatusColor(row.status)}`,
              '&:hover': {
                backgroundColor: `${getStatusColor(row.status)}1A`,
                border: `1px solid ${getStatusColor(row.status)}`
              }
            }}
          >
            {row.status}
          </CustomButton>
        );
      default:
        return row[column.id];
    }
  };

  return (
    <CustomDialog
      open={open}
      onClose={onClose}
      title={!step ? 'Check Already Mailed' : 'Confirm Check Mailing'}
      modalIcon={!step ? <WarningRoundedIcon fontSize='36px' color='warning' /> : <CheckCircleRoundedIcon fontSize='36px' color='success' />}
      content={
        <Box sx={styles.content}>
          <Box sx={styles.section}>
            <Typography sx={styles.description}>
              {!step ? 'This selected check was previously mailed. Mailing it again may result in duplicate charges.' : `You have selected ${checks.length} checks for mailing.`}
            </Typography>
            <CustomTable
              columns={!step ? [
                { id: 'selected', label: '', width: '40px' },
                { id: 'no', label: 'Check No.', width: '60px' },
                { id: 'payeeName', label: 'Payee Name', width: '120px' },
                { id: 'mailedDate', label: 'Mailed Date', width: '100px' },
                { id: 'status', label: 'Status', width: '70px' },
                { id: 'amount', label: 'Amount', width: '60px' },
              ] : [
                { id: 'selected', label: '', width: '40px' },
                { id: 'no', label: 'Check No.', width: '60px' },
                { id: 'payeeName', label: 'Payee Name', width: '120px' },
                { id: 'issuedDate', label: 'Issued Date', width: '100px' },
                { id: 'amount', label: 'Amount', width: '60px' }]
              }
              data={totalChecks}
              renderCell={renderCell}
              renderHeaderCell={renderHeaderCell}
              isCenteredCells={true}
            />
          </Box>
        </Box>
      }
      actions={
        <>
          <Button onClick={onClose} sx={styles.cancelButton}>
            Cancel
          </Button>
          <Button onClick={handleNext} sx={styles.nextButton}>
            {step ? 'Confirm' : 'Continue'}
          </Button>
        </>
      }
    />
  );
}; 