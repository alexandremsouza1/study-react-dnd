import LeadsContext from './LeadsContext'
import useLeadsProvider from '../hooks/useLeadsProvider'

export default function LeadsProvider(props) {
  const leads = useLeadsProvider();

  return (
    <LeadsContext.Provider value={leads}> 
      {props.children} 
    </LeadsContext.Provider>
  )
}