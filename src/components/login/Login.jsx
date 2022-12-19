import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faUnlockAlt, faEnvelope, faKey, faArrowRight, faCaretRight } from '@fortawesome/free-solid-svg-icons';

import { Link, useNavigate } from "react-router-dom";

import './LoginStyle.css'

import { useForm, useWatch } from 'react-hook-form'


const Login = (props) => {



    const { onLogin, loginAlert, role, msgReg, setMsgReg } = props;
    const [memberEmail, setMemberEmail] = useState("");
    const [memberPassword, setMemberPassword] = useState("");




    // 一定要這段
    const navigate = useNavigate();


    // 使用的哪些方法
    const {
        watch,
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()




    const onSubmit = (data) => {
        // 輸入後彈現導向
        // 有抓取物件再轉換 頁面
        let formdata = JSON.stringify(data)
        alert(formdata);

        if (formdata !== '') {
            navigate("/")
        }
    }






    // const hint = () => {
    //     if (loginAlert === '') {
    //         return
    //     } else if (loginAlert === '登入成功') {
    //         return
    //     } else {
    //         return (
    //             <div className="alert alert-warning" role="alert">
    //                 {loginAlert}
    //             </div>
    //         )
    //     }
    // }






    return (
        <>
            {/* <!-- login_page --> */}
            <div class="h-screen container relative">

                <div class='h-full flex justify-center items-center'>


                    <div className="bg-soft_color w-7/12 p-0 rounded shadow-lg py-5  " >
                        {/* style={{ backgroundColor: "#dfe2dd" }} */}




                        {/* <div> 預備放個露營縮圖 </div> */}


                        <div className="py-5">
                            <h2 className="font-bold text-xl text-my_green" style={{ letterSpacing: 1 }}>會員登入</h2>
                        </div>



                        <hr className="bg-my_green h-[1px] w-8/12 mx-auto" style={{ border: 'none' }} />


                        {/* 帳號密碼區塊 */}
                        <div className="py-5">


                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="flex justify-center py-2">

                                    <div className='flex items-center px-5 bg-sub_color'>
                                        <FontAwesomeIcon icon={faEnvelope} className=" text-white" />
                                    </div>

                                    <div>
                                        <input className="border-transparent" type="text" placeholder="請輸入信箱" {...register('login_email', {
                                            required: { value: true, message: '此欄位必填寫' },
                                            pattern: {
                                                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                                                message: 'Email 不合規則'
                                            }
                                        })} style={{ letterSpacing: 1 }} onChange={(e) => {
                                            setMemberEmail(e.target.value);
                                        }} onFocus={(e) => setMemberEmail("user@gmail.com")} value={memberEmail} />

                                        {/* required */}
                                    </div>
                                </div>

                                <div className="min-h-[20px] font-semibold text-sm text-red-500">
                                    {errors.login_email?.message}
                                </div>


                                

                                {/* 帳號通過 資料庫比對 還要比對密碼 兩者都通過才能使用進入 */}

                                <div className="flex justify-center py-2">

                                    <div className='flex items-center px-5 bg-sub_color'>
                                        <FontAwesomeIcon icon={faKey} className=" text-white" />
                                    </div>

                                    <div>
                                        <input className="border-transparent" type="password" placeholder="請輸入密碼" {...register('register_password', {
                                            required: { value: true, message: '此欄位必填寫' },
                                            pattern: {
                                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/g,
                                                message: '密碼 8-16字，至少1大寫字母，1小寫字母，1數字'
                                            }
                                        })} style={{ letterSpacing: 1 }} onChange={(e) => {
                                            setMemberPassword(e.target.value)
                                            }} onFocus={(e) => setMemberPassword("1qaz!QAZ2")} value={memberPassword} />
                                        {/* required */}

                                    </div>
                                </div>

                                <div className="min-h-[20px] font-semibold text-sm text-red-500">
                                    {errors.register_password?.message}
                                    {/* {errors.register_password && <span>此欄位必填</span>} */}
                                </div>



                                <div className="flex justify-center py-5">

                                    <button type="" className="font-bold text-my_green button_effect  " onClick={() => onLogin(memberEmail, memberPassword)}
                                        style={{ fontSize: 18 }}>登 入</button>



                                </div>




                                <hr className="bg-my_green h-[1px] w-8/12 mx-auto" style={{ border: 'none' }} />





                                <div className="flex justify-center py-5">

                                    <strong className="">還不是

                                        <span className='text-sub_color mx-1'>Hola Camp會員</span>嗎？

                                    </strong>



                                    <div className="px-3">

                                        <Link to="/register" className="text-sub_color hover:text-my_green font-bold" >
                                            現在去註冊
                                            <FontAwesomeIcon icon={faCaretRight} className=" text-black" />
                                        </Link>
                                    </div>



                                </div>


                            </form>


                        </div>

                    </div>

                </div>


            </div>
            {/* <!-- 登入頁面到此 --> */}
        </ >
    );




}

export default Login;
// 匯出這個函式功能