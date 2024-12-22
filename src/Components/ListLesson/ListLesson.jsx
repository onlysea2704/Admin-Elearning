import React from "react";
import './ListLesson.css'

const ListLesson = ({handleEditLesson, handleDeleteLesson}) => {
    return (
        <>
            <div className="lesson-list">
                <h3>Danh Sách Lesson</h3>
                <div className="lessons">
                    {[...Array(20).keys()].map((_, index) => (
                        <div key={index} className="lesson-item">
                            Lesson {index + 1}
                            <div className="lesson-icons">
                                <i
                                    className="fas fa-edit edit-icon"
                                    onClick={() => handleEditLesson(index + 1)}
                                ></i>
                                <i
                                    className="fas fa-trash delete-icon"
                                    onClick={() => handleDeleteLesson(index + 1)}
                                ></i>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="lesson-actions">
                    <button className="btn-create">Tạo Lesson</button>
                    <button className="btn-create">Tạo Quiz</button>
                </div>
            </div>
        </>
    );
}

export default ListLesson;