// 這裡的 Layout 是管理左側的  內容是 Content
import { Link, Outlet, useNavigate } from "react-router-dom";




import { indexLogo, FbSvgComp, InsSvgComp, TwiSvgComp, LineSvgComp } from '../../assets/layout/LayoutMange';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faFacebook, faInstagram, faTwitter, faLine } from "@fortawesome/free-brands-svg-icons"
import { faSignOutAlt, faArrowLeft, faUser } from '@fortawesome/free-solid-svg-icons';



import React, { useState } from "react";
// import MemberMain from '../memberMain/MemberMain'








const MemberLayout = () => {



    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    };



    return (
        <>

            <div className="row h-screen">


                <div className='col-2 bg-my_green sticky top-0 left-0 right-0 p-0 rounded-br-[70px]'>

                    <nav class="px-2 sm:px-4 py-2.5  bg-my_black ">
                        {/* 內部控制 寬度 flex 置中 */}
                        <div class="container flex flex-wrap items-center justify-center mx-auto">

                            {/* LOGO+文字 */}

                            <div class="flex items-center h-6 sm:h-9">
                                {/* <img src={indexLogo} class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" /> */}
                                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Hola Camp 會員</span>
                            </div>


                        </div>
                    </nav>





                    {/* 不干涉到我上面自己修改 連結右側的 其實放在左側的 logo bar */}
                    {/* 以下這個區塊 為左側下半部 上面nav才是 左側上半部 */}
                    <div className="">



                        <Link to='' className="block">
                            <div className=" text-white text-lg font-bold w-3/4 mx-auto mt-5 min-h-[50px] flex justify-center items-center border-b-2">會員主頁</div>
                        </Link>

                        <Link to='order' className="block">
                            <div className=" text-white text-lg font-bold w-3/4 mx-auto mt-5 min-h-[50px] flex justify-center items-center border-b-2">訂單記錄</div>
                        </Link>

                        <Link to='like' className="block">
                            <div className=" text-white text-lg font-bold w-3/4 mx-auto mt-5 min-h-[50px] flex justify-center items-center border-b-2">收藏清單</div>
                        </Link>


                        {/* <Link to='mange' className="block">
                            <div className=" text-white text-lg font-bold w-3/4 mx-auto mt-5 min-h-[50px] flex justify-center items-center border-b-2">帳號管理</div>
                        </Link> */}






                    </div>

                </div>




                {/* onClick={() => props.history.goBack() */}



                <div className='col-10 bg-grey-100 p-0'>

                    {/* <Header /> 拉出來寫外元件也可以*/}
                    {/* Navbar 整體背景 沾粘不用Fixed 用 sticky  */}
                    <nav class="px-2 sm:px-4 py-2.5  bg-my_black ">
                        {/* 內部控制 寬度 flex 置中 */}
                        <div class="container flex flex-wrap items-center justify-between mx-auto">


                            <div className="mx-auto">
                                <Link to="/">
                                    <img src={indexLogo} class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
                                </Link>
                            </div>



                            <div class="flex  items-center">


                             

                                
                                
                                <button onClick={handleBack}  className="px-3">
                                    <div class="flex items-center">
                                        <FontAwesomeIcon className="text-white" icon={faArrowLeft} />
                                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">回上頁 </span>
                                    </div>
                                </button>

                                <hr className="border h-[20px]" />

                                <button className="px-3">
                                    <div class="flex items-center">
                                        <FontAwesomeIcon className="text-white" icon={faSignOutAlt} />
                                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">登出 </span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </nav>



                    <Outlet />

                </div>

            </div>



        </>
    );
}

export default MemberLayout;
// 匯出這個函式功能