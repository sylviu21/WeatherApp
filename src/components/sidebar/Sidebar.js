import React, {useState} from 'react'
import './Sidebar.scss'
import {AiOutlineUnlock} from 'react-icons/ai';
import {BsChevronDoubleRight} from "react-icons/bs";
import {VscMail} from "react-icons/vsc";
import {IoIosArrowForward} from "react-icons/io";
import {RiShutDownLine} from "react-icons/ri";

const Sidebar = props => {
    const {sidebar, showSidebar, Logout, user} = props;
    const [state, setChecked] = useState({
        checkMonday: '',
        checkTuesday: '',
        checkWednesday: '',
        checkThursday: '',
        checkFriday: '',
    })
    
    const [values, setValues] = useState({
        name: user.name,
        email: user.email,
        password: ''
    });
    
    const [isLoading, setIsLoading] = useState(true)
    
    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };
    
    
    const handleClick = e => {
        e.preventDefault();
    }
    
    const handleCheckboxChange = (e) => {
        setChecked({...state,
            [e.target.name]: e.target.value,
        });
    }
    return (
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <div className="avatar">
                <img src="images/avatar.png" alt=""/>
            </div>
            <div className="details">
                <form>
                    <div className="form-group">
                        <BsChevronDoubleRight className='icon'/>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={user.name}
                            onChange={handleInputChange}
                            onClick={handleClick}
                        />
                    </div>
                    <div className="form-group">
                        <VscMail className='icon'/>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={user.email}
                            onChange={handleInputChange}
                            onClick={handleClick}
                        />
        
                    </div>
                    <div className="form-group">
                        <AiOutlineUnlock className='icon'/>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={user.password}
                            onChange={handleInputChange}
                            onClick={handleClick}
                        />
                    </div>
                </form>
    
                <div className="title">EMAIL NOTIFICATIONS</div>
                <div className="col-days">
                    <div className="day">
                        Monday
                        <label className="switch">
                            <input
                                type="checkbox"
                                name="checkMonday"
                                checked={state.checkMonday}
                                onChange={(e) => {
                                    handleCheckboxChange({
                                        target: {
                                            name: e.target.name,
                                            value: e.target.checked,
                                        },
                                    });
                                }}
                            />
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div className="day">
                        Tuesday
                        <label className="switch">
                            <input
                                type="checkbox"
                                name="checkTuesday"
                                checked={state.checkTuesday}
                                onChange={(e) => {
                                    handleCheckboxChange({
                                        target: {
                                            name: e.target.name,
                                            value: e.target.checked,
                                        },
                                    });
                                }}
                            />
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div className="day">
                        Wednesday
                        <label className="switch">
                            <input
                                type="checkbox"
                                name="checkWednesday"
                                checked={state.checkWednesday}
                                onChange={(e) => {
                                    handleCheckboxChange({
                                        target: {
                                            name: e.target.name,
                                            value: e.target.checked,
                                        },
                                    });
                                }}
                            />
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div className="day">
                        Thursday
                        <label className="switch">
                            <input
                                type="checkbox"
                                name="checkThursday"
                                checked={state.checkThursday}
                                onChange={(e) => {
                                    handleCheckboxChange({
                                        target: {
                                            name: e.target.name,
                                            value: e.target.checked,
                                        },
                                    });
                                }}
                            />
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div className="day">
                        Friday
                        <label className="switch">
                            <input
                                type="checkbox"
                                name="checkFriday"
                                checked={state.checkFriday}
                                onChange={(e) => {
                                    handleCheckboxChange({
                                        target: {
                                            name: e.target.name,
                                            value: e.target.checked,
                                        },
                                    });
                                }}
                            />
                            <span className="slider round"></span>
                        </label>
                    </div>
                    
                </div>
            </div>
            
            
            <div className="nav-links">
                <div className="left">
                    <IoIosArrowForward onClick={showSidebar}/>
                </div>
                <div className="center">
                    {isLoading && 'Saving...'}
                </div>
                <div className="right">
                    <RiShutDownLine onClick={Logout}/>
                </div>
            </div>
        </nav>
    )
}

export default Sidebar