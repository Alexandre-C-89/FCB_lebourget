import "../style/components/_Contact.scss";

function Contact() {
  return (
    <div className="form">
        <h2>Contactez le Club !</h2>
        <form className="form_contact">
          <label className="form_contact_name">
            Nom: 
            <input type="text" name="Nom"/> 
          </label>
          <label className="form_contact_lastname">
            Prénom: 
            <input type="text" name="Prénom"/> 
          </label>
          <label className="form_contact_age">
            Age: 
            <input type="number" name="Age"/> 
          </label>
        </form>
      </div>
  );
}

export default Contact;
