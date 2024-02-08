import classes from "./Blog.module.css"
import BlogPost from "../BlogPost/BlogPost";
import { Link } from "react-router-dom";
import req3 from "../../img/leafelipse1.png"
import req4 from "../../img/leafelipse2.png"
import req5 from "../../img/blog1.png"
import req6 from "../../img/blog2.png"
import req7 from "../../img/blog3.png"


function Blog() {
    return (
        <>
            <div id="blog" className={classes.blogWrapper}>
                <div className={classes.blogWrapperCopy}>
                  
                    <img src={req3} alt="" className={classes.leafelipseOne} />
                    <img src={req4} alt="" className={classes.leafelipseTwo} />
                    
                    <h2><Link to="/blogfilter" className={classes.blogWrapperCopyh}>Blog</Link></h2>
                    <p className={classes.blogWrapperCopyp}>Discover your best and most powerful self with our exclusive health and wealth services.....</p>
                </div>
                <div className={classes.blogList}>
                    <BlogPost
                        blogImg={req5}
                        blogHeading="Best Practices for meditation & relaxation..."
                        blogCopy="Mindfulness meditation originates from Buddhist teachings and is the most popular and researched form of meditation in the West."
                        category="Health"
                    />
                    <BlogPost
                        blogImg={req6}
                        blogHeading="Best Practices for meditation & relaxation..."
                        blogCopy="Mindfulness meditation originates from Buddhist teachings and is the most popular and researched form of meditation in the West."
                        category="Yoga"
                    />
                    <BlogPost
                        blogImg={req7}
                        blogHeading="Best Practices for meditation & relaxation..."
                        blogCopy="Mindfulness meditation originates from Buddhist teachings and is the most popular and researched form of meditation in the West."
                        category="Welness"
                    />
                </div>

            </div>

        </>
    )
}

export default Blog;