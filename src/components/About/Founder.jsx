import { Avatar, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Founder = () => {
  return (
    <Stack
    direction={['column', 'row']}
    spacing={['4', '16']}
    padding={'8'}
  >
    <VStack>
        <Avatar src='https://th.bing.com/th/id/OIP.HkNpGnmCZ8Wc5Z1PLEekvAHaLJ?w=116&h=180&c=7&r=0&o=5&pid=1.7' boxSize={["40","48"]} />
        <Text children="Co-Founder" opacity={0.7} />
    </VStack>
    <VStack justifyContent={"center"} alignItems={["center","flex-start"]}>
       <Heading children="Sumit kumar" size={["md", "xl"]} />
       <Text textAlign={["center","left"]} children={["Hi, I am a full-stack developer. Our mission is to provide quality content at reasonal"]} />
    </VStack>
  </Stack>
  )
}

export default Founder