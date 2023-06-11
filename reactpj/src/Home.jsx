import { Box, Grid, GridItem, Text, VStack } from "@chakra-ui/react";
import Layout from "./Layout";
import { Link } from "react-router-dom";

const newProduct = [
  {
    text: "Apple 가로수길",
    image:
      "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20180128_237%2F1517108629009CSdhH_JPEG%2FmQkMy6BnM003dbyP7f5fPAzr.jpg",
  },
  {
    text: "Apple 잠실",
    image:
      "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220927_249%2F1664248268208wNhhG_PNG%2FApple_Jamsil_large_2x.png",
  },
  {
    text: "Apple 명동",
    imgae:
      "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220411_61%2F1649646676233lJcnW_JPEG%2F6383438d-48c3-3745-9937-df8de7728e43_R738_medium_2x.jpg",
  },
  {
    text: "Apple 여의도",
    imgae:
      "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210831_249%2F1630395205284faOUK_JPEG%2FOkZlyWpXVa0W8folt-JRHNHx.jpg",
  },
];

const dataTour = [
  {
    text: "MacBook",
    image:
      "https://images.unsplash.com/photo-1542393545-10f5cde2c810?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=930&q=80",
  },
  {
    text: "Mac",
    image:
      "https://images.unsplash.com/photo-1622774098992-522026385372?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    text: "I Pad",
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1630&q=80",
  },
  {
    text: "I Phone",
    image:
      "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
];

export default function Home() {
  return (
    <Layout>
      <VStack
        spacing={16}
        w={"inherit"}
        py={"140px"}
        px={4}
        alignItems={"flex-start"}
      >
        <VStack w={"full"} alignItems={"flex-start"}>
          <Text fontWeight={600} fontSize={24}>
            New Propdect
          </Text>
          <Grid gridTemplateColumns={"repeat(2, 1fr)"} gap={3} w={"full"}>
            {newProduct.map((prodcut, i) => (
              <GridItem
                key={i}
                h={"200px"}
                border={"1px"}
                rounded={"md"}
                borderColor={"gray.300"}
                backgroundImage={`url(${prodcut.image})`}
                backgroundSize={"cover"}
                backgroundPosition={"center center"}
                position={"relative"}
                overflow={"hidden"}
              >
                <Link to={"/detail"}>
                  <Box
                    position={"absolute"}
                    top={0}
                    left={0}
                    w={"full"}
                    h={"full"}
                    bgGradient={
                      "linear(to-b, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7))"
                    }
                  >
                    <Text
                      color={"white"}
                      position={"absolute"}
                      w={"full"}
                      bottom={0}
                      align={"center"}
                      fontWeight={800}
                      py={4}
                    >
                      {prodcut.text}
                    </Text>
                  </Box>
                </Link>
              </GridItem>
            ))}
          </Grid>
        </VStack>
        {/* Event container */}
        <VStack w={"full"} alignItems={"flex-start"}>
          <Text fontWeight={600} fontSize={24}>
            Event
          </Text>
          <Grid w={"full"} gap={5}>
            {dataTour.map((item, i) => (
              <GridItem
                key={i}
                rounded={"lg"}
                w={"full"}
                h={"120px"}
                backgroundImage={`url(${item.image})`}
                backgroundSize={"cover"}
                backgroundPosition={"center center"}
                position={"relative"}
              >
                <Link to={"/detail"}>
                  <Box
                    position={"absolute"}
                    top={0}
                    left={0}
                    w={"full"}
                    h={"full"}
                    bgGradient={
                      "linear(to-b, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.4))"
                    }
                  >
                    <Text
                      position={"absolute"}
                      top={"50%"}
                      left={"50%"}
                      transform={"traslate(-50%, -50%)"}
                      fontWeight={600}
                      fontSize={24}
                      color={"black"}
                    >
                        {item.text}
                    </Text>
                  </Box>
                </Link>
              </GridItem>
            ))}
          </Grid>
        </VStack>
      </VStack>
    </Layout>
  );
}
