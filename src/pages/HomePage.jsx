import { VStack, Button, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import MeasurementsCard from "../components/MeasurementsCard";
import MeasurementInputs from "../components/MeasurementInputs";
import Results from "../components/Results";

const HomePage = () => {
  const [measurements, setMeasurements] = useState([]);
  const [mto, setMto] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    const cleanedMeasurements = measurements.map(({ index, ...rest }) => rest);
    setIsLoading(true);

    fetch("https://jardjsbackend-production.up.railway.app//jard", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cleanedMeasurements),
    })
      .then((response) => response.json())
      .then((data) => {
        setMto(data.result);
        setIsLoading(false);
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

        {isLoading ? (
          <Spinner color="teal.500" size="lg" />
        ) : (
          <Results mto={mto} />
        )}
      </VStack>
    </>
  );
};

export default HomePage;
