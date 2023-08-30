import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [tarea, setTarea] = useState("")
	const [lista, setLista] = useState([])


	function handletarea(e) {
		setTarea(e.target.value)

	}

	useEffect(() => {
		console.log(tarea)
	}, [tarea])

	function handleSubmit(e) {
		e.preventDefault()
		setTarea("")
	}
	const handleKeyDown = (event) => {

		if (event.key === 'Enter') {
			setLista(lista.concat(tarea))
			setTarea("")
			console.log(tarea)
			//   setLista(event.target.value);
		}
		//  setLista(lista.concat(tareas("")))
	};
	//   function agregarlista() {
	// 	setLista(lista.concat(""))

	const borrar = (tarea) => {
		if (setLista.length === 0) {
			alert("No hay tareas, añadir tareas");
		}
		setLista(lista.filter(item => item !== tarea));
	};







	return (
		<div className="vh-100 bg-secondary">
			<div className="text-center position-relative my-0">
				<div className=" w-50 position-relative top-0 start-50 translate-middle-x my-0 ">
					<label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm fst-italic text-light" style={{ fontSize: "50px" }}>Lista</label>
					<div className="col-sm-10d-block">
						{<input onChange={handletarea} value={tarea} onKeyDown={handleKeyDown} type="email" className="form-control form-control-sm w-100 d-block bg-light border-0" style={{ height: "60px", fontFamily: "inherit", fontSize: "30px" }} id="colFormLabelSm" />}
						{/* 
					<input st
						
						onChange={e => setTarea(e.target.value)}
						onKeyDown={handleKeyDown}
					// /> */}
					</div>
				</div>
				<ul className="mb-3 w-50 position-relative top-0 start-50 translate-middle-x my-0 px-0 " style={{ listStyle: "none" }}>
					{lista.map(tarea => (<li className="form-control form-control-sm w-100 d-flex justify-content-between bg-light bg-gradient border-1 my-0" style={{ height: "40px", fontFamily: "inherit", fontSize: "30px" }}>{tarea}
						<span onClick={() => borrar(tarea)} > x </span></li>))}
				</ul>
				{/* <span onClick={() => actions.borrar(tarea)}> */}
			</div>
		</div>

	);
};

export default Home;




{/* <button className="position-absolute top-50 end-0 translate-middle-y border-0 bg-transparent" */ }