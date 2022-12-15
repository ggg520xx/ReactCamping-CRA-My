import { Link, useNavigate } from "react-router-dom";
import { ga1, ga2 } from '../../../assets/page/PageMange';




const PageReserve = (props) => {

    const navigate = useNavigate();


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
                                        <div className='col-4 '>
                                            <strong>型態：</strong>
                                        </div>
                                        <div className='col-8 '>
                                            <span className='mr-2 text-my_green text-2xl font-bold'>草皮</span>
                                        </div>
                                    </div>

                                    <div className='row items-baseline  w-full'>
                                        <div className='col-4 '>
                                            <strong>剩餘：</strong>
                                        </div>
                                        <div className='col-8 '>
                                            <span className='mr-2 text-my_green text-2xl font-bold'>10</span>
                                            <span className='mr-2'>帳(間)</span>
                                        </div>
                                    </div>

                                </div>

                            </div>


                            <div className="col-4  pl-0  relative ">

                                <div className="flex flex-col justify-around items-center h-full py-3">



                                    <input className='w-3/4' type="text" value='選擇入營及離營日期' />
                                    <input className='w-3/4' type="text" value='帳數' />



                                </div>

                            </div>







                            <div className="col-2 relative ">

                                <div className="flex flex-col justify-around items-center h-full py-3">


                                    <h6 className="flex flex-col">
                                        <span className='text-p_color text-3xl font-bold'>$1300</span>
                                        <span className='font-bold'>/ (平日價)1晚</span>
                                    </h6>

                                    <button onClick={() => {
                                        navigate("/reserve")
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