import DropDown from "./DropDown";
import Modal from "./ReserverModal";
import { useState } from "react";

export default function InfoList(props) {
    const [show,setShow] = useState(false);
    const closeModalHandler = ()=> setShow(false); 
    const { Age,Office,Start,Salary} = props ;
    return (
        <tr>
            <th scope="row">{Age}</th>
            <td>{Office}</td>
            <td>{Start}</td>
            <td>
                <DropDown/>
            </td>
            <td>{Salary}</td>
            <td>
                <button className='btn btn-primary' onClick={()=>setShow(true)}>Reserver</button>
                <div>
                {
                  show ?  <div onClick={closeModalHandler} className="modal-drop"></div> : null
                }
              <Modal show={show} closeModalHandler={closeModalHandler}/>

              </div>
            </td>
        </tr>
    )
}