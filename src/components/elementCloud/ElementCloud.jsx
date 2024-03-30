import "./ElementCloud.css";

export default function ElementCloud(props) {
    return (
        <div className="element-cloud-parent">
            <img src={props.img} className='cloud-image' alt="Cloud" draggable='false' />
            <span className='element-cloud-text'>{props.text}</span>
        </div>
    );
}
