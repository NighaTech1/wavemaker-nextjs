import React, { useState } from "react";
import {
  HStack,
  VStack,
  Stack,
  RadioGroup,
  Radio,
  Heading,
} from "@chakra-ui/react";
import InputBox from "./InputBox";
import PrimaryButton from "./PrimaryButton";
import RadioSelection from "./RadioSelection";
function LaunchpadForm({ submitter, setters }) {
  const [vestingChoice, setVestingChoice] = useState(null);
  const [saleType, setSaleType] = useState(null);
  console.log("vesting status is", vestingChoice);
  function submitHandler() {
    console.log("submitting from launcgedpad");
    submitter();
  }

  return (
    <VStack align={"right"} spacing={10}>
      <InputBox
        onChange={setters[0]}
        title={"Enter Token Address"}
        subTitle={"Standard Token Minting Fees 0.01 ETH"}
      />
      <RadioSelection
        title={"Sale Type"}
        optionA="public"
        optionB="presale"
        stateUpdater={setSaleType}
      />
      <HStack>
        <InputBox
          onChange={setters[1]}
          sm={true}
          title={"Minimum Buy Threshold"}
        />
        <InputBox
          onChange={setters[2]}
          sm={true}
          title={"Maximum Buy Threshold"}
        />
      </HStack>
      <HStack>
        <InputBox onChange={setters[3]} sm={true} title={"Target Dex"} />
        <InputBox onChange={setters[4]} sm={true} title={"Refund Type"} />
      </HStack>
      <HStack>
        <InputBox
          onChange={setters[5]}
          sm={true}
          title={"Exchange Listing Rate"}
        />
        <InputBox
          onChange={setters[6]}
          sm={true}
          title={"Exchange Liquidity Rate"}
        />
      </HStack>

      <InputBox onChange={setters[7]} title={"Liquidity Lockup Time"} />
      <HStack>
        <InputBox onChange={setters[8]} sm={true} title={"Start Time"} />
        <InputBox onChange={setters[9]} sm={true} title={"End Time"} />
      </HStack>
      <RadioSelection
        title={"Vesting"}
        optionA="yes"
        optionB="no"
        stateUpdater={setVestingChoice}
      />
      {vestingChoice === "yes" && (
        <VStack>
          <HStack>
            <InputBox
              onChange={setters[10]}
              sm={true}
              title={"TGE Date ( UTC Time )"}
            />
            <InputBox onChange={setters[11]} sm={true} title={"TGE Percent"} />
          </HStack>
          <HStack>
            <InputBox onChange={setters[12]} sm={true} title={"Cycle (days)"} />
            <InputBox
              onChange={setters[13]}
              sm={true}
              title={"Cycle Release Percent"}
            />
          </HStack>{" "}
        </VStack>
      )}
      <PrimaryButton onClick={submitHandler} title={"Next"} />
    </VStack>
  );
}

export default LaunchpadForm;
