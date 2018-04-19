const apiKey = "RGAPI-3f9ce90d-a226-45c4-9c51-2ac5875db720";

$(document).ready(function() {
  if (localStorage.getItem('championList') == null) {
    $.ajax({
      url: "https://euw1.api.riotgames.com/lol/static-data/v3/champions?locale=en_US&dataById=false",
      type: "GET",
      headers: {
        "X-Riot-Token": apiKey,
      },
      success: function (response) {
        localStorage.setItem("championList", JSON.stringify(response));
      }
    });
  }

  function dataParseKey(key) {
    const responseStorage = localStorage.getItem(key);
    return JSON.parse(responseStorage);
  }

  //The button A shows a list of every champions
  $('#a').on('click', function (e) {
    const response = dataParseKey('championList');
    const list = document.createElement('ul');
    const objChamp = response.data;
    const arrChamp = Object.keys(response.data);

    for (let i = 0; i < arrChamp.length; i++) {
      const listChampion = document.createElement('li');
      listChampion.classList.add('champion');
      listChampion.setAttribute('data-id', objChamp[arrChamp[i]].id);
      listChampion.innerHTML = arrChamp[i];
      list.appendChild(listChampion);
    }
    document.querySelector('#resultList').appendChild(list);

    //We can click on a champion and we have some informations
    $('.champion').on('click', function (e) {
      const champId = this.dataset.id;
      $.ajax({
        url: "https://euw1.api.riotgames.com/lol/static-data/v3/champions/" + champId + "?locale=en_US&champData=spells&tags=all",
        type: "GET",
        headers: {
          "X-Riot-Token": apiKey,
        },
        success: function (response) {
          //To have a div that contains all the infos
          const champContainer = document.createElement('div');
          const headerContainer = document.createElement('div');
          champContainer.classList.add('champ-infos');
          headerContainer.classList.add('header-infos')


          //To have the name
          const name = response.name;
          const nameTitle = document.createElement('h2');
          nameTitle.innerHTML = name;

          //To have the champion's image
          const imgChamp = document.createElement('img');
          const imgChampDiv = document.createElement('div');
          imgChamp.classList.add('img-champ');
          imgChampDiv.classList.add('img-champ-div');
          imgChamp.src = "http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/" + name + ".png";
          imgChampDiv.appendChild(imgChamp);
          headerContainer.appendChild(imgChampDiv);

          //To have the lore
          const loreParagraph = document.createElement('p');
          loreParagraph.classList.add('lore-p');
          loreParagraph.innerHTML = response.lore;
          headerContainer.appendChild(loreParagraph);
          
          //To have the passive
          const passive = response.passive.image;
          const passiveParagraph = document.createElement('p');
          const passiveImg = document.createElement('img');
          const passiveImgDiv = document.createElement('div');
          passiveParagraph.classList.add('passive-p');
          passiveParagraph.innerHTML = response.passive.description;
          passiveImgDiv.classList.add('passive-img-div');
          passiveImg.src = "http://ddragon.leagueoflegends.com/cdn/6.24.1/img/spell/" + passive + ".png"

          //To have the 4 spells with image, name and description
          const spells = response.spells;
          for (let i = 0; i < spells.length; i++) {
            const nameSpell = spells[i].name;
            const descSpell = spells[i].description;
            const nameSpellTitle = document.createElement('h4');
            const nameSpellParagraph = document.createElement('p');
            const imgSpell = document.createElement('img');
            const imgSpellDiv = document.createElement('div');
            imgSpell.src = "http://ddragon.leagueoflegends.com/cdn/6.24.1/img/spell" + nameSpell + ".png";
            //append the items
          }

          //Add 2 h3 to separate spells and header
          //To insert in the html document
          champContainer.appendChild(nameTitle);
          champContainer.appendChild(headerContainer);
          champContainer.appendChild(loreParagraph);
          document.querySelector('#resultList').appendChild(champContainer);
          debugger;
        }
      });
    });
  });
});