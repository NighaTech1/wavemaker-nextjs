import { HStack, VStack ,Box,Img,Heading,Text} from "@chakra-ui/react";
import React from "react";

function IntroductionCard({ title, description }) {
  let bg_secondary = "#ede1f7";

  return (
    <Box
      width={"fit-content"}
      padding={["5px","10px","20px"]}
      marginLeft={["20px","20px","10px"]}
      bg={bg_secondary}
      borderRadius={"10px"}
      marginRight={"10px"}
    >
      <HStack width={["100%","100%","30vw"]}>
        <Img height={"10vw"} src="https://wavemakerespons.vercel.app/images/home_icon_one.svg" />
        <VStack>
          <Heading fontSize={["16px", "20px", "24px"]}  as="h1">{title}</Heading>
          <Text fontSize={["12px", "14px", "16px"]}>{description}</Text>
        </VStack>
      </HStack>
    </Box>
  );
}

export default IntroductionCard;
