import React from "react";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import { SwapHoriz } from "@mui/icons-material";
import { IInputBoxProps } from "./props";

function InputBox(props: IInputBoxProps) {
    const { handleAmtChange, handleClickSwap } = props;

    return (
        <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">
                Amount
            </InputLabel>
            <Input
                id="standard-adornment-password"
                type="number"
                onChange={(e) => {
                    handleAmtChange(e.target.value);
                }}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickSwap}
                        >
                            <SwapHoriz />
                        </IconButton>
                    </InputAdornment>
                }
            />
        </FormControl>
    );
}

export default InputBox;
