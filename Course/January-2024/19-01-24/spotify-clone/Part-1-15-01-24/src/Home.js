import axios from 'axios';
import { useEffect, useState } from 'react';

function Home() {

  const [getList, setList] = useState([]);

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


  return (<div class="price-cards">
     <div id="download" style={{width:"100%"}}>
      <section>
        <button>
          <i class="fa-brands fa-google-play fa-xl"></i>
          Trending songs
        </button>
        <button>
          <i class="fa-brands fa-apple fa-xl"></i>
          Top 50 of this month
        </button>
        <button>
          <i class="fa-brands fa-apple fa-xl"></i>
          Top 20 of this week
        </button>
      </section>
    </div>
    {
      getList.map((obj, index) => {
        return (
          <section key={index}>
            <article>
              <section class="card-body">
                <img style={{width:"200px"}} src={obj.thumbnail} />
                <button>Like</button>
              </section>
            </article>
          </section>
        )
      })
    }

  </div>)

}
export default Home;