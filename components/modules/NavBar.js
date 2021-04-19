import {Flex, Button, Link, Box, Editable, EditableInput, EditablePreview } from "@chakra-ui/react"

export default function NavBar() {
  return (
    <Box p="1rem" bg="gray.800">
      <Flex direction="row" align="center">
        <Button mr="1rem">
          <Link href="/"><a>Dashboard</a></Link>
        </Button>
        <Editable defaultValue="Projectname">
          <EditablePreview color="gray.50" />
          <EditableInput color="gray.50" />
        </Editable>
      </Flex>
    </Box>
  );
};
