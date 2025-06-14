import {
  Card,
  Heading,
  HStack,
  VStack,
  Text,
  Tag,
  Box,
  Spinner,
} from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";

const Results = ({ isResultsOpen, mto, isLoading, isUpdated }) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <>
      {isResultsOpen && (
        <Card.Root size="sm" w="95vw">
          <Card.Header>
            <HStack justify="space-between">
              <Heading size="md">MTO Results</Heading>
              <Box minW="7rem">
                <Tag.Root
                  size="sm"
                  colorPalette={isUpdated ? "green" : "red"}
                  w="100%"
                  justifyContent="center"
                >
                  <Tag.Label>{isUpdated ? "updated" : "not updated"}</Tag.Label>
                </Tag.Root>
              </Box>
            </HStack>
          </Card.Header>
          <Card.Body>
            {isLoading ? (
              <Card.Root>
                <Card.Body
                  justifyContent="center"
                  alignItems="center"
                  minH="10rem"
                >
                  <Spinner color="green.600" size="lg" />
                </Card.Body>
              </Card.Root>
            ) : !isMobile ? (
              <HStack align={"stretch"}>
                <Card.Root size="sm" textAlign="center" w="33%">
                  <Card.Header>
                    <Heading size="sm">Accessories Counts</Heading>
                  </Card.Header>
                  <Card.Body>
                    <VStack>
                      <HStack>
                        <Text>Cornerjoints</Text>
                        <Text>
                          {mto["Structs total accessories counts"].cornerjoint}
                        </Text>
                      </HStack>

                      <HStack>
                        <Text>Sliding Sash Handles</Text>
                        <Text>
                          {
                            mto["Structs total accessories counts"][
                              "sliding sash handle"
                            ]
                          }
                        </Text>
                      </HStack>

                      <HStack>
                        <Text>Sliding Sash Wheels</Text>
                        <Text>
                          {
                            mto["Structs total accessories counts"][
                              "sliding sash wheel"
                            ]
                          }
                        </Text>
                      </HStack>
                    </VStack>
                  </Card.Body>
                </Card.Root>

                <VStack w="33%">
                  <Card.Root size="sm" textAlign="center" w="100%" h="100%">
                    <Card.Header>
                      <Heading size="sm">Structs total area</Heading>
                    </Card.Header>
                    <Card.Body>
                      <Text>{mto["Structs total area"]}</Text>
                    </Card.Body>
                  </Card.Root>

                  <Card.Root size="sm" textAlign="center" w="100%" h="100%">
                    <Card.Header>
                      <Heading size="sm">Structs total cost</Heading>
                    </Card.Header>
                    <Card.Body>
                      <Text>$ {mto["Structs total cost"]}</Text>
                    </Card.Body>
                  </Card.Root>
                </VStack>

                <Card.Root size="sm" textAlign="center" w="33%">
                  <Card.Header>
                    <Heading size="sm">Structs total tubes counts</Heading>
                  </Card.Header>
                  <Card.Body>
                    <VStack>
                      <HStack>
                        <Text>Antifly tube</Text>
                        <Text>
                          {mto["Structs total tubes counts"][
                            "Antifly tube"
                          ].toFixed(2)}
                        </Text>
                      </HStack>

                      <HStack>
                        <Text>Slide L tube</Text>
                        <Text>
                          {mto["Structs total tubes counts"][
                            "Slide L tube"
                          ].toFixed(2)}
                        </Text>
                      </HStack>

                      <HStack>
                        <Text>Slide Slit tube</Text>
                        <Text>
                          {mto["Structs total tubes counts"][
                            "Slide Slit tube"
                          ].toFixed(2)}
                        </Text>
                      </HStack>

                      <HStack>
                        <Text>Slide Z tube</Text>
                        <Text>
                          {mto["Structs total tubes counts"][
                            "Slide Z tube"
                          ].toFixed(2)}
                        </Text>
                      </HStack>
                    </VStack>
                  </Card.Body>
                </Card.Root>
              </HStack>
            ) : (
              <VStack align={"stretch"}>
                <Card.Root size="sm" textAlign="center">
                  <Card.Header>
                    <Heading size="sm">Accessories Counts</Heading>
                  </Card.Header>
                  <Card.Body>
                    <VStack>
                      <HStack>
                        <Text>Cornerjoints</Text>
                        <Text>
                          {mto["Structs total accessories counts"].cornerjoint}
                        </Text>
                      </HStack>

                      <HStack>
                        <Text>Sliding Sash Handles</Text>
                        <Text>
                          {
                            mto["Structs total accessories counts"][
                              "sliding sash handle"
                            ]
                          }
                        </Text>
                      </HStack>

                      <HStack>
                        <Text>Sliding Sash Wheels</Text>
                        <Text>
                          {
                            mto["Structs total accessories counts"][
                              "sliding sash wheel"
                            ]
                          }
                        </Text>
                      </HStack>
                    </VStack>
                  </Card.Body>
                </Card.Root>

                <Card.Root size="sm" textAlign="center">
                  <Card.Header>
                    <Heading size="sm">Structs total tubes counts</Heading>
                  </Card.Header>
                  <Card.Body>
                    <VStack>
                      <HStack>
                        <Text>Antifly tube</Text>
                        <Text>
                          {mto["Structs total tubes counts"][
                            "Antifly tube"
                          ].toFixed(2)}
                        </Text>
                      </HStack>

                      <HStack>
                        <Text>Slide L tube</Text>
                        <Text>
                          {mto["Structs total tubes counts"][
                            "Slide L tube"
                          ].toFixed(2)}
                        </Text>
                      </HStack>

                      <HStack>
                        <Text>Slide Slit tube</Text>
                        <Text>
                          {mto["Structs total tubes counts"][
                            "Slide Slit tube"
                          ].toFixed(2)}
                        </Text>
                      </HStack>

                      <HStack>
                        <Text>Slide Z tube</Text>
                        <Text>
                          {mto["Structs total tubes counts"][
                            "Slide Z tube"
                          ].toFixed(2)}
                        </Text>
                      </HStack>
                    </VStack>
                  </Card.Body>
                </Card.Root>

                <Card.Root size="sm" textAlign="center" w="100%" h="100%">
                  <Card.Header>
                    <Heading size="sm">Structs total area</Heading>
                  </Card.Header>
                  <Card.Body>
                    <Text>{mto["Structs total area"]}</Text>
                  </Card.Body>
                </Card.Root>

                <Card.Root size="sm" textAlign="center" w="100%" h="100%">
                  <Card.Header>
                    <Heading size="sm">Structs total cost</Heading>
                  </Card.Header>
                  <Card.Body>
                    <Text>$ {mto["Structs total cost"]}</Text>
                  </Card.Body>
                </Card.Root>
              </VStack>
            )}
          </Card.Body>
        </Card.Root>
      )}
    </>
  );
};

export default Results;
