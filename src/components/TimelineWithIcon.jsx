import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";
import { HomeIcon, BellIcon, TruckIcon, CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import { products } from "../components/Product";

export function TimelineWithIcon({ trackingCode }) {
  const trackingData = products.find(product => product.trackingCode === trackingCode);

  if (!trackingData) {
    return <div>No tracking data available.</div>;
  }

  const trackingJourney = trackingData.trackingJourney || [];

  const getIcon = (status) => {
    switch (status) {
      case "Picked Up":
      
        return <TruckIcon className="h-4 w-4" />;
      case "In Transit":
        return <BellIcon className="h-4 w-4" />;
      case "Delivered":
        return <CheckCircleIcon className="h-4 w-4 text-green-500" />;
      case "Returned to Sender":
        return <XCircleIcon className="h-4 w-4 text-red-500" />;
      default:
        return <HomeIcon className="h-4 w-4" />;
    }
  };

  return (
    <div className="w-[32rem]">
      <Timeline>
        {trackingJourney.length > 0 ? (
          trackingJourney.map((step, index) => (
            <TimelineItem key={index}>
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon className="p-2">
                  {getIcon(step.status)}
                </TimelineIcon>
                <Typography variant="h5" color="blue-gray">
                  {step.date} - {step.location}
                </Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography color="gray" className="font-normal text-gray-600">
                  {step.status}
                </Typography>
              </TimelineBody>
            </TimelineItem>
          ))
        ) : (
          <Typography>No tracking journey available.</Typography>
        )}
      </Timeline>
    </div>
  );
}
