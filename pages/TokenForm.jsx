import React from "react";
import InputBox from "./InputBox";
import { Box, VStack } from "@chakra-ui/react";
import PrimaryButton from "./PrimaryButton";

function TokenForm({ button, inputs, clickHandler ,setters}) {
  return (
    <VStack align={"left"} spacing={10}>
      <InputBox onChange={setters?setters[0]:''}
        title={inputs[0]}
        subTitle={"Standard Token Minting Fees 0.01 ETH"}
      />
      <InputBox onChange={setters?setters[1]:''} title={inputs[1]} />
      <InputBox onChange={setters?setters[2]:''} title={inputs[2]} />
      <InputBox onChange={setters?setters[3]:''} title={inputs[3]} />
      <PrimaryButton
        onClick={clickHandler}
        title={button}
      />
    </VStack>
  );
}

export default TokenForm;
