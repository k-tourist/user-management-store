import {
  Box,
  Typography,
  Button,
  Checkbox,
  useTheme,
  IconButton,
  Tab,
  Tabs,
} from "@mui/material";
import { useEffect, useState } from "react";
import { CustomDialog } from "../../../../../components/dialog/CustomDialog";
import { styles } from "./styles";

import { CustomTable } from "../../../../../components/table/CustomTable";
import { CustomButton } from "../../../../../components/buttons/CustomButton";
import {
  DownloadAsFdfIcon,
  MailboxIcon,
} from "../../../../../components/Icons";

const mockChecks = [
  {
    id: 1,
    no: 1,
    payeeName: "Abraham Sabel",
    account: "JohnDoe123",
    org: "ABC Corp",
    issuedDate: "2/12/2025",
    status: "Processing",
    amount: "$1.45",
  },
  {
    id: 2,
    no: 2,
    payeeName: "Abraham Sabel",
    account: "JohnDoe123",
    org: "ABC Corp",
    issuedDate: "2/12/2025",
    status: "Submitted",
    amount: "$1.45",
  },
  {
    id: 3,
    no: 3,
    payeeName: "Abraham Sabel",
    account: "JohnDoe123",
    org: "-",
    issuedDate: "2/12/2025",
    status: "Mailed",
    amount: "$1.45",
  },
  {
    id: 4,
    no: 4,
    payeeName: "Abraham Sabel",
    account: "JohnDoe123",
    org: "-",
    issuedDate: "2/12/2025",
    status: "Processing",
    amount: "$1.45",
  },
  {
    id: 5,
    no: 5,
    payeeName: "Abraham Sabel",
    account: "JohnDoe123",
    org: "XYZ Inc",
    issuedDate: "2/12/2025",
    status: "Mailed",
    amount: "$1.45",
  },
];

