function updateViewList() {
    document.getElementById("app").innerHTML = /*HTML*/ `
    <h3>header<h3>
      ${mainHeader()}
      <br/>
      <button id="previousPage" onclick="goToPage('infoPage')">tilbake</button>
      <div class="centerText">
        <h1>De 24 signaturestyrkene</h1>
        <h3>begrep på <span class="cursor" onclick="switchLanguage()">engelsk</span></h3>
      </div>
  
      <div class="container">
        ${leftContent()}
        ${centerContent()}
        ${rightContent()}
      </div>
  
  
        `;
  }
  
  function leftContent() {
    return /*HTML*/ `
    <div class="left-content">
          <div class="color-style1 categoryText">${model.data.categories[0].textNor}</div>
          <li id="creativity" onclick="addText(0)">Kreativitet / Creativity</li>
          <li id="curiosity" onclick="addText(1)">Nysgjerrighet / Curiosity</li>
          <li id="perspective" onclick="addText(2)">Perspektiv / Perspective</li>
          <li id="judgement" onclick="addText(3)">Dømmekraft / Judgement</li>
          <li id="loveOfLearning" onclick="addText(4)">Læringslyst / Love Of Learning</li>
          
          <div class="color-style2 categoryText">${model.data.categories[1].textNor}</div>
          <button id="bravery" onclick="addText(5)">Tapperhet / Bravery</button>
          <button id="honesty" onclick="addText(6)">Ærlighet / Honesty</button>
          <button id="perseverance" onclick="addText(7)">Utholdenhet / Perseverance</button>
          <button id="zest" onclick="addText(8)">Livslyst / Zest</button>
  
          <div class="color-style3 categoryText">${model.data.categories[2].textNor}</div>
          <button id="kindness" onclick="addText(9)">Vennlighet / Kindness</button>
          <button id="love" onclick="addText(10)">Kjærlighet / Love</button>
          <button id="socialIntelligence" onclick="addText(11)">Sosial Intelligens / Social Intelligence</button>
        </div>
    `;
  }
  
  function centerContent() {
    let showButton = "";
    let centerBoxClass = "";
    if (model.inputs.signatureStrengthList.selected != null) {
      showButton = `<button onclick="('')">Legg til i mine styrker</button>`;
      centerBoxClass = "center-box";
    }
    return /*HTML*/ `
      <div class="center-content">
        <div class=${centerBoxClass} style="${
      model.inputs.signatureStrengthList.color
    }">
          <div class="center-box-header"></div>
          <div>
          ${model.inputs.signatureStrengthList.selected ?? ""}
          </div>
        </div>
        <div class="center-button">
          ${showButton}
        </div>
      </div>
      `;
  }
  
  function rightContent() {
    return /*HTML*/ `
    <div class="right-content">
          <div class="color-style4 categoryText">${model.data.categories[3].textNor}</div>
          <button id="fairness" onclick="addText(12)">Likeverd / Fairness</button>
          <button id="teamwork" onclick="addText(13)">Samarbeid / Teamwork</button>
          <button id="leadership" onclick="addText(14)">Lederevner / Leadership</button>
  
          <div class="color-style5 categoryText">${model.data.categories[4].textNor}</div>
          <button id="forgiveness" onclick="addText(15)">Tilgivelse / Forgiveness</button>
          <button id="prudence" onclick="addText(16)">Forsiktighet / Prudence</button>
          <button id="humility" onclick="addText(17)">Ydmykhet / Humility</button>
          <button id="selfRegulation" onclick="addText(18)">Selvledelse / Self-Regulation</button>
  
          <div class="color-style6 categoryText">${model.data.categories[5].textNor}</div>
          <button id="hope" onclick="addText(19)">Håp / Hope</button>
          <button id="humor" onclick="addText(20)">Humor / Humor</button>
          <button id="gratitude" onclick="addText(21)">Takknemlighet / Gratitude</button>
          <button id="spirituality" onclick="addText(22)">Spiritualitet / Spirituality</button>
          <button id="appreciationOfBeauty&Excellence" onclick="addText(23)">Verdsette Skjønnhet / Appreciation Of Beauty & Excellence</button>
        </div>
    `;
  }