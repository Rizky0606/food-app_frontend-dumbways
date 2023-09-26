import { Component } from "react";
import data from "../data/data";
import { SimpleGrid, Box, Image, Heading, Text, Flex } from "@chakra-ui/react";

class Content extends Component<
  { values?: null | undefined },
  { value?: null | undefined }
> {
  render() {
    return (
      <>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5} p={5}>
          {data.map((item, index) => {
            return (
              <Box border="1px solid black" borderRadius={8} key={index}>
                <Box
                  position="absolute"
                  bg="purple.600"
                  m={3}
                  borderRadius={8}
                  p={1}
                >
                  <Text color="white">{item.tag}</Text>
                </Box>
                <Image
                  src={item.image}
                  alt={item.name}
                  objectFit="cover"
                  borderRadius="8px 8px 0 0"
                  height="300px"
                  width="100%"
                />
                <Box p={5}>
                  <Heading size="md">{item.name}</Heading>
                  <Text noOfLines={3} size="md">
                    {item.description}
                  </Text>
                  <Flex>
                    {item.categories?.map((categori, index) => {
                      return (
                        <Box
                          bg="teal.500"
                          color="white"
                          borderRadius={5}
                          mr={5}
                          mt={2}
                          key={index}
                        >
                          <Text p={2}>{categori} </Text>
                        </Box>
                      );
                    })}
                  </Flex>
                </Box>
              </Box>
            );
          })}
        </SimpleGrid>
      </>
    );
  }
}

export default Content;
