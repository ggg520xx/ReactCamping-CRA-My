import SearchResult from './SearchResult';


const SearchPickSideRight = (props) => {






    return (

        <>

            {/* 上介面 原本的設計搞樣子  拿來作為其他設計排版*/}

            {/* #f2ede6  w-full */}

            {/* <div className="h-[300px] w-full bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${indexBottomBg})` }}>

                <div className="h-[300px] w-3/4 mx-auto rounded-[50px] bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${indexBottomBg})` }}></div>

            </div> */}


            <div className="col-9">



                {/* bg-gray-100 w-full px-8 py-3  shadow-xl rounded-3xl mb-3 */}
                <div className='bg-gray-100 w-full px-8 py-5 shadow-xl rounded-md border-gray-200 border'>

                    {/* <h3 className='font-bold text-xl'>
                        找到 <span>{ }</span>  <span className="text-blue-500">0</span> 個 相關搜尋結果
                    </h3> */}

                    {/* <hr className="my-3" /> */}

                    <div className='flex items-center'>

                        <h3 className='font-bold text-xl text-left whitespace-nowrap'>
                            條件篩選：
                        </h3>

                        <div className="flex flex-wrap">
                            <button className='m-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>小木屋營區類</button>

                            <button className='m-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>盥洗淋浴設施</button>
                            <button className='m-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>供早或晚餐點</button>
                            <button className='m-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>提供租借裝備</button>

                            <button className='m-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>戲水區</button>
                            <button className='m-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>可泡湯</button>
                            <button className='m-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>遮雨棚</button>
                            <button className='m-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>戲水區</button>
                            <button className='m-1 border border-sub_color rounded-sm py-1 px-3 text-md font-semibold hover:bg-p_color hover:text-white'>停車位</button>

                            {/* 要能再次被點選取消 */}
                            {/* {searchFilterTag.map((item, index) => <button key={index} type="button" className="m-searchTag3 rounded" onClick={handleTagClick}>{item}</button>)} */}

                        </div>
                    </div>

                    <hr className="my-3" />


                    {/* 執行再次搜尋條件 或清除條件 */}
                    <div className='row justify-around'>

                        <button className='col-4   my-1 border border-blue-800 rounded-sm py-1 px-3 text-md font-semibold hover:bg-my_blue hover:text-white'>執行條件搜尋</button>

                        <button className='col-4   my-1 border border-red-400 rounded-sm py-1 px-3 text-md font-semibold hover:bg-red-800 hover:text-white'>清除所有篩選</button>

                    </div>


                </div>





                {/* 搜尋結果排序 */}
                <div className="py-5 w-full flex justify-between items-center px-2">


                    <h3 className='font-bold text-xl'>
                        找到 <span>{ }</span>  <span className="text-blue-500">2</span> 個 相關搜尋結果
                    </h3>



                    <label for="underline_filter" class="sr-only">Underline select</label>

                    <select id="underline_filter" class="text-center block py-2.5 px-0 w-1/4 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">

                        <option selected value="default_filter">預設推薦</option>
                        <hr />
                        <option value="like_hightolow">評價-高到低</option>
                        <option value="like_lowtohigh">評價-低到高</option>
                        <hr />
                        <option value="price_hightolow">價格-高到低</option>
                        <option value="price_lowtohigh">價格-低到高</option>


                    </select>


                </div>




                {/* 搜尋結果 */}
                <SearchResult />




            </div>




        </>
    );



}

export default SearchPickSideRight;