import Head from 'next/head';
import { Box, Button } from '@mui/material';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box component="main">
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </Box>
    </>
  );
}