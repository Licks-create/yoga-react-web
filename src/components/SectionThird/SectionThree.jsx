import { useState } from "react";
import classes from "./SectionThree.module.css";


function SectionThree() {
    const [showForm, setShowForm] = useState(false);
    const handleEnrollClick = () => setShowForm(true);
    const handleClose = () => {
        setShowForm(false);
    };
    return (
        <>
            <div className={classes.sectionThreeWrap}>
               
                <div className={classes.sectionThreeCopy}>
                    <p>Get 25% Discount on all yoga classes</p>
                    <button type="button" className={classes.sectionThreeButton} onClick={handleEnrollClick}>Enroll Now</button>
                </div>
                
            </div>
            {showForm && (
                <div className={classes.enrollmentForm}>
                    <div className={classes.closeButton} onClick={handleClose}>
                        <span></span>
                    </div>
                    <h3 className={classes.enrollmentFormh}>Enrollment Form</h3>
                    <form className={classes.threeForm}>
                        <input type="text" placeholder="Enter your email here" className={classes.aboutFormInput} />
                        <button type="submit" className={classes.aboutFormButton}>Submit</button>
                    </form>
                </div>
            )}
        </>
    )
}

export default SectionThree;