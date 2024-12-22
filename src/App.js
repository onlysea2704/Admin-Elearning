import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AdminLogin from './Pages/AdminLogin/AdminLogin';
import AccountManage from './Pages/AccountManage/AccountManage';
import ListLecturer from './Pages/ListLecturer/ListLecturer';
import ProfileEdit from './Pages/ProfileEdit/ProfileEdit';
import ListCourse from './Pages/ListCourse/ListCourse';
import ManageCourse from './Pages/ManageCourse/ManageCourse';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<AdminLogin />} />
        <Route path='/dashboard/account-manage' element={<AccountManage />} />
        <Route path='/dashboard/teacher-manage' element={<ListLecturer />} />
        <Route path='/dashboard/profile-edit' element={<ProfileEdit />} />
        <Route path='/dashboard/course-manage' element={<ManageCourse />} />
        {/* <Route path='/dashboard/course-manage' element={<ListCourse />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
