import { useEffect, useState } from "react"

export const UseIsAdmin = email => {
    const [adminLoading, setAdminLoading] = useState(true)
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        if (email) {
            fetch(`${process.env.REACT_APP_SERVER_URL}/users/admin`)
                .then(response => response.json())
                .then(data => console.log(data))
        }
    }, [email])

    return [adminLoading, isAdmin]
}