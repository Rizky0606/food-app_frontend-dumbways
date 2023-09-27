import { Component } from "react";
import {
  Container,
  Heading,
  Flex,
  Box,
  FormControl,
  Input,
  Checkbox,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import category from "../data/category";
import tag from "../data/tag";

interface State {
  dataArrayCategory: string[];
  dataArrayTag: string[];
}

class Filtering extends Component<{ values?: object }, State> {
  constructor(props: { values?: object }) {
    super(props);

    this.state = {
      dataArrayCategory: [],
      dataArrayTag: [],
    };
  }
  HandleSubmitCategory(item: string) {
    // dataArrayCategory.push(item);
    this.setState((prevState) => ({
      dataArrayCategory: prevState.dataArrayCategory?.includes(item)
        ? prevState.dataArrayCategory.filter((data) => data !== item)
        : [...prevState.dataArrayCategory, item],
    }));
  }

  HandleSubmitTag(item: string) {
    // dataArrayTag.push(item);
    this.setState((prevState) => ({
      dataArrayTag: prevState.dataArrayTag?.includes(item)
        ? prevState.dataArrayTag.filter((data) => data !== item)
        : [...prevState.dataArrayTag, item],
    }));
  }

  HandleResultFilter() {
    if (
      this.state.dataArrayCategory.length === 0 &&
      this.state.dataArrayTag.length === 0
    ) {
      alert("Category and Tag Not Found");
    } else if (this.state.dataArrayCategory.length > 0) {
      alert(`Category: ${this.state.dataArrayCategory.sort()}`);
    } else if (this.state.dataArrayTag.length > 0) {
      alert(`Tag: ${this.state.dataArrayTag.sort()}`);
    }
  }
  render() {
    return (
      <Container>
        <Flex mt={5}>
          <FontAwesomeIcon icon={faFilter} style={{ fontSize: "30px" }} />
          <Heading fontSize="20px" ml="10px">
            Filter
          </Heading>
        </Flex>

        <FormControl mt="20px">
          <Flex>
            <Input />
            <Box
              bg="gray.500"
              w="50px"
              m="auto"
              p="8px 0"
              cursor="pointer"
              onClick={this.HandleResultFilter.bind(this)}
            >
              <center>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  style={{ fontSize: "20px", color: "white" }}
                />
              </center>
            </Box>
          </Flex>
        </FormControl>

        <Accordion allowToggle>
          <AccordionItem>
            <h1>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Category
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h1>
            <AccordionPanel pb={4}>
              <Flex direction="column">
                {category.map((item) => {
                  return (
                    <Checkbox
                      size="md"
                      colorScheme="green"
                      mt="10px"
                      key={item.id}
                      onChange={this.HandleSubmitCategory.bind(
                        this,
                        `${item.name}`
                      )}
                    >
                      {item.name}
                    </Checkbox>
                  );
                })}
              </Flex>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h1>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Tag
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h1>
            <AccordionPanel pb={4}>
              <Flex direction="column">
                {tag.map((item) => {
                  return (
                    <Checkbox
                      size="md"
                      colorScheme="green"
                      mt="10px"
                      key={item.id}
                      onChange={this.HandleSubmitTag.bind(this, `${item.name}`)}
                    >
                      {item.name}
                    </Checkbox>
                  );
                })}
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    );
  }
}

export default Filtering;
