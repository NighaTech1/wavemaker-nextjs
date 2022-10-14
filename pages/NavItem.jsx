import { HStack, Img, Box } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

function NavItem(props) {
  return (
    <Link href={props.href}>
      <HStack
        width={"100%"}
        _hover={{
          backgroundColor: "RGBA(40,17,255,0.1)",
          cursor: "pointer",
        }}
        padding={["0px", "5px", "30px"]}
        display={"flex"}
        justifyContent={"left"}
      >
        <Img height={6} marginRight={[0, 1, 2]} src={props.img} />
        <Box fontSize={["10px", "12px", "16px"]}>{props.title}</Box>
      </HStack>
    </Link>
  );
}

export default NavItem;
