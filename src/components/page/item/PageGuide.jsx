// 導覽頁面 引入滾動監控

import React, { useState } from "react";
import Scrollspy from 'react-scrollspy'
import { Link, Outlet, useNavigate } from "react-router-dom";



const PageGuide = (props) => {



    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    };


    return (
        <>

            {/* mx-auto 防止我寬度 改為 3/4 要置中 */}
            <div className="bg-my_black w-full min-h-[80px] p-5 mx-auto flex items-center mt-4 ">

                <div className='container'>

                    <div className="flex items-center justify-center">


                        <button onClick={handleBack}>上衣頁</button>




                        <Scrollspy items={['section-1', 'section-2', 'section-3', 'section-4']} className="flex text-lg text-white" >


                            <li>
                                <a href="#section-1">
                                    <h4 className=' p-2 hover:border-b'>
                                        <span className='p-2'>營區資訊</span>
                                    </h4>
                                </a>
                            </li>

                            <hr className="border h-auto" />

                            <li>
                                <a href="#section-2">
                                    <h4 className=' p-2 hover:border-b'>
                                        <span className='p-2'>營區預定</span>
                                    </h4>
                                </a>
                            </li>

                            <hr className="border h-auto" />

                            <li>
                                <a href="#section-3">
                                    <h4 className=' p-2 hover:border-b'>
                                        <span className='p-2'>評價回饋</span>
                                    </h4>
                                </a>
                            </li>

                            <hr className="border h-auto" />

                            <li>
                                <a href="#section-4">
                                    <h4 className=' p-2 hover:border-b'>
                                        <span className='p-2'>查看地圖</span>
                                    </h4>
                                </a>
                            </li>

                        </Scrollspy>

                    </div>

                </div>
            </div>



        </>
    );

}

export default PageGuide;