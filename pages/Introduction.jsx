import {
  Heading,
  Stack,
  Img,
  Text,
  VStack,
  Box,
  Center,
  HStack,
  Button,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import React from "react";
import IntroductionCard from "./IntroductionCard";
import PrimaryButton from "./PrimaryButton";

function Introduction() {
  let bg_primary = "#ede1f7";
  return (
    <VStack
      paddingLeft={["0","0","30vw"]}
      width={"90vw"}
      justifyContent={"center"}
      spacing={10}
      paddingBottom={"10vh"}
    >
      <Box paddingTop={"10vh"}>
        {" "}
        <Img
          height={14}
          src={"https://wavemakerespons.vercel.app/images/logo.svg"}
          alt="company's logo"
        />
      </Box>
      <Stack padding={"10px"} spacing={5}>
        <Heading width={"100%"} align="center" fontSize={"2.5vw"}>
          World's First Ethereum Fair Launchpad Protocol for Everyone
        </Heading>
        <Text width={"100%"} align="center" fontSize={["14px", "16px", "18px"]}>
          WaveMaker helps everyone to create their own tokens and token sales in
          few seconds. Tokens created on WaveMaker will be verified and
          published on explorer websites.
        </Text>
      </Stack>
      <Center>
        <Img
          height={20}
          src={"https://wavemakerespons.vercel.app/images/coming-soon.png"}
        />
      </Center>
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
      <Wrap zIndex={2} spacing={["30px"]}>
        <WrapItem>
          <PrimaryButton title={"create token"} />
        </WrapItem>
        <WrapItem>
          <PrimaryButton title={"create presale"} />
        </WrapItem>
        <WrapItem>
          <PrimaryButton title={"create fairlaunch"} />
        </WrapItem>
        <WrapItem>
          <PrimaryButton title={"view all pools"} />
        </WrapItem>
      </Wrap>
      <Wrap width={"70vw"}>
        <WrapItem>
          <IntroductionCard
            title={"Why Wavemaker"}
            description={
              "WaveMaker helps everyone to create their own tokens and token sales in few seconds. Tokens created on WaveMaker will be verified and published on explorer websites."
            }
          />
        </WrapItem>
        <WrapItem>
          <IntroductionCard
            title={"One Suite for All"}
            description={
              "WaveMaker helps everyone to create their own tokens and token sales in few seconds. Tokens created on WaveMaker will be verified and published on explorer websites."
            }
          />
        </WrapItem>
      </Wrap>
    </VStack>
  );
}

export default Introduction;
