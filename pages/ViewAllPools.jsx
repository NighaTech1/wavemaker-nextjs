import React from "react";
import TokenForm from "./TokenForm";
import {
  Box,
  Heading,
  HStack,
  Text,
  VStack,
  Img,
  Center,
  Stack,
} from "@chakra-ui/react";
import TrendingChart from "./TrendingChart";
import PrimaryButton from "./PrimaryButton";

function ViewAllPools(props) {
  return (
    <VStack
      {...props}
      paddingLeft={["50px", "50px", "300px"]}
      align="left"
      paddingTop={"10vh"}
      spacing={10}
    >
      <Center>
        <VStack spacing={10}>
          <Heading>View All Pools</Heading>

          <Img
            height={20}
            src={"https://wavemakerespons.vercel.app/images/coming-soon.png"}
          />
          <Text width={"80vw"} align="center" fontSize={["14", "16", "18px"]}>
            We're almost ready! Stay in touch with our{" "}
            <a
              style={{ textDecoration: "underline" }}
              href="https://t.me/wavemaker_official"
              target={"_blank"}
            >
              Telegram
            </a>{" "}
            and{" "}
            <a
              style={{ textDecoration: "underline" }}
              href="https://twitter.com/Wavemaker_Sale"
              target={"_blank"}
            >
              Twitter
            </a>{" "}
            for more updates.
          </Text>
          <TrendingChart />
        </VStack>
      </Center>
    </VStack>
  );
}

export default ViewAllPools;
