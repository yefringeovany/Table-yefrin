import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CrudCardViewHorizontal() {
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
				Motocicleta - Vista de Tarjetas fila
				<p>
					<Link to="/motorcycles/new" className="btn btn-primary">
						Crear Motocicleta
					</Link>
				</p>
			</h2>
			<hr />

			{cruds.map((crud) => {
				return (
					<div
						className="card mb-3"
						style={{ maxWidth: "800px" }}
						key={crud._id}
					>
						<div className="row g-0">
							<div className="col-md-4 pl-5 ">
								<h5>Imagen</h5>
							</div>
							<div className="col-md-8">
								<div class="card-header">
									<h5 className="card-title">
										<Link to={`/motorcycles/${crud._id}`} className="link-line">
											{crud.marca}
										</Link>
									</h5>
								</div>
								<div className="card-body ">
									<h6 className="d-flex align-items-center">
										<a className="card-subtitle m-2">
											{crud.modelo}
										</a>
									</h6>
									<p className="card-text limit-char">{crud.description}</p>
									<p className="card-text  d-flex align-items-center">
										<small className="text-muted one-liner">
											{crud.año}
										</small>
									</p>

									<div class="card-footer">
										<Link
											to={`/motorcycles/${cruds._id}/edit`}
											className="btn btn-secondary"
										>
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
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default CrudCardViewHorizontal;
