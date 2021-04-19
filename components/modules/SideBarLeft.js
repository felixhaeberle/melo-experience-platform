import {Button, Stack, Box, Heading} from '@chakra-ui/react'

export default function SideBarLeft() {
  return(
    <Box p="1rem" bg="gray.400">
      <Heading ad="h3" mb="2rem">Files</Heading>
      <Stack spacing={4}>
        <Button>click.mp3</Button>
        <Button>hover.mp3</Button>
        <Button>scroll.mp3</Button>
        <Button>+</Button>
      </Stack>
    </Box>
  )
};
