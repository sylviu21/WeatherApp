import React from 'react'
import { VscMail } from 'react-icons/vsc'
import { BsChevronDoubleRight } from 'react-icons/bs'
import { AiOutlineUnlock } from 'react-icons/ai'
import validate from './validateInfo'
import useForm from './useForm';

function LoginForm({ submitForm, verifyUser }) {
    
    const { handleChange, handleClick, handleSubmit, values, errors } = useForm(
        submitForm,
        verifyUser,
        validate
      );


    return (
        <main className="main">
            <form onSubmit={handleSubmit}>
                <div className="form-inner">
                    <h1>CREATE ACCOUNT</h1>
                </div>
                <div className="form-group">
                    <BsChevronDoubleRight className='icon'/>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Name" 
                        value={values.name}
                        onChange={handleChange}  
                        onClick={handleClick}
                    />
                </div>
                <div className="form-group">
                    <VscMail className='icon'/>
                    <input 
                        type="text" 
                        name="email" 
                        placeholder="Email"
                        value={errors.email ? errors.email : values.email}
                        onChange={handleChange} 
                        onClick={handleClick}
                        className={errors.email ? 'error' : ''}
                    />
                     
                </div>
                <div className="form-group">
                    <AiOutlineUnlock className='icon'/>
                    <input 
                        type={errors.password ? "text" :"password" }
                        name="password" 
                        placeholder="Password"
                        value={errors.password ? errors.password : values.password}
                        onChange={handleChange}  
                        onClick={handleClick}
                        className={errors.password ? 'error' : ''}
                    />
                </div>
                <input type='submit' value='Continue' className='form-submit'/>
            </form>
        </main>
    )
}

export default LoginForm
