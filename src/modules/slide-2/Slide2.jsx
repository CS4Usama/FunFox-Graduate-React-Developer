import "./Slide2.css";
import "../../App.css";
import Header from "../../commonComponents/header/Header";
import Prototype from "../../commonComponents/prototype/Prototype";
import Footer from "../../commonComponents/footer/Footer";
import HelpIcon from "../../assets/slide-2/help-icon.svg";


export default function Slide2() {
    return (
        <>
            <Header isImage='false' />
            <Prototype img={HelpIcon} cName='help-icon' imgAlt="Help" />

            <section className="main-white-box">

            </section>

            <Footer selection='selected' />
        </>
    );
}
