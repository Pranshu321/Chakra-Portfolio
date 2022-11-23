import { Flex, Heading, IconButton, Spacer, useColorMode, VStack } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FaSun, FaMoon, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Header from '../components/Header';
import Social from '../components/Social';
import Profile from '../components/Profile';

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <>
    <Head>
      <title>Pranshu | Portfolio</title>
    </Head>
    <VStack p={"5"}>
      <Flex w="100%">
        <Heading ml={"8"} fontWeight={"bold"} color={"cyan.400"} size={"md"}>
          imPranshu
        </Heading>
        <Spacer></Spacer>
        <IconButton icon={<FaLinkedin />} isRound='true' onClick={()=>window.open("https://www.linkedin.com/in/pranshu-jain-0742b1209/")}></IconButton>
        <IconButton ml={2} icon={<FaInstagram />} isRound='true' onClick={()=>window.open("https://www.instagram.com/pranshu_x_jain/")}></IconButton>
        <IconButton ml={2} icon={<FaGithub />} isRound='true' onClick={()=>window.open("https://github.com/Pranshu321")}></IconButton>
        <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
      </Flex>
      <Header />
      <Social />
      <Profile />
    </VStack>
    </>
  )
}
