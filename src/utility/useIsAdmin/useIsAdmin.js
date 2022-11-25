import { useEffect, useState } from "react"
export const useIsAdmin = email => {
    const [adminLoading, setAdminLoading] = useState(true)
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        if (email) {
            fetch(`${process.env.REACT_APP_SERVER_URL}/users/admin/${email}`)
                .then(response => response.json())
                .then(data => {
                    setIsAdmin(data.isAdmin);
                    setAdminLoading(false)
                })
        }
    }, [email])

    return [adminLoading, isAdmin]
}