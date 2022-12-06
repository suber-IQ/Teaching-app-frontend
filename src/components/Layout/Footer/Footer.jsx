import { Box, Heading, HStack, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import { TiSocialYoutubeCircular, TiSocialInstagramCircular} from "react-icons/ti"
import { DiGithub } from "react-icons/di"

const Footer = () => {
  return (
    <Box padding={"4"} bg="blackAlpha.800" minH={"10vh"}>
       <Stack direction={["column","row"]}>
          <VStack alignItems={["center", "flex-start"]} width="full">
               <Heading children="All Rights Reserved" color={"white"} />
               <Heading fontFamily={"body"} size="sm" children="@Teaching styling.." color={"yellow.400"} />
          </VStack>
          <HStack color={"white"} fontSize="50" spacing={["2","10"]} justifyContent="center">
               <a href="https://youtube.com" target={"blank"} rel="noreferrer">
                 <TiSocialYoutubeCircular />
               </a>
               <a href="https://instagram.com" target={"blank"} rel="noreferrer">
                 <TiSocialInstagramCircular />
               </a>
               <a href="https://github.com" target={"blank"} rel="noreferrer">
                 <DiGithub />
               </a>
          </HStack>
       </Stack>
    </Box>
  )
}

export default Footer