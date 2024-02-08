import DescriptionElements from "../DescriptionElement/DescriptionElements"
import classes from "./Description.module.css"


function Description (){
    return <>
    <div className={classes.descriptionMain}>
        
    <div className={classes.descriptionWrapper}>
        <DescriptionElements />
    </div>
    </div>
    
    </>
}

export default Description;