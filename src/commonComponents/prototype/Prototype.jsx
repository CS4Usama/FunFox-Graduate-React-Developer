import "./Prototype.css";
import LeftSideVector from "../../assets/left-side-vector.svg";
import PencilIcon from "../../assets/pencil-icon.svg";
import SchoolBagIcon from "../../assets/school-bag-icon.svg";
import NotebookIcon from "../../assets/notebook-icon.svg";
import RightSideVector from "../../assets/right-side-vector.svg";
import ScaleIcon from "../../assets/scale-icon.svg";
import BachelorCapIcon from "../../assets/bachelor-cap-icon.svg";


export default function Prototype(props) {
    return (
        <>
            <img src={LeftSideVector} className={props.cNameLeftVector} alt="Vector" draggable="false" />
            <img src={PencilIcon} className="pencil-icon" alt="Pencil" draggable="false" />
            <img src={SchoolBagIcon} className={props.cNameBag} alt="School Bag" draggable="false" />
            <img src={NotebookIcon} className={props.cNameNotebook} alt="Notebook" draggable="false" />

            <img src={RightSideVector} className={props.cNameRightVector} alt="Vector" draggable="false" />
            <img src={ScaleIcon} className="scale-icon" alt="Scale" draggable="false" />
            <img src={props.img} className={props.cNameBookHelp} alt={props.imgAlt} draggable="false" />
            <img src={BachelorCapIcon} className={props.cNameBcap} alt="Bachelor Cap" draggable="false" />
        </>
    );
}
