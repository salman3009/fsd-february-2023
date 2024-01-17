import { Link } from 'react-router-dom';

function Header() {

  return (<>
    <nav>
      <a href="/">
        <img src="https://d3dyfaf3iutrxo.cloudfront.net/general/upload/78dbd1a43af24c48a5bc7ba17d4cb2dc.png" alt="spotify-logo" />
      </a>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Signup</Link>
        </li>
      </ul>
    </nav>
   
  </>)

}
export default Header;