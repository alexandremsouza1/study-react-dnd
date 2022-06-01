import { useContext } from "react";
import LeadsContext from '../contexts/LeadsContext'

export default function useLeads() { 
  return useContext(LeadsContext);
}