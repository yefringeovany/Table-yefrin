import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function CrudDetails(props) {
	const [crud, setCrud] = useState({});

	const { _id } = useParams();
	const navigate = useNavigate();

	useEffect(
		function () {
			async function getCrudById() {
				try {
					const response = await axios.get(`${process.env.REACT_APP_API_URL}/${_id}`);
					setCrud(response.data);
				} catch (error) {
					console.log("error", error);
				}
			}
			getCrudById();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[props]
	);

	async function handleDelete() {
		try {
			await axios.delete(`${process.env.REACT_APP_API_URL}/${_id}`);
			navigate("/motorcycles");
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<div className="container">
			<h2>{crud.companyName}</h2>

			<p>
				<b>Marca</b>: {crud.marca}
			</p>

			<p>
				<b>Modelo</b>: {crud.modelo}
			</p>
			<p>
				<b>Año</b>: {crud.año}
			</p>
			<p>
				<b>Precio</b>: {crud.precio}
			</p>
			<p>
				<b>Color</b>: {crud.color}
			</p>
			<p>
				<b>Kilometraje</b>: {crud.kilometraje}
			</p>
			<p>
				<small>
					<b>ID</b>: {crud._id}
				</small>
			</p>
			<div className="btn-group ">
				<Link to={`/motorcycles/${crud._id}/edit`} className="btn btn-primary">
					Editar
				</Link>
				<button onClick={handleDelete} className="btn btn-danger">
					Eliminar
				</button>
				<Link to="/motorcycles" className="btn btn-secondary">
					Cerrar
				</Link>
			</div>
			<hr />
		</div>
	);
}

export default CrudDetails;
