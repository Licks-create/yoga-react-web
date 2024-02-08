import { useState } from "react";
import BlogPost from "../BlogPost/BlogPost";
import classes from "./BlogFilter.module.css"
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
                            blogImg={import("../../img/blog1.png")}
                            blogHeading="Best Practices for meditation & relaxation..."
                            blogCopy="Mindfulness meditation originates from Buddhist teachings and is the most popular and researched form of meditation in the West."
                            category="Health"
                        />
                        <BlogPost
                            blogImg={import("../../img/blog2.png")}
                            blogHeading="Best Practices for meditation & relaxation..."
                            blogCopy="Mindfulness meditation originates from Buddhist teachings and is the most popular and researched form of meditation in the West."
                            category="Yoga"
                        />
                        <BlogPost
                            blogImg={import("../../img/blog3.png")}
                            blogHeading="Best Practices for meditation & relaxation..."
                            blogCopy="Mindfulness meditation originates from Buddhist teachings and is the most popular and researched form of meditation in the West."
                            category="Welness"
                        />
                        <BlogPost
                            blogImg={import("../../img/blog1.png")}
                            blogHeading="Best Practices for meditation & relaxation..."
                            blogCopy="Mindfulness meditation originates from Buddhist teachings and is the most popular and researched form of meditation in the West."
                            category="Health"
                        />
                        <BlogPost
                            blogImg={import("../../img/blog2.png")}
                            blogHeading="Best Practices for meditation & relaxation..."
                            blogCopy="Mindfulness meditation originates from Buddhist teachings and is the most popular and researched form of meditation in the West."
                            category="Yoga"
                        />
                        <BlogPost
                            blogImg={import("../../img/blog3.png")}
                            blogHeading="Best Practices for meditation & relaxation..."
                            blogCopy="Mindfulness meditation originates from Buddhist teachings and is the most popular and researched form of meditation in the West."
                            category="Welness"
                        />
                        <BlogPost
                            blogImg={import("../../img/blog1.png")}
                            blogHeading="Best Practices for meditation & relaxation..."
                            blogCopy="Mindfulness meditation originates from Buddhist teachings and is the most popular and researched form of meditation in the West."
                            category="Health"
                        />
                        <BlogPost
                            blogImg={import("../../img/blog2.png")}
                            blogHeading="Best Practices for meditation & relaxation..."
                            blogCopy="Mindfulness meditation originates from Buddhist teachings and is the most popular and researched form of meditation in the West."
                            category="Yoga"
                        />
                        <BlogPost
                            blogImg={import("../../img/blog3.png")}
                            blogHeading="Best Practices for meditation & relaxation..."
                            blogCopy="Mindfulness meditation originates from Buddhist teachings and is the most popular and researched form of meditation in the West."
                            category="Welness"
                        />
                    </>
                )}
                {selectedCategory === "Health" && (
                    <>
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