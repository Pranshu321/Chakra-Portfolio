import { Circle, Stack, useColorMode, useMediaQuery , Flex , Box , Button , Text , Image} from '@chakra-ui/react'
import React from 'react'

const Header = () => {
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
    return (
        <Stack>
            <Circle position="absolute" bg="blue.100" opacity="0.1" w="300px" h="300px" alignSelf="flex-end" />
            <Flex direction={isNotSmallerScreen ? "row" : "column"}
                spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
                alignSelf="flex-start">
                <Box mt={isNotSmallerScreen ? "0" : 16} align='flex-start'>
                    <Text fontSize="5xl" fontWeight="semibold">Hi, I am</Text>
                    <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text' >Pranshu Jain</Text>
                    <Text color={isDark ? "gray.200" : "gray.500"}>SDE - Parentheses Labs
                        Building @MERN Applications, Open Source Contributor & Competetive Coder </Text>
                    <Button mt={8} colorScheme="blue" onClick={() =>
                        window.open("https://drive.google.com/uc?export=download&id=160272MY6-nRE5OW6mGdx5av28VRa45tI")
                    }>Download Resume</Button>

                </Box>
                <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
                    mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full'
                    backgroundColor="transparent" boxShadow="lg"
                    boxSize="300px" src='https://user-images.githubusercontent.com/86917304/173824408-af3a70ec-c39a-4361-bc7c-3d9c5bbc6333.png' />
            </Flex>
        </Stack>
    )
}

export default Header
