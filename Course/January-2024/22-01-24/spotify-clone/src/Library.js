import axios from 'axios';
import { useEffect, useState } from 'react';
import {useUser} from './UserProvider';

function Library() {

  const [getList, setList] = useState([]);

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

  return (<div class="price-cards">
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
export default Library;