
import { Link, useNavigate } from "react-router-dom";


import React, { useState } from 'react';
import { MyTagShowHide, useMyTagShowHide } from '../../../hooks/useContext/TagShowHide';


import { MyContextSearch, useMyContextSearch } from '../../../hooks/useContext/InputSearch';



const SearchPickSide = (props) => {





    // 全域引入的 新增輸入搜尋 點擊後會存放全域 輸入的值
    const { limit, setLimit, buildWood, setBuildWood, buildTruck, setBuildTruck, buildOther, setBuildOther, buildNone, setBuildNone, providShower, setProvidShower, providPlay, setProvidPlay, providRentEquip, setProvidRentEquip, providMeal, setProvidMeal, providGuide, setProvidGuide, providPool, setProvidPool, providSpring, setProvidSpring, providRainCover, setProvidRainCover, providCarArea, setProvidCarArea, viewHigh, setViewHigh, viewForest, setViewForest, viewGrass, setViewGrass, viewKawa, setViewKawa, viewCloudSea, setViewCloudSea, viewSunrise, setviewSunrise, areaChoose, setAreaChoose } = useMyTagShowHide(MyTagShowHide);


    // 這頁也可以藉由 改變值 改變全域 我也可以放到篩選處
    const { inputGlobal, setInputGlobal } = useMyContextSearch(MyContextSearch);





    return (

        <>

            {/* 上介面 原本的設計搞樣子  拿來作為其他設計排版*/}

            {/* #f2ede6  w-full */}

            {/* <div className="h-[300px] w-full bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${indexBottomBg})` }}>

                <div className="h-[300px] w-3/4 mx-auto rounded-[50px] bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${indexBottomBg})` }}></div>

            </div> */}

            <div className="col-3 ">

                <div className='bg-gray-100 w-full px-7 py-3 shadow-xl rounded-md mb-3 border-gray-200 border'>

                    <p className='font-bold text-xl pt-3'>查看全部</p>

                    <div className="py-5">

                        {/* 點擊不限 清空所有篩選條件 */}
                        <div className="">
                            <div className='row'>
                                <button onClick={() => { setInputGlobal('') }} className='col-11  mx-auto my-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>不限</button>
                            </div>
                        </div>
                    </div>
                </div>






                <div className='bg-gray-100 w-full px-7 py-3 shadow-xl rounded-md mb-3 border-gray-200 border'>

                    <p className='font-bold text-xl pt-3'>營區位置選擇</p>

                    <div className="py-5">


       



                        <div className="pb-5">
                            <p className="">北部營地區</p>
                            <div className='row'>
                                <button onClick={() => { setAreaChoose('雙北') }} className='col-5 mx-auto my-1 border border-sub_color rounded-2xl py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>雙北</button>

                                <button onClick={() => { setAreaChoose('基隆') }} className='col-5 mx-auto my-1 border border-sub_color rounded-2xl py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>基隆</button>

                                <button onClick={() => { setAreaChoose('宜蘭') }} className='col-5 mx-auto my-1 border border-sub_color rounded-2xl py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>宜蘭</button>

                                <button onClick={() => { setAreaChoose('桃竹') }} className='col-5 mx-auto my-1 border border-sub_color rounded-2xl py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>桃竹</button>
                            </div>
                        </div>

                        {/* <Link className="block" onClick={() => { }} >
                            <button type="button" className="border border-blue-400 rounded-2xl py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white m-2">雙北</button>
                        </Link>

                            <Link className="block " onClick={() => { }} >
                            <button type="button" className="border border-blue-400 rounded-2xl py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white mx-2">基隆</button>
                        </Link>

                            <Link className="block" onClick={() => { }} >
                            <button type="button" className="border border-blue-400 rounded-2xl py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white mx-2">宜蘭</button>
                        </Link>

                            <Link className="block " onClick={() => { }} >
                            <button type="button" className="border border-blue-400 rounded-2xl py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white mx-2">桃竹</button>
                        </Link> */}


                        <div className="pb-5">
                            <p className="my-1">中部營地區</p>

                            <div className='row'>
                                <button onClick={() => { setAreaChoose('苗栗') }} className='col-5 mx-auto my-1 border border-sub_color rounded-2xl py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>苗栗</button>

                                <button onClick={() => { setAreaChoose('中彰') }} className='col-5 mx-auto my-1 border border-sub_color rounded-2xl py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>中彰</button>

                                <button onClick={() => { setAreaChoose('南投') }} className='col-5 mx-auto my-1 border border-sub_color rounded-2xl py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>南投</button>

                                <button onClick={() => { setAreaChoose('雲林') }} className='col-5 mx-auto my-1 border border-sub_color rounded-2xl py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>雲林</button>
                            </div>
                        </div>


                        <div className="pb-5">
                            <p className="my-1">南部營地區</p>
                            <div className='row'>
                                <button onClick={() => { setAreaChoose('嘉義') }} className='col-5 mx-auto my-1 border border-sub_color rounded-2xl py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>嘉義</button>

                                <button onClick={() => { setAreaChoose('台南') }} className='col-5 mx-auto my-1 border border-sub_color rounded-2xl py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>台南</button>

                                <button onClick={() => { setAreaChoose('高雄') }} className='col-5 mx-auto my-1 border border-sub_color rounded-2xl py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>高雄</button>

                                <button onClick={() => { setAreaChoose('屏東') }} className='col-5 mx-auto my-1 border border-sub_color rounded-2xl py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>屏東</button>
                            </div>
                        </div>




                        <div className="">
                            <p className="my-1">東部及外島</p>
                            <div className='row'>
                                <button onClick={() => { setAreaChoose('花蓮') }} className='col-5 mx-auto my-1 border border-sub_color rounded-2xl py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>花蓮</button>

                                <button onClick={() => { setAreaChoose('台東') }} className='col-5 mx-auto my-1 border border-sub_color rounded-2xl py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>台東</button>

                                <button onClick={() => { setAreaChoose('澎湖') }} className='col-5 mx-auto my-1 border border-sub_color rounded-2xl py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>澎湖</button>

                                <button onClick={() => { setAreaChoose('金馬') }} className='col-5 mx-auto my-1 border border-sub_color rounded-2xl py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>金馬</button>
                            </div>
                        </div>

                    </div>


                </div>



                <div className='bg-gray-100 w-full px-7 py-3  shadow-xl rounded-md mb-3 border-gray-200 border'>

                    <p className='font-bold text-xl pt-3'>營區特點挑選</p>

                    <div className="py-5">







                        <div className="pb-5">
                            <p className="my-1">營區種類</p>
                            <div className='row'>

                                <button onClick={() => { setBuildWood(!buildWood) }} className='col-11  mx-auto my-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>小木屋營區類</button>
                                <button onClick={() => { setBuildTruck(!buildTruck) }} className='col-11  mx-auto my-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>露營車營區類</button>
                                <button onClick={() => { setBuildOther(!buildOther) }} className='col-11  mx-auto my-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>其他遮蔽建物</button>
                                <button onClick={() => { setBuildNone(!buildNone) }} className='col-11  mx-auto my-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>僅提供營地類</button>
                            </div>
                        </div>




                        <div className="pb-5">
                            <p className="my-1">設施服務</p>
                            <div className='row'>
                                <button onClick={() => { setProvidShower(!providShower) }} className='col-11  mx-auto my-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>盥洗淋浴設施</button>
                                <button onClick={() => { setProvidPlay(!providPlay) }} className='col-11  mx-auto my-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>遊樂器材設施</button>
                                <button onClick={() => { setProvidRentEquip(!providRentEquip) }} className='col-11  mx-auto my-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>提供租借裝備</button>

                                <button onClick={() => { setProvidMeal(!providMeal) }} className='col-11 mx-auto my-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>供早或晚餐點</button>
                                <button onClick={() => { setProvidGuide(!providGuide) }} className='col-11 mx-auto my-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>供導覽或活動</button>
                                <button onClick={() => { setProvidPool(!providPool) }} className='col-5 mx-auto my-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>戲水區</button>
                                <button onClick={() => { setProvidSpring(!providSpring) }} className='col-5 mx-auto my-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>可泡湯</button>
                                <button onClick={() => { setProvidRainCover(!providRainCover) }} className='col-5 mx-auto my-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>遮雨棚</button>

                                <button onClick={() => { setProvidCarArea(!providCarArea) }} className='col-5  mx-auto my-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>停車位</button>
                            </div>
                        </div>





                        <div className="">
                            <p className="my-1">特色景觀</p>
                            <div className='row'>
                                <button onClick={() => { setViewHigh(!viewHigh) }} className='col-5 mx-auto my-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>高海拔</button>

                                <button onClick={() => { setViewForest(!viewForest) }} className='col-5  mx-auto my-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>森林內</button>


                                <button onClick={() => { setViewGrass(!viewGrass) }} className='col-5  mx-auto my-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>大草皮</button>

                                <button onClick={() => { setViewKawa(!viewKawa) }} className='col-5  mx-auto my-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>近溪流</button>

                                <button onClick={() => { setViewCloudSea(!viewCloudSea) }} className='col-5  mx-auto my-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>觀雲海</button>

                                <button onClick={() => { setviewSunrise(!viewSunrise) }} className='col-5  mx-auto my-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>看日出</button>
                            </div>
                        </div>





                    </div>
                </div>

            </div>





        </>
    );



}

export default SearchPickSide;