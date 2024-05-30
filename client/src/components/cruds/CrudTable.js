import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CrudTable() {
	const [cruds, setCruds] = useState([]);

	useEffect(function () {
		async function getCruds() {
			try {
				const response = await axios.get(`${process.env.REACT_APP_API_URL}`);
				setCruds(response.data);
			} catch (error) {
				console.log("error", error);
			}
		}
		getCruds();
	}, []);

	return (
		<div className="container">
			<div>
				<h2>
					Motocicletas - Tabla
					<p>
						<Link to="/motorcycles/new" className="btn btn-primary float-right">
							Crear Motocicleta
						</Link>
					</p>
				</h2>
				<hr />
			</div>
            <div className="table-responsive">
				<table className="table riped  table-hover table-bordered container">
					<thead>
						<tr>
							<th>Marca</th>
							<th>Modelo</th>
							<th>Año</th>
							<th>Precio</th>
							<th>Color</th>
							<th>Kilometraje</th>
							<th>Ver</th>
							<th>Editar</th>
							<th>Eliminar</th>
						</tr>
					</thead>
					<tbody>
						{cruds &&
							cruds.map((crud) => {
								return (
									<tr key={crud._id}>
										<td>
											<Link to={`/motorcycles/${crud._id}`} className="link-line">
												{crud.marca}
											</Link>
										</td>
										<td>{crud.modelo}</td>
										<td>{crud.año}</td>
										<td>{crud.precio}</td>
										<td>{crud.color}</td>
										<td>{crud.kilometraje}</td>
										<td>
											<Link to={`/motorcycles/${crud._id}`} className="btn btn-warning">
												Ver Información
											</Link>
										</td>
										<td>
											<Link
												to={`/motorcycles/${crud._id}/edit`}
												className="btn btn-success"
											>
												Editar
											</Link>
										</td>
										<td>
											<Link
												to={`/motorcycles/${crud._id}/delete`}
												className="btn btn-danger"
											>
												Eliminar
											</Link>
										</td>
									</tr>
								);
							})}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default CrudTable;
