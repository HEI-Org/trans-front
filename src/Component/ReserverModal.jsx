import React from "react";
// import { useState } from "react";
import './css/ReserverModal.css';

export default function Modal({ show , closeModalHandler}){   
    // const [Name, setname] = useState('');
    // const [Company, setCompany] = useState('');
    // const [Phone, setPhone] = useState('');
    // const [Website, setWebsite] = useState('');
    // const [Username, setUsername] = useState('');
    // const [Address, setAddress] = useState('');
    // const [Email, setEmail] = useState('');
    //  const Take =(e)=>{
    //     setname(e.target.value);
    //  }
    //  const Take1 =(e)=>{
    //     setUsername(e.target.value);
    //  }
    //  const Take2 =(e)=>{
    //     setCompany(e.target.value);
    //  }
    //  const Take3 =(e)=>{
    //     setPhone(e.target.value);
    //  }
    //  const Take4 =(e)=>{
    //     setWebsite(e.target.value);
    //  }
    //  const Take5 =(e)=>{
    //     setEmail(e.target.value);
    //  }
    //  const Take6 =(e)=>{
    //     setAddress(e.target.value);
    //  }

     
    return(
        <>
      <div className="modal-wrapper"
      style={{
        transform : show ? 'translateY(0vh)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0'
      }}
      >
        <div className="modal-header" onClick={closeModalHandler} >
            <b className="add"> Reservation </b>
            <span className="close-modal-btn"onClick={closeModalHandler} >X</span>
        </div> 
        <div className="modal-content">
            <div className="modal-body">
            <form>
                <input type="text"  placeholder="Nom" />
                <input type="text"  placeholder="Prenom"/>
                <input type="text"  placeholder="Phone" />
                <input type="text"  placeholder="Email" />
                <input type="text"  placeholder="Adresse" />
                <input type="text"  placeholder="Choix de place" />

                <button className="btn-cancel" >Reserver</button>
                </form>

            </div>
            <div className="modal-footer">
               
            </div>
        </div>
      </div>
      </>      
    )
}