import { useState } from "react";
import { CustomTable } from "../../../../components/table/CustomTable";
import { Box, Typography } from "@mui/material";
import { CustomButton } from "../../../../components/buttons/CustomButton";
import { styles } from "./styles.js";

import { FilterIcon } from "../../../../components/Icons";
import { BatchDetailDialog } from "../modals/BatchDetailModal/index.jsx";

const mockBatches = [
  {
    id: 1,
    no: "B001",
    createdBy: "Admin01",
    createdDate: "2/12/2024",
    total: "12",
    processing: "10",
    mailed: "2",
  },
  {
    id: 2,
    no: "B002",
    createdBy: "Admin01",
    createdDate: "2/12/2024",
    total: "16",
    processing: "10",
    mailed: "6",
  },
  {
    id: 3,
    no: "B003",
    createdBy: "Admin02",
    createdDate: "2/12/2024",
    total: "14",
    processing: "12",
    mailed: "2",
  },
  {
    id: 4,
    no: "B004",
    createdBy: "Admin03",
    createdDate: "2/12/2024",
    total: "12",
    processing: "10",
    mailed: "2",
  },
];

export const ProcessingBatchList = () => {
  const [batches, setBatches] = useState(mockBatches);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedBatch, setSelectedBatch] = useState(null);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleBatchClick = (batch) => {
    setOpenDialog(true);
    setSelectedBatch(batch);
  };

  const renderCell = (row, column) => {
    return (
      <Typography sx={{ color: getStatusColor(column.id), fontSize: "12px" }}>
        {row[column.id]}
      </Typography>
    );
  };

  const renderHeaderCell = (column) => {
    return (
      <Typography
        sx={{
          color: getStatusColor(column.id),
          fontSize: "12px",
          fontWeight: "600",
        }}
      >
        {column.label}
      </Typography>
    );
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "processing":
        return "#EF6C00";
      case "total":
        return "#058205";
      case "mailed":
        return "#204464";
      default:
        return "#000000DE";
    }
  };

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
          { id: "no", label: "Batch No.", width: "180px" },
          { id: "createdBy", label: "Created By", width: "220px" },
          { id: "createdDate", label: "Created Date", width: "140px" },
          { id: "total", label: "Total Checks", width: "200px" },
          { id: "processing", label: "Processing", width: "140px" },
          { id: "mailed", label: "Mailed", width: "120px" },
        ]}
        data={batches}
        renderCell={renderCell}
        renderHeaderCell={renderHeaderCell}
        isCenteredCells={true}
        onClickRow={handleBatchClick}
      />
      <BatchDetailDialog
        open={openDialog}
        onClose={handleCloseDialog}
        batch={selectedBatch}
      />
    </>
  );
};
