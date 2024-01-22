import axios from 'axios';
import { useEffect, useState } from 'react';
import {useUser} from './UserProvider';

function Home() {

  const [getList, setList] = useState([]);
  const [getSearch,setSearch] = useState('');

  const {getUser} = useUser();
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

  const onFilterSelection=async (input)=>{
     console.log(input);
     let url;  
    const queryString={
      featured:input
    }
    axios.get('https://academics.newtonschool.co/api/v1/music/song',{params:{
      filter:JSON.stringify(queryString)
    }}).then((response)=>{
      setList(response.data.data);
    }).catch((error)=>{
              console.log(error)
    })
  }

  const onSearchDetails=(event)=>{
    const queryString = {
      title:event.target.value
    }
   axios.get('https://academics.newtonschool.co/api/v1/music/song',{params:{
         search:JSON.stringify(queryString)
   }}).then((response)=>{
     setList(response.data.data);
   }).catch((error)=>{
             console.log(error)
   })
  }


  return (<div class="price-cards">
     <div id="download" style={{width:"100%"}}>
      <section>
        <button onClick={()=>onFilterSelection("Trending songs")}>
          <i class="fa-brands fa-google-play fa-xl"></i>
          Trending songs
        </button>
        <button onClick={()=>onFilterSelection("Top 50 of this month")}>
          <i class="fa-brands fa-apple fa-xl"></i>
          Top 50 of this month
        </button>
        <button onClick={()=>onFilterSelection("Top 20 of this week")}>
          <i class="fa-brands fa-apple fa-xl"></i>
          Top 20 of this week
        </button>
        <div>Search:<input type="text" onChange={onSearchDetails}/></div> 
      </section>
    </div>
    {
      getList.map((obj, index) => {
        return (
          <section key={index}>
            <article>
              <section class="card-body">
                <img style={{width:"200px"}} src={obj.thumbnail} />
                {getUser && getUser.status == "success" && <button>Like</button>}
              </section>
            </article>
          </section>
        )
      })
    }

  </div>)

}
export default Home;