import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import CreateSong from './components/Createsong/CreateSong';


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

  async function addNewSongs(songs){
    const addSongs = await axios.post('http://127.0.0.1:8000/api/music/')
    setSongs(addSongs.data);
  }

  return (
    <div>
      <h1>MUSIC LIBRARY</h1>
      <div>
        <CreateSong addNewSongProperty={addNewSongs}/>
      </div>
    </div>
  );
}

export default App;
