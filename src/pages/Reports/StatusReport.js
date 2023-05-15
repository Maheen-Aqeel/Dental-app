import React from "react";
import "./statusReport.css";
import Form from "../../components/Form/FormReport";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { ListItem } from "@mui/material";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';



function StatusReport() {
    const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <>
      <section className="main">
        <a href="#" className="logo">
          <img alt="" src="images/logo.png" />
        </a>
        <div className="text">
          <h1>Dental Status Report</h1>
          <p>This dental analysis and assessment report has been prepared on the
            date stated for the patient's professional dental service provider.
            This report documents the state of patient's teeth at the time of
            the report's issuance and is an evidentiary record for the purpose
            of patient's dental insurance by and will be used for evidentiary
            and referential information for any future dental insurance claims
            by the insured patient. In case of any questions or required
            corrections in this, please contact the specialist mentioned in this
            report.
          </p>

        </div>
      </section>
      <section className="bg-form">
        <Form/>
        <section className="text-img">
            <h1>Evidentiary Xray</h1>
            <p>Evidentiary record for insurance purpose</p>
            <a href="#" className="image">
                <img alt="" src="images/image.png" />
            </a>
        </section>
        <section className="list">
            <p> Detections List</p>
            
            <Grid container spacing={2} columns={16}>
                <Grid xs={8}>
                <h1>1.Quadrant (tooth 11-18)</h1>
                    <ListItem>
                        <ToggleButtonGroup
                            color="primary"
                            value={alignment}
                            exclusive
                            onChange={handleChange}
                            aria-label="Platform"
                            >
                            <ToggleButton value="tooth">Tooth#</ToggleButton>
                            <ToggleButton value="detections">Detections</ToggleButton>
                        </ToggleButtonGroup>
                    </ListItem>
                </Grid>
                <Grid xs={8}>
                <h1>2.Quadrant (tooth 21-28)</h1>
                    <ListItem>
                        <ToggleButtonGroup
                            color="primary"
                            value={alignment}
                            exclusive
                            onChange={handleChange}
                            aria-label="Platform"
                            >
                            <ToggleButton value="tooth">Tooth#</ToggleButton>
                            <ToggleButton value="detections">Detections</ToggleButton>
                            </ToggleButtonGroup>
                    </ListItem>
                </Grid>
            </Grid>
            <Grid container spacing={2} columns={16}>
                <Grid xs={8}>
                <h1>3.Quadrant (tooth 41-48)</h1>
                    <ListItem>
                        <ToggleButtonGroup
                            color="primary"
                            value={alignment}
                            exclusive
                            onChange={handleChange}
                            aria-label="Platform"
                            >
                            <ToggleButton value="tooth">Tooth#</ToggleButton>
                            <ToggleButton value="detections">Detections</ToggleButton>
                        </ToggleButtonGroup>
                    </ListItem>
                </Grid>
                <Grid xs={8}>
                <h1>4.Quadrant (tooth 31-38)</h1>
                    <ListItem>
                        <ToggleButtonGroup
                            color="primary"
                            value={alignment}
                            exclusive
                            onChange={handleChange}
                            aria-label="Platform"
                            >
                            <ToggleButton value="tooth">Tooth#</ToggleButton>
                            <ToggleButton value="detections">Detections</ToggleButton>
                            </ToggleButtonGroup>
                    </ListItem>
                </Grid>
            </Grid>
        </section>
      </section> 
    </>
  );
}

export default StatusReport;
