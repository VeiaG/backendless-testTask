import React, {  useEffect, useState} from "react";
import useFetch from "../useFetch/useFetch";
import { useParams ,useNavigate} from "react-router-dom";


const TabControl = ({tabs})=>{
    const navigate = useNavigate();
    //current tab id
    const {tabID} = useParams();
    return <div className="tabControl">
        {tabs?.map((tab)=>{
            return <div 
                className={`tabControl__btn ${tab.id ===tabID ? "tabControl__btn--active":""}`}
                key={tab.id} 
                onClick={()=>navigate(`/`+tab.id)}>
                    {tab.title}
            </div>
        })}
        <a className="tabControl__btn tabControl__link" 
        href="https://veiag.github.io/#us"
        target="_blank">Palamar Roman</a>
    </div>
}
const TabDisplay = ({tabs})=>{
    //current tab component
    const [CurrentTab,setCurrentTab] = useState(undefined);
    //current tab id
    const {tabID} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        //if tabs.json was fetched
        if(tabs){
            //finding current tab by id from tab array
            const currentTab = tabs.find(tab=>tab.id===tabID);
            if(!currentTab){
                //if can't find then redirect to first tab in array
                navigate(`/${tabs[0].id}`);
                return;
            }
            //lazy import of tab
            const Module = React.lazy(()=> import("./"+currentTab.path));
            setCurrentTab(Module);
        }
    },[tabs,tabID,navigate])

    return <div className="tabWrapper">
        {CurrentTab && <CurrentTab/>}
    </div>
}

const App = ()=>{
    //fetch tabs from tabs.json and sort by order 
    const tabs = useFetch("./tabs.json")?.sort((a,b)=>a.order-b.order);    

    return <div className="app">
        <TabControl tabs={tabs}/>
        <TabDisplay tabs={tabs}/>
    </div>
}
export default App;
