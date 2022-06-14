import React from 'react'
import { useSelector } from 'react-redux'
import Song from './Song'

const SongList = () => {
    const songs = useSelector((state) => state.songSearchReducer.songs)
    return (
        <div>
            {songs && songs.map((songData, i) => (
                <Song key={i} songData={songData} />
            ))}
        </div>
    )
}

export default SongList