import { Card, Heading, HStack, VStack, Text } from "@chakra-ui/react";

function formatOutput(data, indent = 0) {
  let outputLines = [];
  let spaces = "    ".repeat(indent);

  for (let key in data) {
    let value = data[key];
    outputLines.push(`${spaces}${key}:`);

    if (typeof value === "object" && !Array.isArray(value)) {
      for (let k in value) {
        let v = value[k];
        if (key.toLowerCase().includes("tubes counts")) {
          outputLines.push(`${spaces}    ${k}: ${v.toFixed(1)}`);
        } else if (typeof v === "number" && !Number.isInteger(v)) {
          outputLines.push(`${spaces}    ${k}: ${v.toFixed(2)}`);
        } else {
          outputLines.push(`${spaces}    ${k}: ${v}`);
        }
      }
    } else {
      outputLines.push(`${spaces}    ${value}`);
    }

    outputLines.push(""); // Add empty line
  }

  return outputLines.join("\n");
}

const Results = ({ mto }) => {
  return (
    <>
      {Object.keys(mto).length != 0 && (
        <Card.Root size="sm" w="95vw">
          <Card.Header>
            <Heading size="md">MTO Results</Heading>
          </Card.Header>
          <Card.Body>
            <HStack align={"strech"}>
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
                <Card.Root size="sm" textAlign="center" w="100%">
                  <Card.Header>
                    <Heading size="sm">Structs total area</Heading>
                  </Card.Header>
                  <Card.Body>
                    <Text>{mto["Structs total area"]}</Text>
                  </Card.Body>
                </Card.Root>

                <Card.Root size="sm" textAlign="center" w="100%">
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
          </Card.Body>
        </Card.Root>
      )}
    </>
  );
};

export default Results;
