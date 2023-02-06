import React from "react";
import {Box,} from "@mui/material";
import Post from "./Post";



const Feed = () => {

  return (
    <Box  flex={4} p={{xs:1,sm:2}}>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </Box>
  );
};

export default Feed;
