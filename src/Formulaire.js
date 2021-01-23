import React, { Component } from "react";
class Formulaire extends Component {
  handleSubmit(event) {
    alert('Les données sont soumis' );
    document.getElementById('label').reset()
    event.preventDefault();
  }
 render() {
 return (
 <form onSubmit={this.handleSubmit} >
 <label>Last Name</label>
 <br/>
 <input type="text" width="200px" ></input>
 <br/>
 <label id="label">First Name</label>
 <br/>
 <input type="text" ></input>
 <br/>
 <label id="label">Age</label>
 <br/>
 <input type="text" ></input>
 <br/>
 <label id="label">Gender</label>
 <br/>
 <input type="checkbox"  name="interest" value=""/>
 <label >Homme</label>
 <input type="checkbox"  name="interest" value=""/>
 <label>Femme</label>
<br/>
 <label id="label">Veuillez choisir la langue</label>
 <br/>
<select id="liste">
  <option value="volvo">Sélectionner votre choix</option>
  <option value="volvo">Allemand</option>
  <option value="saab">Espagnol</option>
  <option value="opel">Arabe</option>
  <option value="audi">Anglais</option>
</select>
<br/>
<button type="submit" value="Submit" >Submit</button>
 </form>
 );
 }
}
export default Formulaire;