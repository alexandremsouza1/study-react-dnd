import logo from '../assets/elogroup.jpg';
import AddLead from '../controllers/AddLead';
import '../styles/LeadsTableStyle.css';
import Column from '../controllers/Column';

export default function LeadsView({ stages, savedLead, setSavedLead, handleClick, leads, addLead, setAddLead, handleDrop }) {

  return (
    <div>
      <header className="header">
        <img src={logo} alt="" />
        <h2>Painel de Leads</h2>
      </header>
      <button className="new-lead__button" onClick={handleClick}>Novo Lead (+)</button>
      <table className="table" >
        <thead>
          <tr>
            <th>Cliente em potencial</th>
            <th>Dados confirmados</th>
            <th>Reunião Agendada</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead, index) => {
            return (
              <tr key={index}>
                { stages.map(stage => {
                  return ( 
                    <Column
                    accept={'LEAD'}
                    onDrop={(item,monitor)=> handleDrop(item, item.name === lead.name ? lead.id : undefined ,monitor)}
                    key={'col' + stage + 'row' + index}
                    lead={lead.status === stage ? lead : undefined}
                    actualStage={'LEAD'}
                    index={'T'+(index*2).toString()} 
                    />
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      {
        addLead &&
        <AddLead setAddLead={setAddLead} />
      }
      { 
        savedLead && 
        <div className="modal__popup-success">
          <span>Lead salvo com sucesso!</span>
          <button onClick={()=>setSavedLead(false)}>Ok!</button>
        </div>
      }
    </div>
  )
}