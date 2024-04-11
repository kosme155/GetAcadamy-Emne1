function updateViewMain() {
    document.getElementById("app").innerHTML = /*HTML*/ `
      <h3>header<h3>
      ${mainHeader()}
      <h1>forside</h1>
      <button onclick="goToPage('profilePage')">Fortsett</button>
  
      `;
  }