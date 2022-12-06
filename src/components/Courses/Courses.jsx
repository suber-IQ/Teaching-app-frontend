import React, { useState } from 'react';
import {
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Input,
  Link,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import styles from "./Courses.module.css"


const Course = ({ views, title, imageSrc, id, addToPlaylistHandler, creator, description, lectureCount}) => {
    return (
           <VStack className={styles.course} alignItems={["center", "flex-start"]}>
              <Image src={imageSrc} boxSize="60" objectFit={"contain"} />
              <Heading textAlign={["center", "left"]} maxW="200px" fontFamily={"sans-serif"} noOfLines={3} children={title} size="sm" />
              <Text noOfLines={2} children={description} />
              <HStack>
              <Text fontWeight={"bold"} textTransform={"uppercase"} children={"creator"} />
              <Text fontFamily={"body"} textTransform={"uppercase"} children={creator} />
              </HStack>
              <Heading textAlign={"center"} size="xs" children={`Lectures - ${lectureCount}`}
              textTransform={"uppercase"}
               />
              <Heading size="xs" children={`Views - ${views}`}
              textTransform={"uppercase"}
               />
               <Stack direction={["column", "row"]} alignItems="center">
                  <Link  to={`/course/${id}`}>
                    <Button colorScheme={"yellow"}>
                        Watch Now
                    </Button>
                  </Link>
                    <Button variant={"ghost"} colorScheme={"yellow"} onClick={() => addToPlaylistHandler(id)}>
                        Add to playlist
                    </Button>

               </Stack>
           </VStack>
    )
}


const Courses = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');


  const addToPlaylistHandler = () => {
    console.log("Added to Playlist")
  }

  const categories = [
    'Web Development',
    'Artificial Intellegence',
    'Data Structure & Algorithm',
    'App Development',
    'Data Science',
    'Game Development',
  ];

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
       direction={["column", "row"]}
       flexWrap="wrap"
       justifyContent={["flex-start", "space-evenly"]}
       alignItems={["center", "flex-start"]}
      >
       <Course
        title={"Sample"}
        description={"Sample lite"} 
        views={23}
        imageSrc={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.edQKztD6G9khB_APGqkhOwHaEK%26pid%3DApi&f=1&ipt=a2f6e728a6783c2416be6841a8e1d10aa09bce9a64bdc4ce43cfc83dfd1f825c&ipo=images"}
        id={"Sample id"}
        creator={"Sumit Kumar"}
        lectureCount={2}
        addToPlaylistHandler={addToPlaylistHandler}
        />
      </Stack>
    </Container>
  );
};

export default Courses;
