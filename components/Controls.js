import React, { useEffect, useState } from 'react'

import {
    Flex,
    Icon,
    Text,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    Box
} from '@chakra-ui/react'

import { MdGraphicEq } from "react-icons/md";

import { Play, Pause, ArrowLeft, ArrowRight } from 'react-feather'

import { currentSongState } from '../utils/atom'

import { useRecoilValue } from 'recoil';

const Controls = ({ song }) => {
    const [playing, setPlaying] = useState(false)
    const currentSong = useRecoilValue(currentSongState)
    
    const [audio, setAudio] = useState(null)
    useEffect(() => {
        setAudio(new Audio(song.animation_url))
    }, [])    
    const toggleSong = () => {
        if (!playing) {
            audio.play()
        }
        else {
            audio.pause()
        }
        setPlaying(!playing)
    }

    return (
        <>
            <Flex justifyContent='center' bg='gray.900' pos='sticky' bottom={0} w='100%' h={205}>
                <Flex alignSelf='center' ml={5} w={200} flexDir='column' color='white'>
                    <Text isTruncated>{currentSong.name}</Text>
                    <Text isTruncated fontWeight='200'>{currentSong.name}</Text>
                </Flex>
                <Flex align='center' justifyContent='center' w='100%'>
                    <Icon color='gray.300' w={35} h={35} _hover={{ color: 'white', cursor: 'pointer' }} as={ArrowLeft} />
                    <Icon onClick={() => toggleSong()} _hover={{ fill: 'white', cursor: 'pointer' }} w={35} h={35} color='white' as={playing ? Pause : Play} />
                    <Icon color='gray.300' w={35} h={35} _hover={{ color: 'white', cursor: 'pointer' }} as={ArrowRight} />
                    <Text ml={10} color='white'>0:00</Text>
                    <Slider ml={2} w='50%' aria-label="slider-ex-1" defaultValue={30}>
                        <SliderTrack>
                            <SliderFilledTrack bg='purple.600' />
                        </SliderTrack>
                        <SliderThumb boxSize={6}>
                            <Box color="purple.600" as={MdGraphicEq} />
                        </SliderThumb>
                    </Slider>
                    <Text ml={2} color='white'>{currentSong.duration}</Text>
                </Flex>
            </Flex>
        </>
    )
}

export default Controls