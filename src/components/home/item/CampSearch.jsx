// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { faAtom } from '@fortawesome/free-solid-svg-icons'


import { indexIcon, location1, location2, location3, location4, location5 } from '../../../assets/index/IndexMange';



const CampSearch = (props) => {




    return (
        <>



            <div className='pb-5'>



                <div className="flex p-5 border border-red-500 justify-center items-end">
                    {/* <FontAwesomeIcon icon={faCoffee} className="mr-2" />
                <FontAwesomeIcon icon={faAtom} className="w-12 h-12" /> */}
                    <img src={indexIcon} className='w-20 h-20' alt="" />
                    <h2 className="font-semibold text-center text-4xl">營區搜尋</h2>
                    <img src={indexIcon} className='w-20 h-20' alt="" />
                </div>


                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-4 mt-5 bg-red-300"><img className="h-[200px] w-full object-cover rounded-[30px]" src={location1} alt="" />
                        <p>北中南xx營區</p>
                    </div>
                    <div className="col-span-4 mt-5 bg-red-300"><img className="h-[200px] w-full object-cover rounded-[30px]" src={location2} alt="" />
                        <p>北中南xx營區</p>
                    </div>
                    <div className="col-span-4 mt-5 bg-red-300"><img className="h-[200px] w-full object-cover rounded-[30px]" src={location3} alt="" />
                        <p>北中南xx營區</p>
                    </div>
                </div>


                <div className="grid grid-cols-12 gap-5 justify-center">
                    <div className="col-span-4 col-start-2 col-end-6 mt-5 bg-red-300"><img className="h-[200px] w-full object-cover rounded-[30px]" src={location4} alt="" />
                        <p>北中南xx營區</p>
                    </div>
                    <div className="col-span-4 col-start-8 col-end-12 mt-5 bg-red-300"><img className="h-[200px] w-full object-cover rounded-[30px]" src={location5} alt="" />
                        <p>北中南xx營區</p>
                    </div>

                </div>

            </div>

        </>
    );
}

export default CampSearch;