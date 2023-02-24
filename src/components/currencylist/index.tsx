import React, { useEffect, useState } from "react";
import ReactSelect from "react-select";
import { Typography, Box } from "@mui/material";
import { FLAG_URL } from "../../config";
import { ICurrencyProps, ISelectOption } from "./props";

function CurrencyList(props: ICurrencyProps) {
    const { currencyOptions, setCurrency, defaultVal } = props;
    const [selOptions, setSelOptions] = useState<ISelectOption[]>([]);

    useEffect(() => {
        const tmpSelOptions: ISelectOption[] = Object.entries(
            currencyOptions
        ).map(([key, val]) => ({
            value: key,
            label: val,
            image: FLAG_URL + key.slice(0, 2).toLowerCase() + ".png",
        }));
        setSelOptions(tmpSelOptions);
    }, [currencyOptions]);

    const handleChange = (e: any) => {
        setCurrency(e.value);
    };

    return (
        <Box p={1}>
            <ReactSelect
                name="currencyList"
                value={selOptions.find((item) => item.value === defaultVal)}
                options={selOptions}
                isSearchable={true}
                onChange={handleChange}
                formatOptionLabel={(selOption) => {
                    return (
                        <Box
                            sx={{
                                display: "-webkit-inline-box",
                                WebkitBoxAlign: "baseline",
                            }}
                        >
                            <img
                                src={selOption.image}
                                style={{ paddingRight: "5px" }}
                            />
                            <Typography>{selOption.value}</Typography>
                            <Typography fontSize={"12px"}>
                                /{selOption.label}
                            </Typography>
                        </Box>
                    );
                }}
            />
        </Box>
    );
}

export default CurrencyList;
