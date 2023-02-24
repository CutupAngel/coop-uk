import { useCallback, useEffect, useState } from "react";
import { CURRENCY_URL, RATE_URL } from "../config";

export const useCurrencyOptions = () => {
    const [curList, setCurList] = useState<string[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(CURRENCY_URL);
                const curData = await response.json();
                setCurList(curData);
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
    }, []);

    return { curList };
};

export const useCurrencyConvert = (
    amount: number,
    firstCurrency: string,
    secondCurrency: string
) => {
    const [changedVal, setChangedVal] = useState<number>(0);
    const exchange = useCallback(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(RATE_URL + firstCurrency);
                const curRates = await response.json();
                setChangedVal(curRates.rates[secondCurrency] * amount);
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
    }, [amount, firstCurrency, secondCurrency]);

    return { changedVal, exchange };
};
