// 基本核心和css
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from 'swiper'
import { useState } from 'react'

// -------------------------------------

import { p1, p2, p3, p4, p5,solidstar, halfstar, emptystar } from '../../../assets/page/PageMange';
import "./itemStyle/PagePicStyle.css";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faHeart, faMapMarkerAlt, faCaretRight, faBookmark } from '@fortawesome/free-solid-svg-icons';



const PagePic = (props) => {


    const [thumbsSwiper, setThumbsSwiper] = useState();

    return (
        <>
            <div className='relative bg-gray-100 w-full px-8 py-5  h-full shadow-xl rounded-md border-gray-200 border'>


                <div className="flex flex-col justify-around items-start py-3">

                    <h5 className="font-bold text-xl">安安休閒露營區</h5>

                    <p>
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                        <span>地區：xxx</span>
                    </p>


                    

                    {/* 星星和價格 用flex共排 用老師的星星評價map*/}
                    <div className='flex items-center justify-between w-full'>


                        <div className="text-md flex items-center ">

                            {/* star 星星的map計算引入匯出 現在就用img */}

                            <img className="h-4" src={solidstar} alt="" />
                            <img className="h-4" src={solidstar} alt="" />
                            <img className="h-4" src={solidstar} alt="" />
                            <img className="h-4" src={solidstar} alt="" />
                            <img className="h-4" src={solidstar} alt="" />

                            <span>4.7</span>
                            <span>(45)</span>
                        </div>

                        <div>

                            <h6 className="">
                                <span className='text-blue-500 text-3xl font-bold'>$1300</span>
                                <span className='font-bold'>/ 晚</span>
                            </h6>

                        </div>
                    </div>

                </div>

                
                {/* 圓形周圍空白 包裹愛心flex just. 及位置調整absolute*/}
                <div className="rounded-full bg-gray-300 w-9 h-9 flex justify-center items-center absolute top-2 right-2 z-10" onClick={() => { }}>



                    {/* 是否為最愛 是的話顯示 否的話顯示另一段 有色無色 */}
                    <FontAwesomeIcon icon={faBookmark} className="text-lg" />
                    {/* {favorite ?
                            <FontAwesomeIcon icon={faHeart} className="" style={{ fontSize: 16, color: 'var(--heartColor)', cursor: "pointer" }} /> :
                            <FontAwesomeIcon icon={faHeart} className="" style={{ fontSize: 16, color: 'gray', cursor: "pointer" }} />
                        } */}
                </div>


                <div className="h-[800px]">

                    <Swiper
                        loop={true}
                        spaceBetween={10}
                        navigation={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        grabCursor={true}

                        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}

                        style={{
                            "--swiper-navigation-color": "#FFF",
                            "--swiper-pagination-color": "#FFF",
                        }}

                        className='relative overflow-hidden h-4/5 w-full object-cover '
                    >
                        <SwiperSlide >
                            <img src={p1} alt="product images" className='block h-full w-full object-cover ' />
                        </SwiperSlide>
                        <SwiperSlide >
                            <img src={p2} alt="product images" className='block h-full w-full object-cover ' />
                        </SwiperSlide>
                        <SwiperSlide >
                            <img src={p3} alt="product images" className='block h-full w-full object-cover ' />
                        </SwiperSlide>
                        <SwiperSlide >
                            <img src={p4} alt="product images" className='block h-full w-full object-cover ' />
                        </SwiperSlide>
                        <SwiperSlide >
                            <img src={p5} alt="product images" className='block h-full w-full object-cover ' />
                        </SwiperSlide>

                    </Swiper>

                    <Swiper
                        onSwiper={setThumbsSwiper}

                        loop={true}
                        spaceBetween={10}
                        slidesPerView={4}
                        modules={[FreeMode, Navigation, Thumbs]}

                        freeMode={true}
                        watchSlidesProgress={true}
                        className='mySwiper h-1/5 py-2.5'
                    >

                        <SwiperSlide className='' >
                            <img src={p1} alt="product images" className='block h-full w-full object-cover ' />
                        </SwiperSlide>


                        <SwiperSlide className='' >
                            <img src={p2} alt="product images" className='block h-full w-full object-cover ' />
                        </SwiperSlide>


                        <SwiperSlide className='' >
                            <img src={p3} alt="product images" className='block h-full w-full object-cover ' />
                        </SwiperSlide>


                        <SwiperSlide className='' >
                            <img src={p4} alt="product images" className='block h-full w-full object-cover ' />
                        </SwiperSlide>


                        <SwiperSlide className='' >
                            <img src={p5} alt="product images" className='block h-full w-full object-cover ' />
                        </SwiperSlide>



                    </Swiper>

                </div>

            </div>

        </>
    );

}

export default PagePic;