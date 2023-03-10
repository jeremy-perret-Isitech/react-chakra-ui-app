import { useState } from 'react';
import {
    Box,
    Heading,
    Text,
    Img,
    Flex,
    Center,
    useColorModeValue,
    HStack,
} from '@chakra-ui/react';
import { BsArrowUpRight, BsHeartFill, BsHeart } from 'react-icons/bs';

const MovieCard = (props: any) => {
    const [liked, setLiked] = useState(false);

    return (
        <Box
            w="xs"
            rounded={'sm'}
            my={5}
            mx={[0, 5]}
            overflow={'hidden'}
            bg="white"
            border={'1px'}
            borderColor="black"
            boxShadow={useColorModeValue('6px 6px 0 black', '6px 6px 0 cyan')}>
            <Box h={'200px'} borderBottom={'1px'} borderColor="black">
                <Img
                    src={
                        props.movie.url
                    }
                    roundedTop={'sm'}
                    objectFit="cover"
                    h="full"
                    w="full"
                    alt={'Blog Image'}
                />
            </Box>
            <Box p={4}>
                <Heading color={'black'} fontSize={'2xl'} noOfLines={1}>
                    {props.movie.name}
                </Heading>
                <Text color={'gray.500'} noOfLines={2}>
                    {props.movie.description}
                </Text>
            </Box>
            <HStack borderTop={'1px'} color="black">
                <Flex
                    p={4}
                    alignItems="center"
                    justifyContent={'space-between'}
                    roundedBottom={'sm'}
                    cursor={'pointer'}
                    w="full">
                    <Text fontSize={'md'} fontWeight={'semibold'}>
                        View more
                    </Text>
                    <BsArrowUpRight />
                </Flex>
            </HStack>
        </Box>
    );
}

export default MovieCard;