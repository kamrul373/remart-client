import { useEffect, useState } from "react"
export const useIsSeller = email => {
    const [sellerLoading, setSellerLoading] = useState(true)
    const [isSeller, setIsSeller] = useState(false);
    useEffect(() => {
        if (email) {
            fetch(`${process.env.REACT_APP_SERVER_URL}/users/seller/${email}`)
                .then(response => response.json())
                .then(data => {
                    setIsSeller(data.isSeller)
                    setSellerLoading(false)
                })

        }
    }, [email])

    return [sellerLoading, isSeller]
}