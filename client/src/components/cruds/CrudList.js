import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CrudList() {
	const [cruds, setCruds] = useState([]);

	useEffect(function () {
		async function getAllCruds() {
			try {
				const response = await axios.get(`${process.env.REACT_APP_API_URL}`);
				setCruds(response.data);
			} catch (error) {
				console.log("error", error);
			}
		}
		getAllCruds();
	}, []);

	return (
		<div>
			<h2>
				Motocicletas
				<p>
					<Link to="/motorcycles/new" className="btn btn-primary float-right">
						Crear Motocicleta
					</Link>
				</p>
			</h2>
			<hr />
			{cruds.map((crud) => {
				return (
					<div key={crud._id}>
						<h4>
							<Link to={`/motorcycles/${crud._id}`}>{crud.companyName}</Link>
						</h4>
						<div className="btn-group">
							<Link to={`/motorcycles/${crud._id}/edit`} className="btn btn-primary">
								Editar
							</Link>
						</div>
						<hr/>
					</div>
				);
			})}
		</div>
	);
}

export default CrudList;
