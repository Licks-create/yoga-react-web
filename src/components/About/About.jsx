import classes from "./About.module.css"
import AboutElements from "../AboutElement/AboutElements";


function About() {
    return (
        <>
            <div id="contact" className={classes.aboutWrap}>
                <AboutElements />
                <div className={classes.aboutFormContainer}>
                    <p>Subscribe Now</p>
                    <p>Get the latest news, updates, tutorial and more.....</p>
                    <form className={classes.aboutForm}>
                        <input type="text" placeholder="Enter your email here" className={classes.aboutFormInput} />
                        <button type="submit" className={classes.aboutFormButton}>Submit</button>
                    </form>
                </div>
                </div>
        </>
    )
}

export default About;