import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    const menuList = [
        "Femme",
        "Homme",
        "Bébé",
        "Enfant",
        "Beauté",
        "Sport",
        "Développement durable",
    ];
  return (
    <div>
        <div className="login-button">
      <div>
        <FontAwesomeIcon icon = {faUser} /></div>
        <div>Login</div>
        
      </div>

      <div className="nav-section">
        <img width={100} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd3BBxUp3DXQkiEtLbjnWcBPWYRy7DdAZhtRC1ZkKqQg&s"/>
        </div>

      <div className="menu-area">
        
          <ul className="menu-list">
            {menuList.map((menu)=>(
                <li>{menu}</li>
            ))}
          </ul>
          

        <div className="search ">
            <FontAwesomeIcon icon = {faSearch}  />
            <input type="text" className="search-icon" />
        </div>


        </div>
      
    </div>
  )
}

export default Navbar
