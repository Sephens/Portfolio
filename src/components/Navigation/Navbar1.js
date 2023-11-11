import React, {useState} from "react"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

import {
    AiFillAlipaySquare,
    AiOutlineSearch
    
} from "react-icons/ai"

export default function Navbar1(){
    const [expand, updateExpanded] = useState(false)
    const [navColour, updateNavbar] = useState(false)

    function scrollHandler(){
        if(window.scrollY >= 20){
            updateNavbar(true)
        }else{
            updateNavbar(false)
        }
    }

    window.addEventListener("scroll", scrollHandler)
    return (
        <Navbar 
        expanded = {expand}
        fixed="top"
        expand = "md"
        className={navColour ? "sticky" : "navbar1"}
        >
            <Container>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Item>
                            <Nav.Link as={Link} to=" " onClick={()=>{
                                updateExpanded(false)
                            }}>
                                <AiFillAlipaySquare style={{marginBottom: "2px"}} />
                                Residents

                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link as={Link} to=" " onClick={()=>{
                                updateExpanded(false)
                            }}>
                                <AiFillAlipaySquare style={{marginBottom: "2px"}} />
                                Business

                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link as={Link} to=" " onClick={()=>{
                                updateExpanded(false)
                            }}>
                                <AiFillAlipaySquare style={{marginBottom: "2px"}} />
                                Jobs

                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link as={Link} to=" " onClick={()=>{
                                updateExpanded(false)
                            }}>
                                <AiFillAlipaySquare style={{marginBottom: "2px"}} />
                                Your Government

                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link as={Link} to=" " onClick={()=>{
                                updateExpanded(false)
                            }}>
                                <AiFillAlipaySquare style={{marginBottom: "2px"}} />
                                News

                            </Nav.Link>
                        </Nav.Item>

                        <div>
                            <form className="d-flex" style={{marginTop: "8px"}}>
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar>
    )
}

