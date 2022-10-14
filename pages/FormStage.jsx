import React from "react";
import { Box,Heading } from "@chakra-ui/react";
function FormStage({ title, subtitle, isBold }) {
  return (
    <Box width={"20vw"}>
      {isBold ? (
        <Heading fontSize={"16px"}>{title}</Heading>
      ) : (
        <p style={{ fontSize: "16px" }}>{title}</p>
      )}
      <p style={{ fontSize: "12px" }}>{subtitle}</p>
    </Box>
  );
}

export default FormStage;
