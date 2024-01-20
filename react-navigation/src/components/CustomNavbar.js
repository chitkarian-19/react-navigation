import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SpiralLogo from "../../src/spiral.svg";
import React, { useEffect } from 'react';
import "./CustomNavbar.css";
import "./CustomNavbar-Laptop.css";
import "./CustomNavbar-mobile.css";
import "../App.css";
const CustomNavbar = (props)=>{

    const {mode,setMode} = props;

    useEffect(()=>{
        console.log("Mode changed");
        
        if(mode=="light"){
            var ele = document.getElementById("dark1");
            ele.classList.add("display-none");
            ele = document.getElementById("dark2");
            ele.classList.add("display-none");
            ele = document.getElementById("light1");
            ele.classList.remove("display-none");
            ele = document.getElementById("light2");
            ele.classList.remove("display-none");
            
        }
        else{
            var ele = document.getElementById("light1");
            ele.classList.add("display-none");
            ele = document.getElementById("light2");
            ele.classList.add("display-none");
            ele = document.getElementById("dark1");
            ele.classList.remove("display-none");
            ele = document.getElementById("dark2");
            ele.classList.remove("display-none");
        }

        //update localStorage
        localStorage.setItem("mode",mode);
    },[mode]);

    const changeMode = (e)=>{
        
        var new_mode = mode=="dark"?"light":"dark";
        setMode(new_mode);

    }
    const showSideBar = ()=>{
        
        
        
       var ele =  document.getElementById("nav-sidebar");
        if (ele) {
            ele.classList.remove("display-none");
            ele =  document.getElementById("nav-backdrop");
            ele.classList.remove("display-none");
            // document.body.style.opacity = '0.3';
            // document.getElementById('nav-sidebar').style.opacity = '1';
            
        } 
        else {
            console.error("Element with ID 'nav-sidebar' not found.");
        }
    }

    const handleClose = ()=>{
        var ele =  document.getElementById("nav-backdrop");
        ele.classList.add("display-none");
        ele =  document.getElementById("nav-sidebar");
        ele.classList.add("display-none");

    }
    return(
        <>
        <Navbar expand="lg" >
            <Container className='custom-container margin ms-1 ' id="web-nav">
                <Navbar.Toggle className='navbar-toggle' aria-controls="nav-sidebar" onClick={showSideBar}></Navbar.Toggle>
                <Navbar.Brand href="#home" className="navbar_brand">
                    <div className="navbar_logo">
                        <img
                            alt=""
                            src={SpiralLogo}
                    
                            className="d-inline-block align-top me-2 brand-image"
                        />
                    </div>
                    <div className='navbar_logo_text fw-bold'>React Navigation</div>
                    
                </Navbar.Brand>
                
                <Nav className='me-auto web-view'>
                        <Nav.Link href="#docs">Docs</Nav.Link>
                        <Nav.Link href="#blog">Blog</Nav.Link>
                        <Nav.Link href="#help">Help</Nav.Link>
                        <NavDropdown title="6.x" id="basic-nav-dropdown" >
                            <NavDropdown.Item href="#action/7.x">7.x</NavDropdown.Item>
                            <NavDropdown.Item href="#action/6.x" active >6.x</NavDropdown.Item>
                            <NavDropdown.Item href="#action/5.x">5.x</NavDropdown.Item>
                            <NavDropdown.Item href="#action/4.x">4.x</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.x">3.x</NavDropdown.Item>
                            <NavDropdown.Item href="#action/2.x">2.x</NavDropdown.Item>
                            <NavDropdown.Item href="#action/1.x">1.x</NavDropdown.Item>
                        
                        </NavDropdown>
                        
                </Nav>
                
                <Nav className='web-view'>
                        <Nav.Link href="#docs">
                            <span>
                                GitHub
                            </span>
                            <svg className='ms-1 mb-1' width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" ><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg>
                        </Nav.Link>
                </Nav>
                <Nav className='colorMode web-view'>
                        <button className='view-mode-button' onClick={changeMode}>
                        <svg viewBox="0 0 24 24" width="24" id="light1" height="24" className="lightToggleIcon_pyhR"><path fill="currentColor" d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"></path></svg>
                        <svg viewBox="0 0 24 24" width="24" id="dark1" height="24" className="display-none darkToggleIcon_wfgR"><path fill="currentColor" d="M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"></path></svg>
                        </button>
                </Nav>
                <Nav>
                <button type="button" className="searchButton" aria-label="Search">
                    <span className='search-container'>
                        <svg width="20" height="20"  className='search-icon' viewBox="0 0 20 20">
                            <path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                            </path>
                        </svg>
                        <span className='search-placeholder web-view'>
                            Search
                        </span>
                    </span>
                    <span className='searchButtonKeys web-view' >
                        <kbd className='searchButtonKey'>⌘</kbd>
                        <kbd className='searchButtonKey'>K</kbd>
                    </span>
                </button>
                </Nav>

                

                
            </Container>
            <div role="presentation" class="navbar-sidebar__backdrop display-none" id="nav-backdrop"></div>
            <div className='nav-sidebar display-none mobile-view' id="nav-sidebar">
              <Navbar.Brand href="#home" className="navbar_brand">
                <div className="navbar_logo">
                    <img
                        alt=""
                        src={SpiralLogo}
        
                        className="d-inline-block align-top me-2 brand-image"
                    />
                </div>
                <div className='navbar_logo_text fw-bold'>React Navigation</div>
                <Nav className='colorMode'>
                    <button className='view-mode-button' onClick={changeMode}>
                    <svg viewBox="0 0 24 24" width="24" height="24" id="light2" className="lightToggleIcon_pyhR">
                        <path fill="currentColor" d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"></path></svg>
                    <svg viewBox="0 0 24 24" width="24" height="24" id="dark2" className="display-none darkToggleIcon_wfgR"><path fill="currentColor" d="M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"></path></svg>
                    </button>
                </Nav>
                <button type="button" aria-label="Close navigation bar" className="clean-btn navbar-sidebar__close" onClick={handleClose}>
                    <svg viewBox="0 0 15 15" width="21" height="21">
                        <g stroke="#8d949e" stroke-width="1.2">
                            <path d="M.75.75l13.5 13.5M14.25.75L.75 14.25">
                            </path>
                        </g>
                    </svg>
                </button>
              </Navbar.Brand>
                 
              <Nav className='me-auto '>
                <Nav.Link href="#docs">Docs</Nav.Link>
                <Nav.Link href="#blog">Blog</Nav.Link>
                <Nav.Link href="#help">Help</Nav.Link>
                <Nav.Link href="#docs">
                    <span>
                    GitHub
                    </span>
                    <svg className='ms-1 mb-1' width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" ><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg>
                </Nav.Link>
                <NavDropdown title="Versions" id="basic-nav-dropdown" >
                    <NavDropdown.Item href="#action/7.x">7.x</NavDropdown.Item>
                    <NavDropdown.Item href="#action/6.x" active >6.x</NavDropdown.Item>
                    <NavDropdown.Item href="#action/5.x">5.x</NavDropdown.Item>
                    <NavDropdown.Item href="#action/4.x">4.x</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.x">3.x</NavDropdown.Item>
                    <NavDropdown.Item href="#action/2.x">2.x</NavDropdown.Item>
                    <NavDropdown.Item href="#action/1.x">1.x</NavDropdown.Item>
            
                </NavDropdown>
            
              </Nav>
        
             
                
            
    
    
            </div>
            
            
        </Navbar>
        </>
    );
}

export default CustomNavbar;