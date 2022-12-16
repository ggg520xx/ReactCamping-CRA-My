import React, { useState, useEffect } from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faUnlockAlt, faEnvelope, faKey, faArrowRight, faCaretRight } from '@fortawesome/free-solid-svg-icons';

import { Link } from "react-router-dom";

import './LoginStyle.css'



const Login = (props) => {




    const { onLogin, loginAlert, role, msgReg, setMsgReg } = props;
    const [memberEmail, setMemberEmail] = useState("");
    const [memberPassword, setMemberPassword] = useState("");




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


                            <div className="flex justify-center py-2">

                                <div className='flex items-center px-5 bg-sub_color'>
                                    <FontAwesomeIcon icon={faEnvelope} className=" text-white" />
                                </div>

                                <div>
                                    <input className="border-transparent" type="text" placeholder="請輸入信箱" style={{ letterSpacing: 1 }} onChange={(e) => {
                                        setMemberEmail(e.target.value);
                                    }} required onFocus={(e) => setMemberEmail("user@gmail.com")} value={memberEmail} />

                                </div>
                            </div>



                            <div className="flex justify-center py-2">

                                <div className='flex items-center px-5 bg-sub_color'>
                                    <FontAwesomeIcon icon={faKey} className=" text-white" />
                                </div>

                                <div>
                                    <input className="border-transparent" type="password" placeholder="請輸入密碼" style={{ letterSpacing: 1 }} onChange={(e) => {
                                        setMemberPassword(e.target.value)
                                    }} required onFocus={(e) => setMemberPassword("1qaz!QAZ2")} value={memberPassword} />

                                </div>
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