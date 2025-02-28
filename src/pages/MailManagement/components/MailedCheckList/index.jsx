import { useState } from "react";
import { CustomTable } from "../../../../components/table/CustomTable";
import { Box } from "@mui/material";
import { CustomButton } from "../../../../components/buttons/CustomButton";
import { styles } from "./styles.js";
import { FilterIcon } from "../../../../components/Icons";

const mockChecks = [
  {
    id: 1,
    no: 1,
    payeeName: "Abraham Sabel",
    account: "JohnDoe123",
    org: "ABC Corp",
    issuedDate: "2/12/2025",
    batchNo: "B001",
    mailedDate: "2/12/2025",
  },
  {
    id: 2,
    no: 2,
    payeeName: "Abraham Sabel",
    account: "JohnDoe123",
    org: "ABC Corp",
    issuedDate: "2/12/2025",
    batchNo: "B002",
    mailedDate: "2/12/2025",
  },
  {
    id: 3,
    no: 3,
    payeeName: "Abraham Sabel",
    account: "JohnDoe123",
    org: "-",
    issuedDate: "2/12/2025",
    batchNo: "B003",
    mailedDate: "2/12/2025",
  },
  {
    id: 4,
    no: 4,
    payeeName: "Abraham Sabel",
    account: "JohnDoe123",
    org: "-",
    issuedDate: "2/12/2025",
    batchNo: "B001",
    mailedDate: "2/12/2025",
  },
  {
    id: 5,
    no: 5,
    payeeName: "Abraham Sabel",
    account: "JohnDoe123",
    org: "XYZ Inc",
    issuedDate: "2/12/2025",
    batchNo: "B001",
    mailedDate: "2/12/2025",
  },
];

export const MailedCheckList = () => {
  const [checks, setChecks] = useState(mockChecks);

  return (
    <>
      <Box sx={styles.actionContainer}>
        <Box sx={styles.actionButtons}>
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
        columns={[
          { id: "selected", label: "", width: "40px" },
          { id: "no", label: "Check No.", width: "40px" },
          { id: "payeeName", label: "Payee Name", width: "220px" },
          { id: "account", label: "User Account", width: "140px" },
          { id: "org", label: "Organization", width: "200px" },
          { id: "issuedDate", label: "Issued Date", width: "140px" },
          { id: "mailedDate", label: "Mailed Date", width: "140px" },
          { id: "batchNo", label: "Batch No.", width: "120px" },
        ]}
        data={checks}
        isCenteredCells={true}
      />
    </>
  );
};
