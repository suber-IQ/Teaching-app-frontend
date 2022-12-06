import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import introVideo from '../../assets/videos/intro.mp4';

const CoursePage = () => {
  const [lectureNumber, setLectureNumber] = useState(0);

  const lectures = [
    {
      _id: 'jafdasfj',
      title: 'Reactjs with Redux',
      description: 'Sample roll first reactjs file',
      video: {
        url: 'https://www.youtube.com/watch?v=_B6T8O15Ohk',
      },
    },
    {
      _id: 'jatq3fj',
      title: 'Name is first',
      description: 'Name is first name',
      video: {
        url: 'https://www.youtube.com/watch?v=lQIqH1KAwl4',
      },
    },
    {
      _id: '345fdasfj',
      title: 'Twikel little star',
      description: 'Second Name is Creating lecture',
      video: {
        url: 'https://www.youtube.com/watch?v=L1vG9y5zMmg',
      },
    },
  ];
  return (
    <div style={{ width: '90%', margin: '2px auto' }}>
      <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>
        <Box mx={"2"}>
          <video
            width={'100%'}
            controls
            controlsList="nodownload nofullscreen noremoteplayback"
            disablePictureInPicture
            disableRemotePlayback
            src={introVideo}
          ></video>
          <Heading
            m={'4'}
            children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`}
          />
          <Heading m={'4'} textAlign="justify" children="Description" />
          <Text m={'4'} children={lectures[lectureNumber].description} />
        </Box>
        <VStack>
          {lectures.map((element, index) => {
            return (
              <button
              onClick={() => setLectureNumber(index)}
                key={element._id}
                style={{
                  width: '100%',
                  padding: '1rem',
                  textAlign: 'center',
                  margin: 0,
                  borderBottom: '1px solid rgba(0,0,0,0.2)',
                }}
              >
                <Text noOfLines={1}>
                  #{index + 1}
                  {element.title}
                </Text>
              </button>
            );
          })}
        </VStack>
      </Grid>
    </div>
  );
};

export default CoursePage;
