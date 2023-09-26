import Content from "./components/Content";
import Filtering from "./components/Filtering";
import { Container, Flex } from "@chakra-ui/react";

function App() {
  return (
    <Container maxW="container.xl">
      <Flex>
        <Filtering />
        <Content />
      </Flex>
    </Container>
  );
}

export default App;
