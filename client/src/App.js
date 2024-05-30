import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/common/Navbar";
import Home from "./components/pages/Home";
import CrudAdd from "./components/cruds/CrudAdd";
import CrudTable from "./components/cruds/CrudTable";
import CrudListView from "./components/cruds/CrudListView";
import CrudGridView from "./components/cruds/CrudGridView";
import CrudDetails from "./components/cruds/CrudDetails";
import CrudEdit from "./components/cruds/CrudEdit";
import CrudDelete from "./components/cruds/CrudDelete";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/api/" element={<Home />} />
					<Route exact path="/motorcycles" element={<CrudTable />} />					
					<Route exact path="/motorcycles/list-view" element={<CrudListView />} />
					<Route exact path="/motorcycles/grid-view" element={<CrudGridView />} />
					<Route exact path="/motorcycles/new" element={<CrudAdd />} />
					<Route exact path="/motorcycles/:_id" element={<CrudDetails />} />
					<Route exact path="/motorcycles/:_id/edit" element={<CrudEdit />} />
					<Route exact path="/motorcycles/:_id/delete" element={<CrudDelete />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
