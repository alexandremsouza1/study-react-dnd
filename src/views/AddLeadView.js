import logo from '../assets/elogroup.jpg';
import '../styles/AddLeadStyle.css'

export default function AddLeadView(props) {
  
  return(
  <div className="container">
    <div className="modal">
      <div className="modal__header">
        <img src={logo} alt="" />
        <h2>Novo Lead</h2>
      </div>
      
      <form className="modal__form">
        <div className="modal__form-left">
          <label htmlFor="name">Nome*</label>
          <input type="text" id="name"  onChange={e=>props.setName(e.target.value)}/>
          <label htmlFor="phone">Telefone*</label>
          <input type="text" id="phone" onChange={e=>props.setPhone(e.target.value)}/>
          <label htmlFor="email">Email*</label>
          <input type="text" id="email" onChange={e=>props.setEmail(e.target.value)}/>
        </div>

        <div className="modal__form-right">
          <h3>Oportunidades</h3>
          <table className="table">
            <thead className="table__head">
              <tr>
                <th>
                  <input type="checkbox" name="box1" id="box1" onClick={e => props.handleSelectAll(e)}/>
                </th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <input type="checkbox" name="checkbox" id="box2" value="RPA"/>
                </td>
                <td>RPA</td>
              </tr>
              <tr>   
                <td>
                  <input type="checkbox" name="checkbox" id="box3" value="Produto Digital" />
                </td>
                <td>Produto Digital</td>
              </tr>
              <tr>   
                <td>
                  <input type="checkbox" name="checkbox" id="box4"  value="Analytics"/>
                </td>
                <td>Analytics</td>
              </tr>
              <tr>   
                <td>
                  <input type="checkbox" name="checkbox" id="box5" value="BPM" />
                </td>
                <td>BPM</td>
              </tr>
            </tbody>
          </table>
          
          <button className="modal__button" onClick={e => props.handleClick(e)}>Salvar</button>
        </div>
      </form>
      {
        props.errorMessage &&
          <div className="modal__popup-error">
            <span>{props.errorMessage}</span>
            <button onClick={()=>props.setErrorMessage(false)}>Ok!</button>
          </div>
      }
    </div>
  </div>
  )
}