import React from "react";
import { VStack, HStack } from "@chakra-ui/react";
import InputBox from "./InputBox";
import PrimaryButton from "./PrimaryButton";
function AdditionalInfoForm({ prevStepper, nextStepper, setters }) {
  function submitHandler() {
    nextStepper();
  }
  return (
    <VStack align={"right"} spacing={10}>
      <InputBox onChange={setters[0]} title={"project description"} />

      <HStack>
        <InputBox onChange={setters[1]} sm={true} title={"Website link"} />
        <InputBox onChange={setters[2]} sm={true} title={"github link"} />
      </HStack>
      <HStack>
        <InputBox onChange={setters[3]} sm={true} title={"twitter link"} />
        <InputBox onChange={setters[4]} sm={true} title={"reddit link"} />
      </HStack>
      <HStack>
        <InputBox onChange={setters[5]} sm={true} title={"telegram link"} />
        <InputBox onChange={setters[6]} sm={true} title={"discord"} />
      </HStack>
      <HStack spacing={["10vw", "15vw", "15vw"]}>
        <PrimaryButton onClick={prevStepper} title={"Back"} />
        <PrimaryButton onClick={submitHandler} title={"Next"} />
      </HStack>
    </VStack>
  );
}

export default AdditionalInfoForm;
