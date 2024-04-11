function updateViewProfile() {
    document.getElementById("app").innerHTML = /*HTML*/ `
    <h3>header<h3>
      ${mainHeader()}
      <h1>Dette er profilsiden</h1>
        <button id="editMyProfile" onclick="('')">Rediger</button>
        <button id="privacyMyProfile1" onclick="('')">Velg synlighet</button>
        <button id="privacyMyProfile2" onclick="('')">Velg synlighet</button>
        <button id="editProfilePic" onclick="('')">Rediger profilbilde</button>
        <button id="editMySignatureStrengths" onclick="('')">Rediger signaturstyrker</button>
        <button id="saveMyProfile" onclick="('')">Lagre</button>
        <button id="outdatedBio" onclick="('')">Utdatert?</button>
        <button id="shareComment" onclick="('')">Del med lærere</button>
        <button id="privateComment" onclick="('')">Hold privat</button>
        `;
  }