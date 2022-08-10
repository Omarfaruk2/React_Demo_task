import React from 'react'
import useSWR from 'swr'



const fetcher = (...args) => fetch(...args).then((res) => res.json())

const useProducts = () => {
    const url = "data.json"
    const { data: products, isValidating } = useSWR(url, fetcher, {
        suspense: true,
    })

    return [products, isValidating]



}

export default useProducts