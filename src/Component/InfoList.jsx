import DropDown from "./DropDown";

export default function InfoList() {
    return (
        <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>
                <DropDown/>
            </td>
            <td>1000</td>
            <td>
                <button className='btn btn-primary'>Reserver</button>
            </td>
        </tr>
    )
}