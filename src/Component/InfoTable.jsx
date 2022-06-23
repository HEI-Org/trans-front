import InfoList from "./InfoList";

function InfoTable() {
    return (
        <div className='container mt-5'>
            <h3>TARIFS</h3>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Départ</th>
                    <th scope="col">Arrivée</th>
                    <th scope="col">Offre</th>
                    <th scope="col">Frais</th>
                    <th scope="col">Reservation</th>
                </tr>
                </thead>
                <tbody>
                    <InfoList/>
                    <InfoList/>
                    <InfoList/>
                    <InfoList/>
                </tbody>
            </table>
        </div>
    )
}

export default InfoTable;