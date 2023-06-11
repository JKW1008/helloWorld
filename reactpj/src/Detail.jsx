import { Box, Image, Text, VStack } from "@chakra-ui/react";
import Layout from "./Layout";

export default function Detail() {
  return (
    <Layout canGoBack title="Detail_Page">
      <VStack py={"110px"} bg={"gray.800"} spacing={8}>
        <Box>
          <Image src="https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"></Image>
        </Box>
        <VStack w={"full"} alignItems={"flex-start"} px={8} spacing={1}>
          <Text color={"white"} fontWeight={700} fontSize={20}>
            Apple
          </Text>
          <Text color={"white"}>Think Different</Text>
        </VStack>
        <Box w={"95$"} h={"2px"} bg={"gray.700"} />
        <VStack w={"full"} alignItems={"flex-start"} px={8} spacing={1}>
          <Text color={"white"} fontWeight={600}>
            Business Hours
          </Text>
          <Text color={"white"} fontSize={14}>
            10 : 00 ~ 22 : 00
          </Text>
        </VStack>
        <VStack w={"full"} alignItems={"flex-start"} px={8} spacing={1}>
          <Text color={"white"} fontWeight={600}>
            New Product
          </Text>
          <Text color={"white"} fontSize={14}>
            Mac mini
          </Text>
        </VStack>{" "}
        <VStack w={"full"} alignItems={"flex-start"} px={8} spacing={1}>
          <Text color={"white"} fontWeight={600}>
            New Event
          </Text>
          <Text color={"white"} fontSize={14}>
            2023.06 WWDC
          </Text>
        </VStack>
      </VStack>
    </Layout>
  );
}
