import {BiBusSchool} from 'react-icons/bi';
import Modal from './ReserverModal';
import { useState } from 'react';

function Navbar() {
    const [show,setShow] = useState(false);
    const closeModalHandler = ()=> setShow(false);

    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light">          
            <BiBusSchool className='navbar-brand'/>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Accueil <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Offre</a>
                    </li>
                    <a className='center'>TOKYTRANS</a>
                </ul>
                <button className='btn btn-warning text-dark font-weight-bold mr-2' onClick={()=>setShow(true)}>Reserver</button>
                <div>
                {
                  show ?  <div onClick={closeModalHandler} className="modal-drop"></div> : null
                }
              <Modal show={show} closeModalHandler={closeModalHandler}/>

              </div>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Entrer une ville"
                           aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">rechercher</button>
                </form>
            </div>
        </nav>
    )
}

export default Navbar;