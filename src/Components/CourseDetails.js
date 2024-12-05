import React from 'react';
import "../Css Styles/CourseDetails.css";


function CourseDetails({ show, handleClose, course }) {
  if (!show) return null;
  return (
    <>
      <div className="modal-overlay" onClick={handleClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <h2>{course.title}</h2>
          <img src={course.img} />
          <ul>
            <li><b>Description : </b> {course.description}</li>
            <li><b>Prerequisite :</b> {course.Prerequisite}</li>
            <li> <b>Duration : </b>{course.Duration}</li>
          </ul>
          <button onClick={handleClose}>Close</button>
        </div>
      </div>


    </>
  )
}
export default CourseDetails;