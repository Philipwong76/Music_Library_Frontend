import React, { useState } from "react";
import './SearchBar.css';

const SearchBar = (props) => {

    const [lookForSong, setLookForSong] = useState('');

    function handleSong(formEvent){
        formEvent.preventDefault();
        props.filterSearchSongs(lookForSong);
    }

    return ( 
        <form onSubmit={handleSong} className='FilterSong'>
            <h2>Look for song</h2>
            <input type='text' value={lookForSong} onChange={(event) => setLookForSong(event.target.value)} className="LookForSong" />
            <div className="SongButton">
            <button type="sumbit" className="Filterbutton">Filter song</button>
            </div>
        </form>
     );
}
 
export default SearchBar;