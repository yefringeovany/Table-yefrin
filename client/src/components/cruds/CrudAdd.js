import React, { useState } from "react";
import { post } from "axios";
import { useNavigate } from "react-router-dom";

function CrudAdd(props) {
	const initialState = {
		marca: "",
		modelo: "",
		año: "",
		precio: "",
		color: "",
		kilometraje: "",
	};
	const [crud, setCrud] = useState(initialState);

	const navigate = useNavigate();

	function handleSubmit(event) {
		event.preventDefault();
		//if (!crud.companyName || !crud.email) return;
		async function postCrud() {
			try {
			  const response = await post(process.env.REACT_APP_API_URL, crud);
			  navigate(`/motorcycles/${response.data._id}`);
			} catch (error) {
			  console.error("Error al crear motocicleta:", error);
			  alert("Hubo un error al crear la motocicleta. Por favor, intenta nuevamente.");
			}
		  }
		postCrud();
	}

	function handleChange(event) {
		setCrud({ ...crud, [event.target.name]: event.target.value });
	}

	function handleCancel() {
		navigate("/motorcycles");
	}

	return (
		<div className="container" style={{ maxWidth: "400px" }}>
		  <h1>Crear Motocicleta</h1>
		  <hr />
		  <form onSubmit={handleSubmit}>
			<div className="form-group">
			  <label>Marca</label>
			  <input
				name="marca"
				type="text"
				required
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
				type="text"
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
				type="text"
				value={crud.kilometraje}
				onChange={handleChange}
				className="form-control"
			  />
			</div>
	
			<div className="btn-group">
			  <input type="submit" value="Guardar" className="btn btn-primary" />
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
	
	export default CrudAdd;
