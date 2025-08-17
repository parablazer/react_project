import FaceDominik from '../assets/Face-Dominik.png'
import MailIcon from '../assets/mail-icon.png'
import PhoneIcon from '../assets/phone-icon.png'

export function Contact (){
    return(
            <article className="contact-card">
                <img
                src={FaceDominik}
                alt="Dominik Rudnicki"
                ></img>
                <h3>Dominik Rudnicki</h3>
                <div className="info-group">
                    <img src={PhoneIcon} alt="Phone Icon"></img>
                    <p>281-555-1011</p>
                </div>
                <div className="info-group">
                <img src={MailIcon} className="icon" alt="Phone Icon"></img>
                <p>ewelina@email.com</p>
                </div>
            </article>
    )

}