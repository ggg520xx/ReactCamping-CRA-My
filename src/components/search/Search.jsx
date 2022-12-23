import SearchPath from './item/SearchPath';
import SearchPickSide from './item/SearchPickSide';
import SearchPickSideRight from './item/SearchPickSideRight';
import SearchUnderSlogan from './item/SearchUnderSlogan';



// 突然想放背景圖 來包裹所有元件
import { indexBottomBg } from '../../assets/search/SearchMange';

import { MyTagShowHide } from '../../hooks/useContext/TagShowHide';
import React, { useState } from 'react';

function Search() {



    // 點擊顯現的狀態 藉由useContext傳給包裹provider按鈕
    const [limit, setLimit] = useState(false);

    const [buildWood, setBuildWood] = useState(false);
    const [buildTruck, setBuildTruck] = useState(false);
    const [buildOther, setBuildOther] = useState(false);
    const [buildNone, setBuildNone] = useState(false);

    const [providShower, setProvidShower] = useState(false);
    const [providPlay, setProvidPlay] = useState(false);
    const [providRentEquip, setProvidRentEquip] = useState(false);
    const [providMeal, setProvidMeal] = useState(false);
    const [providGuide, setProvidGuide] = useState(false);
    const [providPool, setProvidPool] = useState(false);
    const [providSpring, setProvidSpring] = useState(false);
    const [providRainCover, setProvidRainCover] = useState(false);
    const [providCarArea, setProvidCarArea] = useState(false);

    const [viewHigh, setViewHigh] = useState(false);
    const [viewForest, setViewForest] = useState(false);
    const [viewGrass, setViewGrass] = useState(false);
    const [viewKawa, setViewKawa] = useState(false);
    const [viewCloudSea, setViewCloudSea] = useState(false);
    const [viewSunrise, setviewSunrise] = useState(false);





 

    // 傳給子元件地區選擇
    const [areaChoose, setAreaChoose] = useState('');


    return (
        <>

            {/* // 突然想放背景圖 來包裹所有元件 */}
            <div className="w-full h-auto bg-no-repeat bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${indexBottomBg})` }}>



                {/* 元件引用 */}
                <div className="container pb-5">
                    <SearchPath />


                    <div className='row'>

                        <MyTagShowHide.Provider value={{ limit, setLimit, buildWood, setBuildWood, buildTruck, setBuildTruck, buildOther, setBuildOther, buildNone, setBuildNone, providShower, setProvidShower, providPlay, setProvidPlay, providRentEquip, setProvidRentEquip, providMeal, setProvidMeal, providGuide, setProvidGuide, providPool, setProvidPool, providSpring, setProvidSpring, providRainCover, setProvidRainCover, providCarArea, setProvidCarArea, viewHigh, setViewHigh, viewForest, setViewForest, viewGrass, setViewGrass, viewKawa, setViewKawa, viewCloudSea, setViewCloudSea, viewSunrise, setviewSunrise, areaChoose, setAreaChoose }}>

                            <SearchPickSide />
                            <SearchPickSideRight />

                        </MyTagShowHide.Provider>

                    </div>



                </div>
                <SearchUnderSlogan />




            </div>
        </>
    );
}

export default Search;
// 匯出這個函式功能