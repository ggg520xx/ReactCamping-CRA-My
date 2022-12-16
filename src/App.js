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







function App() {
  return (
    <div className="App wrapper">
      {/* <div className="header_public">App這邊可以設計一處共用全路由共用的表頭表尾 或是純粹用Layout階層去設計也可以</div> */}
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='search' element={<Search />} />
          <Route path='page' element={<Page />} />


          
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

      {/* <div className="footer_public">App這邊可以設計一處共用全路由共用的表頭表尾 或是純粹用Layout階層去設計也可以</div> */}
    </div>
  );
}

export default App;
