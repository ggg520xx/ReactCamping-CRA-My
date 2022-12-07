// import { Link, Outlet } from "react-router-dom";

import { Routes, Route } from "react-router-dom";



import AdminLeftLayout from './adminLeftLayout/AdminLeftLayout'
import AdminMain from './adminMain/AdminMain'




// 簡單說 我把這個會員頁面 又做了一層 Layout 來切換右側的元件 因為左邊的選單欄位 肯定是固定的





function AdminHome() {


    return (
        <>
            <Routes>

                <Route path='/' element={<AdminLeftLayout />} >

                    <Route index element={<AdminMain />} />
                    


                </Route>
            </Routes>

        </>
    );
}

export default AdminHome;
// 匯出這個函式功能