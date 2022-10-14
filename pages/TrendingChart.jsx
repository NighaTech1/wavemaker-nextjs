import {
  Heading,
  HStack,
  VStack,
  Img,
  Text,
  WrapItem,
  Wrap,
} from "@chakra-ui/react";
import React from "react";

function TrendingChart({ props }) {
  let trendingOptions = [
    "Wave",
    "Wave Maker",
    "JFY",
    "JXH",
    "HDH",
    ,
    "HSY",
    "JDY",
    ,
    "KDF",
    "HDY",
  ];
  let bg_secondary = "#ede1f7";

  return (
    <VStack
      scrollBehavior={"smooth"}
      backgroundColor={bg_secondary}
      borderRadius={"20px"}
      padding={"10px"}
      spacing={5}
      width={"90%"}

    >
      <HStack spacing={1}>
        <Heading fontSize={"16px"}>Trending</Heading>
        <Img
          height={8}
          src="https://wavemakerespons.vercel.app/images/trending_icon.png"
        />
      </HStack>
      <Wrap spacing={10}>
        {trendingOptions.map((item, index) => {
          return (
            <WrapItem key={"item" + item}>
              <HStack height={4} spacing={2}>
                <b>#{index + 1}</b>
                <Text>{item}</Text>
              </HStack>
            </WrapItem>
          );
        })}
      </Wrap>
    </VStack>
  );
}

export default TrendingChart;
