// App是個元件 裡面管控各元件路徑 使用到的功能要引入 其他子的元件 也要引入有使用到的任何功能 或 拆分元件
// 因此我這頁元件主要是當路徑 router使用的話 功能不會引入太多 主要用來引入外部的頁面元件

// css範圍大概是 body下的一個大wrap元件

import './style/App.css';
// import { Link, useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Layout from './components/layout/Layout'
import Home from './components/home/Home'
import Search from './components/search/Search'
import Page from './components/page/Page'
import Reserve from './components/reserve/Reserve'
import Payment from './components/payment/Payment'
import Finish from './components/finish/Finish'

import Login from './components/login/Login'
import Register from './components/register/Register'

import MemberLayout from './components/memberLayout/MemberLayout'
import MemberMain from './components/memberMain/MemberMain'


import MemberOrder from './components/memberOrder/MemberOrder'
import MemberLike from './components/memberLike/MemberLike'




import Demo from './components/demo/demo'
import NotFound from './components/NotFound'
// import 就能使用 那個函式頁面(擁有這個函式功能) 來自於這裡(順利吃到外部元件)
// 同時該頁面也要記得 export 並給予路徑和設定該路徑顯示元件
// 我們會將元件路徑寫在App.js 該頁面的使用元件 則會寫在外面 使用import引入到這裡 一一載入使用




import React, { useState, useEffect } from 'react';
import axios from 'axios';



import { MyContextSearch } from './hooks/useContext/InputSearch';
import { MyTagShowHide } from './hooks/useContext/TagShowHide';
// import { MyAllCamps } from './hooks/useContext/AllCamp-停用';



