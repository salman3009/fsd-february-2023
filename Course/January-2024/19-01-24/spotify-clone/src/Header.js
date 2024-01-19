import { Link } from 'react-router-dom';
import { useUser } from './UserProvider';

function Header() {
  const { getUser, signOutUser } = useUser();

  const onChangeHandler=()=>{
    signOutUser();
  }
  return (<>
    <nav>
      <Link to="/">
        <img src="https://d3dyfaf3iutrxo.cloudfront.net/general/upload/78dbd1a43af24c48a5bc7ba17d4cb2dc.png" alt="spotify-logo" />
      </Link>
      <ul>
        <li>
          <Link to="/library">Library</Link>
        </li>
        {!getUser && <> <li>
          <Link to="/login">Login</Link>
        </li>
          <li>
            <Link to="/register">Signup</Link>
          </li></>}
          {getUser && getUser.status == "success" &&  <li>
            <Link to="/" onClick={onChangeHandler}>Logout</Link>
          </li>}

      </ul>
    </nav>

  </>)

}
export default Header;