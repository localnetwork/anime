import React from "react";
import { TopRated } from "../blocks/TopRated";
import { TopAiring } from "../blocks/TopAiring";

export const Sidebar = () => {
  return (
    <>
      <TopAiring className="mb-[30px]" />
      <TopRated />
    </>
  );
};
