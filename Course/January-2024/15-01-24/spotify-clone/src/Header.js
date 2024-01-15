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
    <main id="download">
      <h1>Introducing Premium Mini</h1>
      <h2>₹7 for 1 day. ₹25 for 1 week.</h2>
      <section>
        <button>
          <i class="fa-brands fa-google-play fa-xl"></i>
          DOWNLOAD
        </button>
        <button>
          <i class="fa-brands fa-apple fa-xl"></i>
          DOWNLOAD
        </button>
      </section>
    </main>
  </>)

}
export default Header;