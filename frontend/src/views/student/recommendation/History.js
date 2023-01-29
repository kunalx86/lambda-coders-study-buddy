import React from 'react'
import {
    IconButton,
    Box,
    CloseButton,
    Flex,
    Icon,
    useColorModeValue,
    Link,
    Drawer,
    DrawerContent,
    Text,
    useDisclosure,
    Image,
    Badge


} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { SimpleGrid } from '@chakra-ui/react'




import { FcSportsMode } from "react-icons/fc"
import { MdVolunteerActivism, MdOutlineComputer } from "react-icons/md"
import { FaBusinessTime } from "react-icons/fa";
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import RecomSidebar from './RecomSlidebar';
import data from "./data"
const History = () => {
    const redirectToCourse = (link) => {
        window.open(link, "_self")
    }
    return (
        <>
            <RecomSidebar />
            <SimpleGrid columns={3}>
                {
                    data.map((_post) => (
                        <>
                            {_post.Subject === "History" ? (
                                <Box ml={{ base: 0, md: 60 }} p="4" onClick={() => redirectToCourse(_post.Link)}>
                                    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                                        <Image src="https://media.sproutsocial.com/uploads/2022/04/Best-times-to-post-2022_BTTP-Social-Media.jpg" alt="image" />
                                        <Box p='6'>
                                            <Box display='flex' alignItems='baseline'>
                                                <Badge borderRadius='full' px='2' colorScheme='teal'>
                                                    New
                                                </Badge>

                                            </Box>

                                            <Box
                                                mt='1'
                                                fontWeight='semibold'
                                                as='h4'
                                                lineHeight='tight'
                                                isTruncated
                                            >
                                                {_post.Website}
                                            </Box>

                                            <Box>
                                                {_post.Name}
                                            </Box>


                                        </Box>
                                    </Box>

                                </Box>
                            ) : ""}

                        </>
                    ))
                }
            </SimpleGrid>

        </>

    );
}

export default History