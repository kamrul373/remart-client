import { useEffect, useState } from "react"

export const UseIsSeller = email => {
    const [sellerLoading, setSellerLoading] = useState(true)
    const [isSeller, setIsSeller] = useState(false);
    useEffect(() => {
        if (email) {
            fetch(`${process.env.REACT_APP_SERVER_URL}/users/seller/${email}`)
                .then(response => response.json())
                .then(data => console.log(data))
        }
    }, [email])

    return [sellerLoading, isSeller]
}