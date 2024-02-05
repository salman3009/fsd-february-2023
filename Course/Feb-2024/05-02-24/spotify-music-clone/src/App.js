import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

axios.interceptors.request.use(async (config) => {
  config.headers['projectid'] = "f104bi07c490";
  return config;
})

function App() {

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


  return (
    <div>
      <div className="main-container">
        <div className="left-section">
        </div>
        <div className="right-section">
          <div className="nav-section">
            <div>
              <i className="fa-solid fa-angle-left nav-menu"></i>
              <i className="fa-solid fa-angle-right nav-menu"></i>
            </div>
            <div>
              <button className="nav-menu">Sign up</button>
              <button className="nav-menu">Login</button>
            </div>
          </div>
          <div className="sub-container">
            <div className="sub-menu">
              <div>Playlist</div>
              <div>Show All</div>
            </div>
            <div className="list">
              {
                getList.map((obj, index) => {
                  return (
                    <div key={index} className="card-body">
                      <img className="image" src={obj.thumbnail} />
                      <div className="heading">{obj.title}</div>
                    </div>
                  )
                })
              }
            </div>
            <div className="footer">
               <div className="left-footer">
                    <ul>
                      <li>Company</li>
                      <li>About</li>
                      <li>Jobs</li>
                      <li>For the Record</li>
                    </ul>
                    <ul>
                      <li>Communities</li>
                      <li>For Artists</li>
                      <li>Developers</li>
                      <li>Advertising</li>
                      <li>Investors</li>
                      <li>Vendors</li>
                    </ul>
                    <ul>
                      <li>Useful links</li>
                      <li>Support</li>
                      <li>Free Mobile App</li>
                    </ul>
               </div>
               <div className="right-footer">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-twitter"></i>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
