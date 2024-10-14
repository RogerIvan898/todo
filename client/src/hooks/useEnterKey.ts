import React, {useCallback} from "react";

type UseEnterKey = (onEnter?: () => void) => (e: React.KeyboardEvent<Element>) => void

export const useEnterKey: UseEnterKey = (onEnter) => {
    return useCallback((e) => {
        if(e.key === 'Enter'){
            e.preventDefault()
            onEnter?.()
        }
    }, [onEnter])
}