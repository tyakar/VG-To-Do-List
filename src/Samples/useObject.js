import { useState, useEffect, useCallback } from "react";

const useObject = (initData) => {
    const [data, setData] = useState(initData);

    return {
        data,
        setData,
        add: useCallback(a=> setData(v=>[...v,a]))
    };
};

export default useObject;