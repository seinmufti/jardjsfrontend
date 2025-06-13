import { Card, Heading, HStack, VStack, Text } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";

const Results = ({ mto }) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <>
      {Object.keys(mto).length != 0 && (
        <Card.Root size="sm" w="95vw">
          <Card.Header>
            <Heading size="md">MTO Results</Heading>
          </Card.Header>
          <Card.Body>
            {!isMobile ? (
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
