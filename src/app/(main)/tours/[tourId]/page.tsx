import TourDetails from "@/components/layout/TourDetails";
import React from "react";

type Props = {
  params: {
    tourId: string;
  };
};

const TourDetailsPage: React.FC<Props> = ({ params: { tourId } }) => {
  return <TourDetails tourId={tourId} />;
};

export default TourDetailsPage;
