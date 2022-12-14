import React, { FC, useState, useEffect, useContext } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./LinkTabs.scss";
import ReviewDetail from "../ReviewDetail/ReviewDetail";
import { getReviewsByCategory_context } from "../../services/reviewService";
import { ReviewContext, ReviewContextType } from "../Detail/Detail";

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
interface LinkTabsProps {
  isUpdated: number;
}
export interface ReviewModel {
  propertyId: string;
  review: string;
  rating: number;
  date: Date;
  category: string;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const LinkTabs: FC<LinkTabsProps> = () => {
  const [value, setValue] = React.useState(0);
  const { reviews, addReview } = useContext(ReviewContext) as ReviewContextType;
  const [propertyReviews, setPropertyReviews] = useState<Array<ReviewModel>>(
    []
  );
  const [societyReviews, setSocietyReviews] = useState<Array<ReviewModel>>([]);
  const [localityReviews, setLocalityReviews] = useState<Array<ReviewModel>>(
    []
  );
  const [ownerReviews, setOwnerReviews] = useState<Array<ReviewModel>>([]);
  const [tenantReviews, setTenantReviews] = useState<Array<ReviewModel>>([]);

  useEffect(() => {
    setPropertyReviews(getReviewsByCategory_context("property", reviews));
    setSocietyReviews(getReviewsByCategory_context("society", reviews));
    setLocalityReviews(getReviewsByCategory_context("locality", reviews));
    setOwnerReviews(getReviewsByCategory_context("owner", reviews));
    setTenantReviews(getReviewsByCategory_context("tenant", reviews));
  }, [reviews]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    localStorage.setItem("SELECTED_TAB", JSON.stringify(newValue));
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
            <ReviewDetail rating={r.rating} review={r.review} date={r.date} />
          ))}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {societyReviews?.map((r) => (
            <ReviewDetail rating={r.rating} review={r.review} date={r.date} />
          ))}
        </TabPanel>
        <TabPanel value={value} index={2}>
          {localityReviews?.map((r) => (
            <ReviewDetail rating={r.rating} review={r.review} date={r.date} />
          ))}
        </TabPanel>
        <TabPanel value={value} index={3}>
          {ownerReviews?.map((r) => (
            <ReviewDetail rating={r.rating} review={r.review} date={r.date} />
          ))}
        </TabPanel>
        <TabPanel value={value} index={4}>
          {tenantReviews?.map((r) => (
            <ReviewDetail rating={r.rating} review={r.review} date={r.date} />
          ))}
        </TabPanel>
      </div>
    </Box>
  );
};

export default LinkTabs;
