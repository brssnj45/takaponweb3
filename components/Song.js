import React from 'react';

import {
    Flex,
    Text,
    Image
} from '@chakra-ui/react'

//audio
// import { playSong } from '../utils/audio'

//atom
import { currentSongState } from '../utils/atom'
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';
const Song = ({ nft, index }) => {
    const [currentSong, setCurrentSong] = useRecoilState(currentSongState)
    const playAudio = () => {
        setCurrentSong(nft)
    }
    return (
        <>
            <Flex onClick={playAudio} _hover={{ cursor: 'pointer', bg: 'gray.300' }} pl={5} pr={5} align='center' justifyContent='space-between' w='100%' rounded={5} bg='white' mt={2} h={50}>
                <Flex>
                    <Image src={nft.image_url} w={10} h={10} />
                    <Text ml={5} isTruncated>{index + 1}. {nft.name}</Text>
                </Flex>
                {/* <Text>{song.artist}</Text> */}
                {/* <Text>{song.duration}</Text> */}
            </Flex>
        </>
    )
}

export default Song