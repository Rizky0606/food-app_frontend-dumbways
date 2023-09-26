import { Component } from "react";
import {
  Container,
  Heading,
  Flex,
  Box,
  FormControl,
  Input,
  Checkbox,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import category from "../data/category";
import tag from "../data/tag";

const dataArrayCategory: string[] = [];
const dataArrayTag: string[] = [];

class Filtering extends Component<
  { values?: null | undefined },
  { values?: null | undefined }
> {
  HandleSubmitCategory(item: string) {
    dataArrayCategory.push(item);
  }

  HandleSubmitTag(item: string) {
    dataArrayTag.push(item);
  }

  HandleResultFilter() {
    if (dataArrayCategory.length === 0 && dataArrayTag.length === 0) {
      alert("Category and Tag Not Found");
    } else if (dataArrayCategory.length > 0) {
      alert(`Category: ${dataArrayCategory.sort()}`);
    } else if (dataArrayTag.length > 0) {
      alert(`Tag: ${dataArrayTag.sort()}`);
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

        <Flex direction="column" mt="20px">
          <Heading size="lg">Category</Heading>
          {category.map((item) => {
            return (
              <Checkbox
                size="md"
                colorScheme="green"
                mt="10px"
                key={item.id}
                onChange={this.HandleSubmitCategory.bind(this, `${item.name}`)}
              >
                {item.name}
              </Checkbox>
            );
          })}
        </Flex>

        <Flex direction="column" mt="10px">
          <Heading size="lg">Tag</Heading>

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
      </Container>
    );
  }
}

export default Filtering;
