import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import DynamicTooltip from './DynamicTooltip';
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const[showToolTip,setShowToolTip] = useState(false);
  return (
    <>
      <span onMouseEnter={()=>(setShowToolTip(true))} onMouseLeave={()=>(setShowToolTip(false))}>Hover over this text to see the dynamic tooltip</span>
      {showToolTip && <DynamicTooltip/>}
    </>
  );
}
