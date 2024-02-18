import { Link } from 'react-router-dom';

export function SideBar(){
    return (<div>
        <input type="search/"/>
  <ul>
            <li><Link to="">Home</Link></li>
            <li><Link to="/browse">Browse</Link></li>
        </ul>
    </div>)
}