import React, { useState } from 'react';
import { Country } from "./Country";
import { v1 } from "uuid";

export type BanknotsType = 'USD' | 'RUB' | 'All'
export type MoneyType = {
    banknote: 'USD' | 'RUB'
    nominal: number
    id: string
}

let defaultMoney: MoneyType[] = [
    { banknote: 'USD', nominal: 100, id: v1() },
    { banknote: 'USD', nominal: 100, id: v1() },
    { banknote: 'RUB', nominal: 100, id: v1() },
    { banknote: 'USD', nominal: 100, id: v1() },
    { banknote: 'USD', nominal: 100, id: v1() },
    { banknote: 'RUB', nominal: 100, id: v1() },
    { banknote: 'USD', nominal: 100, id: v1() },
    { banknote: 'RUB', nominal: 100, id: v1() },
]


export const moneyFilter = (money: MoneyType[], filter: BanknotsType): MoneyType[] => {
    return (
        filter === 'All' ? money :
            money.filter(i => i.banknote === filter)
    )
}


function Bankomat() {
    const [money, setMoney] = useState<MoneyType[]>(defaultMoney)
    const [filterValue, setFilterValue] = useState<BanknotsType>('All')

    const filteredMoney = moneyFilter(money, filterValue)

    const addMoney = (banknote: BanknotsType) => {
        const addExtraMoney: MoneyType = { banknote, nominal: 100, id: v1() }
        setMoney([...money, addExtraMoney])
    }

    const removeMoney = (banknote: BanknotsType) => {
        const index = money.findIndex(el=>el.banknote===banknote)
         if (index !== -1) {
             setMoney(money.filter((el, i) => i!==index));
         }
    }

    return (
        <div className="App">
            <Country
                data={filteredMoney}  
                setFilterValue={setFilterValue} 
                addMoney={addMoney}
                removeMoney={removeMoney}
            />
        </div>
    );
}

export default Bankomat;
