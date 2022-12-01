// 該元件內 有寫的功能 也必須載入功能 import
// 然後 App 管理路由那的頁面 要引入這頁的元件的話 會需要引入這頁所匯出

import { Link } from "react-router-dom";

function NotFound() {
    return (
        <>
            <h2>找不到該頁面, 您的網址出錯嘍~</h2>
            <Link to="/">回到首頁</Link>
        </>
    );
}



export default NotFound;
// 匯出這個函式功能