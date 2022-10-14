import { HStack } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import CreateToken from "./CreateToken";
import Introduction from "./Introduction";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div >
        <Introduction />
    </div>
  );
}
