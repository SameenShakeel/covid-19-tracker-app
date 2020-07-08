import { useEffect } from 'react';


function FetchData(){

    const url = "https://api.thevirustracker.com/free-api?global=stats";

    useEffect(() => {
        const fetchdata = async() => {
            try{
                const response = await fetch(url);
                const data = await response.json();
                console.log(data);
            }
            catch(error){
                console.log("error");
            }
        }
    }, []);
    
}

export default FetchData;