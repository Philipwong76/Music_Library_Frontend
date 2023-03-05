import React from "react";
import './MusicDisplay.css'

const MusicDisplay = (props) => {
    return ( 
        <div>
            {props.musicPost.map((song) => {
                return (
                    <div className="feed">
                        <div>Title<td>{song.title}</td></div>
                        <div>Album<td>{song.album}</td></div>
                        <div>Artist<td>{song.artist}</td></div>
                        <div>Genre<td>{song.genre}</td></div>
                        <div>Release date<td>{song.release_date}</td></div>
                    </div>
                );
            })}
        </div>
     );
}
 
export default MusicDisplay;