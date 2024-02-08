
import OfferSect from "../Offset/OfferSect";
import classes from "./SectionSecond.module.css"
import imp1 from "../../img/elipse1.png"
import imp2 from "../../img/elipse2.png"
import imp3 from "../../img/elipse3.png"
import imp4 from "../../img/offersectone.jpg"
import imp5 from "../../img/offersecttwo.jpg"
import imp6 from "../../img/offersectthree.jpg"
import imp7 from "../../img/offersectfour.jpg"
import imp8 from "../../img/offersectfive.jpg"
import imp9 from "../../img/offersectsix.jpg"
function SectionSecond() {
    return (
        <>
        <div id="services" className={classes.sectionSecondWrapper}>
            <img src={imp1} alt="" className={classes.elipseOne}/>
            <img src={imp2} alt="" className={classes.elipseTwo}/>
            <img src={imp3} alt="" className={classes.elipseThree}/>
            <h2>
                Our Offerings..
            </h2>
            <p className={classes.sectionSecondp}>
                Discover your best and most powerful self with our exclusive health and wealth services.....
            </p>
            <div className={classes.offerSectionWrapper}>
                <OfferSect
                    imageSrc={imp4}
                    imageAlt="Alt text for image 1"
                    heading="Yoga Health camp"
                    content="Beginner yoga You will learn to control your breathing in a relaxed and controlled manner that helps provide focus in the different postures you move through."
                />
                <OfferSect
                    imageSrc={imp5}
                    imageAlt="Alt text for image 1"
                    heading="Meditation"
                    content="Meditation for mental balance and grounding, guided meditation. This practice invites you to observe with loving kindness and bring awareness to your internal world."
                />
                <OfferSect
                    imageSrc={imp6}
                    imageAlt="Alt text for image 1"
                    heading="Empower Flow"
                    content="Perfect balance of linked poses so you are challenged to explore your own personal edge. Designed to challenge, strengthen, and empower your practice as you flow breath by breath through the sequences."
                />
                <OfferSect
                    imageSrc={imp7}
                    imageAlt="Alt text for image 1"
                    heading="Force"
                    content="Designed to build strength, and increase heart rate. Interval training revs up your metabolism unlike anything else. When we practice yoga, the Force is within us and around us."
                />
                <OfferSect
                    imageSrc={imp8}
                    imageAlt="Alt text for image 1"
                    heading="Pre-Natal Yoga"
                    content="Meditation for mental balance and grounding, guided meditation. This practice invites you to observe with loving kindness and bring awareness to your internal world."
                />
                <OfferSect
                    imageSrc={imp9}
                    imageAlt="Alt text for image 1"
                    heading="Force"
                    content="Perfect balance of linked poses so you are challenged to explore your own personal edge. Designed to challenge, strengthen, and empower your practice as you flow breath by breath through the sequences."
                />
            </div>
            </div>
        </>
    )
}

export default SectionSecond;