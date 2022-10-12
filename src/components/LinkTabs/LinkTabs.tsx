import React, { FC } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import "./LinkTabs.scss";


interface LinkTabsProps {}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const LinkTabs: FC<LinkTabsProps> = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '200px', height: '300px', float: 'left' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} textColor="secondary" orientation="vertical" >
          <Tab label="Property" {...a11yProps(0)} />
          <Tab label="Society" {...a11yProps(1)} />
          <Tab label="Locality" {...a11yProps(2)} />
          <Tab label="Owner" {...a11yProps(3)} />
          <Tab label="Tenant" {...a11yProps(4)} />
        </Tabs>
      </Box>
    </Box>
  );

};







export default LinkTabs;
