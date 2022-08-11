import { useEffect, useState } from 'react'
// import { useState } from 'react'
import useSWR from 'swr'



// const fetcher = (...args) => fetch(...args).then((res) => res.json())

const useProducts = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://cryptic-headland-62038.herokuapp.com/allitems")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    // const url = "https://cryptic-headland-62038.herokuapp.com/allitems"
    // const { data: products, isValidating ,} = useSWR(url, fetcher, {
    //     suspense: true,
    // })

    return [products, setProducts]



}

export default useProducts