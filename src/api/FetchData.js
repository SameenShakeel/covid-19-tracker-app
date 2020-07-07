import React, { useEffect, useState } from 'react';


const [loading, setLoading] = useState(true);

const url = "";

useEffect(() => {
    FetchData();
}, [loading]);

const FetchData = async() => {
    try{
        const response = await fetch(url);
        const data = await response.json();
        setLoading(false);
        console.log(data);
    }
    catch(error){

    }
}