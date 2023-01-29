import HomeLayout from 'layouts/home'
import React from 'react'
import Quiz from 'react-quiz-component'
import test from "./Test";
import { useHistory } from "react-router-dom";
import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react';

const TestPage = () => {

    const openTest = () => {
        window.open("/student/test1", "_self")
    }


    return (
        <>
            <HomeLayout />
            <div >
                <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
                    <Flex p={8} flex={1} align={'center'} justify={'center'}>
                        <Stack spacing={6} w={'full'} maxW={'lg'}>
                            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                                <Text
                                    as={'span'}
                                    position={'relative'}
                                    _after={{
                                        content: "''",
                                        width: 'full',
                                        height: useBreakpointValue({ base: '20%', md: '30%' }),
                                        position: 'absolute',
                                        bottom: 1,
                                        left: 0,
                                        bg: 'blue.400',
                                        zIndex: -1,
                                    }}>
                                    TESTS
                                </Text>
                                <br />{' '}
                                <Text color={'blue.400'} as={'span'}>
                                    TO IMPROVE
                                </Text>{' '}
                            </Heading>
                            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                                Tests are an opportunity to showcase your knowledge and understanding of the material. Embrace the challenge and trust in the hard work you've put in. Remember, tests are a stepping stone to success, not a roadblock.
                            </Text>
                            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                                <Button
                                    rounded={'full'}
                                    bg={'blue.400'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'blue.500',
                                    }}
                                    onClick={openTest}

                                >
                                    Weekly Test
                                </Button>
                            </Stack>
                        </Stack>
                    </Flex>
                    <Flex flex={1}>
                        <Image
                            alt={'Login Image'}
                            objectFit={'cover'}
                            src={
                                'https://images.pexels.com/photos/4022332/pexels-photo-4022332.jpeg'
                            }
                        />
                    </Flex>
                </Stack>
            </div>
        </>
    )
}

export default TestPage


