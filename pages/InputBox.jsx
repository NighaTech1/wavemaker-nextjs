import React from "react";
import { Box, Text, Input } from "@chakra-ui/react";
function InputBox({ title, subTitle, sm,onChange }) {

  return (
    <Box>
      <Input
        onChange={(e)=>onChange(e.target.value)}
        width={sm ? ["40vw","40vw","20vw"] : "40vw"}
        placeholder={title}
        borderRadius={"20px"}
        padding={"8px"}
        paddingBottom={"5px"}
        boxShadow={"1px 2px 1px 2px lightgrey"}
        _placeholder={{ opacity: 1, color: "gray.500" }}
        textTransform={"capitalize"}
        fontSize={"14px"}
        fontWeight={"400"}
      />
      {subTitle && (
        <Text
          padding={"8px"}
          paddingBottom={"0"}
          fontSize={"14px"}
          fontWeight={"300"}
          color={"grey"}
          textTransform={"capitalize"}
        >
          {subTitle}
        </Text>
      )}
    </Box>
  );
}

export default InputBox;
