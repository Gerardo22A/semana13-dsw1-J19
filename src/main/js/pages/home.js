const React = require('react');
const client = require('../client');
const {Link} = require('react-router-dom');

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { productos: [] };
	}
	componentDidMount() {

		client({ method: 'GET', path: '/api/productos/formacion' }).done(response => {
			this.setState({ productos: response.entity });
		});

	}
	render() {
		return (
			<>
				<h1>Semana 13 App</h1>

				<div style={  {"width": "100%", "display": "flex"}   }>
					<div style={{"width": "calc(100%)"}}>
						<Titulo entidad="Productos" emoji="🎸" />
						<ProductoList productos={this.state.productos} />
						<Link to={"/agregarPro"}>Agregar Producto</Link> 
					</div>
				</div>


			</>
		)
	}
}

const Titulo = (props) => {
	return (
		<>
			<hr />
			<h2>{props.emoji} - {props.entidad}</h2>
			<hr />
			Lista completa de {props.entidad.toLowerCase()}
		</>
	)
}

class ProductoList extends React.Component {
	render() {
		const products = this.props.productos.map(det =>
			<Producto key={det.ID} detalle={det} />
		);
		
		return (
		
			<table border="1">
				<tbody>
					<tr>
						<th>ID</th>
						<th>PRODUCTO</th>
						<th>CATEGORIA</th>
					</tr>
					{products}
				</tbody>
			</table>
		
		)
	}
}


class Producto extends React.Component {
	render() {
		return (
			<tr>
				<td>{this.props.detalle.ID}</td>
				<td>{this.props.detalle.PRODUCTO}</td>
				<td>{this.props.detalle.CATEGORIA}</td>
			</tr>
		)
	}
}

module.exports = HomePage;