import { Box, Typography, Tabs, Tab, Pagination, PaginationItem } from '@mui/material';
import { useState } from 'react';
import { styles } from './styles';
import { AllCheckMailList } from './components/AllCheckMailList';
import { ProcessingBatchList } from './components/ProcessingBatchList';
import { MailedCheckList } from './components/MailedCheckList';

const MailManagement = () => {
  const [page, setPage] = useState(1);
  const [currentTab, setCurrentTab] = useState("all");

  const handleTabChange = (event, newTab) => {
    setCurrentTab(newTab);
  };

  return (
    <Box sx={styles.wrapper}>
      <Typography sx={styles.title}>Admin Mailing Management</Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        sx={styles.description}
      >
        Manage and process check mailing requests efficiently. View pending,
        processing, and mailed checks, batch print requests, and track mailing
        status in one place.
      </Typography>

      <Box sx={styles.tabContainer}>
        <Tabs value={currentTab} onChange={handleTabChange} sx={styles.tabs}>
          <Tab value="all" label="All" className="tab-all" />
          <Tab value="submitted" label="Submitted" className="tab-submitted" />
          <Tab
            value="processing"
            label="Processing"
            className="tab-processing"
          />
          <Tab value="mailed" label="Mailed" className="tab-mailed" />
          <Tab value="cancelled" label="Cancelled" className="tab-cancelled" />
        </Tabs>
      </Box>

      {currentTab === "all" && <AllCheckMailList search={"all"} />}
      {currentTab === "submitted" && <AllCheckMailList search={"submitted"} />}
      {currentTab === "processing" && <ProcessingBatchList />}
      {currentTab === "mailed" && <MailedCheckList />}
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
    </Box>
  );
};

export default MailManagement;
