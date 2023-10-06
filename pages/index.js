import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { Card } from "@/components/cards/card";
import { useState, useEffect } from "react";
import { CardSkeleton } from "@/components/cards/cardSkeleton";
import { Animes } from "@/components/blocks/Animes";
function Home({ animes }) {
  return (
    <>
      <Animes animes={animes} />
    </>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.

export async function getStaticProps() {
  // const api = await fetch('https://api.jikan.moe/v4/anime')
  const api = await fetch(process.env.NEXT_PUBLIC_API);
  const animes = await api.json();
  return {
    props: {
      animes,
    },
  };
}

export default Home;
