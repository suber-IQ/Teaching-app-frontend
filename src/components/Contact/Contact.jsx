import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { contact } from '../../redux/actions/other';
import { toast } from 'react-hot-toast';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const {
    message: contactMessage,
    error,
    loading,
  } = useSelector(state => state.other);

  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (contactMessage) {
      toast.success(contactMessage);
      dispatch({ type: 'clearError' });
    }
  }, [dispatch, error, contactMessage]);

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(contact(name, email, message));
  };
  return (
    <Container h="92vh">
      <VStack h={'full'} justifyContent="center" spacing={'15'}>
        <Heading children="Contact Us" />
        <form onSubmit={submitHandler} style={{ width: '100%' }}>
          <Box my={'4'}>
            <FormLabel htmlFor="name" children="Name" />
            <Input
              required
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="abc"
              type={'text'}
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="email" children="email address" />
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="abc@gmail"
              type={'email'}
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="message" children="Message" />
            <Textarea
              required
              id="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Your Message...."
              focusBorderColor="yellow.500"
            />
          </Box>

          <Button
            isLoading={loading}
            my={'4'}
            colorScheme="yellow"
            type="submit"
          >
            Send Mail
          </Button>

          <Box my={'4'}>
            Request For a Course?{' '}
            <Link to={'/request'}>
              <Button colorScheme={'yellow'} variant="link">
                Click Here
              </Button>{' '}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Contact;
