import React, { useEffect, useState } from 'react';
import {
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import styles from './Courses.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCourses } from '../../redux/actions/courses';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { addToPlaylist } from '../../redux/actions/profile';
import { loadUser } from '../../redux/actions/user';

const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToPlaylistHandler,
  creator,
  description,
  lectureCount,
  loading
}) => {
  return (
  <div>
      <VStack className={styles.course} alignItems={['center', 'flex-start']}>
      <Image src={imageSrc} boxSize="60" objectFit={'contain'} />
      <Heading
        textAlign={['center', 'left']}
        maxW="200px"
        fontFamily={'sans-serif'}
        noOfLines={3}
        children={title}
        size="sm"
      />
      <VStack w={"15rem"} overflow={"hidden"}>
        <Text children={description} />
        </VStack>
      <HStack>
        <Text
          fontWeight={'bold'}
          textTransform={'uppercase'}
          children={'creator'}
        />
        <Text
          fontFamily={'body'}
          textTransform={'uppercase'}
          children={creator}
        />
      </HStack>
      <Heading
        textAlign={'center'}
        size="xs"
        children={`Lectures - ${lectureCount}`}
        textTransform={'uppercase'}
      />
      <Heading
        size="xs"
        children={`Views - ${views}`}
        textTransform={'uppercase'}
      />
      <Stack direction={['column', 'row']} alignItems="center">
        <Link to={`/course/${id}`}>
          <Button colorScheme={'yellow'}>Watch Now</Button>
        </Link>
        <Button
        isLoading={loading}
          variant={'ghost'}
          colorScheme={'yellow'}
          onClick={() => addToPlaylistHandler(id)}
        >
          Add to playlist
        </Button>
      </Stack>
    </VStack>
  </div>
  );
};

const Courses = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');

  const { loading, courses, error, message } = useSelector(state => state.course);
  const dispatch = useDispatch();

  const addToPlaylistHandler = async (courseId) => {
   await dispatch(addToPlaylist(courseId));
   dispatch(loadUser())
  };

  const categories = [
    'Web Development',
    'Artificial Intellegence',
    'Data Structure & Algorithm',
    'App Development',
    'Data Science',
    'Game Development',
  ];

  useEffect(() => {
    dispatch(getAllCourses(category, keyword));
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, keyword, category, error,message]);

  return (
    <Container minH={'95vh'} maxW="container.lg" paddingY={'8'}>
      <Heading children="All Courses" m={'8'} />
      <Input
        type="text"
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="Search a course..."
        focusBorderColor="yellow.500"
      />
      <HStack
        overflowX="auto"
        paddingY={'8'}
        css={{
          '&::-webkit-scrollbar': {
            width: '1px',
          },
          '&::-webkit-scrollbar-track': {
            width: '2px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'aqua',
            borderRadius: '4px',
          },
        }}
      >
        {categories.map((item, index) => {
          return (
            <Button key={index} onClick={() => setCategory(item)} minW={'60'}>
              <Text children={item} />
            </Button>
          );
        })}
      </HStack>
      <Stack
        direction={['column', 'row']}
        flexWrap="wrap"
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        {courses.length > 0 ?
          courses.map(item => (
            <Course
              key={item._id}
              title={item.title}
              description={item.description}
              views={item.views}
              imageSrc={item.poster.url}
              id={item._id}
              creator={item.createdBy}
              lectureCount={item.numOfVideos}
              addToPlaylistHandler={addToPlaylistHandler}
              loading={loading}
            />
          )) : <Heading opacity={0.5} mt="10" children="Courses Not Found !" />}
      </Stack>
    </Container>
  );
};

export default Courses;
