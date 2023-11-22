
function tableDatas(){
 return `
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Szabad időpont</th>
          <th scope="col">Helyszín</th>
          <th scope="col">Foglalás</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">${januar_osszes_idopont()[0].idopont}</th>
          <td>${januar_osszes_idopont()[0].helyszin}</td>
          <td><button type="button" class="btn btn-primary" onclick="foglalas(januar_osszes_idopont()[0].idopont, januar_osszes_idopont()[0].helyszin)">Foglalás</button></td>
        </tr>
        <tr>
          <th scope="row">${januar_osszes_idopont()[1].idopont}</th>
          <td>${januar_osszes_idopont()[1].helyszin}</td>
          <td><button type="button" class="btn btn-primary" onclick="foglalas(januar_osszes_idopont()[1].idopont, januar_osszes_idopont()[1].helyszin)">Foglalás</button></td>
        </tr>
        <tr>
          <th scope="row">${januar_osszes_idopont()[2].idopont}</th>
          <td>${januar_osszes_idopont()[2].helyszin}</td>
          <td><button type="button" class="btn btn-primary" onclick="foglalas(januar_osszes_idopont()[2].idopont, januar_osszes_idopont()[2].helyszin)">Foglalás</button></td>
        </tr>
        <tr>
          <th scope="row">${januar_osszes_idopont()[3].idopont}</th>
          <td>${januar_osszes_idopont()[3].helyszin}</td>
          <td><button type="button" class="btn btn-primary" onclick="foglalas(januar_osszes_idopont()[3].idopont, januar_osszes_idopont()[3].helyszin)">Foglalás</button></td>
        </tr>
        <tr>
          <th scope="row">${januar_osszes_idopont()[4].idopont}</th>
          <td>${januar_osszes_idopont()[4].helyszin}</td>
          <td><button type="button" class="btn btn-primary" onclick="foglalas(januar_osszes_idopont()[4].idopont, januar_osszes_idopont()[4].helyszin)">Foglalás</button></td>
        </tr>
        <tr>
          <th scope="row">${januar_osszes_idopont()[5].idopont}</th>
          <td>${januar_osszes_idopont()[5].helyszin}</td>
          <td><button type="button" class="btn btn-primary" onclick="foglalas(januar_osszes_idopont()[5].idopont, januar_osszes_idopont()[5].helyszin)">Foglalás</button></td>
        </tr>
        <tr>
          <th scope="row">${januar_osszes_idopont()[5].idopont}</th>
          <td>${januar_osszes_idopont()[5].helyszin}</td>
          <td><button type="button" class="btn btn-primary" onclick="foglalas(januar_osszes_idopont()[5].idopont, januar_osszes_idopont()[5].helyszin)">Foglalás</button></td>
        </tr>
      </tbody>
    </table>
  `
}

function foglalas(idopont, helyszin) {
  let text;
  let person = prompt("Kérjük adja meg a személyek számát a foglaláshoz:", 2);
  if (person == null || person === 0) {
    text = `<div className="alert alert-primary" role="alert"> Nem írt be semmit, kérem foglaljon újra </div>`;
  } else if(person > 10){
    text = `<div className="alert alert-warning" role="alert"> Maximum 9 emberre foglalhat összesen időpontot. </div>`
  }
  else {
    text = `<div className="alert alert-success" role="alert">Köszönjük a bizalmát! Ön ${person} db személynek foglalt időpontot (Helyszín: ${helyszin}) (Időpont: ${idopont}). Kérjük érkezésük előtt 30 perccel hívjanak fel különben töröljük a foglalásukat.</div>`;
  }
  document.getElementById("demo").innerHTML = text;
}