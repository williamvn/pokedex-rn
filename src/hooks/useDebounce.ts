import { useEffect, useState } from "react";

export const useDebounce = <T>(data: any, ms: number): T => {
    const [debounceData, setDebounceData] = useState(data);
    const [timeoutTracker, setTimeoutTracker] = useState<number>();
    useEffect(() => {
        if(timeoutTracker) {
            clearTimeout(timeoutTracker);
        }
        setTimeoutTracker(setTimeout(() => {
            setDebounceData(data);
        }, ms));
    }, [data]);
    return debounceData;
}