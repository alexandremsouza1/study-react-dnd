import { useState } from "react";

export default function useLeadsProvider() {
  const [ leads, setLeads ] = useState([]);
  const [addLead, setAddLead] = useState(false); 
  const [savedLead, setSavedLead] = useState(false);

  const saveLeadstoLocalStorage = (newLead) => { 
    let leads = JSON.parse(localStorage.getItem('leads'));
    if (!leads) { 
      leads = [];
    }
  
    leads.push(newLead);
    localStorage.setItem('leads', JSON.stringify(leads));
  }

  return { 
    saveLeadstoLocalStorage, 
    leads, 
    setLeads, 
    addLead, 
    setAddLead, 
    savedLead, 
    setSavedLead
  }
}