function goToPage(page) {
    model.app.currentPage = page;
    updateView();
  }
  
  function mainHeader() {
    return /*HTML*/ `
      <button onclick="goToPage('infoPage')">Signaturstyrker</button>
      <button onclick="goToPage('profilePage')">Min profil</button>
      <button onclick="goToPage('teamPage')">Mitt team</button>
      <button id="getAcademy"><a href="https://getacademy.no/">'img'</a></button>
      `;
  }