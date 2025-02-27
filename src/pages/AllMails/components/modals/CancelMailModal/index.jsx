import {
  Box,
  Typography,
  Button,
  TextField,
  Step,
  Checkbox,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import { CustomDialog } from "../../../../../components/dialog/CustomDialog";
import { styles } from "./styles";

import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { CustomTable } from "../../../../../components/table/CustomTable";
import { CustomButton } from "../../../../../components/buttons/CustomButton";

export const CancelMailModal = ({ open, onClose, checks, onConfirm }) => {
  const theme = useTheme();

  const handleNext = () => {
    onClose();
    onConfirm(checks);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Mailed":
        return "#B31F0D";
      case "Submitted":
        return "#058205";
      case "Printed":
        return "#204464";
      default:
        return theme.palette.text.primary;
    }
  };

  const renderCell = (row, column) => {
    switch (column.id) {
      case "status":
        return (
          <CustomButton
            size="small"
            sx={{
              width: "100px",
              color: getStatusColor(row.status),
              backgroundColor: `${getStatusColor(row.status)}0D`,
              border: `1px solid ${getStatusColor(row.status)}`,
              "&:hover": {
                backgroundColor: `${getStatusColor(row.status)}1A`,
                border: `1px solid ${getStatusColor(row.status)}`,
              },
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
      title="Cancel Check Mailing"
      content={
        <Box sx={styles.content}>
          <Box sx={styles.section}>
            <Typography sx={styles.description}>
              Are you sure you want to cancel mailing for Check #11?
            </Typography>
            <CustomTable
              columns={[
                { id: "no", label: "Check No.", width: "60px" },
                { id: "payeeName", label: "Payee Name", width: "120px" },
                {
                  id: "mailedDate",
                  label: "Mailed Date",
                  width: "100px",
                },
                { id: "status", label: "Status", width: "120px" },
                { id: "amount", label: "Amount", width: "60px" },
              ]}
              data={checks}
              renderCell={renderCell}
              isCenteredCells={true}
            />
            <Typography sx={styles.description}>
              * This check is still in "Submitted" status and can be canceled
              without any charges. Once canceled, it will not be mailed, and no
              fees will be applied.
            </Typography>
          </Box>
        </Box>
      }
      actions={
        <>
          <Button onClick={onClose} sx={styles.cancelButton}>
            Cancel
          </Button>
          <Button onClick={handleNext} sx={styles.nextButton}>
            Confirm
          </Button>
        </>
      }
    />
  );
};
