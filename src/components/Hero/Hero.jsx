import { useState } from "react";
import classes from "./Hero.module.css";
import HeroImg from "../../img/pngegg (1).png";
import { Link } from "react-router-dom";


function Hero() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const [showForm, setShowForm] = useState(false);
  const handleEnrollClick = () => setShowForm(true);
  const handleClose = () => {
    setShowForm(false);
  };


  return (
    <>
      <div className={classes.heroMain}>
        <header className={classes.header}>

        

          <ul className={`${classes.links} ${isNavOpen ? classes.open : ""}`}>
          <Link to="#">
           <h2 className={classes.logo}>Elda Health</h2>
          </Link>
          <div className={classes.listitems}>

            <li className={classes.link}>
              <a href="#services">Services</a>
            </li>
            <li className={classes.link}>
              <a href="#team">Our Team</a>
            </li>
            <li className={classes.link}>
              <Link to="/blogfilter">Bookings</Link>
            </li>
            <li className={classes.link}>
              <a href="#contact">Contact</a>
            </li>
          </div>
          </ul>
        </header>

        <div className={classes.hero}>
          <div className={classes.heroCopy}>
            <h1>Revitalize Your Body and Mind</h1>
            <p className={classes.heroCopyp}>
              Unlock your the strength and beauty of your mind with
            </p>
            <button type="button" className={classes.heroCopyButton} onClick={handleEnrollClick}>
              Book Appointment
            </button>
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
          <div className={classes.heroImg}>
            <img src={HeroImg} alt="" className={classes.heroImgImg} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
