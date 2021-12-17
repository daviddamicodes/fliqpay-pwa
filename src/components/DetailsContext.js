import React, {useState, createContext} from 'react';

export const DetailsContext = createContext();

export const DetailsProvider = (props) => {

    const [state, setState] = useState({
        youSend: '',
        recipientGets: '',
        fromCurrency: '',
        toCurrency: '',
        transferFee: '',
        convertedAmount: '',
        grh: '',
        email: '',
        fullName: '',
        iban: '',
    })
    
    return (
        <DetailsContext.Provider value={[state, setState]}>
            {props.children}
        </DetailsContext.Provider>
    );
}