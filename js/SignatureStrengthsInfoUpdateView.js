function updateViewInfo() {
    document.getElementById("app").innerHTML = /*HTML*/ `
    <h3>header<h3>
      ${mainHeader()}
  <button id="personalityTest" onclick="goToPage('')">Personality Test</button>
  <button id="saveInfoPage" onclick="('')">Lagre</button>
  <button id="editAboutSignatureStrengths" onclick="('')">Rediger</button>
  <button id="editLinksBottom" onclick="('')">Rediger</button>
  <button id="editLinksRight" onclick="('')">Rediger</button>
  <button id="link1" onclick="goToPage('')">How VIA Signature Strengths Can Enhance Your Life</button>
  <button id="link2" onclick="goToPage('')">Using Character Strengths in the Workplace</button>
  <button id="link3" onclick="goToPage('')">A Universal Language that Describes What's Best in Us | Ryan Niewmiec | TEDxXavierUniversity</button>  
        <button onclick="goToPage('listPage')">24 signaturstyrker</button>
        `;
  }