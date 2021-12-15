import React from 'react';
import './Register.css';
import { Box, Button, Container, Flex, Heading, Input, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Formik, Form} from 'formik';
import * as Yup from 'yup';
import TextField from './TextField';


function Register() {
    
    return (
        <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
            email: Yup.string().email("invalid email").required("email required"),
            password: Yup.string()
          .required("Password required")
          .min(6, "Password is too short"),
        })}
        onSubmit={(values, actions) =>{
            alert(JSON.stringify(values, null, 2));
            actions.resetForm();
        }}
          
        >
            {formik =>(
        <div className='register' onSubmit={formik.handleSubmit}>
            
            <Box bgColor="#f0f2f5" minHeight="100vh" width="100vw" display="flex" alignItems="center" justifyContent="center">
                <Box display="flex" width="1000px" alignItems="flex-start" justifyContent="center">
                    <Box width="50%">
                        <Text fontSize="58px" fontWeight="bold" marginTop="30px" color="#1877f2">facebook</Text> 
                        <Text fontSize='28px'>Facebook helps you connect and share with the people in your life.</Text>
                    </Box>
                    <Form>
                    <Box width="320px" minHeight="400px" marginRight="20px">
                        <Box minHeight="315px" backgroundColor="#fff" padding="18px" borderRadius="8px" boxShadow="0 2px 8px 0 rgba(0, 0, 0, 0.12), 0 4px 20px 0 rgba(0, 0, 0, 0.1)">
                        
                            
                            <TextField name="email" placeholder="Email address or Phone Number" type="email" />
                          
                          
                            
                            <TextField name="password" type="password" placeholder="Password" />
                        
                        
                            <Button type='submit' display="flex" fontSize="18px" borderRadius="6px" fontWeight="bolder" justifyContent="center" paddingTop="15px" paddingBottom="15px"  width="100%" backgroundColor="#1877f2" colorScheme='teal' variant='solid'>Log In</Button>
                            <Text fontSize="15px" width="100%" display="flex" justifyContent="center" marginBottom="25px" marginTop="15px" color="#1877f2">Forgotten Password?</Text>
                            <hr />
                            <Button type='submit' display="flex" justifyContent="center" marginLeft="50" marginTop="25px" marginBottom="10px" width="60%" backgroundColor="green" colorScheme='teal' variant='solid'>
                                Create New Account
                            </Button>
                        </Box> 
                        <div id="create-a-page-section">
                            <span className="link" id="create-a-page-link">Create a Page</span>
                            <span> for a celebrity, band or business.</span>
                        </div> 
                    </Box>
                    </Form>
                </Box>
            </Box>
            
        </div>
        )}
        </Formik>
    )
}

export default Register
