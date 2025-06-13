import {
  NumberInput,
  IconButton,
  Button,
  Grid,
  Box,
  HStack,
  VStack,
  DataList,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import MeasurementInput from "./MeasurementInput";
import { LuMinus, LuPlus } from "react-icons/lu";

const MeasurementInputs = ({ measurements, setMeasurements }) => {
  const [w, setW] = useState(0);
  const [h, setH] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const addNewMeasurement = (w, h, quantity) => {
    const newIndex = measurements.length + 1;
    const newMeasurement = {
      index: newIndex,
      w: w,
      h: h,
      strbluprnt: "slide window",
      quantity: quantity,
    };
    setMeasurements([...measurements, newMeasurement]);
    setW(0);
    setH(0);
    setQuantity(1);
  };

  return (
    <>
      <HStack>
        <Grid
          templateColumns="1fr 0.6fr 1fr"
          rowGap={"0.8rem"}
          justifyContent="center"
          justifyItems="center"
          alignItems="center"
          mb={"1rem"}
        >
          <Box>width</Box>
          <Box></Box> {/*Empty*/}
          <Box>height</Box>
          <Box>
            <MeasurementInput dimension={w} setDimension={setW} />
          </Box>
          <Box>
            <p>x</p>
          </Box>
          <Box>
            <MeasurementInput dimension={h} setDimension={setH} />
          </Box>
        </Grid>
      </HStack>

      <HStack gap="2rem">
        <VStack>
          <DataList.Root>
            <DataList.Item>
              <DataList.ItemLabel mr="1rem">
                <Text w="100%" textAlign="start">
                  count:
                </Text>
              </DataList.ItemLabel>
              <DataList.ItemValue>
                <NumberInput.Root
                  unstyled
                  spinOnPress={false}
                  min={1}
                  value={quantity}
                >
                  <HStack gap="2">
                    <NumberInput.DecrementTrigger asChild>
                      <IconButton
                        variant="outline"
                        size="sm"
                        color="red"
                        onClick={() => {
                          setQuantity(quantity - 1);
                        }}
                      >
                        <LuMinus />
                      </IconButton>
                    </NumberInput.DecrementTrigger>
                    <NumberInput.Input
                      textAlign="center"
                      fontSize="lg"
                      minW="5ch"
                      w="5ch"
                      p="0.5rem 0"
                      value={quantity}
                      onChange={(e) => {
                        const value = Number(e.target.value);
                        setQuantity(value);
                      }}
                      onBlur={() => {
                        if (quantity < 1) {
                          setQuantity(1);
                        }
                      }}
                    />
                    <NumberInput.IncrementTrigger asChild>
                      <IconButton
                        variant="outline"
                        size="sm"
                        color="green"
                        onClick={() => {
                          setQuantity((prev) => prev + 1);
                        }}
                      >
                        <LuPlus />
                      </IconButton>
                    </NumberInput.IncrementTrigger>
                  </HStack>
                </NumberInput.Root>
              </DataList.ItemValue>
            </DataList.Item>
          </DataList.Root>
        </VStack>

        <Button
          mt="1rem"
          onClick={() => {
            addNewMeasurement(w, h, quantity);
          }}
          disabled={w < 1 || h < 1}
        >
          Add Measurement
        </Button>
      </HStack>
    </>
  );
};

export default MeasurementInputs;
