import { VStack, Button, Spinner, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import MeasurementsCard from "../components/MeasurementsCard";
import MeasurementInputs from "../components/MeasurementInputs";
import Results from "../components/Results";

const HomePage = () => {
  const [measurements, setMeasurements] = useState([]);
  const [mto, setMto] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitedMeasurements, setSubmitedMeasurements] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);
  // Bool to change results component's height (less if not open)
  const [isResultsOpen, setIsResultsOpen] = useState(false);

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
        setIsResultsOpen(true);
        setSubmitedMeasurements(measurements);
      });
  };

  useEffect(() => {
    const isSame =
      JSON.stringify(submitedMeasurements) === JSON.stringify(measurements);

    setIsUpdated(isSame);
  }, [submitedMeasurements, measurements]);

  return (
    <>
      <VStack>
        <MeasurementInputs
          measurements={measurements}
          setMeasurements={setMeasurements}
        />
        <Box h="1rem"></Box>

        <MeasurementsCard
          measurements={measurements}
          setMeasurements={setMeasurements}
          handleSubmit={handleSubmit}
        />
        <Box minH={isResultsOpen ? "42rem" : "5rem"} mt="2rem">
          <Results mto={mto} isLoading={isLoading} isUpdated={isUpdated} />
        </Box>
      </VStack>
    </>
  );
};

export default HomePage;
