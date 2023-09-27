import { Component } from "react";
// import data from "../data/data";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  SimpleGrid,
  Box,
  Image,
  Heading,
  Text,
  Flex,
  Spinner,
} from "@chakra-ui/react";

interface DataContent {
  id: number;
  name: string;
  badge: string;
  imageUrl: string;
  categories: string[];
  description: string;
}

interface State {
  dataContent: DataContent[] | null;
  isLoading: boolean;
}

class Content extends Component<{ values?: object }, State> {
  constructor(props: { values?: object }) {
    super(props);
    this.state = {
      dataContent: null,
      isLoading: false,
    };
  }

  componentDidMount() {
    this.FetchingData();
    AOS.init();
  }

  FetchingData() {
    fetch("https://api.npoint.io/624c99ed50dcd45fb160")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ dataContent: data, isLoading: false });
      })
      .catch((error) => {
        console.log(`Fetching Error ${error}`);
      });
  }

  render() {
    return (
      <>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5} p={5}>
          {this.state.dataContent === null ? (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          ) : (
            <>
              {this.state.dataContent?.map((item, index) => {
                return (
                  <Box
                    border="1px solid black"
                    borderRadius={8}
                    key={index}
                    data-aos="fade-up"
                    data-aos-duration="3000"
                  >
                    <Box
                      position="absolute"
                      bg="purple.600"
                      m={3}
                      borderRadius={8}
                      p={1}
                    >
                      <Text color="white">{item.badge}</Text>
                    </Box>
                    <Image
                      src={item.imageUrl}
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
            </>
          )}
        </SimpleGrid>
      </>
    );
  }
}

export default Content;
