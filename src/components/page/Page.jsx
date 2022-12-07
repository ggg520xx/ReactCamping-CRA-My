import PageGuide from './item/PageGuide';
import PagePic from './item/PagePic';
import PageInfo from './item/PageInfo';
import PageOverview from './item/PageOverview';
import PageReserve from './item/PageReserve';
import PageFeedback from './item/PageFeedback';
import PageNotice from './item/PageNotice';






import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ParticlesConfig from '../../plugins/particles/ParticlesConfig';




function Page(props) {





    // 漂浮點狀特效 load func
    // ---------------------------------------------------------------
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    // -------------------------------- -------------------------------





    return (
        <>
            

            <Particles init={particlesInit} loaded={particlesLoaded} className="inset-0 w-full h-full absolute z-[-1] " params={ParticlesConfig} />


            
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