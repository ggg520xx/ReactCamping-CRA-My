import SearchBar from './item/SearchBar';
import CampSearch from './item/CampSearch';
import CampHot from './item/CampHot';
import CampAboutUs from './item/CampAboutUs';



function Home() {
    return (
        <>
            <SearchBar />

            {/* 營區搜尋 和 熱門營區 */}
            <div className="container">
                <CampSearch />
                <CampHot />
            </div>
                <CampAboutUs />




        </>
    );
}

export default Home;
// 匯出這個函式功能