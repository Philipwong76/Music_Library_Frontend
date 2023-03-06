import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import CreateSong from './components/Createsong/CreateSong';
import MusicDisplay from './components/MusicDisplay/MusicDisplay';


function App() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, []);

  async function getAllSongs(){
    const response = await axios.get('http://127.0.0.1:8000/api/music/');
    console.log(response.data)
    setSongs(response.data)
  }

  async function addNewSongs(postSong){
    const addSongs = await axios.post('http://127.0.0.1:8000/api/music/', postSong)
    setSongs(addSongs.data);
  }

  return (
    <div className='background'>
      <h1 className='Music'>MUSIC LIBRARY</h1>
      <h2 className='songtitle'>Song Display</h2>
      <div className='submit'>
        <CreateSong addNewSongProperty={addNewSongs}/>
      </div>
      <div className='feeds'>
        <MusicDisplay musicPost={songs}/>
      </div>
    </div>
  );
}

export default App;
