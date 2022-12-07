
import "./itemStyle/PageInfoStyle.css";


const PageInfo = (props) => {




    return (
        <>
            <div className='mt-5 relative bg-gray-100 w-full px-8 py-5  h-full shadow-xl rounded-md border-gray-200 border'>



                <div className='text-left'>

                    <h5 className="font-bold text-xl">營區資訊</h5>


                    <div className="pt-6">

                       

                        

                        <div className="row mb-4">
                            <div className="col-6 border-b">

                                <div className='row'>
                                    <div className='col-3 font-bold text-lg'>營業時間</div>

                                    <div className='col-8'>
                                        <div className='flex flex-wrap'>
                                            <div className="text-con">平日</div>
                                            <div className="text-con">假日</div>
                                            <div className="text-con">不接受一日遊</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 border-b">
                                <div className='row'>
                                    <div className='col-3 font-bold text-lg'>營區海拔</div>

                                    <div className='col-8'>
                                        <div className='flex flex-wrap'>
                                            <div className="text-con">301-500m</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>




                        <div className="row mb-4 ">

                            <div className="col-6 border-b ">
                                <div className='row  '>
                                    <div className='col-3 font-bold text-lg'>營區電話</div>
                                    <div className='col-8'>
                                        <div className='flex flex-wrap'>
                                            <div className="text-con">0912345678</div>
                                            <div className="text-con">2-2222222</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 border-b">
                                <div className='row  '>
                                    <div className='col-3 font-bold text-lg'>營區地址</div>
                                    <div className='col-8'>
                                        <div className='flex flex-wrap'>
                                            <div className="text-con">台北市XXXXXXXXXXXXXXX</div>
                                         

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className="row mb-4 ">
                            <div className="col-6 border-b">

                                <div className='row'>
                                    <div className='col-3 font-bold text-lg'>附屬設施</div>

                                    <div className='col-8'>
                                          <div className='flex flex-wrap'>
                                                <div className="text-con">戲水區</div>
                                                <div className="text-con">停車位</div>
                                                <div className="text-con">可泡湯</div>
                                                <div className="text-con">盥洗淋浴設施</div>

                                            </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 border-b">

                                <div className='row'>
                                    <div className='col-3 font-bold text-lg'>附屬服務</div>

                                    <div className='col-8'>
                                        <div className='flex flex-wrap'>
                                            <div className="text-con">供導覽或活動</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        
                        <div className="row mb-4 ">
                            <div className="col-6 border-b">

                                <div className='row'>
                                    <div className='col-3 font-bold text-lg'>攜帶寵物</div>

                                    <div className='col-8'>
                                        <div className='flex flex-wrap'>
                                            <div className="text-con">不可攜帶寵物</div>
                                       

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 border-b">
                                <div className='row'>
                                    <div className='col-3 font-bold text-lg'>營區特色</div>

                                    <div className='col-8'>
                                        <div className='flex flex-wrap'>
                                            <div className="text-con">近溪流</div>
                                            <div className="text-con">大草皮</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>

                </div>


            </div>

        </>
    );

}

export default PageInfo;