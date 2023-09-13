import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import toast from 'react-hot-toast';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import "../../styles/AuthStyles.css";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [answer, setAnswer] = useState("");
    const navigate = useNavigate();

    // form submit
    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(name, email, password, phone, address);
        // toast.success("Registration Successfully")
        try {
            const res = await axios.post('/api/v1/auth/forgot-password', { email, newPassword, answer });
            if (res && res.data.success) {
                toast.success(res.data.message)
                navigate("/login")
            } else {
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error('Somthing went wrong')
        }
    };
    return (
        <Layout title={"Forgot-Password - Ecommerce App"}>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <h4 className='title'>RESET PASSWORD</h4>
                    <div className="mb-3">
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail" placeholder='Enter Your Email' required />
                    </div>
                    <div className="mb-3">
                        <input value={answer} onChange={(e) => setAnswer(e.target.value)} type="text" className="form-control" id="exampleInputAnswer" placeholder='What is your favorite sport?' required />
                    </div>
                    <div className="mb-3">
                        <input value={newPassword} onChange={(e) => setNewPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword" placeholder='Enter Your Password' required />
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary">RESET</button>
                    </div>
                </form>

            </div>
        </Layout>
    )
}

export default ForgotPassword