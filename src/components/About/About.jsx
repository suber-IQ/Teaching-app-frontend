import { Box, Container, Heading, HStack, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import Founder from './Founder';
import introVideo from '../../assets/videos/Atoms.mp4';
import styles from "./About.module.css"
import { RiSecurePaymentFill } from 'react-icons/ri';
import termsAndCondition from "../../assets/docs/termsAndCondition"


const VideoPlayer = () => {
  return (
    <Box>
      <video
        autoPlay
        muted
        controls
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
        src={introVideo}
      />
    </Box>
  );
};

const TandC = ({ termsAndCondition }) => {
    return(
        <Box>
            <Heading size={"md"} children="Terms & Condition" textAlign={["center","left"]} my="4" />
            <Box h={"sm"} p="4" overflowY={"scroll"}>
                <Text fontFamily={"heading"} letterSpacing={"widest"} textAlign={["center", "left"]}>
                  {termsAndCondition}
                </Text>
                <Heading my={"4"} size="xs" children="Refund only applicable for cancellation within 7 days" />
            </Box>
        </Box>
    )
}

const About = () => {

  return (
    <Container maxW={'container.lg'} padding="16" boxShadow={'lg'}>
      <Heading children="About Us" textAlign={['center', 'left']} />
      <Founder />
      <Stack m={'8'} direction={['column', 'row']} alignItems="center">
        <Text fontFamily={'cursive'} m="8" textAlign={['center', 'left']}>
          We are a video streaming platform with some premium courses available
          only for premiere users
        </Text>
        <Link to={'/subscribe'}>
          <button className={styles.button}>
            <div className={styles.left}></div>
            Checkout Our Plan
          <div className={styles.right}></div>
          </button>
        </Link>
      </Stack>
      <VideoPlayer />
      <TandC termsAndCondition={termsAndCondition} />
      <HStack my={"4"} p="4">
        <RiSecurePaymentFill />
        <Heading size={"xs"} fontFamily="sans-serif" textTransform={"uppercase"} children={"Payment is secured by Razorpay"} />
      </HStack>
    </Container>
  );
};

export default About;
