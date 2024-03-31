import "./Slide2.css";
import "../../App.css";
import Header from "../../commonComponents/header/Header";
import Prototype from "../../commonComponents/prototype/Prototype";
import Footer from "../../commonComponents/footer/Footer";
import HelpIcon from "../../assets/slide-2/help-icon.svg";
import BeachSunnyDay from "../../assets/slide-2/beach-sunny-day.svg";
import HauntedHouseNight from "../../assets/slide-2/haunted-house-night.svg";
import TimeClockIcon from "../../assets/slide-2/time-clock-icon.svg";
import HomePlaceIcon from "../../assets/slide-2/home-place-icon.svg";


export default function Slide2() {
    return (
        <>
            <Header isWeek="false" />

            <Prototype
                img={HelpIcon} cNameLeftVector='left-side-vector-2' cNameBag='school-bag-icon-2'
                cNameNotebook='notebook-icon-2' cNameRightVector='right-side-vector-2'
                cNameBookHelp='help-icon' imgAlt='Book' cNameBcap='bachelor-cap-icon-2'
            />

            <section className="main-white-box">
                <p className="dest-setting-text">
                    Can you figure out the definition of setting from the following examples?
                </p>
                <p className="mint-think-text">
                    (take a minute to think about this)
                </p>

                <div className="image-parent-container">
                    <figure className="figure-container-1">
                        <img src={BeachSunnyDay} className="sunny-beach-image" alt="Beach Sunny Day" />
                        <figcaption className="figcaption-text">
                            Sunny Day at a Beach
                        </figcaption>
                    </figure>
                    <figure className="figure-container-2">
                        <img src={HauntedHouseNight} className="haunted-house-image" alt="Haunted House Night" />
                        <figcaption className="figcaption-text">
                            A cold Rainy Night in a <br/> Haunted House in October
                        </figcaption>
                    </figure>
                </div>

                <p className="setting-def-text">
                    So, what do you think the definition of setting is?
                </p>

                <div className="parent-wrapper">
                    <span className="input-container">
                        <label htmlFor="guess-inp" className="label-text">Any guesses?</label>
                        <span className="input-wrapper">
                            <input type="text" id="guess-inp" name="Guess" />
                        </span>
                    </span>

                    <span className="hint-text">
                        Hint:
                        <img src={TimeClockIcon} className="time-clock-icon-1" alt="Time Clock" draggable="false" />
                        <img src={HomePlaceIcon} className="place-icon-1" alt="Home Place" draggable="false" />
                    </span>
                </div>

                <div className="setting-green-box">
                    <p className="setting-text">
                        Setting is the time
                        <img src={TimeClockIcon} className="time-clock-icon-2" alt="Time Clock" draggable="false" />
                        and place
                        <img src={HomePlaceIcon} className="place-icon-2" alt="Home Place" draggable="false" />
                        of a story. It often answers the questions: when? and where?
                    </p>
                </div>

                <p className="story-text">
                    The time of the story could be in the past, future, day, night, summer or winter.
                    A story may take place in a school, a mall, a desert, an airplane or in a variety
                    of other places.
                </p>
            </section>

            <Footer selectedValue='2' />
        </>
    );
}
