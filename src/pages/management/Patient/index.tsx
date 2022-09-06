import { Button, Paper, Typography } from "@mui/material";
import Table from "./table";

import { useTranslation } from "react-i18next";

const PatientManagement = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      {/* Header */}
      <Paper>
        <Typography variant="h1">Patients</Typography>
        <Typography>Breadcum</Typography>
        <Button>Add Patient</Button> 
      </Paper>

      <Table />
      {/* Table */}
    </>
  );
};

export default PatientManagement;
