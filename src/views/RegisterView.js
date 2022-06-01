import '../styles/RegisterStyle.css';
import logo from '../assets/elogroup.jpg'

export default function RegisterView(props) {
  return(
    <div>

      <form className="registration__form">
        <img src={logo} alt="" />
        <label htmlFor="user">Usuário *</label>
        <input type="text" id="user" onChange={e=>props.setUser(e.target.value)}/>
        <label htmlFor="password">Password *</label>
        <input type="password" id="password" onChange={e=>props.setPassword(e.target.value)}/>
        <label htmlFor="password_confirmation">Confirmação Password *</label>
        <input type="password" id="password_confirmation" onChange={e=>props.setPasswordConfirmation(e.target.value)}/>
        {
          props.errorMessage &&
          <div className="popup-error">
            <span>{props.errorMessage}</span>
          </div>
        }
        <button className="registration__button" onClick={props.handleClick}>Registrar</button>
      </form>
    </div>
  )
}