export const BatchDetailDialog = ({ open, onClose, batch }) => {
  const theme = useTheme();
  const [checks, setChecks] = useState(mockChecks);
  const [selectedChecks, setSelectedChecks] = useState([]);
  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const [currentTab, setCurrentTab] = useState("all");
  const [step, setStep] = useState(0);

  const handleTabChange = (event, newTab) => {
    setCurrentTab(newTab);
  };

  const handleSelectAll = (event) => {
    const checked = event.target.checked;
    setIsCheckedAll(checked);

    if (checked) {
      setSelectedChecks(checks);
    } else {
      setSelectedChecks([]);
    }
  };

  const handleSelectCheck = (checkId) => {
    setSelectedChecks((prev) => {
      const check = checks.find((c) => c.id === checkId);
      const isSelected = prev.some(
        (selectedCheck) => selectedCheck.id === checkId
      );

      if (isSelected) {
        return prev.filter((selectedCheck) => selectedCheck.id !== checkId);
      } else {
        return [...prev, check];
      }
    });
  };

  useEffect(() => {
    if (checks.length > 0) {
      setIsCheckedAll(selectedChecks.length === checks.length);
    }
  }, [selectedChecks, checks.length]);

  const getStatusColor = (status) => {
    switch (status) {
      case "Processing":
        return "#EF6C00";
      case "Submitted":
        return "#058205";
      case "Mailed":
        return "#204464";
      default:
        return theme.palette.text.primary;
    }
  };

  const renderHeaderCell = (column) => {
    switch (column.id) {
      case "selected":
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
  };

  const renderCell = (row, column) => {
    switch (column.id) {
      case "selected":
        return (
          <Checkbox
            checked={selectedChecks.some((check) => check.id === row.id)}
            onChange={() => handleSelectCheck(row.id)}
            sx={styles.checkbox}
          />
        );
      case "status":
        return (
          <CustomButton
            size="small"
            sx={{
              width: "80px",
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
      case "action":
        return (
          <Box sx={{ display: "flex" }}>
            <IconButton>
              <DownloadAsFdfIcon width="16px" />
            </IconButton>
            <IconButton>
              <MailboxIcon width="20px" />
            </IconButton>
          </Box>
        );
      default:
        return row[column.id];
    }
  };

  const handleNext = () => {
    if (step) {
      onClose();
    } else {
      setStep(1);
    }
  };

  return (
    <CustomDialog
      open={open}
      onClose={onClose}
      title={`Batch Detail - ${batch?.no}`}
      content={
        <Box sx={styles.content}>
          <Box sx={styles.section}>
            <Typography sx={styles.description}>
              {!step
                ? "Review and manage check statuses. Mark checks as mailed, download individual or batch PDFs, and track processing progress."
                : "Are you sure you want to mark this check as mailed? This action will charge the user."}
            </Typography>
          </Box>
          {!step && (
            <Box sx={styles.section}>
              <Typography sx={styles.checksCount}>
                Created By: {batch?.createdBy}
              </Typography>
              <Typography sx={styles.checksCount}>
                Batch Created On: {batch?.createdDate}
              </Typography>
              <Typography sx={styles.checksCount}>
                Number of Checks: {batch?.total}
              </Typography>
            </Box>
          )}
          {!step && (
            <Box sx={styles.section}>
              <Box sx={styles.tabContainer}>
                <Tabs
                  value={currentTab}
                  onChange={handleTabChange}
                  sx={styles.tabs}
                >
                  <Tab value="all" label="All" className="tab-all" />
                  <Tab
                    value="processing"
                    label="Processing"
                    className="tab-processing"
                  />
                  <Tab value="mailed" label="Mailed" className="tab-mailed" />
                </Tabs>
              </Box>
              <Box sx={styles.actionContainer}>
                <Box sx={styles.actionButtons}>
                  <CustomButton
                    variant="outlined"
                    startIcon={<DownloadAsFdfIcon />}
                    disabled={
                      selectedChecks.length === 0
                      // || selectedChecks.some((c) => c.status !== "Submitted")
                    }
                    sx={styles.actionButton}
                  >
                    <Box>Batch PDF Download</Box>
                  </CustomButton>
                  <CustomButton
                    variant="outlined"
                    startIcon={<DownloadAsFdfIcon />}
                    disabled={
                      selectedChecks.length === 0
                      // || selectedChecks.some((c) => c.status !== "Submitted")
                    }
                    sx={styles.actionButton}
                    // onClick={handleMailClick}
                  >
                    <Box>Download PDF</Box>
                  </CustomButton>
                  <CustomButton
                    variant="outlined"
                    startIcon={<MailboxIcon />}
                    disabled={
                      selectedChecks.length === 0
                      // || selectedChecks.some((c) => c.status !== "Submitted")
                    }
                    sx={styles.actionButton}
                    // onClick={handleMailClick}
                  >
                    <Box>Mark as Mailed</Box>
                  </CustomButton>
                </Box>
              </Box>
              <CustomTable
                columns={[
                  { id: "selected", label: "selected", width: "20px" },
                  { id: "no", label: "Check No.", width: "30px" },
                  { id: "payeeName", label: "Payee Name", width: "80px" },
                  {
                    id: "account",
                    label: "User Account",
                    width: "80px",
                  },
                  { id: "issuedDate", label: "Issued Date", width: "60px" },
                  { id: "status", label: "Status", width: "80px" },
                  { id: "action", label: "Action", width: "80px" },
                ]}
                data={checks.filter(
                  (c) =>
                    currentTab === "all" ||
                    c.status.toLowerCase() === currentTab
                )}
                isCenteredCells={true}
                renderCell={renderCell}
                renderHeaderCell={renderHeaderCell}
              />
            </Box>
          )}
        </Box>
      }
      actions={
        <>
          <Button onClick={onClose} sx={styles.cancelButton}>
            Cancel
          </Button>
          <Button onClick={handleNext} sx={styles.nextButton}>
            {!step ? "Done" : "Confirm"}
          </Button>
        </>
      }
    />
  );
};
