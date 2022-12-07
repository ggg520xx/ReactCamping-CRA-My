
// import { Link, useNavigate } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import { indexLogo, FbSvgComp, InsSvgComp, TwiSvgComp, LineSvgComp } from '../../assets/layout/LayoutMange';



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faFacebook, faInstagram, faTwitter, faLine } from "@fortawesome/free-brands-svg-icons"
import { faSignOutAlt, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function AdminLayout() {



    return (
        <>

            <div>



                {/* <Header /> 拉出來寫外元件也可以*/}

                {/* Navbar 整體背景 沾粘不用Fixed 用 sticky  */}
                <nav class="z-20 bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 sticky top-0 right-0 left-0">
                    {/* 內部控制 寬度 flex 置中 */}
                    <div class="container flex flex-wrap items-center justify-between mx-auto">

                        {/* LOGO+文字 */}

                        {/* <Link to="/about">About</Link> */}
                        <Link to="/" class="flex items-center">
                            <img src={indexLogo} class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
                            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Hola Camp</span>
                        </Link>


                        <div class="flex  items-center">



                            <button className="px-3">
                                <div class="flex items-center">
                                    <FontAwesomeIcon className="text-white" icon={faArrowLeft} />
                                    <span className="text-white">回上頁 </span>
                                </div>
                            </button>

                            <hr className="border h-[20px]" />

                            <button className="px-3">
                                <div class="flex items-center">
                                    <FontAwesomeIcon className="text-white" icon={faSignOutAlt} />
                                    <span className="text-white">登出 </span>
                                </div>
                            </button>


                        </div>
                    </div>
                </nav>


                {/* 不一定要包main */}

                <Outlet />






                <div className="bg-my_black w-full min-h-[120px] p-5  flex items-center">
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
            </div>



        </>
    );
}

export default AdminLayout;
// 匯出這個函式功能