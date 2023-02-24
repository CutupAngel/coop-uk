import React, { useState } from "react";
import { Button, Box, Typography } from "@mui/material";
import InputBox from "../input";
import CurrencyList from "../currencylist";
import { useCurrencyConvert, useCurrencyOptions } from "../../hooks";
import ShowCounter from "../showCounter";

function ExchangeCard() {
    const [firstCurrency, setFirstCurrency] = useState<string>("");
    const [secondCurrency, setSecondCurrency] = useState<string>("");
    const [amount, setAmount] = useState<number>(0);
    const [showVal, setShowVal] = useState<boolean>(false);

    const { curList } = useCurrencyOptions();
    const { exchange, changedVal } = useCurrencyConvert(
        amount,
        firstCurrency,
        secondCurrency
    );

    const swapCurrencies = (e: any) => {
        const tmp = firstCurrency;
        setFirstCurrency(secondCurrency);
        setSecondCurrency(tmp);
    };

    const handleConvert = () => {
        exchange();
        setShowVal(true);
    };

    return (
        <Box
            style={{
                margin: "10px",
                padding: "10px",
            }}
        >
            <InputBox
                handleClickSwap={swapCurrencies}
                handleAmtChange={setAmount}
            />
            <CurrencyList
                currencyOptions={curList}
                defaultVal={firstCurrency}
                setCurrency={setFirstCurrency}
            />
            <CurrencyList
                currencyOptions={curList}
                defaultVal={secondCurrency}
                setCurrency={setSecondCurrency}
            />
            <Box sx={{ textAlign: "center" }}>
                {showVal && (
                    <>
                        <Typography color={"darkblue"}>
                            {amount} {firstCurrency} is equivalent to{" "}
                            {changedVal} {secondCurrency}
                        </Typography>
                        <ShowCounter setShowVal={setShowVal} />
                    </>
                )}
                <Button
                    sx={{
                        backgroundColor: "darkblue",
                        borderRadius: "2px",
                    }}
                    onClick={handleConvert}
                >
                    Convert
                </Button>
            </Box>
        </Box>
    );
}

export default ExchangeCard;
