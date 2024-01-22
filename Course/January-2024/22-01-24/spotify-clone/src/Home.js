import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { useUser } from './UserProvider';

function Home() {

  const [getList, setList] = useState([]);
  const [getcount,setcount]= useState(0);
  const [getSearch, setSearch] = useState('');
  const [getAudio, setAudio] = useState('https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf908947ae38c3e33a1994.mp3');

  const { getUser } = useUser();
  console.log(getUser);

  const listOfDetails = async () => {
    axios.get('https://academics.newtonschool.co/api/v1/music/song').then((response) => {
      console.log(response.data.data);
      setList(response.data.data);
    }).catch((error) => {
      console.log(error);
    })

  }
  useEffect(() => {
    listOfDetails();
  }, [])

  const onFilterSelection = async (input) => {
    console.log(input);
    let url;
    const queryString = {
      featured: input
    }
    axios.get('https://academics.newtonschool.co/api/v1/music/song', {
      params: {
        filter: JSON.stringify(queryString)
      }
    }).then((response) => {
      setList(response.data.data);
    }).catch((error) => {
      console.log(error)
    })
  }

  const onSearchDetails = (event) => {
    const queryString = {
      title: event.target.value
    }
    axios.get('https://academics.newtonschool.co/api/v1/music/song', {
      params: {
        search: JSON.stringify(queryString)
      }
    }).then((response) => {
      setList(response.data.data);
    }).catch((error) => {
      console.log(error)
    })
  }

  const addToFavorite = (songId) => {
    axios.patch('https://academics.newtonschool.co/api/v1/music/favorites/like', { "songId": songId }, {
      headers: {
        Authorization: `Bearer ${getUser.token}`
      }
    }).then((response) => {
      console.log(response);
      alert("successfully stored");
    }).catch((error) => {
      console.log(error);
    })
  }


  const audioRef = useRef();

  const startPlayerHandler = (url) => {
    debugger;
    setAudio(url);
  }

  useEffect(() => {
    setcount(getcount+1);
    if(getcount>=1){
      audioRef.current.play();
    }
  }, [getAudio])

  const stopPlayerHandler = () => {
    audioRef.current.pause();
  }

  return (<div class="price-cards">
    <div id="download" style={{ width: "100%" }}>
      <section>
        <button onClick={() => onFilterSelection("Trending songs")}>
          <i class="fa-brands fa-google-play fa-xl"></i>
          Trending songs
        </button>
        <button onClick={() => onFilterSelection("Top 50 of this month")}>
          <i class="fa-brands fa-apple fa-xl"></i>
          Top 50 of this month
        </button>
        <button onClick={() => onFilterSelection("Top 20 of this week")}>
          <i class="fa-brands fa-apple fa-xl"></i>
          Top 20 of this week
        </button>
        <div>Search:<input type="text" onChange={onSearchDetails} /></div>
      </section>
    </div>

    {
      getList.map((obj, index) => {
        return (
          <section key={index}>
            <article>
              <section class="card-body">
                <img style={{ width: "200px" }} src={obj.thumbnail} />
                <button onClick={() => startPlayerHandler(obj.audio_url)}>Play</button>
                <button onClick={() => stopPlayerHandler()}>Stop</button>
                {getUser && getUser.status == "success" && <button onClick={() => addToFavorite(obj._id)}>Like</button>}
              </section>
            </article>
          </section>
        )
      })
    }
    <br />
    <audio ref={audioRef} src={getAudio} />

  </div>)

}
export default Home;