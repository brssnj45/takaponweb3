import {atom} from 'recoil'

export const songsState = atom({
    key: 'songsState', // unique ID (with respect to other atoms/selectors)
    default: [
        {
            title: 'Controlla (working) fjdlksjf sjdflksjdflksjdflksjdlfk jsf',
            artist: 'Drake',
            duration: '3:08'
        },
        {
            title: 'Know yourself',
            artist: 'Drake',
            duration: '3:08'
        },
        {
            title: 'Halo',
            artist: 'Beyonce',
            duration: '5:00'
        }
        // {
        //     title: 'Know yourself',
        //     artist: 'Drake',
        //     duration: '3:08'
        // },
        // {
        //     title: 'Know yourself',
        //     artist: 'Drake',
        //     duration: '3:08'
        // },
        // {
        //     title: 'Know yourself',
        //     artist: 'Drake',
        //     duration: '3:08'
        // },
    ]
});

export const nftState = atom({
    key: 'nftState',
    default: {}
})

export const currentSongState = atom({
    key: 'currentSongState',
    default: {
        title: 'Know yourself',
        artist: 'Drake',
        duration: '3:08'
    },
})