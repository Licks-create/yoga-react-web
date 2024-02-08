import TeamMember from "../TeamMember/TeamMember";
import classes from "./Team.module.css"
import teamElipseOne from "../../img/teamelipse1.png"
import teamElipseTwo from "../../img/teamelipse2.png"
import teamElipseThree from "../../img/teamelipse3.png"
import imp1 from "../../img/team1.png"
import imp2 from "../../img/team2.png"
import imp3 from "../../img/team3.png"
import imp4 from "../../img/team4.png"

    function Team () {
        return (
            <>
            <div id="team" className={classes.teamMain}>
                <img src={teamElipseOne} alt="" className={classes.teamElipseOneImg}/>
                <img src={teamElipseTwo} alt="" className={classes.teamElipseTwoImg}/>
                <img src={teamElipseThree} alt="" className={classes.teamElipseThreeImg}/>
                <h2 className={classes.teamMainH}>Meet The team...</h2>
                <p className={classes.teamMainCopy}>Discover your best and most powerful self with our exclusive health and wealth services.....</p>
            <div className={classes.teamWrapper}>
            <TeamMember
                    teamImage={imp1}
                    teamImageAlt="Alt text for image 1"
                    teamHeading="Eloise Bridgerton"
                    position="Meditation Instructor"
                />
                <TeamMember
                    teamImage={imp2}
                    teamImageAlt="Alt text for image 1"
                    teamHeading="Eloise Bridgerton"
                    position="Meditation Instructor"
                />
                <TeamMember
                    teamImage={imp3}
                    teamImageAlt="Alt text for image 1"
                    teamHeading="Eloise Bridgerton"
                    position="Meditation Instructor"
                />
                <TeamMember
                    teamImage={imp4}
                    teamImageAlt="Alt text for image 1"
                    teamHeading="Eloise Bridgerton"
                    position="Meditation Instructor"
                />
            </div>
            </div>
            
               
            </>
        )
    }

    export default Team;