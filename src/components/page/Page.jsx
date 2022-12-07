import PageGuide from './item/PageGuide';
import PagePic from './item/PagePic';
import PageInfo from './item/PageInfo';
import PageOverview from './item/PageOverview';
import PageReserve from './item/PageReserve';
import PageFeedback from './item/PageFeedback';
import PageNotice from './item/PageNotice';



function Page(props) {






    return (
        <>
            
            <PageGuide />

            <div className="container wrapper py-5">
                <PagePic />
                <PageInfo />
                <PageOverview />
                <PageReserve />
                <PageFeedback />
                <PageNotice />


            </div>
   




        </>
    );
}

export default Page;
// 匯出這個函式功能