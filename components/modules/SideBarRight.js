import {Select, Input, Text, Heading, Stack, Box} from '@chakra-ui/react'

export default function SideBarRight() {
  return(
    <Box p="1rem" bg="gray.400">
      <Heading ad="h3" mb="2rem">Sound Settings</Heading>
      <Stack spacing={4}>

        <Text mb="8px">Identifier:</Text>
        <Input placeholder="my name for you"/>

        <Text mb="8px">Sound:</Text>
        <Select placeholder="play this sound">
          <option value="click.mp3">click.mp3</option>
          <option value="hover.mp3">hover.mp3</option>
          <option value="scroll.mp3">scroll.mp3</option>
        </Select>

        <Text mb="8px">Behaviour:</Text>
        <Select placeholder="do this">
          <option value="click">click</option>
          <option value="hover">hover</option>
          <option value="scroll">scroll</option>
        </Select>

        <Text mb="8px">Settings:</Text>
        <Select placeholder="do it that way">
          <option value="Loop">Loop</option>
          <option value="FadeIn">FadeIn</option>
          <option value="FadeOut">FadeOut</option>
        </Select>
     
      </Stack>
    </Box>
  )
};
