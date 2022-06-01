import LeadsView from '../views/LeadsView';
import { useEffect, useCallback} from 'react';
import useLeads from '../hooks/useLeads';

export default function Leads() {  
  const { leads, setLeads, addLead, setAddLead, savedLead, setSavedLead } = useLeads(); 

  useEffect( ()=> { 
    const savedLeads = JSON.parse(localStorage.getItem('leads'));
  
    if (savedLeads) { 
      setLeads(savedLeads);
    }
  }, [addLead]);
  
  function handleClick() {
    setAddLead(true);
  } 

  const handleDrop = useCallback((item, leadId,monitor) => {
    const updatedLeads = leads.map(lead => {
      return lead.id == leadId ? { ...lead, status: monitor.targetId } : lead;
    });

    localStorage.setItem('leads', JSON.stringify(updatedLeads))
    setLeads(updatedLeads);
  })

  const stages = ['T0', 'T2', 'T4']

  return(
    <LeadsView 
      handleClick={handleClick}  
      leads={leads}
      setAddLead={setAddLead}
      addLead={addLead}
      handleDrop={handleDrop}
      stages={stages}
      savedLead={savedLead}
      setSavedLead={setSavedLead}
    />
  )
}