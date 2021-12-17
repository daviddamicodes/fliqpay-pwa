import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setDetails } from '../../redux/actions/detailsActions';

const RecipientPage = () => {

    const [input, setInput] = useState({
        email: '',
        fullName: '',
        ibanAcct: '',
        swiftBic: '',
        disabled: true,
    })

    const [toggle, setToggle] = useState(true)

    const dispatch = useDispatch()

    const handleInput = e => {
        const {name, value} = e.target;
        setInput({
            ...input, 
            [name]: value
        })
    }


    const handleIbanInput = e => {
        const {name, value} = e.target;
        setInput({
            ...input, 
            [name]: value, 
            // [name]: (value).trim, 
            disabled: false
        })
    }
    
    const handleDispatch = () => {
        dispatch(setDetails(input))
    }

    const handleToggle = () => {
        setToggle(!toggle)
    }


    return (
        <div className="bg-gray-bg h-screen pt-14 border-gray-1 border-2">
            <div className="bg-white max-w-470 rounded-lg px-6 py-8 mx-auto">
                <div className="font-semibold text-md mb-8 pb-2 border-b-2 border-gray-1 text-purple-900">
                    <h4 className="font-semibold text-md mb-1 text-purple-900">Your Recipient</h4>
                    <h4 className="text-xs text-purple-700 text-opacity-70">Who are you sending money to?</h4>
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="email" className="pointer-events-none text-xs text-gray-500 mb-1">Their email (optional)</label>
                    <input name="email" type="email" onChange={handleInput} required className=" w-5/5 px-3.5 py-3 text-sm rounded-lg focus:outline-none border-gray-1 border-2 text-purple-900 appearance-none" autoComplete="off" placeholder="" />
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="fullName" className="pointer-events-none text-xs text-gray-500 mb-1">Full name of the account holder</label>
                    <input name="fullName" type="text" onChange={handleInput} required className=" w-5/5 px-3.5 py-3 text-sm rounded-lg focus:outline-none border-gray-1 border-2 text-purple-900 appearance-none" autoComplete="off" placeholder="" />
                </div>
                <h4 className="font-semibold text-sm pb-3 mb-2 border-b-2 border-gray-1 text-purple-900">Bank details</h4>
                <div className="flex flex-col mb-4">
                    <div className="flex mb-6">
                        <button toggle={toggle} className={toggle ? "text-xs font-semibold text-purple-900 bg-white px-3 py-3 border-b-2 border-purple-900 transition-all duration-200" : "text-xs font-normal text-gray-700 bg-white px-3 py-3 transition-all duration-200"} onClick={handleToggle}>Inside Europe</button>
                        <button toggle={toggle} className={toggle ? "text-xs font-normal text-gray-700 bg-white px-3 py-3 transition-all duration-200" : "text-xs font-semibold text-purple-900 bg-white px-3 py-3 border-b-2 border-purple-900 transition-all duration-200"} onClick={handleToggle}>Outside Europe</button>
                    </div>
                    <label htmlFor="ibanAcct" className="pointer-events-none text-xs text-gray-500 mb-1">IBAN / Account Number</label>
                    <input name="ibanAcct" type="number" onChange={handleIbanInput} required className=" w-5/5 px-3.5 py-3 text-sm rounded-lg focus:outline-none border-gray-1 border-2 text-purple-900 mb-3 appearance-none" autoComplete="off" placeholder="01234567891" />
                        {
                            toggle ? (
                                <></>
                            ) : (
                                <div className="flex flex-col">
                                    <label htmlFor="swiftBic" className="pointer-events-none text-xs text-gray-500 mb-1">SWIFT / BIC code</label>
                                    <input name="swiftBic" type="text" onChange={handleIbanInput} required className=" w-5/5 px-3.5 py-3 text-sm rounded-sm focus:outline-none border-gray-1 border-2 text-purple-900 mb-3 appearance-none" autoComplete="off" placeholder="BUKBGB22" />
                                </div>
                            )
                            
                        }
                </div>
                <Link to="/review"><button className={`w-full font-medium text-xs py-4 px-6 ${input.disabled ? "bg-mid-blue opacity-50" : "bg-mid-blue"} text-white flex-grow rounded-md mt-2`} onClick={handleDispatch} disabled={input.disabled}>Continue</button></Link>
            </div>
        </div>
    )
}

export default RecipientPage
