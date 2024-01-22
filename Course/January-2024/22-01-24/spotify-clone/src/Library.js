import axios from 'axios';
import { useEffect, useState } from 'react';
import {useUser} from './UserProvider';

function Library() {

  const [getList, setList] = useState([]);

  const {getUser} = useUser();
  console.log(getUser);

  const listOfDetails = async () => {
    axios.get('https://academics.newtonschool.co/api/v1/music/favorites/like',{headers:{
      Authorization:`Bearer ${getUser.token}`
     }}).then((response) => {
      console.log(response.data.data.songs);
      setList(response.data.data.songs);
    }).catch((error) => {
      console.log(error);
    })

  }

  const onClickHandler=(songId)=>{
    axios.patch('https://academics.newtonschool.co/api/v1/music/favorites/like',{ "songId" : songId},{headers:{
      Authorization:`Bearer ${getUser.token}`
     }}).then((response)=>{
              console.log(response);
              alert("successfully removed");
              listOfDetails();
     }).catch((error)=>{
                console.log(error);
     })
  }

  useEffect(() => {
    listOfDetails();
  }, [])

  return (<div class="price-cards">
    {
      getList.map((obj, index) => {
        return (
          <section key={index}>
            <article>
              <section class="card-body">
                <img style={{width:"200px"}} src={obj.thumbnail} />
                <button onClick={()=>onClickHandler(obj._id)}>UnLike</button>
              </section>
            </article>
          </section>
        )
      })
    }

  </div>)

}
export default Library;