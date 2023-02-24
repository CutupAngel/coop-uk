import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import useCountdown from "../../hooks/useCountDown";

const ShowCounter = ({ setShowVal }: { setShowVal: Function }) => {
    const [minutes, seconds] = useCountdown(1);

    if (minutes === 0 && seconds === 0) {
        setShowVal(false);
    }

    return (
        <Typography>
            Expired in {minutes}:{seconds}
        </Typography>
    );
};

export default ShowCounter;
