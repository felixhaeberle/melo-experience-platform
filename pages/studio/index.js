import LayoutStudio from '../../components/layouts/LayoutStudio'
import {Button, Stack, Text, Heading} from '@chakra-ui/react'

export default function Studio(){
  return(
    <LayoutStudio>
      <Heading as="h3" mb="2rem">Interactions</Heading>
      <Stack spacing={4}>
        <Button>clickSound</Button>
        <Button>hoverSound</Button>
        <Button>scrollSound</Button>
        <Button>+</Button>
      </Stack>
    </LayoutStudio>
  )
}