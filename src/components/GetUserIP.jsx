import {publicIpv4} from "public-ip";
import {useEffect, useState} from "react";
import cl from '../styles/userIP.css'

function GetUserIP() {
    const [IP, setIP] = useState('')
    useEffect(() => {
        async function getIP() {
            return setIP(await publicIpv4())
        }

        getIP();
    })

    return (
        <div className={cl.userIP}>
            <div className="userIP__text">
                Your IP:<i>{IP}</i>
            </div>
        </div>
    )
}

export default GetUserIP;
