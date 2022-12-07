// 導覽頁面 引入滾動監控
import Scrollspy from 'react-scrollspy'






const PageGuide = (props) => {


    return (
        <>

            <div className="bg-my_black w-full min-h-[120px] p-5  flex items-center">

                <div className='container'>

                    <div className="flex items-center justify-center">

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