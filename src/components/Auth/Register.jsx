import React, { useState } from 'react'
import { Avatar, Box, Button, Container, FormLabel, Heading, Input, InputGroup, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { register } from '../../redux/actions/user'
import { ShowHide } from './Login'

export const fileUploadCss = {
    cursor: "pointer",
    marginLeft: "-5%",
    width: "110%",
    border: "none",
    height: "100%",
    color: "#ECC94B",
    backgroundColor: "white"
}

const fileUploadStyle = {
    "&::file-selector-button": fileUploadCss,
}

const Register = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [imagePrev, setImagePrev] = useState("")
    const [image, setImage] = useState("")
    const [show, setShow] = useState(false)


    const dispatch = useDispatch();

    const changeFileHandler = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImagePrev(reader.result)
            setImage(file)
        }
    }
    const handleClick = () => {
      setShow(!show)
    }

    const submitHandler = (e) => {
      e.preventDefault();
      const myForm = new FormData();
      myForm.append("name",name)
      myForm.append("email",email)
      myForm.append("password",password)
      myForm.append("file",image)
      dispatch(register(myForm))
    }

  return (
    <Container h={"95vh"}>
        <VStack h={"full"} justifyContent="center" spacing={"16"}>
         <Heading children={"Welcome to CourseBundler"} />
         <form onSubmit={submitHandler} style={{ width: "100%"}}>
            <Box my={"4"} display="flex" justifyContent={"center"} >
                <Avatar src={imagePrev} size="2xl" />
            </Box>
           <Box my={"4"}>
           <FormLabel htmlFor='name' children="Name" />
            <Input
             required
              id='name'
               value={name}
                onChange={e => setName(e.target.value)}
                placeholder="abc"
                type={"text"}
                focusBorderColor="yellow.500"
             />
           </Box>
           <Box my={"4"}>
           <FormLabel htmlFor='email' children="email address" />
            <Input
             required
              id='email'
               value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="abc@gmail"
                type={"email"}
                focusBorderColor="yellow.500"
             />
           </Box>
           <Box my={"4"}>
           <FormLabel htmlFor='password' children="Password" />
            <InputGroup>
            <Input
             required
              id='password'
               value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter Your Password"
                type={show ? 'text' : 'password'}
                focusBorderColor="yellow.500"
             />
             <ShowHide show={show} handleClick={handleClick} />
            </InputGroup>
           </Box>
           <Box my={"4"}>
           <FormLabel htmlFor='chooseAvatar' children="Choose Avatar" />
            <Input
            accept="image/*"
             required
              id='chooseAvatar'
                type={"file"}
                focusBorderColor="yellow.500"
                css={fileUploadStyle}
                onChange={changeFileHandler}
             />
           </Box>
           <Button my={"4"} colorScheme="yellow" type='submit'>
             Sign Up
           </Button>
           <Box my={"4"}>
              Already Signed Up ? <Link to={"/login"}>
                <Button colorScheme={"yellow"} variant="link">
                 Login
                </Button> {" "}
                here
              </Link>
           </Box>
         </form>
        </VStack>
    </Container>
  )
}

export default Register