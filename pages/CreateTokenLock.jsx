import React, { useState } from "react";
import TokenForm from "./TokenForm";
import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import TrendingChart from "./TrendingChart";
import PrimaryButton from "./PrimaryButton";
function CreateTokenLock(props) {
  const [formStage, setFormStage] = useState(1);
  const [name, setName] = useState(null);
  const [symbol, setSymbol] = useState(null);
  const [decimal, setDecimal] = useState(null);
  const [supply, setSupply] = useState(null);

  function _createTokenLock() {
    let obj = [name, symbol, decimal, supply];
    console.log("creating token lock with ", obj);
  }
  return (
    <VStack
      {...props}
      paddingLeft={["50px", "50px", "300px"]}
      align="left"
      paddingTop={"5vh"}
      spacing={10}
    >
      <TrendingChart />
      <HStack spacing={["3vw", "5vw", "20vw"]} marginRight={"5vw"}>
        <Heading>Create a Token Lock</Heading>
        <PrimaryButton title={"Connect Wallet"} />
      </HStack>
      <TokenForm
        inputs={["Token Name", "Token Symbol", "Token Decimal", "Token Supply"]}
        setters={[setName, setSymbol, setDecimal, setSupply]}
        clickHandler={_createTokenLock}
        button={"Create Token Lock"}
      />
    </VStack>
  );
}

export default CreateTokenLock;
