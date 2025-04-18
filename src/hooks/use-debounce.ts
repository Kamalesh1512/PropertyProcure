import React, { useEffect, useState } from 'react'

function useDebounce<T>(value: T , delay?:number):T {

    const [debouncedValue,setDebouncedValue] = useState<T>(value);


    useEffect(()=>{

        const timer = setTimeout(()=>setDebouncedValue(value), delay|| 300);

        return ()=>{
            clearTimeout(timer);
        }
    },[value,delay])

    return debouncedValue;

}

export default useDebounce;