import React, { useState } from "react";
import { Box, Img, Stack } from "@chakra-ui/react";
import { HStack, VStack } from "@chakra-ui/react";
import NavItem from "./NavItem";
import { Grid } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  let bg_secondary = "#ede1f7";
  let NavMenu = (
    <Box>
      <VStack
        paddingTop={"10vh"}
        spacing={10}
        width={["40vw", "40vw", "15vw"]}
        minW={"250px"}
        bg={bg_secondary}
        height={"100vh"}
      >
        <HStack>
          <Img src={"https://wavemakerespons.vercel.app/images/logo.svg"} />
        </HStack>
        <Stack>
          <NavItem
            href="/"
            title={"Home"}
            img={"https://wavemakerespons.vercel.app/images/home_icon.png"}
          />
          <NavItem
           href="/CreateToken"
            title={"Create Token"}
            img={
              "https://wavemakerespons.vercel.app/images/create_token_icon.png"
            }
          />
          <NavItem
           href="/CreatePresale"
            title={"Create Pre-sale"}
            img={
              "https://wavemakerespons.vercel.app/images/create_presale_icon.png"
            }
          />
          <NavItem
           href="/CreateFairlaunch"
            title={"Create Fair Launch"}
            img={
              "https://wavemakerespons.vercel.app/images/fair_launch_icon.png"
            }
          />
          <NavItem
          href="/CreateTokenLock"
            title={"Create Token Lock"}
            img={
              "https://wavemakerespons.vercel.app/images/view_all_pools_icon.png"
            }
          />
          <NavItem
           href="/ViewAllPools"

            title={"View All Pools"}
            img={
              "https://wavemakerespons.vercel.app/images/view_all_pools_icon.png"
            }
          />
        </Stack>
      </VStack>
    </Box>
  );

  return (
    <Box zIndex={10} position="fixed" top={"0"}>
      <Box
        display={["block", "block", "none"]}
        background={showNavbar ? bg_secondary : "none"}
      >
        <Button
          background={"transparent"}
          onClick={() => setShowNavbar((prev) => !prev)}
        >
          <Img height={8} src="./res.png" />
        </Button>
        {showNavbar && NavMenu}
      </Box>
      <Box display={["none", "none", "flex"]}>{NavMenu}</Box>
      
    </Box>
  );
}

export default Navbar;
