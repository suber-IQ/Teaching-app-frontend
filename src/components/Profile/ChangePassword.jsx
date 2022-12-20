import {
  Button,
  Container,
  Heading,
  Input,
  InputGroup,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { changePassword } from '../../redux/actions/profile';
import { ShowHide } from '../Auth/Login';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const handleClick = () => {
    setShow(!show);
  };

  const submitHandler = e => {
    e.preventDefault();
    dispatch(changePassword(oldPassword, newPassword));
  };
  const { loading,message,error } = useSelector(state => state.profile)

  useEffect(() => {
    if(error){
      toast.error(error);
      dispatch({ type: 'clearError'})
    }
    if(message){
      toast.success(message);
      dispatch({ type: 'clearMessage'})
    }
   
  }, [dispatch,error,message])
  

  return (
    <Container py="16" minH="90vh">
      <form onSubmit={submitHandler}>
        <Heading
          textTransform={'uppercase'}
          children="Change Password"
          my={'16'}
          textAlign={['center', 'left']}
        />
        <VStack spacing={'8'}>
          <InputGroup>
            <Input
              required
              value={oldPassword}
              onChange={e => setOldPassword(e.target.value)}
              placeholder="Old Password"
              type={show ? 'text' : 'password'}
              focusBorderColor="yellow.500"
            />
            <ShowHide show={show} handleClick={handleClick} />
          </InputGroup>

          <Input
            required
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            placeholder="New Password"
            type={show ? 'text' : 'password'}
            focusBorderColor="yellow.500"
          />

          <Button isLoading={loading} w={'full'} colorScheme="yellow" type="submit">
            Change
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ChangePassword;
