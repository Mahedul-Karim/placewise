import React from "react";
import Container from "../ui/Container";
import Gallery from "../tour/details/gallery/Gallery";
import Main from "../tour/details/Main";

type Props = {
  tourId: string;
};

const TourDetails: React.FC<Props> = ({ tourId }) => {
  return (
    <Container styles="py-10">
      <Gallery />
      <Main />
    </Container>
  );
};

export default TourDetails;
