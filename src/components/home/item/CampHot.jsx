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



            <div className='pb-8'>



                <div className="flex p-5  justify-center items-end">
                    {/* <FontAwesomeIcon icon={faCoffee} className="mr-2" />
                <FontAwesomeIcon icon={faAtom} className="w-12 h-12" /> */}
                    <img src={indexIcon} className='w-20 h-20' alt="" />
                    <h2 className="font-semibold text-center text-4xl">熱門營區</h2>
                    <img src={indexIcon} className='w-20 h-20' alt="" />
                </div>

                {/* 分配排版 三直列 和 間隔 */}
                <div className="grid grid-cols-3 gap-5">


                    {/* 單個 佔位1直列 以及點擊hook記錄 目的營區 */}
                    <div className="relative col-span-1 mt-5 bg-white" onClick={() => { }}>


                        {/* <Link to="/about">About</Link> */}
                        <Link>

                            {/* 包裹img和文字欄 */}
                            <div>

                                {/*  此處上層圖片區  h-[200px] 拿掉了 否則會讓他不能填滿 */}
                                <img src={hot1} className="hover:opacity-80 min-h-[200px] w-full object-cover" alt="" />

                                {/* 此處包裹為下層文字區塊 */}
                                <div className=" text-gray-900 min-h-[30px] text-left px-6 py-5">


                                    <div className='row items-center py-2'>

                                        <div className='col-6 p-0'>
                                            {/* 營區名稱和地點在哪 */}
                                            <h5 className="font-bold tracking-wider text-xl">安可休閒露營區</h5>
                                        </div>

                                        <div className='col-6 p-0'>

                                            {/* 星星和價格 用flex共排 用老師的星星評價map*/}
                                            <div className='flex items-center justify-end'>
                                                <p className="text-md flex">
                                                    {/* star 星星的map計算引入匯出 現在就用img */}
                                                    <img className="h-3.5" src={solidstar} alt="" />
                                                    <img className="h-3.5" src={solidstar} alt="" />
                                                    <img className="h-3.5" src={solidstar} alt="" />
                                                    <img className="h-3.5" src={solidstar} alt="" />
                                                    <img className="h-3.5" src={solidstar} alt="" />
                                                </p>

                                            </div>
                                        </div>



                                    </div>







                                    <p>
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                                        <strong className=''>地區：xxx</strong>
                                    </p>


                                    {/* <!-- 營區分類標籤 會是某個陣列 跑map的item取出 --> */}

                                    {/* <div className="mb-3">
                                    {campTag.map((item, index) => <span className="rounded m-tagStyle mr-1" key={index}>{item.tagName}</span>)}
                                </div> */}
                                    
                                    <div className='py-2'>
                                        <span className="mr-1 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">標籤</span>
                                        <span className="mr-1 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">標籤</span>
                                        <span className="mr-1 rounded-xl bg-psub_color py-1 px-2.5 text-sm font-bold text-my-green">標籤</span>
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











                </div>





                {/* more */}
                <button className='mt-5 w-2/12 rounded-[30px] mx-auto  bg-p_color p-2 flex text-white justify-center items-center text-md text-grey-500 ' > <span className=''>看更多評價</span>   <FontAwesomeIcon icon={faCaretRight} className="ml-2" /></button>


            </div>


        </>
    )

}



export default CampHot;