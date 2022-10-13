import React, { FC, useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./LinkTabs.scss";
import ReviewDetail from "../ReviewDetail/ReviewDetail";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Typography>{children}</Typography>}
    </div>
  );
}
interface LinkTabsProps {}
interface ReviewModel {
  review: string;
  rating: number;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const LinkTabs: FC<LinkTabsProps> = () => {
  const [value, setValue] = React.useState(0);
  const [propertyReviews, setPropertyReviews] = useState<Array<ReviewModel>>(
    []
  );
  const [societyReviews, setSocietyReviews] = useState<Array<ReviewModel>>([]);

  useEffect(() => {
    var lst_review = [
      {
        review:
          "Came over to the house for a free estimate; arrived on time; came with all of the materials they needed; took their time to do a great job; cleaned up everything before they left so you could not tell they were even here. Everything looks great!",
        rating: 5,
      },
      {
        review:
          "Thank you Welington Handyman.  You were very accommodating and arrived the SAME day I needed to have new curtains and rods install in two rooms.  Your work was very professional and efficient..  I will definately call upon your services for home repair services again soon",
        rating: 5,
      },
    ];
    setPropertyReviews(lst_review);
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box className="category-menu">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          orientation="vertical"
        >
          <Tab label="Property" {...a11yProps(0)} />
          <Tab label="Society" {...a11yProps(1)} />
          <Tab label="Locality" {...a11yProps(2)} />
          <Tab label="Owner" {...a11yProps(3)} />
          <Tab label="Tenant" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <div className="tab-review-content">
        <TabPanel value={value} index={0}>
          {propertyReviews?.map((r) => (
            <ReviewDetail rating={r.rating} review={r.review} />
          ))}
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
      </div>
    </Box>
  );
};

export default LinkTabs;
