import { useEffect, useState } from "react";

const useSellerStatus = sellerEmail => {

    const [sellerVerificationStatus, setSellerVerificationStatus] = useState(false)
    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_URL}/verificationstatus/${sellerEmail}`)
            .then(response => response.json())
            .then(data => setSellerVerificationStatus(data.status));
    }, [sellerEmail]);

    return sellerVerificationStatus;

}
export default useSellerStatus;