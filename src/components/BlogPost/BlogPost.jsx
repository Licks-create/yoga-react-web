/* eslint-disable react/prop-types */
import { useState } from "react";
import classes from "./BlogPost.module.css"
import Booking from "../SlotBook/Booking";

function BlogPost({blogImg,altBlogImg,blogHeading,blogCopy,category}) {
    const [slot,setSlot]=useState(false)
    const setBooking=(value)=>{
        setSlot(value)
    }
    const onBook=(data)=>{
        console.log(data)
    }
    return (
        <>
            <div className={classes.blogPost} style={{border:slot?"2px solid ":"2px solid white"}}>
                <div className={classes.blogPostImg}>
                    <img src={blogImg} alt={altBlogImg} className={classes.blogPostImgImg}/>
                </div>
                <div className={classes.blogPostCopy}>
                    <h3 className={classes.blogPostCopyh}>{blogHeading}</h3>
                    <p className={classes.blogPostCopyp}>{blogCopy}</p>
                    <p className={classes.blogPostCopyCategory}>{category}</p>
                    <button type="button" className={classes.blogPostRead} onClick={()=>setSlot(!slot)}>Book Now</button>

                   

                </div>
            </div>
                {slot && <Booking setBooking={setBooking} onBook={onBook}/>}
        </>
    )
}

export default BlogPost;