import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { Card } from "@/components/cards/card";
import { useState, useEffect } from "react";
import { CardSkeleton } from "@/components/cards/cardSkeleton";
import { Animes } from "@/components/blocks/Animes";
import Carousel from "@/components/blocks/Carousel";
import axios from "axios";
function Home({ animes, upcoming }) {
  return (
    <>
      <Carousel animes={upcoming} />
      <Animes animes={animes} />
    </>
  );
}

export async function getStaticProps() {
  const api = await fetch(`${process.env.NEXT_PUBLIC_API}?limit=10`);
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/v4/seasons/upcoming?limit=10`
  );
  const upcoming = res.data.data;
  const animes = await api.json();
  return {
    props: {
      upcoming,
      animes,
    },
  };
}

export default Home;
