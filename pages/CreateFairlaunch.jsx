import React, { useState } from "react";
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
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import TrendingChart from "./TrendingChart";
import PrimaryButton from "./PrimaryButton";
import FormStage from "./FormStage";
import LaunchpadForm from "./LaunchpadForm";
import AdditionalInfoForm from "./AdditionalInfoForm";

let titles = [
  "name",
  "symbol",
  "decimals",
  "supply",
  "token address",
  "Minimum Threshold",
  "Maximum Threshold",
  "target dex",
  "refund type",
  "exchange Liquidity Rate",
  "exchange Listing Rate",
  "liquidity Lockup Time",
  "start Time",
  "end Time",
  "vesting",
  "tge Percent",
  "tge Date",
  "cycle Days",
  "cycle Release Percent",
  "project Description",
  "website Link",
  "github Link",
  "reddit Link",
  "discord Link",
  "telegram Link",
];

function CreateFairlaunch(props) {
  const [formStage, setFormStage] = useState(1);
  const [name, setName] = useState(null);
  const [symbol, setSymbol] = useState(null);
  const [decimal, setDecimal] = useState(null);
  const [supply, setSupply] = useState(null);
  const [tokenAddress, setTokenAddress] = useState(null);
  const [minThreshold, setMinThreshold] = useState(null);
  const [maxThreshold, setMaxThreshold] = useState(null);
  const [targetDex, setTargetDex] = useState(null);
  const [refundType, setRefundType] = useState(null);
  const [exchangeListingRate, setExchangeListingRate] = useState(null);
  const [exchangeLiquidityRate, setExchangeLiquidityRate] = useState(null);
  const [liquidityLockupTime, setLiquidityLockupTime] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [vesting, setVesting] = useState(null);
  const [tgePercent, setTgePercent] = useState(null);
  const [tgeDate, setTgeDate] = useState(null);
  const [cycleDays, setCycleDays] = useState(null);
  const [cycleReleasePercent, setCycleReleasePercent] = useState(null);
  const [projectDescription, setProjectDescription] = useState(null);

  const [websiteLink, setWebsiteLink] = useState(null);
  const [githubLink, setGithubLink] = useState(null);
  const [redditLink, setRedditLink] = useState(null);
  const [twitterLink, setTwitterLink] = useState(null);
  const [discordLink, setDiscordLink] = useState(null);
  const [telegramLink, setTelegramLink] = useState(null);

  const [GrandArray, setGrandArray] = useState([]);

  function nextStage() {
    setFormStage((prev) => prev + 1);
  }

  function createFairlaunchNow(){
    console.log("creating Fairlaunch with ",GrandArray);
  }

  function GrandSubmitter() {
    let values = [
      name,
      symbol,
      decimal,
      supply,
      tokenAddress,
      minThreshold,
      maxThreshold,
      targetDex,
      refundType,
      exchangeLiquidityRate,
      exchangeListingRate,
      liquidityLockupTime,
      startTime,
      endTime,
      vesting,
      tgePercent,
      tgeDate,
      cycleDays,
      cycleReleasePercent,
      projectDescription,
      websiteLink,
      githubLink,
      redditLink,
      discordLink,
      telegramLink,
    ];

    console.log(values);
    setGrandArray(values);
  }

  return (
    <VStack
      {...props}
      paddingLeft={["50px", "50px", "300px"]}
      align="left"
      paddingTop={"5vh"}
      paddingBottom={"10vh"}
    >
      <Center>
        <VStack spacing={10}>
          <Heading>Create a Fairlaunch</Heading>

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
      <Stack
        paddingTop={"5vh"}
        direction={["column", "column", "row"]}
        spacing={[20, 10, 5]}
      >
        <VStack paddingTop={["10vh", "5vh", "2vh"]} align={"left"}>
          <FormStage
            title={"Verify Token"}
            subtitle={"Enter the Token Address and Verify"}
            isBold={formStage == 1 && true}
          />
          <Img
            height={20}
            src="https://wavemakerespons.vercel.app/images/down_arrow.svg"
          />
          <FormStage
            title={"DeFi Launchpad Info"}
            subtitle={
              "Enter the launchpad information that you want to raise , that should be enter all details about your Fairlaunch"
            }
            isBold={formStage == 2 && true}
          />
          <Img
            height={20}
            src="https://wavemakerespons.vercel.app/images/down_arrow.svg"
          />

          <FormStage
            title={"Add Additional Info"}
            subtitle={"Let people know who you are"}
            isBold={formStage == 3 && true}
          />
          <Img
            height={20}
            src="https://wavemakerespons.vercel.app/images/down_arrow.svg"
          />

          <FormStage
            title={"Finish"}
            subtitle={"Review Your Info"}
            isBold={formStage == 4 && true}
          />
        </VStack>
        <Box paddingRight={"5vw"}>
          {formStage == 1 && (
            <TokenForm
              inputs={[
                "Token Name",
                "Token Symbol",
                "Token Decimal",
                "Token Supply",
              ]}
              setters={[setName, setSymbol, setDecimal, setSupply]}
              clickHandler={nextStage}
              button={"Next"}
            />
          )}
          {formStage == 2 && (
            <LaunchpadForm
              setters={[
                setTokenAddress,
                setMinThreshold,
                setMaxThreshold,
                setTargetDex,
                setRefundType,
                setExchangeListingRate,
                setExchangeLiquidityRate,
                setLiquidityLockupTime,
                setStartTime,
                setEndTime,
                setTgeDate,
                setTgePercent,
                setCycleDays,
                setCycleReleasePercent,
              ]}
              submitter={nextStage}
            />
          )}
          {formStage == 3 && (
            <AdditionalInfoForm
              setters={[
                setProjectDescription,
                setWebsiteLink,
                setGithubLink,
                setTwitterLink,
                setRedditLink,
                setTelegramLink,
                setDiscordLink,
              ]}
              prevStepper={() => setFormStage((prev) => prev - 1)}
              nextStepper={() => {
                nextStage();
                GrandSubmitter();
              }}
            />
          )}
          {formStage == 4 && (
            <VStack spacing={20}>
              <VStack align={"left"}>
                {GrandArray?.map((item, index) => {
                  return (
                    <HStack>
                      <b style={{ textTransform: "capitalize" }}>
                        {titles[index]} :{" "}
                      </b>
                      <p>{item}</p>
                    </HStack>
                  );
                })}
              </VStack>
              <PrimaryButton
                onClick={createFairlaunchNow}
                title={"Create Fairlaunch Now"}
              />
            </VStack>
          )}
        </Box>
      </Stack>
    </VStack>
  );
}

export default CreateFairlaunch;
