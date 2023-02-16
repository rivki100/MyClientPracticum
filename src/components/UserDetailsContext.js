import React, { createContext, useState } from "react";
// import axios from 'axios';
export const userDetailsContext = createContext();

export default function UserDetailsContext(props) {

    const [name, setName] = useState("");
    const [family, setFamily] = useState("");
    const [id, setId] = useState("");
    const [birthDate, setBirthDate] = useState(new Date());
    const [isMale, setIsMale] = useState(true);
    const [hmo, setHmo] = useState('מכבי');
    const [children, setChildren] = useState();
    const [wantAddChild,setWantAddChild]=useState(false);
    const [countChildren,setCountChildren]=useState(0);
    const [childrenArr,setChildrenArr]=useState([]);
   

    return (
        <userDetailsContext.Provider
         value={{name,setName,family,setFamily,id,setId,birthDate,setBirthDate,isMale,setIsMale,hmo,setHmo,children, setChildren,wantAddChild,setWantAddChild,countChildren,setCountChildren,childrenArr,setChildrenArr}}>
            {props.children}
        </userDetailsContext.Provider>
    );
}