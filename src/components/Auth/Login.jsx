import React, { useState } from 'react'
import { Box, Button, Container, FormLabel, Heading, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { login } from '../../redux/actions/user'
import { useDispatch } from 'react-redux'
import {FaEye, FaEyeSlash} from 'react-icons/fa'


export const ShowHide = ({ show, handleClick}) => {
  return(
    <InputRightElement mr={2}>
    <Button h='1.75rem' size='sm' onClick={handleClick}>
      {show ? <FaEyeSlash /> : <FaEye />}
    </Button>
    </InputRightElement>
  )
}

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false)


    const dispatch = useDispatch()

    const submitHandler = (e) => {
       e.preventDefault()
       dispatch(login(email,password));
    }

    const handleClick = () => {
      setShow(!show)
    }

  return (
    <Container h={"95vh"}>
        <VStack h={"full"} justifyContent="center" spacing={"16"}>
         <Heading children={"Welcome to CourseBundler"} />
         <form style={{ width: "100%"}} onSubmit={submitHandler}>
           <Box my={"4"}>
           <FormLabel htmlFor='email' children="Email Address" />
            <Input
             required
               value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="abc@gmail.com"
                type={"email"}
                focusBorderColor="yellow.500"
             />
           </Box>
           <Box my={"4"}>
           <FormLabel htmlFor='password' children="Password" />
           <InputGroup>
           <Input
             required
               value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter Your Password"
                type={show ? 'text' : 'password'}
                focusBorderColor="yellow.500"
             />
             
             <ShowHide show={show} handleClick={handleClick} />
           </InputGroup>
           </Box>
           <Box>
             <Link to={"/forgetpassword"}>
                <Button fontSize={"sm"} variant="link">
                  Forget Password?
                </Button>
             </Link>
           </Box>
           <Button my={"4"} colorScheme="yellow" type='submit'>
             Login
           </Button>
           <Box my={"4"}>
              New User ? <Link to={"/register"}>
                <Button colorScheme={"yellow"} variant="link">
                Sign Up
                </Button> {" "}
                here
              </Link>
           </Box>
         </form>
        </VStack>
    </Container>
  )
}



export default Login