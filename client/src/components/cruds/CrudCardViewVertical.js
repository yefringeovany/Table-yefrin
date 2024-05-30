import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CrudCardViewVertical() {
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
			<h2>
				Motocicleta - Vista de Tarjeta columna
				<p>
					<Link to="/motorcycles/new" className="btn btn-primary float-right">
						Crear Motocicleta
					</Link>
				</p>
			</h2>
			<hr />
			<div>
				<div className="d-flex flex-wrap">
					{cruds.map((crud) => {
						return (
							<div
								className="card"
								style={{ width: 250, margin: 30 }}
								key={crud._id}
							>
								<div class="card-header">
									<h5 className="card-title">
										<Link to={`/motorcycles/${crud._id}`} className="link-line">
											{crud.marca}
										</Link>
									</h5>
								</div>
								<div className="card-body">
									<h5 className="d-flex align-items-center">
										<a className="card-subtitle" >
											{crud.modelo}
										</a>
									</h5>
									<p className="card-text limit-char">{crud.description}</p>
									<p className="card-text d-flex align-items-center">
										<small className="text-muted one-liner">
											{crud.año}
										</small>
									</p>
								</div>
								<div class="card-footer d-flex align-items-center">
									<Link to={`/motorcycles/${cruds._id}/edit`}>
										Editar
									</Link>
									<span>
										<small>
											<Link to={`/motorcycles/${crud._id}`} className="link-line">
												Leer más...
											</Link>
										</small>
									</span>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default CrudCardViewVertical;
