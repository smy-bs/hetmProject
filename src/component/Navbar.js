import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faSearch, faX } from "@fortawesome/free-solid-svg-icons";

  const menuList = [
    "Femme",
    "Homme",
    "Bébé",
    "Enfant",
    "Beauté",
    "Sport",
    "Développement durable",
  ];

  const Navbar = ({
    authenticate,
    setAuthenticate,
     }) => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [side, setSide] = useState(false);
    const [search, setSearch] = useState('');
    const [scrollPosition, setScrollPosition] = useState(0);
    const navigate = useNavigate();


    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            setScrollPosition(position);   
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


useEffect(() => {
    if(menuToggle) {
        setSide(true);
    }
}, [menuToggle])

const clickSideCancel = () => {
    setSide(false);
    setTimeout(() => {
        setMenuToggle(false);
    }, 500);
};

  const goToLogin = () => {
    setAuthenticate(true);
    navigate('/login');
  };

  const goToLogout = () => {
    if (window.confirm("Do you really want to Logout?")) {
      setAuthenticate(false);
      navigate('/');
    }
  };

  const clickSearchBtn = () => {
    search === "" ? alert('Please enter your search term.') : navigate(`/?q=${search}`);
    setSearch('');
};

const onSearch = (e) => {
    if(e.key === 'Enter') {
        clickSearchBtn();
    }
    
};
  return (
    <NavBar scrollPosition={scrollPosition}>
    <Row1>
        <SearchForm className="searchForm">
            <button className="btnSearch" onClick={clickSearchBtn}>
                <FontAwesomeIcon icon={faSearch} />
            </button>
            <input 
                type="text" 
                id="search" 
                placeholder="Search..." 
                value={search}
                onChange={event => setSearch(event.target.value)}
                onKeyPress={event => onSearch(event)}
            />
        </SearchForm>

        <Utill onClick={authenticate ? goToLogout : goToLogin}>
                    <FontAwesomeIcon icon={faUser} size="xl" />
                    <p className="utill-text">{
                        authenticate ? "Logout" : "Login"
                    }</p>
                </Utill>
                </Row1>

                <Logo onClick={() => navigate('/')}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd3BBxUp3DXQkiEtLbjnWcBPWYRy7DdAZhtRC1ZkKqQg&s" alt="H&M Logo" />
            </Logo>
            <NavBtn onClick={() => setMenuToggle(true)}>
                <FontAwesomeIcon icon={faBars} size="xl" />
            </NavBtn>
            <Nav className={menuToggle ? "on" : "off"}>
                <button onClick={clickSideCancel}>
                    <FontAwesomeIcon icon={faX} color="#ffffff" />
                </button>
                <ul className={side ? "show" : "hide"}>
                    {menuList.map((menu, index) => (
                        <li key={index}>{menu}</li>
                    ))}
                </ul>
            </Nav>
        </NavBar>
      
  );
};

export default Navbar;

const NavBar = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 65px;
    z-index: 1000;
    background-color: rgba(255, 255, 255, 0.2);
    transition: background-color 0.3s ease; /* 배경색 전환 효과 */

  /* 스크롤 위치에 따라 배경색 변경 */
  background-color: ${({ scrollPosition }) =>
    scrollPosition > 100 ? 'rgba(255, 255, 255, 0.8)' : 'transparent'};

    @media screen and (min-width: 1024px) {
        height: 170px;
    }
`;

const Row1 = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    margin: 20px 20px 0 0;

    @media screen and (min-width: 1024px) {
        margin: 20px 30px 8px 0;
    }
`;

const SearchForm = styled.div`
    position: relative;
    margin-right: 24px;
    min-width: 140px;
    width: 25vw;
    max-width: 300px;
    height: 30px;

    .btnSearch {
        position: absolute;
        top: 4px;
        left: -10px;
        transform: scale(1.3);
        padding:0;
        border: none;
   
    }
    input {
        box-sizing: border-box;
        width: 100%;
        line-height: 29px;
        padding: 0 20px 0 30px;
        border: 0;
        border-bottom: 1px solid #222;
        background-color: transparent;
        outline: none; /* 클릭시 테두리 제거 */

        &:focus {
            outline: 0;
            border-bottom: 2px solid #333;/* 밑줄 스타일 지정 */
        }
    }
`;

const Utill = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-left: 12px;

    .utill-text {
        margin-left: 18px;
        transition: 0.2s;
    }

    &:hover .utill-text{
            }
`;

const Logo = styled.p`
    position: absolute;
    top: 20px;
    left: 55px;
    width: 42px;
    height: 28px;
    cursor: pointer;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media screen and (min-width: 1024px) {
        position: initial;
        width: 60px;
        height: 40px;
        margin: 0 auto 30px;
    }
`;
const NavBtn = styled.button`
    position: absolute;
    top: 20px;
    left: 20px;
    background-color:transparent;
    border:none;
    font-size:17px;
    color:grey;

    @media screen and (min-width: 1024px) {
        display: none;
    }
`;
const Nav = styled.nav`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color:rgba(255, 255, 255, 0.8);
    opacity: 0;
    transition: 0.3s;
    
    &.on {
        display: block;
        opacity: 1;
    }

    button {
        position: absolute;
        top: 20px;
        right: 20px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.8);
    }
    
    ul {
        position: absolute;
        top: 0;
        left: 0;
        box-sizing: border-box;
        width: 70%;
        height: 100vh;
        padding: 40px;
        display: flex;
        flex-direction: column;
        background-color: var(--base-default);
        transition: 0.5s;
        
        &.show {
            transform: translateX(0);
        }
        &.hide {
            transform: translateX(-100%);
        }

        li {
            position: relative;
            width: 40%;
            margin: 10px 0;
            padding: 3px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: 0.2s;
            list-style:none;

            &::after {
                content: "";
                display: block;
                margin-top: 5px;
                width: 100%;
                height: 1px;
                background-color: #888;
                transform: scale(0);
                transition: 0.2s;
            }

            &:hover {
                color: var(--base-active);
            }
            &:hover::after {
                transform: scale(1);
            }
        }
    }

    @media screen and (min-width: 1024px) {
        display: block;
        position: initial;
        background-color: transparent;
        opacity: 1;

        button {
            display: none;
        }
        ul {
            position: initial;
            transform: translateX(0);
            width: 100%;
            height: auto;
            background-color: transparent;
            padding: 0;
            flex-direction: row;
            justify-content: center;

            li {
                width: auto;
                margin: 0 10px;
                padding: 3px 8px;
            }

            &.hide {
                transform: translateX(0);
            }
        }
    }
`;
