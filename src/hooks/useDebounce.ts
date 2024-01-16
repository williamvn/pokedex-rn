import { useEffect, useState } from "react";

export const useDebounce = <T>(data: T, ms: number): T => {
    const [debounceData, setDebounceData] = useState<T>(data);
    useEffect(() => {
        const timeoutTracker = setTimeout(() => {
            setDebounceData(data);
        }, ms);
        return () => clearTimeout(timeoutTracker);
    }, [data]);
    return debounceData;
}