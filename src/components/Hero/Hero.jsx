import { useEffect, useState } from "react";
import classes from "./Hero.module.css";
import HeroImg from "../../img/pngegg (1).png";
import { Link, useNavigate } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import toast from "react-hot-toast";
import Booking from "../SlotBook/Booking";
function Hero() {
  const navigate=useNavigate()
  const [isNavOpen, setIsNavOpen] = useState(false);
  // console.log(localStorage.getItem("user"));

  const [showForm, setShowForm] = useState(false);
  const [user, setUser] = useState(null);
  const handleEnrollClick = () => setShowForm(true);

  const logout=()=>{
    
    let data=JSON.parse(localStorage.getItem("user"))
    data=data.map(obj=>({...obj,isactive:false}))
    localStorage.setItem("user",JSON.stringify(data))
    navigate("/")
    window.location.reload(true)
    toast.success("Logged out")
  }
  let data = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if(data?.length){
    let user = data.find((data) => data?.isactive);
  setUser(user);}
  else
  setUser(null)
  setIsNavOpen(true)
  }, [data]);
  // console.log(user)
  
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
            <div style={{position:"fixed",right:"-20px"}}>
              {user? (
                <li style={{color:"white",fontSize:"1.5rem",display:"flex",flexDirection:"column"}}>
                  <div>
                  Hi, {user?.username} 
                 <PersonIcon style={{margin:"1px 1px"}}/>
                  </div>
                 <div className={classes.link} style={{cursor:"pointer"}} onClick={logout}>Logout</div>
                </li>
              ) : (
                <div style={{fontSize:"1.5rem"}}>
                  <li className={classes.link}>
                    <Link to="/signup">Signup</Link>
                  </li>
                  <div
                    style={{
                      height: "2px",
                      backgroundColor: "white",
                      margin: "10px -5px ",
                      width: "120%",
                    }}
                  ></div>
                  <li className={classes.link}>
                    <Link to="/login">Login</Link>
                  </li>
                </div>
              )}
            </div>
          </ul>
        </header>

        <div className={classes.hero}>
          <div className={classes.heroCopy}>
            <h1>Revitalize Your Body and Mind</h1>
            <p className={classes.heroCopyp}>
              Unlock your the strength and beauty of your mind with
            </p>
            <button
              type="button"
              className={classes.heroCopyButton}
              onClick={handleEnrollClick}
            >
              Book Appointment
            </button>
          </div>
          {showForm && (
            <Booking setBooking={setShowForm}/>
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
