import {Button, Stack, Box, Heading} from '@chakra-ui/react'
import SoundDropzone from '../elements/Dropzone'
import Upload from '../elements/Upload'

export default function SideBarLeft() {
  return(
    <Box p="1rem" bg="gray.400">
      <Heading ad="h3" mb="2rem">Files</Heading>
      <Stack spacing={4}>
        <Button>click.mp3</Button>
        <Button>hover.mp3</Button>
        <Button>scroll.mp3</Button>
        <SoundDropzone>
          <Button w="100%" >+</Button> 
        </SoundDropzone>
        <Upload />
      </Stack>
    </Box>
  )
};
