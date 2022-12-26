// import { Link, useNavigate } from "react-router-dom";
import { Link, Outlet, useNavigate } from "react-router-dom";

// import indexLogo from '../../images/index/logo.png';
import { indexLogo, FbSvgComp, InsSvgComp, TwiSvgComp, LineSvgComp } from '../../images/layout/LayoutMange';
import "./LayoutStyle.css";
import React, { useState } from 'react';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSignOutAlt, faArrowLeft, faUser } from '@fortawesome/free-solid-svg-icons';


import { MyContextSearch, useMyContextSearch } from '../../hooks/useContext/InputSearch';


// ---------------------------------------------------------------------------

// 可引入圖標 但我想用 svg component 因此暫時不用這個ㄌ
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faFacebook, faInstagram, faTwitter, faLine } from "@fortawesome/free-brands-svg-icons"

// import { SocialMediaOutfit } from './LayoutStyle'   // 這個style comp暫時不用 顏色覆蓋太多了

// {/* https://medium.com/itsoktomakemistakes/react-create-react-app-svg-icons-styled-component-570b4e9f07b */ }

// ---------------------------------------------------------------------------




function Layout() {

    // 全域引入的 登入 點擊後會存放全域 輸入的值
    const { loginStatus, setLoginStatus } = useMyContextSearch(MyContextSearch);

    const [isOpen, setIsOpen] = useState(false);


    // 一定要這段
    const navigate = useNavigate();


    return (
        <>
            {/* <Header /> 拉出來寫外元件也可以*/}

            {/* Navbar 整體背景 沾粘不用Fixed 用 sticky  */}
            <nav class="z-30 min-h-[60px] px-2 sm:px-4 py-2.5  bg-my_black sticky top-0 right-0 left-0 ">
                {/* 內部控制 寬度 flex 置中 */}
                <div class="container flex flex-wrap items-center justify-between mx-auto">

                    {/* LOGO+文字 */}

                    {/* <Link to="/about">About</Link> */}
                    <Link to="/" class="flex items-center">
                        <img src={indexLogo} class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
                        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Hola Camp</span>
                    </Link>

                    {/* 編排該區塊的順位 order:2 */}
                    <div class="relative flex md:order-2">


                      

                        {loginStatus ? <div>
                            {/* 大畫面時的 頭像按鈕 */}
                            <button onClick={() => setIsOpen(!isOpen)} type="button" class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" >
                                <img class='rounded-2xl' src="https://avatar2.bahamut.com.tw/avataruserpic/f/8/f853853/f853853_s.png?v=1669060152382" alt="" />
                            </button>


                            {isOpen && (
                                <div class="dropdown_position w-[160px] z-50 absolute my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <div class="px-4 py-3">
                                        <span class="block text-sm text-gray-900 dark:text-white">Bonnie Anko</span>
                                        <span class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">一般會員身分</span>
                                    </div>
                                    <ul class="py-1" aria-labelledby="user-menu-button">
                                        <li>
                                            <Link to="/member" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">會員頁面</Link>
                                        </li>



                                        <li>
                                            <Link to="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">成為營主</Link>
                                        </li>

                                        <li>
                                            <Link onClick={() => {
                                                localStorage.clear()
                                                setLoginStatus(false)
                                            }}class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">登出</Link>
                                        </li>
                                    </ul>
                                </div>
                            )}

                        </div> : <button onClick={() => {
                            navigate("/login")
                        }} className="px-3">
                            <div class="flex items-center">
                                <FontAwesomeIcon className="text-white mx-1" icon={faUser} />
                                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">登入 </span>
                            </div>
                        </button>}
                        



                      



                        
                       






                    </div>
                </div>
            </nav>

            {/* 不一定要包main */}

            <Outlet />


            <div className="bg-my_black w-full min-h-[120px]  p-5  flex items-center">
                <div className='container'>

                    <div className="row  items-center justify-between">


                        <div className="col-5">

                            <div className="flex justify-around text-lg text-white">

                                <h4 className=' p-2 hover:border-b'>

                                    <span className=' p-2'>首頁資訊</span>
                                </h4>
                                <hr className="border h-auto" />

                                <h4 className=' p-2 hover:border-b'>
                                    <span className=' p-2'>營區搜尋</span>
                                </h4>
                                <hr className="border h-auto" />

                                <h4 className=' p-2 hover:border-b'>
                                    <span className=' p-2'>會員專區</span>
                                </h4>
                                <hr className="border h-auto" />

                                <h4 className=' p-2 hover:border-b'>
                                    <span className=' p-2'>成為營主</span>
                                </h4>


                            </div>

                        </div>

                        <div className="col-3 ">
                            <div className="flex">
                                {/* 這是icon fontawesome引入的 */}
                                {/* <FontAwesomeIcon icon={faFacebook} />
                                <FontAwesomeIcon icon={faInstagram} />
                                <FontAwesomeIcon icon={faTwitter} />
                                <FontAwesomeIcon icon={faLine} /> */}

                                {/* 以 Component 的方式匯入至 Template，可以保留 SVG 的特性，直接使用 stroke 來改變圖形外觀 或是 參入 style comp
                                 */}
                                <FbSvgComp></FbSvgComp>
                                <InsSvgComp></InsSvgComp>
                                <TwiSvgComp ></TwiSvgComp>
                                <LineSvgComp></LineSvgComp>
                            </div>
                        </div>



                    </div>



                </div>
            </div>







            {/* <div className="footer">表尾2288544</div> */}
            {/* <Footer /> 拉出來寫外元件也可以*/}
        </>
    );
}

export default Layout;
// 匯出這個函式功能