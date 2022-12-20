import { Button, Container, Heading, Input, InputGroup, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { resetPassword } from '../../redux/actions/profile'
import { ShowHide } from './Login'

const ResetPassword = () => {
  const [password, setPassword] = useState("")
  const [show, setShow] = useState(false)

  const params = useParams();
  const navigate = useNavigate();
  const { error, message, loading } = useSelector(state => state.profile);


  const dispatch = useDispatch();
  const submitHandler = e => {
    e.preventDefault();
    dispatch(resetPassword(params.token,password));

  };
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
      navigate('/login')
    }
  }, [dispatch, error, message,navigate]);


  const handleClick = () => {
    setShow(!show)
  }

  return (
    <Container py={"16"} h="90vh">
        <form onSubmit={submitHandler}>
           <Heading 
           children="Reset Password"
            my={"16"}
            textTransform={"uppercase"}
            textAlign={["center","left"]}
             />
             <VStack spacing={"8"}>
            <InputGroup>
            <Input
             required
               value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="New Password"
                type={show ? 'text' : 'password'}
                focusBorderColor="yellow.500"
             />
             <ShowHide show={show} handleClick={handleClick} />
             
            </InputGroup>
             <Button isLoading={loading} type='submit' w={"full"} colorScheme="yellow">
                Reset Password
             </Button>
             </VStack>

        </form>
    </Container>
  )
}

export default ResetPassword