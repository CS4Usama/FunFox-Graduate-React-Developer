import "./Footer.css";
import { Link, useNavigate } from "react-router-dom";
import SpeakIcon from "../../assets/speak-icon.svg";
import InfoIcon from "../../assets/info-icon.svg";
import PreviousIcon from "../../assets/previous-icon.svg";
import NextIcon from "../../assets/next-icon.svg";


export default function Footer(props) {
    const navigate = useNavigate();

    const handleSelectChange = (e) => {
        const selectedValue = parseInt(e.target.value);
        if(selectedValue === 1) {
            navigate("/");
        } else if(selectedValue === 2) {
            navigate("/slide-2");
        }
    }


    return (
        <footer className="footer">
            <div className="speak-icon-container">
                <img src={SpeakIcon} className="speak-icon" alt="Speak" draggable="false" />
            </div>

            <div className="pagination">
                <Link to="/">
                    <img src={PreviousIcon} className="previous-icon" alt="Previous" draggable="false" />
                </Link>

                <select name="Page" defaultValue={props.selectedValue} onChange={handleSelectChange}>
                    <option value="1"> 1 </option>
                    <option value="2"> 2 </option>
                </select>

                <Link to="/slide-2">
                    <img src={NextIcon} className="next-icon" alt="Next" draggable="false" />
                </Link>
            </div>

            <div className="info-icon-container">
                <img src={InfoIcon} className="info-icon" alt="Info" draggable="false" />
            </div>
        </footer>
    );
}
