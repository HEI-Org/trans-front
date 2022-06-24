import InfoList from "./InfoList";
import table from "./Ville";
import './css/Table.css'

function InfoTable() {
    return (
        <div className='container mt-5'>
            <h3>V O Y A G E S</h3>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th scope="col">N°</th>
                    <th scope="col">Départ</th>
                    <th scope="col">Arrivée</th>
                    <th scope="col">Offre</th>
                    <th scope="col">Frais</th>
                    <th scope="col">Reservation</th>
                </tr>
                </thead>
                <tbody>
                    {
                        table.map((tables)=><InfoList Age={tables.Age} Office={tables.Office} Start={tables.Start} Salary={tables.Salary}/>)
                    }                   
                </tbody>
            </table>
        </div>
    )
}

export default InfoTable;