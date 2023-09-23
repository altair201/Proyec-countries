import "./About.css";
import Icon from "../Icon/Icon";
const About = () => {
    return (
        <div className="containerAbout">
            <div className="containerDescricion" >
                <div className="photoPerfil"></div>
                <div className="descrippar">
                <p>Soy una persona enfocada en la consecución de objetivos y la eficiencia en mis proyectos. Actualmente, trabaje en un proyecto relacionado con países. Mi tarea principal es utilizar una API para recopilar información sobre diferentes países y almacenarla en una base de datos. Además, estoy desarrolle una interfaz que permite mostrar tarjetas informativas (cards) y detalles (details) sobre estos países. También implemente un formulario para crear actividades relacionadas con estos países y mostrarlas de manera organizada. Mi objetivo es hacer que este proyecto sea lo más efectivo.</p>
                <div ><Icon/></div></div>
            </div>
            <div className="referenciPhoto">Foto de <a href="https://unsplash.com/es/@camadams?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Cam Adams</a> en <a href="https://unsplash.com/es/fotos/8EAY9BrvRdM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </div>
        </div>
    )
}
export default About