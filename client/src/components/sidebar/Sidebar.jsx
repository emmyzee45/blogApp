import { useEffect, useState } from "react";
import "./sidebar.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [cat, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    }
    getCats();
  },[])
  return (
    <div className="sidebar">
      <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img  
            src='https://images.pexels.com/photos/9818341/pexels-photo-9818341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
          alt="" 
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adispisicing elit. Voluptate qui 
            necessitatibus nostrum illum reprehenderit , libero eligendi expedita
            quaerat magni hic mollitia!
          </p>
      </div>
      <div className="sidebarItem">
          <span className="sidebarTitle">Categories</span>
          <ul className="sidebarList">
              
              {cat.map((c) => (
                <Link to={`/?cat=${c.name}`} className='link'>
                  <li className="sidebarListItem">{c.name}</li>
                </Link>
              ))}
          </ul>
      </div>
      <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW US</span>
          <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands  fa-facebook-square"></i>
            <i className="sidebarIcon fa-brands  fa-twitter-square"></i>
            <i className="sidebarIcon fa-brands  fa-pinterest-square"></i>
            <i className="sidebarIcon fa-brands  fa-instagram-square"></i>
          </div>
      </div>
    </div>
  )
}
