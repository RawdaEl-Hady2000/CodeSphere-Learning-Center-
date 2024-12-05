import React, { useState } from "react";
import "../Css Styles/Courses.css";
import { Link } from "react-router";
import { useNavigate } from 'react-router-dom';
import CourseDetails from '../Components/CourseDetails'

function Courses() {
    // State to toggle the visibility of the courses
    const [showAllCourses, setShowAllCourses] = useState(false);
    const navigate = useNavigate();  // Access navigate function

    const [showModal, setShowModal] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const frontEndcourses = [
        { id: 1, title: 'HTML 5', img: "https://img.freepik.com/free-photo/programming-background-collage_23-2149901768.jpg?t=st=1732924899~exp=1732928499~hmac=a00c4e8d1a7a87ade9b53c4205f8b90b4ed12de590641caefc89886516cbbb70&w=900", description: 'Standard markup language for Web pages.', Duration: "2 Lectures, 2 Hours per lecture.", Prerequisite: "No prerequisites required." },
        { id: 2, title: 'CSS 3', img: "https://colorlib.com/wp/wp-content/uploads/sites/2/creative-css3-tutorials.jpg", description: 'Standard markup language for Web pages.', Duration: "2 Lectures, 2 Hours per lecture.", Prerequisite: "No prerequisites required." },
        { id: 3, title: 'Bootstrap', img: "https://www.iim.fr/ecole-web/wp-content/uploads/2015/03/twitter-bootstrap.jpg", description: 'Standard markup language for Web pages.', Duration: "2 Lectures, 2 Hours per lecture.", Prerequisite: "Basic of CSS course & Grid system." },
        { id: 4, title: 'ES6 & JS', img: "https://miro.medium.com/v2/resize:fit:840/1*8nfBRAssY0DuETYwdwyqqw.png", description: 'Standard markup language for Web pages.', Duration: "2 Lectures, 2 Hours per lecture.", Prerequisite: "No prerequisites required." },
        { id: 5, title: 'React js', img: "https://maktabkhooneh.org/mag/wp-content/uploads/2019/07/react-js-image.png", description: 'Standard markup language for Web pages.', Duration: "2 Lectures, 2 Hours per lecture.", Prerequisite: "Aware of  JS , ES6 courses." },
        { id: 6, title: 'Angular js', img: "https://external-preview.redd.it/qW5sXZSe_7w815bbdJh3mwhzBxyEdK13fFyRs3_8ZdQ.jpg?width=640&crop=smart&auto=webp&s=53d250c9db70f2b0fe7a93de0cf57e7f7ffc2a06", description: 'Standard markup language for Web pages.', Duration: "2 Lectures, 2 Hours per lecture.", Prerequisite: "Aware of JS , ES6 courses." },
        { id: 7, title: 'Vue js', img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFNQLALwWiAI1Y38Q6ZET388XzuGulXAEE4Q&s", description: 'Standard markup language for Web pages.', Duration: "2 Lectures, 2 Hours per lecture.", Prerequisite: "Aware of  JS , ES6 courses." },
        { id: 8, title: 'Next js', img: "https://blog.zegocloud.com/wp-content/uploads/2024/04/nextjs-alternative.jpg", description: 'Standard markup language for Web pages.', Duration: "2 Lectures, 2 Hours per lecture.", Prerequisite: "Aware of  JS , ES6 courses." },
    ];

    const backEndcourses = [
        { id: 9, title: 'PHP', img: "https://cdn-images-1.medium.com/max/900/0*ug7m0tU7x_OpC2uY", description: 'Standard markup language for Web pages.', Duration: "2 Lectures, 2 Hours per lecture.", Prerequisite: "No prerequisites required." },
        { id: 10, title: '.NET Core', img: "https://media.licdn.com/dms/image/v2/D4D12AQFf6NtSqug1qg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1661349251079?e=2147483647&v=beta&t=R-3QKsfr97pKaPnzKCTdkRP1shqZEd8AhlhRE3NEGRo", description: 'Standard markup language for Web pages.', Duration: "2 Lectures, 2 Hours per lecture.", Prerequisite: "Aware of C# course." },
        { id: 11, title: 'Database SQL', img: "https://severalnines.com/wp-content/uploads/2023/12/BLOG-Whats-new-in-SQL-Server-2022.png", description: 'Standard markup language for Web pages.', Duration: "2 Lectures, 2 Hours per lecture.", Prerequisite: "No prerequisites required." },
        { id: 12, title: 'Java', img: "https://api.free-work.com/media/cache/resolve/blog_post_image_large/l-ecosysteme-java-en-profonde-mutation-quelles-consequences-sur-l-it-gZ9moKGGtQE3ER2f.jpg", description: 'Standard markup language for Web pages.', Duration: "2 Lectures,2 Hours per lecture.", Prerequisite: "No prerequisites required." },
    ];

    const handleShowModal = (course) => {
        setSelectedCourse(course);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedCourse(null);
    };

    // Toggle the visibility of all courses
    const toggleCourses = () => {
        setShowAllCourses(!showAllCourses);
    };
    // Navigate to course details
    const handleShowDetails = () => {
        navigate('/courses/course-details');  // Programmatically navigate to the course details page
    };

    return (
        <>
            <div className="container" id="courses">
                <h4 className="courses">Courses</h4>
                <div className="course-list">
                    <div className="row">
                        <h6>Front End Courses</h6>
                        {frontEndcourses.map((course) => (
                            <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12 col-xs-12" key={course.id}>
                                <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded front-courses">
                                    <h3>{course.title}</h3>
                                    <div className="css-background">
                                        <img src={course.img} className="css-background" />
                                    </div>
                                    <button className="btn btn-info show-details" onClick={() => handleShowModal(course)}>Show Details</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <CourseDetails show={showModal} handleClose={handleCloseModal} course={selectedCourse} />
                </div>

                {/* Show "Show All Courses" button */}
                <div className="all-courses text-center my-3">
                    <button onClick={toggleCourses} className="btn btn-info mt-3">
                        {showAllCourses ? "Show Less Courses" : "Show All Courses"}
                    </button>
                </div>

                <div className="course-list">
                    {showAllCourses && (
                        <div className="row">
                            <h6>Back End Courses</h6>
                            {backEndcourses.map((course) => (
                                <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12 col-xs-12" key={course.id}>
                                    <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded front-courses">
                                        <h3>{course.title}</h3>
                                        <div className="css-background">
                                            <img src={course.img} className="css-background" />
                                        </div>
                                        <button className="btn btn-info show-details" onClick={() => handleShowModal(course)}>Show Details</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    <CourseDetails show={showModal} handleClose={handleCloseModal} course={selectedCourse} />
                </div>
            </div>



        </>
    );
}

export default Courses;

