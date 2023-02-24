import { useEffect, useState } from "react";

const useCountdown = (targetMins: number) => {
    const [countDown, setCountDown] = useState<number>(targetMins * 60);

    useEffect(() => {
        const interval = setInterval(() => {
            setCountDown((countDown) => countDown - 1);
        }, 1000);

        return () => clearInterval(interval);
    });

    return getReturnValues(countDown);
};

const getReturnValues = (countDown: number) => {
    const minutes = Math.floor(countDown / 60);
    const seconds = Math.floor(countDown % 60);
    return [minutes, seconds];
};

export default useCountdown;
