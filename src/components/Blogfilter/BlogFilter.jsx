import { useState } from "react";
import BlogPost from "../BlogPost/BlogPost";
import classes from "./BlogFilter.module.css"
import imp1 from "../../img/blog1.png"
import imp2 from "../../img/blog2.png"
import imp3 from "../../img/blog2.png"
import imp4 from "../../img/blog1.png"
import imp5 from "../../img/blog2.png"
import imp6 from "../../img/blog3.png"
import imp7 from "../../img/blog1.png"
import imp8 from "../../img/blog2.png"
import imp9 from "../../img/blog3.png"
import imp11 from "../../img/blog1.png"
import { Link } from "react-router-dom";


function BlogFilter() {
    const [selectedCategory, setSelectedCategory] = useState("");

   
    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };



    return (
        <>
        <header className={classes.header}>
        <Link to="/" className={classes.logo}>Elda Health</Link>
        </header>
<div className={classes.blogFilterMain}>


            <div className={classes.blogFilter}>
                <div className={classes.blogFilterCopy}>
                    <h2 onClick={() => handleCategoryClick("")} className={classes.blogFilterCopyh}>Filter</h2>
                    <ul className={classes.blogFilterList}>
                        <li onClick={() => handleCategoryClick("Health")}>Health</li>
                        <li onClick={() => handleCategoryClick("Yoga")}>Yoga</li>
                        <li onClick={() => handleCategoryClick("Welness")}>Welness</li>
                    </ul>
                </div>

            </div>

            <div className={classes.blogList}>
                {selectedCategory === "" && (
                    <>
                        <BlogPost
                            blogImg={imp1}
                            blogHeading="Best Practices for meditation & relaxation..."
                            blogCopy="Mindfulness meditation originates from Buddhist teachings and is the most popular and researched form of meditation in the West."
                            category="Health"
                        />
                        <BlogPost
                            blogImg={imp2}
                            blogHeading="Best Practices for meditation & relaxation..."
                            blogCopy="Mindfulness meditation originates from Buddhist teachings and is the most popular and researched form of meditation in the West."
                            category="Yoga"
                        />
                        <BlogPost
                            blogImg={imp3}
                            blogHeading="Best Practices for meditation & relaxation..."
                            blogCopy="Mindfulness meditation originates from Buddhist teachings and is the most popular and researched form of meditation in the West."
                            category="Welness"
                        />
                        <BlogPost
                            blogImg={imp4}
                            blogHeading="Best Practices for meditation & relaxation..."
                            blogCopy="Mindfulness meditation originates from Buddhist teachings and is the most popular and researched form of meditation in the West."
                            category="Health"
                        />
                        <BlogPost
                            blogImg={imp5}
                            blogHeading="Best Practices for meditation & relaxation..."
                            blogCopy="Mindfulness meditation originates from Buddhist teachings and is the most popular and researched form of meditation in the West."
                            category="Yoga"
                        />
                        <BlogPost
                            blogImg={imp6}
                            blogHeading="Best Practices for meditation & relaxation..."
                            blogCopy="Mindfulness meditation originates from Buddhist teachings and is the most popular and researched form of meditation in the West."
                            category="Welness"
                        />
                        <BlogPost
                            blogImg={imp7}
                            blogHeading="Best Practices for meditation & relaxation..."
                            blogCopy="Mindfulness meditation originates from Buddhist teachings and is the most popular and researched form of meditation in the West."
                            category="Health"
                        />
                        <BlogPost
                            blogImg={imp8}
                            blogHeading="Best Practices for meditation & relaxation..."
                            blogCopy="Mindfulness meditation originates from Buddhist teachings and is the most popular and researched form of meditation in the West."
                            category="Yoga"
                        />
                        <BlogPost
                            blogImg={imp9}
                            blogHeading="Best Practices for meditation & relaxation..."
                            blogCopy="Mindfulness meditation originates from Buddhist teachings and is the most popular and researched form of meditation in the West."
                            category="Welness"
                        />
                    </>
                )}
                {selectedCategory === "Health" && (
                    <>
                        <BlogPost
                            blogImg={imp11}
                            blogHeading="Best Practices for meditation & relaxation..."
                            blogCopy="Mindfulness meditation originates from Buddhist teachings and is the most popular and researched form of meditation in the West."
                            category="Health"
                        />
                        <BlogPost
                            blogImg={import("../../img/blog1.png")}
                            blogHeading="Best Practices for meditation & relaxation..."
                            blogCopy="Mindfulness meditation originates from Buddhist teachings and is the most popular and researched form of meditation in the West."
                            category="Health"
                        />
                        <BlogPost
                            blogImg={import("../../img/blog1.png")}
                            blogHeading="Best Practices for meditation & relaxation..."
                            blogCopy="Mindfulness meditation originates from Buddhist teachings and is the most popular and researched form of meditation in the West."
                            category="Health"
                        />
                    </>
                )}

                {selectedCategory === "Yoga" && (
                    <>
                        <BlogPost
                            blogImg={import("../../img/blog2.png")}
                            blogHeading="Best Practices for meditation & relaxation..."
                            blogCopy="Mindfulness meditation originates from Buddhist teachings and is the most popular and researched form of meditation in the West."
                            category="Yoga"
                        />
                        <BlogPost
                            blogImg={import("../../img/blog2.png")}
                            blogHeading="Best Practices for meditation & relaxation..."
                            blogCopy="Mindfulness meditation originates from Buddhist teachings and is the most popular and researched form of meditation in the West."
                            category="Yoga"
                        />
                        <BlogPost
                            blogImg={import("../../img/blog2.png")}
                            blogHeading="Best Practices for meditation & relaxation..."
                            blogCopy="Mindfulness meditation originates from Buddhist teachings and is the most popular and researched form of meditation in the West."
                            category="Yoga"
                        />
                    </>
                )}
                {selectedCategory === "Welness" && (
                    <>
                        <BlogPost
                            blogImg={import("../../img/blog3.png")}
                            blogHeading="Best Practices for meditation & relaxation..."
                            blogCopy="Mindfulness meditation originates from Buddhist teachings and is the most popular and researched form of meditation in the West."
                            category="Welness"
                        />
                        <BlogPost
                            blogImg={import("../../img/blog3.png")}
                            blogHeading="Best Practices for meditation & relaxation..."
                            blogCopy="Mindfulness meditation originates from Buddhist teachings and is the most popular and researched form of meditation in the West."
                            category="Welness"
                        />
                        <BlogPost
                            blogImg={import("../../img/blog3.png")}
                            blogHeading="Best Practices for meditation & relaxation..."
                            blogCopy="Mindfulness meditation originates from Buddhist teachings and is the most popular and researched form of meditation in the West."
                            category="Welness"
                        />
                    </>
                )}
            </div>
            </div>
        </>
    )
}


export default BlogFilter;