import { VStack, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import MeasurementsCard from "../components/MeasurementsCard";
import MeasurementInputs from "../components/MeasurementInputs";
import Results from "../components/Results";

const HomePage = () => {
  const [measurements, setMeasurements] = useState([]);
  const [mto, setMto] = useState({});

  const handleSubmit = () => {
    const cleanedMeasurements = measurements.map(({ index, ...rest }) => rest);

    fetch("https://jardjsbackend-production.up.railway.app//jard", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cleanedMeasurements),
    })
      .then((response) => response.json())
      .then((data) => {
        setMto(data.result);
      });
  };

  return (
    <>
      <VStack>
        <MeasurementInputs
          measurements={measurements}
          setMeasurements={setMeasurements}
        />
        <MeasurementsCard
          measurements={measurements}
          setMeasurements={setMeasurements}
          handleSubmit={handleSubmit}
        />

        <Results mto={mto} />
      </VStack>
    </>
  );
};

export default HomePage;
