import {useState,useEffect} from "react";

//custom fetch JSON hook by path
const useFetch = (path )=>{
    const [data,setData] = useState(undefined);

    useEffect(()=>{
        if(!path) return;
        fetch(path).then(response =>{
            return response.json();
        })
        .then((data)=>{
            setData(data);
        }).catch((err)=>{
            throw new Error("Fetch error" + err);
        })
    },[path]);
    return data;
}
export default useFetch;