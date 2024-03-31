import "./Header.css";
import FunFoxLogo from "../../assets/funfox-logo.svg";


export default function Header(props) {
    return (
        <>
            <img src={FunFoxLogo} className="funfox-logo" alt="FunFox Logo" draggable="false" />
            {
                props.isImage ?
                    null
                :
                    <img src={props.img} className="week-1" alt="Week 1" draggable="false" />
            }
        </>
    );
}
