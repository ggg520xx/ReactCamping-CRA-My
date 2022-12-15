import { Link, useNavigate } from "react-router-dom";




const SearchPath = (props) => {






    return (

        <>

            {/* 上介面 原本的設計搞樣子  拿來作為其他設計排版*/}

            {/* #f2ede6  w-full */}

            {/* <div className="h-[300px] w-full bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${indexBottomBg})` }}>

                <div className="h-[300px] w-3/4 mx-auto rounded-[50px] bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${indexBottomBg})` }}></div>

            </div> */}


          
            <div className='py-5'>
            
                <div className="w-full  bg-soft_color text-left pl-5 py-1 rounded-[50px]" >
                    <p className="font-bold  text-my_blue" >
                        <Link to="/" className="font-bold" >
                            首頁&nbsp;&nbsp;
                        </Link>

                        <span className="text-black">&gt;</span>

                        &nbsp;&nbsp;

                        <span>大括號項目props提取</span>
                    </p>
                </div>

          
            </div>



        </>
    );



}

export default SearchPath;