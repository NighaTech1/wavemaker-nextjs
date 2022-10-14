import React, { useState } from "react";
import { Heading, HStack, Stack, Radio, RadioGroup } from "@chakra-ui/react";
function RadioSelection({ title, optionA, optionB, stateUpdater }) {
  let bg_primary = "#a697ff";
  let textColor = "white";

  return (
    <HStack width={"30vw"} justify={"space-between"}>
      <Heading fontSize={"16px"}>{title}</Heading>
      <RadioGroup defaultValue="2">
        <Stack
          width={"20vw"}
          justify={"space-between"}
          marginRight={"4vw"}
          direction="row"
        >
          <Radio
            textTransform={"capitalize"}
            onChange={() => stateUpdater(optionA)}
            borderColor={bg_primary}

            value="1"
          >
            <p style={{ textTransform: "capitalize" }}> {optionA}</p>
          </Radio>
          <Radio
            onChange={() => stateUpdater(optionB)}
            borderColor={bg_primary}
            value="2"
          >
            <p style={{ textTransform: "capitalize" }}> {optionB}</p>
          </Radio>
        </Stack>
      </RadioGroup>
    </HStack>
  );
}

export default RadioSelection;
