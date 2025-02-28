import {
  Box,
  Typography,
  useTheme,
  TextField,
  InputAdornment,
  Pagination,
  PaginationItem,
  Tooltip,
  Checkbox,
} from "@mui/material";
import { useState, useEffect } from "react";
import { CustomTable } from "../../components/table/CustomTable";
import { CustomButton } from "../../components/buttons/CustomButton";
//Mui-icons
import SearchIcon from "@mui/icons-material/Search";
//CustomIcons
import { MailboxIcon } from "../../components/Icons";
import { styles } from "./styles";
import { CancelMailModal } from "./components/modals/CancelMailModal";

const mockChecks = [
  {
    id: 1,
    no: 1,
    payeeName: "Abraham Sabel",
    amount: "$1.59",
    issuedDate: "2/12/2025",
    accountNickname: "Testing101",
    Tags: "",
    status: "Submitted",
  },
  {
    id: 2,
    no: 2,
    payeeName: "Abraham Sabel",
    amount: "$1.59",
    issuedDate: "2/12/2025",
    accountNickname: "Testing101",
    Tags: "",
    status: "Processing",
  },
  {
    id: 3,
    no: 3,
    payeeName: "Abraham Sabel",
    amount: "$1.59",
    issuedDate: "2/12/2025",
    accountNickname: "Testing101",
    Tags: "",
    status: "Mailed",
  },
  {
    id: 4,
    no: 4,
    payeeName: "Abraham Sabel",
    amount: "$1.59",
    issuedDate: "2/12/2025",
    accountNickname: "Testing101",
    Tags: "",
    status: "Submitted",
  },
  {
    id: 5,
    no: 5,
    payeeName: "Abraham Sabel",
    amount: "$1.59",
    issuedDate: "2/12/2025",
    accountNickname: "Testing101",
    Tags: "",
    status: "Mailed",
  },
];

const AllMails = () => {
  const theme = useTheme();
  const [openDialog, setOpenDialog] = useState(false);
  const [page, setPage] = useState(1);
  const [checks, setChecks] = useState(mockChecks);
  const [selectedChecks, setSelectedChecks] = useState([]);
  const [isCheckedAll, setIsCheckedAll] = useState(false);

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

  const handleMailClick = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleConfirmCancelMail = (checks) => {
    console.log("final checks for mail ==>", checks);
  };

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

  return (
    <Box sx={styles.wrapper}>
      <Typography sx={styles.title}>All Mails</Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        sx={styles.description}
      >
        Below is the list of all mails.
      </Typography>

      <Box sx={styles.actionContainer}>
        <TextField
          placeholder="Search"
          sx={{ ...styles.searchField }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={styles.searchIconContainer}>
                <SearchIcon sx={styles.searchIcon} />
              </InputAdornment>
            ),
          }}
        />
        <Tooltip
          title={
            selectedChecks.some((c) => c.status !== "Submitted")
              ? "One of selected checks are mailed or in processing so they can't be canceled."
              : ""
          }
          placement="bottom"
          arrow
          componentsProps={{
            tooltip: {
              sx: {
                bgcolor: "#181D27",
                width: "150px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
                lineHeight: "16px",
                padding: "12px 8px",
                textAlign: "center",
                "& .MuiTooltip-arrow": {
                  color: "#181D27",
                },
              },
            },
          }}
        >
          <Box sx={styles.actionButtons}>
            <CustomButton
              variant="outlined"
              startIcon={<MailboxIcon />}
              disabled={
                selectedChecks.length === 0 ||
                selectedChecks.some((c) => c.status !== "Submitted")
              }
              sx={styles.actionCancelButton}
              onClick={handleMailClick}
            >
              <Box>Cancel Mail</Box>
            </CustomButton>
          </Box>
        </Tooltip>
      </Box>

      <CustomTable
        columns={[
          { id: "selected", label: "", width: "40px" },
          { id: "no", label: "Check No.", width: "180px" },
          { id: "payeeName", label: "Payee Name", width: "220px" },
          { id: "amount", label: "Amount", width: "200px" },
          { id: "issuedDate", label: "Issued Date", width: "140px" },
          { id: "accountNickname", label: "Account Nickname", width: "140px" },
          { id: "tags", label: "Tags", width: "120px" },
          { id: "status", label: "Status", width: "120px" },
        ]}
        data={checks}
        renderCell={renderCell}
        renderHeaderCell={renderHeaderCell}
        isCenteredCells={true}
      />

      <Box sx={styles.paginationContainer}>
        <Pagination
          count={10}
          page={page}
          onChange={(event, value) => setPage(value)}
          renderItem={(item) => (
            <PaginationItem
              slots={{
                previous: () => "Previous",
                next: () => "Next",
              }}
              {...item}
              sx={styles.paginationItem}
            />
          )}
          sx={styles.pagination}
        />
      </Box>
      <CancelMailModal
        open={openDialog}
        onClose={handleCloseDialog}
        onConfirm={handleConfirmCancelMail}
        checks={selectedChecks}
      />
    </Box>
  );
};

export default AllMails;
