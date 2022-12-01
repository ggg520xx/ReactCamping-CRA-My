// import indexIcon from '../../../assets/index/indexIcon.png';
import { indexIcon, hot1, hot2, hot3, solidstar, halfstar, emptystar } from '../../../assets/index/IndexMange';
// import Stars from './Stars';  //那個jsx -等之後知道評價取值再使用我引入的星星調整
import { Link } from "react-router-dom";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faHeart, faMapMarkerAlt, faCaretRight, faBookmark } from '@fortawesome/free-solid-svg-icons';



const CampHot = (props) => {


    // 創造陣列數組 我記得第二週星星評價 用過類似 (這邊沒用到) 我原本想做loop但感覺麻煩算ㄌ
    // https://stackoverflow.com/questions/70213667/how-to-loop-react-elements-for-a-specific-amount-of-times
    // const round = [...Array(6).keys()];








    return (
        <>
            <div className="mt-5 flex p-5 border border-red-500 justify-center items-end">
                {/* <FontAwesomeIcon icon={faCoffee} className="mr-2" />
                <FontAwesomeIcon icon={faAtom} className="w-12 h-12" /> */}
                <img src={indexIcon} className='w-20 h-20' alt="" />
                <h2 className="font-semibold text-center text-4xl">熱門營區</h2>
                <img src={indexIcon} className='w-20 h-20' alt="" />
            </div>



            {/* 分配排版 三直列 和 間隔 */}
            <div className="grid grid-cols-3 gap-5">


                {/* 單個 佔位1直列 以及點擊hook記錄 目的營區 */}
                <div className="relative col-span-1 mt-5 bg-red-300" onClick={() => { }}>


                    {/* <Link to="/about">About</Link> */}
                    <Link>

                        {/* 包裹img和文字欄 */}
                        <div>

                            {/*  此處上層圖片區  h-[200px] 拿掉了 否則會讓他不能填滿 */}
                            <img src={hot1} className="hover:opacity-80 min-h-[200px] w-full object-cover" alt="" />

                            {/* 此處包裹為下層文字區塊 */}
                            <div className="p-1 text-gray-900 min-h-[30px]">

                                {/* 營區名稱和地點在哪 */}
                                <h5 className="font-bold tracking-wider text-lg mt-2 mb-2">安可休閒露營區</h5>

                                <p>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                                    <span>地區：xxx</span>
                                </p>


                                {/* <!-- 營區分類標籤 會是某個陣列 跑map的item取出 --> */}

                                {/* <div className="mb-3">
                                    {campTag.map((item, index) => <span className="rounded m-tagStyle mr-1" key={index}>{item.tagName}</span>)}
                                </div> */}
                                <span className="mr-1 bg-blue-200 py-0.5 px-1.5 text-sm font-bold text-blue-800">標籤</span>
                                <span className="mr-1 bg-blue-200 py-0.5 px-1.5 text-sm font-bold text-blue-800">標籤</span>
                                <span className="mr-1 bg-blue-200 py-0.5 px-1.5 text-sm font-bold text-blue-800">標籤</span>
                                <span className="mr-1 bg-blue-200 py-0.5 px-1.5 text-sm font-bold text-blue-800">標籤</span>

                                {/* 星星和價格 用flex共排 用老師的星星評價map*/}
                                <div className='flex items-center justify-around'>
                                    <p className="text-md flex">

                                        {/* star 星星的map計算引入匯出 現在就用img */}

                                        <img className="h-3.5" src={solidstar} alt="" />
                                        <img className="h-3.5" src={solidstar} alt="" />
                                        <img className="h-3.5" src={solidstar} alt="" />
                                        <img className="h-3.5" src={solidstar} alt="" />
                                        <img className="h-3.5" src={solidstar} alt="" />

                                        <span>4.7</span>
                                        <span>(45)</span>
                                    </p>

                                    <h6 className="">
                                        <span className='text-blue-500 text-xl font-bold'>$1300</span>
                                        <span className='font-bold'>/ 晚</span>
                                    </h6>
                                </div>




                            </div>


                        </div>

                    </Link>

                    


                    {/* 連結點擊外的地方有愛心收藏 */}

                    {/* 圓形周圍空白 包裹愛心flex just. 及位置調整absolute*/}
                    <div className="rounded-full bg-white w-9 h-9 flex justify-center items-center absolute top-2 right-2 z-10" onClick={() => { }}>



                        {/* 是否為最愛 是的話顯示 否的話顯示另一段 有色無色 */}
                        <FontAwesomeIcon icon={faBookmark} className="text-lg" />
                        {/* {favorite ?
                            <FontAwesomeIcon icon={faHeart} className="" style={{ fontSize: 16, color: 'var(--heartColor)', cursor: "pointer" }} /> :
                            <FontAwesomeIcon icon={faHeart} className="" style={{ fontSize: 16, color: 'gray', cursor: "pointer" }} />
                        } */}
                    </div>


                </div>



                <div className="col-span-1 mt-5 bg-red-300" onClick={() => { }}>


                    {/* <Link to="/about">About</Link> */}
                    <Link>

                        {/* 包裹img和文字欄 */}
                        <div>

                            {/*  此處上層圖片區  h-[200px] 拿掉了 否則會讓他不能填滿 */}
                            <img src={hot2} className="hover:opacity-80 min-h-[200px] w-full object-cover" alt="" />

                            {/* 此處包裹為下層文字區塊 */}
                            <div className="p-1 text-gray-900 min-h-[30px]">

                                {/* 營區名稱和地點在哪 */}
                                <h5 className="font-bold tracking-wider text-lg mt-2 mb-2">安可休閒露營區</h5>

                                <p>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                                    <span>地區：xxx</span>
                                </p>


                                {/* <!-- 營區分類標籤 會是某個陣列 跑map的item取出 --> */}

                                {/* <div className="mb-3">
                                    {campTag.map((item, index) => <span className="rounded m-tagStyle mr-1" key={index}>{item.tagName}</span>)}
                                </div> */}
                                <span className="mr-1 bg-blue-200 py-0.5 px-1.5 text-sm font-bold text-blue-800">標籤</span>
                                <span className="mr-1 bg-blue-200 py-0.5 px-1.5 text-sm font-bold text-blue-800">標籤</span>
                                <span className="mr-1 bg-blue-200 py-0.5 px-1.5 text-sm font-bold text-blue-800">標籤</span>
                                <span className="mr-1 bg-blue-200 py-0.5 px-1.5 text-sm font-bold text-blue-800">標籤</span>

                                {/* 星星和價格 用flex共排 用老師的星星評價map*/}
                                <div className='flex items-center justify-around'>
                                    <p className="text-md flex">

                                        {/* star 星星的map計算引入匯出 現在就用img */}

                                        <img className="h-3.5" src={solidstar} alt="" />
                                        <img className="h-3.5" src={solidstar} alt="" />
                                        <img className="h-3.5" src={solidstar} alt="" />
                                        <img className="h-3.5" src={solidstar} alt="" />
                                        <img className="h-3.5" src={solidstar} alt="" />

                                        <span>4.7</span>
                                        <span>(45)</span>
                                    </p>

                                    <h6 className="">
                                        <span className='text-blue-500 text-xl font-bold'>$1300</span>
                                        <span className='font-bold'>/ 晚</span>
                                    </h6>
                                </div>




                            </div>


                        </div>

                    </Link>



                </div>



                <div className="col-span-1 mt-5 bg-red-300" onClick={() => { }}>


                    {/* <Link to="/about">About</Link> */}
                    <Link>

                        {/* 包裹img和文字欄 */}
                        <div>

                            {/*  此處上層圖片區  h-[200px] 拿掉了 否則會讓他不能填滿 */}
                            <img src={hot3} className="hover:opacity-80 min-h-[200px] w-full object-cover" alt="" />

                            {/* 此處包裹為下層文字區塊 */}
                            <div className="p-1 text-gray-900 min-h-[30px]">

                                {/* 營區名稱和地點在哪 */}
                                <h5 className="font-bold tracking-wider text-lg mt-2 mb-2">安可休閒露營區</h5>

                                <p>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                                    <span>地區：xxx</span>
                                </p>


                                {/* <!-- 營區分類標籤 會是某個陣列 跑map的item取出 --> */}

                                {/* <div className="mb-3">
                                    {campTag.map((item, index) => <span className="rounded m-tagStyle mr-1" key={index}>{item.tagName}</span>)}
                                </div> */}
                                <span className="mr-1 bg-blue-200 py-0.5 px-1.5 text-sm font-bold text-blue-800">標籤</span>
                                <span className="mr-1 bg-blue-200 py-0.5 px-1.5 text-sm font-bold text-blue-800">標籤</span>
                                <span className="mr-1 bg-blue-200 py-0.5 px-1.5 text-sm font-bold text-blue-800">標籤</span>
                                <span className="mr-1 bg-blue-200 py-0.5 px-1.5 text-sm font-bold text-blue-800">標籤</span>

                                {/* 星星和價格 用flex共排 用老師的星星評價map*/}
                                <div className='flex items-center justify-around'>
                                    <p className="text-md flex">

                                        {/* star 星星的map計算引入匯出 現在就用img */}

                                        <img className="h-3.5" src={solidstar} alt="" />
                                        <img className="h-3.5" src={solidstar} alt="" />
                                        <img className="h-3.5" src={solidstar} alt="" />
                                        <img className="h-3.5" src={solidstar} alt="" />
                                        <img className="h-3.5" src={solidstar} alt="" />

                                        <span>4.7</span>
                                        <span>(45)</span>
                                    </p>

                                    <h6 className="">
                                        <span className='text-blue-500 text-xl font-bold'>$1300</span>
                                        <span className='font-bold'>/ 晚</span>
                                    </h6>
                                </div>




                            </div>


                        </div>

                    </Link>



                </div>



                <div className="col-span-1 mt-5 bg-red-300" onClick={() => { }}>


                    {/* <Link to="/about">About</Link> */}
                    <Link>

                        {/* 包裹img和文字欄 */}
                        <div>

                            {/*  此處上層圖片區  h-[200px] 拿掉了 否則會讓他不能填滿 */}
                            <img src={hot1} className="hover:opacity-80 min-h-[200px] w-full object-cover" alt="" />

                            {/* 此處包裹為下層文字區塊 */}
                            <div className="p-1 text-gray-900 min-h-[30px]">

                                {/* 營區名稱和地點在哪 */}
                                <h5 className="font-bold tracking-wider text-lg mt-2 mb-2">安可休閒露營區</h5>

                                <p>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                                    <span>地區：xxx</span>
                                </p>


                                {/* <!-- 營區分類標籤 會是某個陣列 跑map的item取出 --> */}

                                {/* <div className="mb-3">
                                    {campTag.map((item, index) => <span className="rounded m-tagStyle mr-1" key={index}>{item.tagName}</span>)}
                                </div> */}
                                <span className="mr-1 bg-blue-200 py-0.5 px-1.5 text-sm font-bold text-blue-800">標籤</span>
                                <span className="mr-1 bg-blue-200 py-0.5 px-1.5 text-sm font-bold text-blue-800">標籤</span>
                                <span className="mr-1 bg-blue-200 py-0.5 px-1.5 text-sm font-bold text-blue-800">標籤</span>
                                <span className="mr-1 bg-blue-200 py-0.5 px-1.5 text-sm font-bold text-blue-800">標籤</span>

                                {/* 星星和價格 用flex共排 用老師的星星評價map*/}
                                <div className='flex items-center justify-around'>
                                    <p className="text-md flex">

                                        {/* star 星星的map計算引入匯出 現在就用img */}

                                        <img className="h-3.5" src={solidstar} alt="" />
                                        <img className="h-3.5" src={solidstar} alt="" />
                                        <img className="h-3.5" src={solidstar} alt="" />
                                        <img className="h-3.5" src={solidstar} alt="" />
                                        <img className="h-3.5" src={solidstar} alt="" />

                                        <span>4.7</span>
                                        <span>(45)</span>
                                    </p>

                                    <h6 className="">
                                        <span className='text-blue-500 text-xl font-bold'>$1300</span>
                                        <span className='font-bold'>/ 晚</span>
                                    </h6>
                                </div>




                            </div>


                        </div>

                    </Link>



                </div>



                <div className="col-span-1 mt-5 bg-red-300" onClick={() => { }}>


                    {/* <Link to="/about">About</Link> */}
                    <Link>

                        {/* 包裹img和文字欄 */}
                        <div>

                            {/*  此處上層圖片區  h-[200px] 拿掉了 否則會讓他不能填滿 */}
                            <img src={hot2} className="hover:opacity-80 min-h-[200px] w-full object-cover" alt="" />

                            {/* 此處包裹為下層文字區塊 */}
                            <div className="p-1 text-gray-900 min-h-[30px]">

                                {/* 營區名稱和地點在哪 */}
                                <h5 className="font-bold tracking-wider text-lg mt-2 mb-2">安可休閒露營區</h5>

                                <p>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                                    <span>地區：xxx</span>
                                </p>


                                {/* <!-- 營區分類標籤 會是某個陣列 跑map的item取出 --> */}

                                {/* <div className="mb-3">
                                    {campTag.map((item, index) => <span className="rounded m-tagStyle mr-1" key={index}>{item.tagName}</span>)}
                                </div> */}
                                <span className="mr-1 bg-blue-200 py-0.5 px-1.5 text-sm font-bold text-blue-800">標籤</span>
                                <span className="mr-1 bg-blue-200 py-0.5 px-1.5 text-sm font-bold text-blue-800">標籤</span>
                                <span className="mr-1 bg-blue-200 py-0.5 px-1.5 text-sm font-bold text-blue-800">標籤</span>
                                <span className="mr-1 bg-blue-200 py-0.5 px-1.5 text-sm font-bold text-blue-800">標籤</span>

                                {/* 星星和價格 用flex共排 用老師的星星評價map*/}
                                <div className='flex items-center justify-around'>
                                    <p className="text-md flex">

                                        {/* star 星星的map計算引入匯出 現在就用img */}

                                        <img className="h-3.5" src={solidstar} alt="" />
                                        <img className="h-3.5" src={solidstar} alt="" />
                                        <img className="h-3.5" src={solidstar} alt="" />
                                        <img className="h-3.5" src={solidstar} alt="" />
                                        <img className="h-3.5" src={solidstar} alt="" />

                                        <span>4.7</span>
                                        <span>(45)</span>
                                    </p>

                                    <h6 className="">
                                        <span className='text-blue-500 text-xl font-bold'>$1300</span>
                                        <span className='font-bold'>/ 晚</span>
                                    </h6>
                                </div>




                            </div>


                        </div>

                    </Link>



                </div>



                <div className="col-span-1 mt-5 bg-red-300" onClick={() => { }}>


                    {/* <Link to="/about">About</Link> */}
                    <Link>

                        {/* 包裹img和文字欄 */}
                        <div>

                            {/*  此處上層圖片區  h-[200px] 拿掉了 否則會讓他不能填滿 */}
                            <img src={hot3} className="hover:opacity-80 min-h-[200px] w-full object-cover" alt="" />

                            {/* 此處包裹為下層文字區塊 */}
                            <div className="p-1 text-gray-900 min-h-[30px]">

                                {/* 營區名稱和地點在哪 */}
                                <h5 className="font-bold tracking-wider text-lg mt-2 mb-2">安可休閒露營區</h5>

                                <p>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                                    <span>地區：xxx</span>
                                </p>


                                {/* <!-- 營區分類標籤 會是某個陣列 跑map的item取出 --> */}

                                {/* <div className="mb-3">
                                    {campTag.map((item, index) => <span className="rounded m-tagStyle mr-1" key={index}>{item.tagName}</span>)}
                                </div> */}
                                <span className="mr-1 bg-blue-200 py-0.5 px-1.5 text-sm font-bold text-blue-800">標籤</span>
                                <span className="mr-1 bg-blue-200 py-0.5 px-1.5 text-sm font-bold text-blue-800">標籤</span>
                                <span className="mr-1 bg-blue-200 py-0.5 px-1.5 text-sm font-bold text-blue-800">標籤</span>
                                <span className="mr-1 bg-blue-200 py-0.5 px-1.5 text-sm font-bold text-blue-800">標籤</span>

                                {/* 星星和價格 用flex共排 用老師的星星評價map*/}
                                <div className='flex items-center justify-around'>
                                    <p className="text-md flex">

                                        {/* star 星星的map計算引入匯出 現在就用img */}

                                        <img className="h-3.5" src={solidstar} alt="" />
                                        <img className="h-3.5" src={solidstar} alt="" />
                                        <img className="h-3.5" src={solidstar} alt="" />
                                        <img className="h-3.5" src={solidstar} alt="" />
                                        <img className="h-3.5" src={solidstar} alt="" />

                                        <span>4.7</span>
                                        <span>(45)</span>
                                    </p>

                                    <h6 className="">
                                        <span className='text-blue-500 text-xl font-bold'>$1300</span>
                                        <span className='font-bold'>/ 晚</span>
                                    </h6>
                                </div>




                            </div>


                        </div>

                    </Link>



                </div>







            </div>



            {/* more */}

            <div className='mt-5 rounded-[30px] mx-auto w-[100px] h-[30px] bg-my_yellow p-2 flex justify-center items-center text-md text-grey-500 ' >More   <FontAwesomeIcon icon={faCaretRight} className="ml-2" /></div>




        </>
    )

}



export default CampHot;