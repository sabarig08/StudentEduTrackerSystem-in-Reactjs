
import React, { useState } from 'react';
import './Student.css';
import { PiStudentDuotone } from "react-icons/pi";
import { FaUserAlt } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
import { FaFileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaClinicMedical } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";
import { RiDiscountPercentFill } from "react-icons/ri";
import { TbCube } from "react-icons/tb";
import { FaStreetView } from "react-icons/fa";
import { BsFillTvFill } from "react-icons/bs";
import logo from '../Asset/logo.png'
function Student() {
    const [regularStudents, setRegularStudents] = useState(0);
    const [remedialStudents, setRemedialStudents] = useState(0);
    const [inPaidClubs, setInPaidClubs] = useState(0);

    return (
        <div className="student">
            <div className="slide">
                <img src={logo} alt="Logo" className="logo" />
                <ul>
                    <li><p><FaUserGroup style={{ width: '140px', height: '50px' }} /></p>Student Management</li>
                    <li><p><BsFillTvFill style={{ width: '140px', height: '50px', color: 'white' }} /></p>Financial Management</li>
                    <li><p><RiDiscountPercentFill style={{ width: '140px', height: '50px', color: 'white' }} /></p>Quality Control</li>
                    <li><p><TbCube style={{ width: '140px', height: '50px', color: 'white' }} /></p>Report Delivery</li>
                    <li><p><FaFileAlt style={{ width: '140px', height: '50px', color: 'white' }} /></p>Attendance Report</li>
                </ul>
            </div>

            <div className="content">
                <h2>Student Management</h2>
                <div className="student-stats">
                    <div
                        className="stat-item regular"
                        onClick={() => setRegularStudents(regularStudents + 1)}
                    >   <p><PiStudentDuotone style={{ height: '70px', width: '80px' }} /></p>
                        <p>{regularStudents}</p>
                        <span>Regular Students</span>
                    </div>
                    <div
                        className="stat-item remedial"
                        onClick={() => setRemedialStudents(remedialStudents + 1)}
                    >
                        <p><FaUserTie style={{ height: '70px', width: '80px' }} /></p>
                        <p>{remedialStudents}</p>
                        <span>Remedial Students</span>
                    </div>
                    <div
                        className="stat-item paid-clubs"
                        onClick={() => setInPaidClubs(inPaidClubs + 1)}
                    >
                        <p><FaStreetView style={{ height: '70px', width: '80px' }} /></p>
                        <p>{inPaidClubs}</p>
                        <span>In Paid Clubs</span>
                    </div>
                </div>
                <hr></hr>
                <h4>Menu</h4>
                <div className="menu">
                    <div className="menu-item"><p><FaUserAlt style={{ height: '100px', width: '200px', color: 'blue' }} /></p> Regular Enrollment</div>
                    <div className="menu-item"><p><FaBook style={{ height: '100px', width: '200px', color: 'blue' }} /></p>Remedial Enrollment</div>
                    <div className="menu-item"><p><FaStreetView style={{ height: '100px', width: '200px', color: 'blue' }} /></p>Club Management</div>
                    <div className="menu-item"><p><FaBookOpenReader style={{ height: '100px', width: '200px', color: 'blue' }} /></p>Classroom Management</div>
                    <div className="menu-item"><p><MdEmail style={{ height: '100px', width: '200px', color: 'blue' }} /></p>SMS / Email</div>
                    <div className="menu-item"><p><FaFileAlt style={{ height: '100px', width: '200px', color: 'blue' }} /></p>Attendance</div>
                    <div className="menu-item"><p><FaClinicMedical style={{ height: '100px', width: '200px', color: 'blue' }} /></p>Clinic</div>
                </div>
            </div>
        </div>
    );
}

export default Student;