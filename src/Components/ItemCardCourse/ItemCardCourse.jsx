import React, { useState } from 'react';
import './ItemCardCourse.css';
import SideBar from '../SideBar/SideBar';
import { Link } from 'react-router-dom';


const ItemCardCourse = ({ submission, index }) => {
    return (
        <Link to={`/dashboard/detail-submission/${index}`} key={index} className={`item-submission ${submission.isGraded ? 'graded' : 'ungraded'}`} >
            <p><strong>Học viên:</strong> {submission.studentName}</p>
            <p><strong>Bài Kiểm Tra:</strong> {submission.lessonName}</p>
            <p><strong>Khóa học:</strong> {submission.courseName}</p>
        </Link>
    );
};

export default ItemCardCourse;
