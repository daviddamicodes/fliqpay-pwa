import React from 'react';
import {RiArrowDownSFill} from 'react-icons/ri';
// import Select, { components } from 'react-select';


const SelectOptions = ({ input }) => {
    return (
        <>
            <div 
                className="select-box flex flex-1 items-center justify-between px-4 bg-gray-1 font-medium text-purple-900 rounded-br-lg rounded-tr-lg -ml-2"
            >
                <div className="flex align-center justify-center w-6 h-6 bg-blue-300 rounded-full overflow-hidden">
                    <img src={input.toCountryFlag} alt={input.toCurrency} className="object-cover max-w-none transform scale-150" />
                </div>
                <div className="w-2/5">USD</div>
                <div><RiArrowDownSFill /></div>
            </div>
        </>
    )
}

// const SelectOptions = ({ input }) => {
//     return (
//         <>
//             <div 
//                 className="select-box flex flex-1 items-center justify-between px-4 bg-gray-1 font-medium text-purple-900 rounded-br-lg rounded-tr-lg -ml-2"
//             >
//                 <div className="flex align-center justify-center w-6 h-6 bg-blue-300 rounded-full overflow-hidden">
//                     <img src={input.toCountryFlag} alt={input.toCurrency} className="object-cover max-w-none transform scale-150" />
//                 </div>
//                 {/* <div className="w-14">USD</div> */}
//                 <div className="w-2/5">USD</div>
//                 <div><RiArrowDownSFill /></div>
//             </div>
//         </>
//     )
// }

export default SelectOptions;
