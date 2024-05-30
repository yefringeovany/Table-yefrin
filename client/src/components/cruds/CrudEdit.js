import React, { useState, useEffect } from "react";
import { get, patch } from "axios";
import { useNavigate, useParams } from "react-router-dom";

function CrudEdit(props) {
	const initialState = {
		marca: "",
		modelo: "",
		año: "",
		precio: "",
		color: "",
		kilometraje: "",
	};
	const [crud, setCrud] = useState(initialState);

	const { _id } = useParams();
	const navigate = useNavigate();

	useEffect(
		function () {
			async function updateCrud() {
				try {
					const response = await get(`${process.env.REACT_APP_API_URL}/${_id}`);
					setCrud(response.data);
				} catch (error) {
					console.log(error);
				}
			}
			updateCrud();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[props]
	);

	function handleSubmit(event) {
		event.preventDefault();
		async function updateCrud() {
			try {
				await patch(`${process.env.REACT_APP_API_URL}/${crud._id}`, crud);
				navigate(`/motorcycles/${crud._id}`);
			} catch (error) {
				console.log(error);
			}
		}
		updateCrud();
	}

	function handleChange(event) {
		setCrud({ ...crud, [event.target.name]: event.target.value });
	}

	function handleCancel() {
		navigate(`/motorcycles/${crud._id}`);
	}

	return (
		<div className="container">
			<h1>Editar {crud.modelo}</h1>
			<hr />
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label>Marca</label>
					<input
						name="marca"
						type="text"
						value={crud.marca}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label>Modelo</label>
					<input
						name="modelo"
						type="text"
						required
						value={crud.modelo}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label>Año</label>
					<input
						name="año"
						type="text"
						required
						value={crud.año}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label>Precio</label>
					<input
						name="precio"
						type="number"
						required
						value={crud.precio}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label>Color</label>
					<input
						name="color"
						type="text"
						value={crud.color}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label>Kilometraje</label>
					<textarea
						name="kilometraje"
						row="5"
						value={crud.kilometraje}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<div className="btn-group" style={{ marginTop: 15 }}>
					<button type="submit" className="btn btn-primary" style={{ marginRight: 15 }}>
						Aceptar
					</button>
					<button
						type="button"
						onClick={handleCancel}
						className="btn btn-secondary"
					>
						Cancelar
					</button>
				</div>
			</form>
		</div>
	);
}

export default CrudEdit;
