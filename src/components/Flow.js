import React from 'react';
// import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import '../css/slider-animations.css';
import '../css/style.css';

// import { render } from 'react-dom';
// import Slider from 'react-animated-slider';
import { Link } from 'react-router-dom'
import { FaWhatsapp } from "react-icons/fa";
import images from '../images/chambits-bg.jpg';
import logo from '../images/logotipo.svg';
// import Cards from './Cards';

const content = [
	{
		// title: 'Mantenimiento, Limpieza y Remodelación de Inmuebles',
		// description:
		// 'Especialistas en pintura, driwall, carpintería, plomería, instalaciones eléctricas, jardinería, limpieza domiciliaria o comercial. Soluciones a la medida, servicios las 24 horas los 7 días de la semana. ¡Llámanos! estamos seguros que cubriremos tus expectativas.',
		// cards: <Cards />,
		slogan: '- Lo quieres, lo tienes. -',
		button: <Link to="/nosotros" className="btn-primary-slider">Nosotros</Link>,
		logo: logo,
		image: images,
		// user: 'Américo Sulca',
		// userProfile: 'https://i.imgur.com/JSW6mEk.png'
	},
	{
		title: 'Técnicos en Informática',
		description:
		'Instalación de cámaras de seguridad y redes de computadoras, reparación y mantenimiento de equipos informáticos. Soluciones en todos los niveles, personal técnico especializado. ¿Quieres un equipo de cómputo para un trabajo en especial? Te ayudamos con cualquier duda que tengas, ¡Contáctanos!',
		button: <a className="btn-primary-slider" href="https://wa.me/51980895124?text=Técnicos%20en%20informática:%20Hola,%20quiero%20información." target="_blank" rel="noopener noreferrer">< FaWhatsapp style={{ fontSize: "1.4rem", verticalAlign:"text-bottom", marginRight:"5px"}} />Contactar ahora</a>,
		image: 'https://i.imgur.com/DCdBXcq.jpg',
		user: 'Erich Behrens',
		userProfile: 'https://i.imgur.com/0Clfnu7.png'
	},
	{
		title: 'Desarrollo de Aplicaciones Web',
		description:
		'Diseñamos y desarrollamos tu página web. ¿Quieres vender por internet o potenciar aún más tus ventas? Una página web e-commerce es lo que necesitas ¡Y te lo hacemos! También diseño gráfico en general. Y sobre los precios, no te preocupes, sabemos que te encantarán. ¡Contáctanos!',
		button: <a className="btn-primary-slider" href="https://wa.me/51980895124?text=Desarrollo%20web:%20Hola,%20quiero%20información." target="_blank" rel="noopener noreferrer">< FaWhatsapp style={{ fontSize: "1.4rem", verticalAlign: "text-bottom", marginRight: "5px" }} />Contactar ahora</a>,
		image: 'https://i.imgur.com/DvmN8Hx.jpg',
		user: 'Bruno Vizovskyy',
		userProfile: 'https://i.imgur.com/4KeKvtH.png'
	}
];

const Flow = () => {
	/* Acción en slider */
	// <Slider></Slider>
	// touchDisabled={true}
	// autoplay={5000}
	return (
		<div className="slider-wrapper">
			{content.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('${item.image}') no-repeat center center` }}
				>
					
					<div className="inner">
						{item.cards}
						<img src={item.logo} alt={"Logo"}/>
						<span>{item.slogan}</span>		
					<h1>{item.title}</h1>
					<p>{item.description}</p>
					{item.button}
				</div>
				{/* <section>
					<img src={item.userProfile} alt={item.user} />
					<span>
						Posted by <strong>{item.user}</strong>
					</span>
				</section> */}
			</div>
		))}
	</div>
	);
};

export default Flow;