function App() {



  // 全露營地Get
  function useAllCampData() {
    const [AllCampData, setAllCampData] = useState(null);

    useEffect(() => {
      axios.get(`http://localhost:3000/camps`)
        .then(response => {
          console.log(response.data)
          setAllCampData(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
    return AllCampData;
  }
  const AllCampGet = useAllCampData();


  // 搜尋我要的關鍵
  const [inputGlobal, setInputGlobal] = useState('');










  // 點擊顯現的狀態 藉由useContext傳給包裹provider按鈕


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
  const [areaChooseId, setAreaChooseId] = useState(0);

  // 維持雙條件篩選的狀態
  const [locationStatus, setlocationStatus] = useState(false);

  // 提供給地區篩選比對 交叉比對
  const [locationFilter, setlocationFilter] = useState(null);

  // 產出的轉到篩選 特點
  const [campDataFilter, setcampDataFilter] = useState([]);

  // 特點產出 最後變成結果 導出陣列的結果狀態
  const [campDataResult, setcampDataResult] = useState([]);


  // 計算數量的 改成全域
  const [campDataNum, setcampDataNum] = useState(0);

  // 價格排序
  const [campDataPrice, setcampDataPrice] = useState('');

  // 定義點擊篩選的標籤的值存放為陣列
  const [tagvalues, setTagValues] = useState([]);







  // 執行搜尋按鈕 會將 tagValue 藉由點擊所組起來的 陣列拿去和 物件比對 該項目為true回傳
  // 這裡的問題是 campfilter 導出的資料 和 我進行篩選的資料會有讀取過程差異
  const startFilters = () => {



    // console.log(campDataFilter)
    // console.log(result)

    // const result = campDataFilter?.filter(item => {
    //   return tagvalues?.every(tag => item.tag[tag] === true);
    // });
    // 不知道為何 寫進去 幫判斷式才不會報錯





    // if (campDataPrice === 'default_filter') {

    //   const result = campDataFilter?.filter(item => {
    //     return tagvalues?.every(tag => item.tag[tag] === true);
    //   });
    //   setcampDataNum(result?.length);
    //   setcampDataResult(result)

    // }


    // hot true false 使用在首頁  hotday購買時間越多越新的擺在越前面
    if (campDataPrice === 'hotFilter') {

      const result = campDataFilter?.filter(item => {
        return tagvalues?.every(tag => item.tag[tag] === true);
      }).sort((a, b) => b.hotday - a.hotday);
      setcampDataNum(result?.length);
      setcampDataResult(result)

    }

    else if (campDataPrice === 'price_hightolow') {

      const result = campDataFilter?.filter(item => {
        return tagvalues?.every(tag => item.tag[tag] === true);
      }).sort((a, b) => b.showLowPrice - a.showLowPrice);

      setcampDataNum(result?.length);
      setcampDataResult(result)
    }

    else if (campDataPrice === 'price_lowtohigh') {

      const result = campDataFilter?.filter(item => {
        return tagvalues?.every(tag => item.tag[tag] === true);
      }).sort((a, b) => a.showLowPrice - b.showLowPrice);

      setcampDataNum(result?.length);
      setcampDataResult(result)
    }


    else {

      // 這裡會是剛進來跑的 但我想過誰會想看預設id順序 剛好都用熱門來跑就好
      const result = campDataFilter?.filter(item => {
        return tagvalues?.every(tag => item.tag[tag] === true);
      }).sort((a, b) => b.hotday - a.hotday);
      setcampDataNum(result?.length);
      setcampDataResult(result)

    }

  }
  useEffect(startFilters, [campDataFilter, campDataPrice]);








  return (
    <div className="App wrapper">
      {/* <div className="header_public">App這邊可以設計一處共用全路由共用的表頭表尾 或是純粹用Layout階層去設計也可以</div> */}

      <MyContextSearch.Provider value={{ inputGlobal, setInputGlobal, AllCampGet }}>


        <MyTagShowHide.Provider value={{ buildWood, setBuildWood, buildTruck, setBuildTruck, buildOther, setBuildOther, buildNone, setBuildNone, providShower, setProvidShower, providPlay, setProvidPlay, providRentEquip, setProvidRentEquip, providMeal, setProvidMeal, providGuide, setProvidGuide, providPool, setProvidPool, providSpring, setProvidSpring, providRainCover, setProvidRainCover, providCarArea, setProvidCarArea, viewHigh, setViewHigh, viewForest, setViewForest, viewGrass, setViewGrass, viewKawa, setViewKawa, viewCloudSea, setViewCloudSea, viewSunrise, setviewSunrise, areaChoose, setAreaChoose, areaChooseId, setAreaChooseId, locationStatus, setlocationStatus, locationFilter, setlocationFilter, campDataFilter, setcampDataFilter, tagvalues, setTagValues, campDataResult, setcampDataResult, startFilters, campDataNum, setcampDataNum, campDataPrice, setcampDataPrice }}>



          <Routes>
            <Route path='/' element={<Layout />} >



              <Route index element={<Home />} />
              <Route path='search' element={<Search />} />

              <Route path='page/:id' element={<Page />} />



              <Route path='reserve' element={<Reserve />} />
              <Route path='payment' element={<Payment />} />
              <Route path='finish' element={<Finish />} />



              <Route path='login' element={<Login />} />
              <Route path='register' element={<Register />} />



              <Route path='demo' element={<Demo />} />
              <Route path="*" element={<NotFound />} />
            </Route>







            {/* 如果要設計後台的話 */}
            {/* 可能會寫 那個元件 必須登入權限為何才可以造訪頁面 */}
            <Route path='member' element={<MemberLayout />} >



              <Route index element={<MemberMain />} />
              <Route path='order' element={<MemberOrder />} />
              <Route path='like' element={<MemberLike />} />



            </Route>


            {/* <Route path='reserve' element={<Reserve />} >
          </Route> */}

            {/* <Route path="member" element={<member />} />
          <Route path="task" element={<task />} /> */}
            {/* <Route path="*" element={<NotFound />} /> */}
            {/* </Route> */}
          </Routes>

        </MyTagShowHide.Provider>

      </MyContextSearch.Provider>



      {/* <div className="footer_public">App這邊可以設計一處共用全路由共用的表頭表尾 或是純粹用Layout階層去設計也可以</div> */}
    </div>
  );
}

export default App;
