/* eslint-disable react/prop-types */
import classes from "./OfferSect.module.css"
function OfferSect({ imageSrc, heading, content }) {

    return (
        <>
            <div className={classes.offerSection}>
                <img src={imageSrc} alt="" className={classes.image}/>
                <h3>{heading}</h3>
                <p>{content}</p>
            </div>
        </>
    )
}

export default OfferSect;