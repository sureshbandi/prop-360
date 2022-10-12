import React, { FC } from "react";
import Skeleton from "@mui/material/Skeleton";
import "./DetailSkeleton.scss";

interface DetailSkeletonProps {

}

const DetailSkeleton: FC<DetailSkeletonProps> = (props) => (
  <div className="detail-skeleton">
    <Skeleton animation={false} width={500} height={100}/>
    <Skeleton animation={false} width={500}/>
    <Skeleton animation={false} width={500}/>
    <ul className="DetailSkeletonUl">
        <Skeleton className="DetailSkeletonCircle" animation={false} variant="circular" width={50} height={50}/>
        <Skeleton className="DetailSkeletonCircle" animation={false} variant="circular" width={50} height={50}/>
        <Skeleton className="DetailSkeletonCircle" animation={false} variant="circular" width={50} height={50}/>
        <Skeleton className="DetailSkeletonCircle" animation={false} variant="circular" width={50} height={50}/>
        <Skeleton className="DetailSkeletonCircle" animation={false} variant="circular" width={50} height={50}/>
    </ul>
    
    <Skeleton animation={false} height={50}/>
    <Skeleton animation={false}/>
  </div>
);

export default DetailSkeleton;
