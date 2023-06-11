import { Avatar, Box, HStack, Text, VStack } from "@chakra-ui/react";
import Layout from "./Layout";

export default function Profile() {
  return (
    <Layout>
      <VStack
        as={"form"}
        bg={"black"}
        minH={"100vh"}
        py={"140px"}
        w={"full"}
        px={4}
        spacing={6}
      >
        <VStack spacing={6}>
          <Avatar
            src="https://cdn.ceomagazine.co.kr/news/photo/202208/31100_23173_4747.png"
            size={"xl"}
            color={"black"}
            bg={"white"}
            name="OffSet"
          />
          <VStack spacing={0} color={"#eee"}>
            <Text fontSize={20} fontWeight={600}>
              Timothy Donald "Tim" Cook
            </Text>
            <Text fontSize={14}>Apple CEO</Text>
          </VStack>
          <HStack w={"80%"} color={"#eee"}>
            <Box
              border={"1px"}
              rounded={"xl"}
              px={"20px"}
              py={"1"}
              w={"140px"}
              align={"center"}
              fontWeight={600}
              fontSize={14}
              textTransform={"uppercase"}
            >
              Contact
            </Box>
            <Box
              border={"1px"}
              rounded={"xl"}
              px={"20px"}
              py={"1"}
              w={"140px"}
              align={"center"}
              fontWeight={600}
              fontSize={14}
              textTransform={"uppercase"}
            >
              Follow
            </Box>
          </HStack>
        </VStack>
      </VStack>
    </Layout>
  );
}
