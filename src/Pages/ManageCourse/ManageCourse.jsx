import React, { useState } from "react";
import "./ManageCourse.css";
import SideBar from "../../Components/SideBar/SideBar";
import ListLesson from "../../Components/ListLesson/ListLesson";

const ManageCourse = () => {
    const [courseImage, setCourseImage] = useState("https://via.placeholder.com/300x200");

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setCourseImage(reader.result); // Hiển thị ảnh mới
            };
            reader.readAsDataURL(file); // Đọc tệp ảnh dưới dạng URL
        }
    };

    const handleEditLesson = (lessonId) => {
        console.log(`Chỉnh sửa bài học ${lessonId}`);
    };

    const handleDeleteLesson = (lessonId) => {
        console.log(`Xóa bài học ${lessonId}`);
    };

    return (
        <div className="page-course-manage">
            <SideBar />
            <div className="manage-course-container">
                {/* Header */}
                <div className="header">
                    <button className="btn-back">Quay lại danh sách</button>
                    <div className="divider"></div>
                    <h1 className="header-title">Quản Lý Khóa Học</h1>
                </div>

                <div className="manage-course-content">
                    {/* Left Section */}
                    <div className="course-details">
                        <div className="course-header">


                            <div className="course-image-container">
                                <label htmlFor="upload-image">
                                    <img
                                        src={courseImage}
                                        alt="Ảnh Khóa Học"
                                        className="course-image"
                                    />
                                </label>
                                <input
                                    id="upload-image"
                                    type="file"
                                    accept="image/*"
                                    style={{ display: "none" }}
                                    onChange={handleImageChange}
                                />
                            </div>


                            <div className="course-info">
                                <div className="form-group">
                                    <label>ID</label>
                                    <input type="text" value="12345" disabled />
                                </div>
                                <div className="form-group">
                                    <label>Tên Khóa Học</label>
                                    <input type="text" placeholder="Nhập tên khóa học" />
                                </div>
                                <div className="form-group">
                                    <label>Giá</label>
                                    <input type="number" placeholder="Nhập giá khóa học" />
                                </div>
                                <div className="form-group">
                                    <label>Tên Giảng Viên</label>
                                    <input type="text" placeholder="Nhập tên giảng viên" />
                                </div>
                                <div className="form-group">
                                    <label>Loại Bài Học</label>
                                    <input type="text" placeholder="Nhập loại bài học" />
                                </div>
                                <div className="info-group">
                                    <span>
                                        <i className="fas fa-user-graduate icon"></i> Sinh Viên: 100
                                    </span>
                                    <span>
                                        <i className="fas fa-book icon"></i> Bài Học: 10
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Mô Tả Chi Tiết:</label>
                        </div>
                        <textarea rows="5" placeholder="Nhập mô tả chi tiết"></textarea>
                        <button className="btn-save">Lưu</button>
                    </div>

                    {/* Right Section */}
                    <ListLesson
                        handleEditLesson={handleEditLesson}
                        handleDeleteLesson={handleDeleteLesson}
                    />
                </div>
            </div>
        </div>

    );
};

export default ManageCourse;
