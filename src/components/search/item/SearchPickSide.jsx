
import { Link, useNavigate } from "react-router-dom";

const SearchPickSide = (props) => {






    return (

        <>

            {/* 上介面 原本的設計搞樣子  拿來作為其他設計排版*/}

            {/* #f2ede6  w-full */}

            {/* <div className="h-[300px] w-full bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${indexBottomBg})` }}>

                <div className="h-[300px] w-3/4 mx-auto rounded-[50px] bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${indexBottomBg})` }}></div>

            </div> */}

            <div className="col-3 ">

                <div className='bg-gray-100 w-full px-8 py-3 shadow-xl rounded-md mb-3 border-gray-200 border'>

                    <p className='font-bold text-xl'>營區位置選擇</p>

                    <form action="#" className="py-5">



                        <div className="pb-5">
                            <p className="">北部營地區</p>
                            <div className='row'>
                                <button className='col-5 mx-auto my-1 border border-blue-400 rounded-2xl py-1 px-3 text-md font-semibold hover:bg-blue-800 hover:text-white'>雙北</button>

                                <button className='col-5 mx-auto my-1 border border-blue-400 rounded-2xl py-1 px-3 text-md font-semibold hover:bg-blue-800 hover:text-white'>基隆</button>

                                <button className='col-5 mx-auto my-1 border border-blue-400 rounded-2xl py-1 px-3 text-md font-semibold hover:bg-blue-800 hover:text-white'>宜蘭</button>

                                <button className='col-5 mx-auto my-1 border border-blue-400 rounded-2xl py-1 px-3 text-md font-semibold hover:bg-blue-800 hover:text-white'>桃竹</button>
                            </div>
                        </div>

                        {/* <Link className="block" onClick={() => { }} >
                            <button type="button" className="border border-blue-400 rounded-2xl py-1 px-3 text-md font-semibold hover:bg-blue-800 hover:text-white m-2">雙北</button>
                        </Link>

                            <Link className="block " onClick={() => { }} >
                            <button type="button" className="border border-blue-400 rounded-2xl py-1 px-3 text-md font-semibold hover:bg-blue-800 hover:text-white mx-2">基隆</button>
                        </Link>

                            <Link className="block" onClick={() => { }} >
                            <button type="button" className="border border-blue-400 rounded-2xl py-1 px-3 text-md font-semibold hover:bg-blue-800 hover:text-white mx-2">宜蘭</button>
                        </Link>

                            <Link className="block " onClick={() => { }} >
                            <button type="button" className="border border-blue-400 rounded-2xl py-1 px-3 text-md font-semibold hover:bg-blue-800 hover:text-white mx-2">桃竹</button>
                        </Link> */}


                        <div className="pb-5">
                            <p className="my-1">中部營地區</p>

                            <div className='row'>
                                <button className='col-5 mx-auto my-1 border border-blue-400 rounded-2xl py-1 px-3 text-md font-semibold hover:bg-blue-800 hover:text-white'>苗栗</button>

                                <button className='col-5 mx-auto my-1 border border-blue-400 rounded-2xl py-1 px-3 text-md font-semibold hover:bg-blue-800 hover:text-white'>中彰</button>

                                <button className='col-5 mx-auto my-1 border border-blue-400 rounded-2xl py-1 px-3 text-md font-semibold hover:bg-blue-800 hover:text-white'>南投</button>

                                <button className='col-5 mx-auto my-1 border border-blue-400 rounded-2xl py-1 px-3 text-md font-semibold hover:bg-blue-800 hover:text-white'>雲林</button>
                            </div>
                        </div>


                        <div className="pb-5">
                            <p className="my-1">南部營地區</p>
                            <div className='row'>
                                <button className='col-5 mx-auto my-1 border border-blue-400 rounded-2xl py-1 px-3 text-md font-semibold hover:bg-blue-800 hover:text-white'>嘉義</button>

                                <button className='col-5 mx-auto my-1 border border-blue-400 rounded-2xl py-1 px-3 text-md font-semibold hover:bg-blue-800 hover:text-white'>台南</button>

                                <button className='col-5 mx-auto my-1 border border-blue-400 rounded-2xl py-1 px-3 text-md font-semibold hover:bg-blue-800 hover:text-white'>高雄</button>

                                <button className='col-5 mx-auto my-1 border border-blue-400 rounded-2xl py-1 px-3 text-md font-semibold hover:bg-blue-800 hover:text-white'>屏東</button>
                            </div>
                        </div>


                        

                        <div className="">
                            <p className="my-1">東部及外島</p>
                            <div className='row'>
                                <button className='col-5 mx-auto my-1 border border-blue-400 rounded-2xl py-1 px-3 text-md font-semibold hover:bg-blue-800 hover:text-white'>花蓮</button>

                                <button className='col-5 mx-auto my-1 border border-blue-400 rounded-2xl py-1 px-3 text-md font-semibold hover:bg-blue-800 hover:text-white'>台東</button>

                                <button className='col-5 mx-auto my-1 border border-blue-400 rounded-2xl py-1 px-3 text-md font-semibold hover:bg-blue-800 hover:text-white'>澎湖</button>

                                <button className='col-5 mx-auto my-1 border border-blue-400 rounded-2xl py-1 px-3 text-md font-semibold hover:bg-blue-800 hover:text-white'>金馬</button>
                            </div>
                        </div>

                    </form>


                </div>



                <div className='bg-gray-100 w-full px-8 py-3  shadow-xl rounded-md mb-3 border-gray-200 border'>

                    <p className='font-bold text-xl'>營區特點挑選</p>

                    <div className="py-5">



                        {/* 點擊不限 清空所有篩選條件 */}
                        <div className="pb-5">
                            <div className='row'>
                                <button className='col-11  mx-auto my-1 border border-blue-400 rounded-sm py-1 px-3 text-md font-semibold hover:bg-blue-800 hover:text-white'>不限</button>
                            </div>
                        </div>



                        <div className="pb-5">
                            <p className="my-1">營區種類</p>
                            <div className='row'>

                                <button className='col-11  mx-auto my-1 border border-blue-400 rounded-sm py-1 px-3 text-md font-semibold hover:bg-blue-800 hover:text-white'>小木屋營區類</button>
                                <button className='col-11  mx-auto my-1 border border-blue-400 rounded-sm py-1 px-3 text-md font-semibold hover:bg-blue-800 hover:text-white'>露營車營區類</button>
                                <button className='col-11  mx-auto my-1 border border-blue-400 rounded-sm py-1 px-3 text-md font-semibold hover:bg-blue-800 hover:text-white'>其他遮蔽建物</button>

                                <button className='col-11  mx-auto my-1 border border-blue-400 rounded-sm py-1 px-3 text-md font-semibold hover:bg-blue-800 hover:text-white'>僅提供營地類</button>
                            </div>
                        </div>




                        <div className="pb-5">
                            <p className="my-1">提供設施</p>
                            <div className='row'>
                                <button className='col-11  mx-auto my-1 border border-blue-400 rounded-sm py-1 px-3 text-md font-semibold hover:bg-blue-800 hover:text-white'>盥洗淋浴設施</button>
                                <button className='col-11  mx-auto my-1 border border-blue-400 rounded-sm py-1 px-3 text-md font-semibold hover:bg-blue-800 hover:text-white'>遊樂器材設施</button>
                                <button className='col-11  mx-auto my-1 border border-blue-400 rounded-sm py-1 px-3 text-md font-semibold hover:bg-blue-800 hover:text-white'>提供租借裝備</button>

                                <button className='col-11  mx-auto my-1 border border-blue-400 rounded-sm py-1 px-3 text-md font-semibold hover:bg-blue-800 hover:text-white'>供早或晚餐點</button>
                                <button className='col-11  mx-auto my-1 border border-blue-400 rounded-sm py-1 px-3 text-md font-semibold hover:bg-blue-800 hover:text-white'>供導覽或活動</button>


                                <button className='col-5  mx-auto my-1 border border-blue-400 rounded-sm py-1 px-3 text-md font-semibold hover:bg-blue-800 hover:text-white'>戲水區</button>

                                <button className='col-5  mx-auto my-1 border border-blue-400 rounded-sm py-1 px-3 text-md font-semibold hover:bg-blue-800 hover:text-white'>可泡湯</button>

                                <button className='col-5  mx-auto my-1 border border-blue-400 rounded-sm py-1 px-3 text-md font-semibold hover:bg-blue-800 hover:text-white'>遮雨棚</button>

                                <button className='col-5  mx-auto my-1 border border-blue-400 rounded-sm py-1 px-3 text-md font-semibold hover:bg-blue-800 hover:text-white'>停車位</button>
                            </div>
                        </div>





                        <div className="">
                            <p className="my-1">特色景觀</p>
                            <div className='row'>
                                <button className='col-5  mx-auto my-1 border border-blue-400 rounded-sm py-1 px-3 text-md font-semibold hover:bg-blue-800 hover:text-white'>高海拔</button>

                                <button className='col-5  mx-auto my-1 border border-blue-400 rounded-sm py-1 px-3 text-md font-semibold hover:bg-blue-800 hover:text-white'>森林內</button>


                                <button className='col-5  mx-auto my-1 border border-blue-400 rounded-sm py-1 px-3 text-md font-semibold hover:bg-blue-800 hover:text-white'>大草皮</button>

                                <button className='col-5  mx-auto my-1 border border-blue-400 rounded-sm py-1 px-3 text-md font-semibold hover:bg-blue-800 hover:text-white'>近溪流</button>

                                <button className='col-5  mx-auto my-1 border border-blue-400 rounded-sm py-1 px-3 text-md font-semibold hover:bg-blue-800 hover:text-white'>觀雲海</button>

                                <button className='col-5  mx-auto my-1 border border-blue-400 rounded-sm py-1 px-3 text-md font-semibold hover:bg-blue-800 hover:text-white'>看日出</button>
                            </div>
                        </div>





                    </div>
                </div>

            </div>





        </>
    );



}

export default SearchPickSide;