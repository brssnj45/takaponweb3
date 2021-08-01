import { verifyMessage } from "@ethersproject/wallet";
import { useWeb3React } from "@web3-react/core";
import Head from "next/head";
import Link from "next/link";
import Account from "../components/Account";
import ETHBalance from "../components/ETHBalance";
import useEagerConnect from "../hooks/useEagerConnect";
import usePersonalSign, { hexlify } from "../hooks/usePersonalSign";
import {
  Text,
  Flex
} from '@chakra-ui/react';
import React from 'react';
import Song from '../Components/Song';
import Controls from '../Components/Controls';
import { songsState, nftState } from '../utils/atom';
import { useRecoilValue, useRecoilState } from 'recoil';
import { RecoilRoot } from 'recoil';
import { useEffect } from 'react';

const Home = ({nft, song}) => {
  const { account, library } = useWeb3React();

  const triedToEagerConnect = useEagerConnect();

  const sign = usePersonalSign();
  

  const handleSign = async () => {
    const msg = "Next Web3 Boilerplate Rules";
    const sig = await sign(msg);
    console.log(sig);
    console.log("isValid", verifyMessage(msg, sig) === account);
  };

  const isConnected = typeof account === "string" && !!library;

  
  return (
    
    <>
      <Flex h='100vh' flexDir='column'>
        <Text fontWeight='200' textAlign='center' fontSize={30}>Songs</Text>
        {nft ?
          <>
            <Flex mb={10} ml={10} mr={10} flexDir='column'>
              {nft.map((data, index) => (
                <>
                  {data.name !== null
                    ?
                    <Song song={song} index={index} key={index} nft={data} />
                    : null}
                </>
              ))}
            </Flex>

          </>
          : <Text>Nothing to see here</Text>}
        <Controls song={song} />
      </Flex>
    </>
  )
                  }
  


export async function getServerSideProps() {
  
  const options = { method: 'GET' };
  const req1 = await fetch('https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20', options)
  const data1 = await req1.json()
  
  const req2 = await fetch('https://api.opensea.io/api/v1/asset/0x3e43944d977dea22511da6d33c0cab666a604515/110', options)
  const data2 = await req2.json()

  return {
    props: { 
      nft: data1.assets,
      song: data2 
    }
  }
}

export default Home