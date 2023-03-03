import React, {useState} from "react";

const CreateSong = (props) => {

    const [title, setTitle] = useState('');
    const [album, setAblum] = useState('');
    const [artist, setArtist] = useState('');
    const [genre, setGenre] = useState('');
    const [release_date, setRelease_date] = useState('');

    function onSubmit(formEvent){
        formEvent.preventDefault();
        const postSong = {
            title: title,
            album: album,
            artist: artist,
            genre: genre,
            release_date: release_date
        }

        console.log(postSong);
        props.addNewSongProperty(postSong)
    }

    return ( 
        <form onSubmit={onSubmit} className="Createform">
            <div className="PaddingFunction">
                <label className="Name">Title</label>
                <input type='text' value={title} onChange={(event) => setTitle(event.target.value)} className='Nametext'/>
            </div>
            <div className="PaddingFunction">
                <label className="Post">Album</label>
                <input type='text' value={album} onChange={(event) => setAblum(event.target.value)} className="Posttext" />
            </div>
            <div className="PaddingFunction">
                <label className="Post">Artist</label>
                <input type='text' value={artist} onChange={(event) => setArtist(event.target.value)} className="Posttext" />
            </div>
            <div className="PaddingFunction">
                <label className="Post">Genre</label>
                <input type='text' value={genre} onChange={(event) => setGenre(event.target.value)} className="Posttext" />
            </div>
            <div className="PaddingFunction">
                <label className="Post">Release date</label>
                <input type='date' value={release_date} onChange={(event) => setRelease_date(event.target.value)} className="Posttext" />
            </div>
            <div className="ButtonPost">
            <button type="sumbit" className="Createbutton">Add song</button>
            </div>
        </form>

     );
}
 
export default CreateSong;