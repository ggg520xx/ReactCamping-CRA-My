import React, { useState } from 'react';

import { Link, useNavigate } from "react-router-dom";
import { ga1, ga2 } from '../../../assets/page/PageMange';


import MyDatePicker from './func/ReactDateRange';



const PageReserve = (props) => {



    const navigate = useNavigate();




    // 處理 a 元件 日期點擊 處理過來的 操作change的狀態改變
    // 定義一個 state 來存儲 MyDatePicker 元件的 state
    const [datePickerState, setDatePickerState] = useState();


    const [startDateChooseProp, setStartDateChooseProp] = useState();
    const [endDateChooseProp, setEndDateChooseProp] = useState();


    // 定義一個函數來處理 MyDatePicker 元件傳遞過來的 state
    const handleStateChange = (state, startDateFromShow, endDateFromShow) => {

        setStartDateChooseProp(startDateFromShow)
        setEndDateChooseProp(endDateFromShow)

        setDatePickerState(state);

    }

    // ---------------------------------------


    // 前往預定的按鈕判斷 如果還沒選會是UNDEFINED 
    const pageReserveBtn = () => {



        if (datePickerState === undefined) {
            console.log('不正確時間或尚未選取');
            alert('不正確時間或尚未選取')
            return
        }

        if (startDateChooseProp === endDateChooseProp) {
            console.log('時間重複或未正確選取');
            alert('時間重複或未正確選取')
            return
        }

        // 存下點擊的時間到下一個頁面展示 和下下頁 並在最後成功預定發送api
        console.log('有選取時間');
        console.log(datePickerState);
        navigate("/reserve")
    }





    return (
        <>
            <div className='mt-5 relative bg-gray-100 w-full px-8 py-5  h-full shadow-xl rounded-md border-gray-200 border' id="section-reserve">



                <div className='text-left' >

                    <h5 className="font-bold text-xl">營區預定</h5>


                    <div className="pt-6">




                        {/* 單個 */}
                        <div className="row mb-2 border border-psub_color bg-white hover:shadow-xl hover:border-sub_color">

                            {/* <div className="col-4 border border-red-100"> */}
                            <div className="col-3 pl-0">
                                <img className='h-[160px] w-full object-cover' src={ga1} alt="" />
                            </div>





                            <div className="col-3  relative ">

                                <div className="flex flex-col justify-around items-start h-full py-3">

                                    <h5 className="font-bold text-xl">草皮A區</h5>



                                    <div className='row items-baseline w-full'>
                                        <div className='col-6 '>
                                            <strong>地區型態：</strong>
                                        </div>
                                        <div className='col-6 '>
                                            <span className='mr-2 text-my_green text-2xl font-bold'>草皮</span>
                                        </div>
                                    </div>

                                    <div className='row items-baseline  w-full'>
                                        <div className='col-6 '>
                                            <strong>今日剩餘：</strong>
                                        </div>
                                        <div className='col-6 '>
                                            <span className='mr-2 text-my_green text-2xl font-bold'>10</span>
                                            <span className='mr-2'>帳(間)</span>
                                        </div>
                                    </div>

                                </div>

                            </div>


                            <div className="col-4  pl-0  relative ">

                                <div className="flex flex-col justify-around items-center h-full py-3">



                                    <div className='border border-psub_color w-full py-2.5 px-5'>

                                        
                                        <MyDatePicker callDate={handleStateChange} />

                                    </div>



                                    
                                    <div className="w-full">

                                        {/* <label htmlFor="quantity">Quantity:</label> */}

                                        <select id="quantity" className="w-full px-5 border border-psub_color ">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                        </select>
                                    </div>


                                    {/* <input className='w-3/4' type="text" value='選擇入營及離營日期' />
                                    <input className='w-3/4' type="text" value='帳數' /> */}






                                </div>

                            </div>







                            <div className="col-2 relative ">

                                <div className="flex flex-col justify-around items-center h-full py-3">


                                    <h6 className="flex flex-col">
                                        <span className='text-p_color text-3xl font-bold'>$1300</span>
                                        <span className='font-bold'>/ (平日價)1晚</span>
                                    </h6>

                                    {/* disabled={pageReserveDisable === true} */}
                                    <button onClick={() => {
                                        pageReserveBtn();
                                    }} className='w-full border border-psub_color rounded-3xl py-1 px-3 text-md font-semibold hover:bg-sub_color hover:text-white'>預訂</button>


                                </div>

                            </div>


                        </div>

                        {/* 二個 */}






                    </div>

                </div>


            </div>

        </>
    );

}

export default PageReserve;