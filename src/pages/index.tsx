import Head from "next/head";
import { Box, Button } from "@mui/material";

const Top = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Box component="main">
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </Box>
    </>
  );
};

export default Top;
