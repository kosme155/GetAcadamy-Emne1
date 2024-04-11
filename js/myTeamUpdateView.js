function updateViewTeam() {
    document.getElementById("app").innerHTML = /*HTML*/ `
          <h3>header<h3>
          ${mainHeader()}
        <h1>Teamside<h1>
        <button id="sharedComment" onclick="('')">Del med lærere</button>
        <button id="privateComment" onclick="('')">Hold privat</button>
        `;
  }