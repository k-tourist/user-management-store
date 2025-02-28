import {
  Box,
  Typography,
  Button,
} from "@mui/material";
import { CustomDialog } from "../../../../../components/dialog/CustomDialog";
import { styles } from "./styles";

import { CustomTable } from "../../../../../components/table/CustomTable";

export const BatchPrintModal = ({ open, onClose, checks, onConfirm }) => {
  const handleNext = () => {
    onClose();
    onConfirm(checks);
  };

  return (
    <CustomDialog
      open={open}
      onClose={onClose}
      title="Batch Print Confirmation"
      content={
        <Box sx={styles.content}>
          <Box sx={styles.section}>
            <Typography sx={styles.description}>
              You are about to batch print selected checks. Please review the
              details before proceeding.
            </Typography>
            <Typography sx={styles.checksCount}>Number of Checks: {checks?.length}</Typography>
            <CustomTable
              columns={[
                { id: "no", label: "Check No.", width: "60px" },
                { id: "amount", label: "Check Amount", width: "100px" },
                { id: "payeeName", label: "Payee Name", width: "120px" },
                {
                  id: "account",
                  label: "User Account",
                  width: "120px",
                },
                { id: "issuedDate", label: "Issued Date", width: "60px" },
              ]}
              data={checks}
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
            Confirm
          </Button>
        </>
      }
    />
  );
};
