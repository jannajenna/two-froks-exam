import { createContext, useState, useEffect } from "react";

export const LogoContext = createContext();

export const LogoProvider = ({ children }) => {

    const [data, setData] = useState([])

    const getData = async function getServerSideProps() {
        const url = 'https://blush-entertaining-raver.glitch.me/bands/';
        const data = await fetch(url);
        if (data.status != 200) {
            return {
                notFound: true,
            };
        }
        const bands = await data.json();
        setData(bands)
    };

    useEffect(() => {
        getData();
    }, []);


    <LogoContext.Provider value={data}>
        {children}
    </LogoContext.Provider>
}