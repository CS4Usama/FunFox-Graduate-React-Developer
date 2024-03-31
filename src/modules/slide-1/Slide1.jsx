import "./Slide1.css";
import "../../App.css";
import Header from "../../commonComponents/header/Header";
import Prototype from "../../commonComponents/prototype/Prototype";
import Footer from "../../commonComponents/footer/Footer";
import ElementCloud from "../../components/elementCloud/ElementCloud";
import Week1 from "../../assets/slide-1/week-1.svg";
import BookIcon from "../../assets/slide-1/book-icon.svg";
import GirlStudent from "../../assets/slide-1/girl-student.svg";
import Cloud1 from "../../assets/slide-1/cloud-1.svg";
import Cloud2 from "../../assets/slide-1/cloud-2.svg";
import Cloud3 from "../../assets/slide-1/cloud-3.svg";
import TextBoard from "../../assets/slide-1/text-board.svg";


export default function Slide1() {
    return (
        <>
            <Header img={Week1} />

            <Prototype
                img={BookIcon} cNameLeftVector='left-side-vector' cNameBag='school-bag-icon'
                cNameNotebook='notebook-icon' cNameRightVector='right-side-vector'
                cNameBookHelp='book-icon' imgAlt='Book' cNameBcap='bachelor-cap-icon'
            />

            <section className="main-white-box">
                <div style={{textAlign: 'center'}}>
                    <span className="main-pink-heading">Elements of Story Writing</span>
                </div>

                <p className="wc-term">
                    Welcome to term 2 of Writers Club. Are you excited for this amazing journey? <br/>
                    Over the next week, we will be practicing the different elements of story writing.&nbsp;
                    <br className="br-display" />
                    Our aim is to make stories more interesting and exciting.
                </p>

                <div className="elements-green-box">
                    <p className="elements-text">
                        There are <b>five</b> elements which make the foundation for story writing.
                        An element is an essential part of something and every fiction
                        story has the same key elements:
                    </p>
                    <img src={GirlStudent} className="girl-student" alt="Girl Student" draggable="false" />
                </div>

                <div className="cloud-section">
                    <ElementCloud img={Cloud1} text="Setting" />
                    <ElementCloud img={Cloud2} text="Characters" />
                    <ElementCloud img={Cloud1} text="Plot" />
                    <ElementCloud img={Cloud3} text="Problem or Conflict" />
                    <ElementCloud img={Cloud2} text="Resolution" />
                </div>

                <p className="wc-term-text-2">
                    You must be familiar with some of these. If not, do not worry!
                    we will cover all these elements as we go along.
                </p>

                <div className="text-board-parent">
                    <img src={TextBoard} className="text-board" alt="Text Board" draggable="false" />
                    <span className="board-text">
                        For today<i>&apos;</i>s lesson, we will try to understand and practice writing the
                        setting for our stories. <br/>
                        <div className="story-setting-text">The setting is an important element of every fiction story.</div>
                    </span>
                </div>
            </section>

            <Footer />
        </>
    );
}
