import { Link, Outlet } from "react-router-dom";
import { searchDemo, searchDemo2, solidstar, halfstar, emptystar } from '../../../assets/search/SearchMange';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faHeart, faMapMarkerAlt, faCaretRight, faBookmark } from '@fortawesome/free-solid-svg-icons';


import React, { useState, useEffect } from 'react';
import axios from 'axios';


import { MyContextSearch, useMyContextSearch } from '../../../hooks/useContext/InputSearch';














const SearchResult = (props) => {


    // 這頁也可以藉由 改變值 改變全域 我也可以放到篩選處
    const { inputGlobal, setInputGlobal } = useMyContextSearch(MyContextSearch);





    function useData() {

        const [data, setData] = useState(null);

        // ${ inputGlobal }
        useEffect(() => {
            axios.get(`http://localhost:3000/camps?q=${inputGlobal }`)
                .then(response => {
                    console.log(response.data)
                    setData(response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        }, []);
        return data;
    }

    // 如果你希望在 inputGlobal 发生变化时才调用 useData 函数，你可以将第二个参数设置为 [inputGlobal]
    // [inputGlobal] 当 inputGlobal 发生变化时，才会调用 useData 函数并发送 HTTP 请求

    const campData = useData();



    return (

        <>

            {/* 全列表範圍 */}
            <div className=' w-full'>

                {/* border border-blue-200 */}
                {/* bg-white */}

                {campData && campData.map((item, index) => (


                    <Link to='/page' key={item.id} className="block mb-5   ">

                        <div className="row border-psub_color bg-white hover:shadow-xl border  hover:border-sub_color">

                            {/* <div className="col-4 border border-red-100"> */}
                            <div className="col-4 pl-0">
                                <img className='h-[160px] w-full object-cover' src={searchDemo} alt="" />
                            </div>

                            <div className="col-8  relative">

                                <div className="flex flex-col justify-around items-start h-full py-3">

                                    <h5 className="font-bold text-xl">{item.name}</h5>

                                    <p>
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                                        <span>地區：xxx</span>
                                    </p>




                                    <div className='text-left'>
                                        <span className="mr-1 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">標籤</span>
                                        <span className="mr-1 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">標籤</span>
                                        <span className="mr-1 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">標籤</span>
                                    </div>



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
                                                <span className='text-p_color text-3xl font-bold'>$1300</span>
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

                            </div>

                        </div>
                    </Link>

                ))}

            </div>

        </>
    );

}

export default SearchResult;