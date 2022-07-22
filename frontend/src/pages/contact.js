import "../style/components/_Contact.scss";

function Contact() {
  return (
    <div className="box">
        <h2>Contactez le Club !</h2>
        <form className="form_bloc">

          <div className="form_bloc_group">
            <label for="nom">
            Nom: 
            </label>
            <input type="text" name="Nom" required maxLength="20"/> 
          </div>
          
          <div className="form_bloc_group">
            <label for="prenom" >
              Prénom: 
            </label>
              <input type="text" name="Prénom" required maxLength="20"/> 
          </div>

          <div className="form_bloc_group">
            <label for="message">Message :</label>
            <textarea name="message" id="message" cols="30" rows="10"></textarea>
          </div>

          <div className="form_bloc_group">
            <input type="submit" value="Envoyer" className="button_sub"/>
          </div>
        </form>
      </div>
  );
}

export default Contact;
