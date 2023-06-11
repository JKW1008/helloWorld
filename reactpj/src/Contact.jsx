import {
  Button,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Layout from "./Layout";
import { useState } from "react";

export default function Contact() {
  const name = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    console.log("function");
  };

  return (
    <Layout>
      <VStack
        as={"form"}
        py={"140px"}
        w={"full"}
        alignItems={"center"}
        px={4}
        spacing={6}
        bg={"#111"}
        color={"white"}
      >
        <Text fontWeight={700} fontSize={20} alignItems={"center"}>
          Application for free consultation
        </Text>
        <VStack w={"full"} alignItems={"flex-start"}>
          <Text fontWeight={600}>Name</Text>
          <Input
            onChange={handleChange}
            value={name}
            placeholder="Please enter your name"
            bg={"#ddd"}
            color={"#111"}
          />
        </VStack>
        <VStack w={"full"} alignItems={"flex-start"}>
          <Text fontWeight={600}>Phone Number</Text>
          <Input
            placeholder="Please enter your Phone Number"
            bg={"#ddd"}
            color={"#111"}
          />
        </VStack>
        <VStack w={"full"} alignItems={"flex-start"}>
          <Text fontWeight={600}>E-mail</Text>
          <Input
            placeholder="Please enter your E-mail"
            bg={"ddd"}
            color={"#111"}
          />
        </VStack>
        <RadioGroup>
          <Stack direction={"row"}>
            <Radio value="1" checked="checked">
              Male
            </Radio>
            <Radio value="2">Female</Radio>
          </Stack>
        </RadioGroup>
        <Button colorScheme="#ccc" border={"1px solid #ccc"}>
          Transferring
        </Button>
      </VStack>
    </Layout>
  );
}
