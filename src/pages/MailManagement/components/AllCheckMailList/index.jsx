import { useEffect, useState } from "react";
import { CustomTable } from "../../../../components/table/CustomTable";
import { Box, Checkbox, useTheme } from "@mui/material";
import { CustomButton } from "../../../../components/buttons/CustomButton";
import { styles } from "./styles.js";

import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import { FilterIcon } from "../../../../components/Icons";
import { BatchPrintModal } from "../modals/BatchPrintModal/index.jsx";

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
    status: "Cancelled",
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

export const AllCheckMailList = ({ search = "all" }) => {
  const theme = useTheme();
  const [checks, setChecks] = useState(mockChecks);
  const [selectedChecks, setSelectedChecks] = useState([]);
  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleConfirmPrint = (checks) => {
    console.log("final checks for mail ==>", checks);
  };

  useEffect(() => {
    if (checks.length > 0) {
      setIsCheckedAll(selectedChecks.length === checks.length);
    }
  }, [selectedChecks, checks.length]);

  const handleSelectAll = (event) => {
    const checked = event.target.checked;
    setIsCheckedAll(checked);

    if (checked) {
      setSelectedChecks(checks);
    } else {
      setSelectedChecks([]);
    }
  };

  const handleBatchPrintClick = () => {
    setOpenDialog(true);
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
              width: "200px",
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

  const getStatusColor = (status) => {
    switch (status) {
      case "Processing":
        return "#EF6C00";
      case "Submitted":
        return "#058205";
      case "Mailed":
        return "#204464";
      case "Cancelled":
        return "#F03D3E";
      default:
        return theme.palette.text.primary;
    }
  };

  const handleSelectCheck = (checkId) => {
    setSelectedChecks((prev) => {
      // Find the check object
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

  return (
    <>
      <Box sx={styles.actionContainer}>
        <Box sx={styles.actionButtons}>
          <CustomButton
            variant="outlined"
            startIcon={<LocalPrintshopOutlinedIcon />}
            disabled={
              selectedChecks.length === 0
              // || selectedChecks.some((c) => c.status !== "Submitted")
            }
            sx={styles.actionButton}
            onClick={handleBatchPrintClick}
          >
            <Box>Batch & Print All</Box>
          </CustomButton>
          <CustomButton
            variant="outlined"
            startIcon={<LocalPrintshopOutlinedIcon />}
            disabled={
              selectedChecks.length === 0
              // || selectedChecks.some((c) => c.status !== "Submitted")
            }
            sx={styles.actionButton}
            // onClick={handleMailClick}
          >
            <Box>Batch Print</Box>
          </CustomButton>
          <CustomButton
            variant="outlined"
            endIcon={<FilterIcon />}
            // onClick={handleFilterClick}
            color="primary"
            sx={styles.filterContainer}
          >
            <Box sx={{ display: { xs: "none", sm: "block" } }}>Filters</Box>
          </CustomButton>
        </Box>
      </Box>
      <CustomTable
        columns={
          search === "all"
            ? [
                { id: "selected", label: "", width: "40px" },
                { id: "no", label: "Check No.", width: "180px" },
                { id: "payeeName", label: "Payee Name", width: "220px" },
                { id: "account", label: "User Account", width: "140px" },
                { id: "org", label: "Organization", width: "200px" },
                { id: "issuedDate", label: "Issued Date", width: "140px" },
                { id: "status", label: "Status", width: "120px" },
              ]
            : [
                { id: "selected", label: "", width: "40px" },
                { id: "no", label: "Check No.", width: "180px" },
                { id: "payeeName", label: "Payee Name", width: "220px" },
                { id: "account", label: "User Account", width: "140px" },
                { id: "org", label: "Organization", width: "200px" },
                { id: "issuedDate", label: "Issued Date", width: "140px" },
              ]
        }
        data={checks}
        renderCell={renderCell}
        renderHeaderCell={renderHeaderCell}
        isCenteredCells={true}
      />

      <BatchPrintModal
        open={openDialog}
        onClose={handleCloseDialog}
        checks={selectedChecks}
        onConfirm={handleConfirmPrint}
      />
    </>
  );
};
