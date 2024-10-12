import React, {useCallback} from "react";

export const useEnterKey = (onEnter: () => void) => {
    return useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter'){
            e.preventDefault()
            onEnter()
        }
    }, [onEnter])
}