const apiKey = "RGAPI-cbe0a889-18ae-445a-8f5c-7137d4885f50";

$(document).ready(function() {
  if (localStorage.getItem('championList') == null) {
    $.ajax({
      url: "https://na1.api.riotgames.com/lol/static-data/v3/champions?locale=en_US&dataById=false",
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
    if ($('.champ-list')!= null) {
      $('.champ-list').remove();
      $('.champ-infos').remove();
    }
    const response = dataParseKey('championList');
    const list = document.createElement('ul');
    const objChamp = response.data;
    const arrChamp = Object.keys(response.data).sort();
    list.classList.add('champ-list');

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
        url: "https://na1.api.riotgames.com/lol/static-data/v3/champions/" + champId + "?locale=en_US&champData=spells&tags=all",
        type: "GET",
        headers: {
          "X-Riot-Token": apiKey,
        },
        success: function (response) {
          if ($('.champ-infos')!= null) {
            $('.champ-infos').remove();
          }
          //To have a div that contains all the infos
          const champContainer = document.createElement('div');
          const headerContainer = document.createElement('div');
          const titleDiv = document.createElement('div');
          const mainContainer = document.createElement('div');
          champContainer.classList.add('champ-infos');
          headerContainer.classList.add('header-infos');
          mainContainer.classList.add('spell-infos');
          titleDiv.classList.add('title-div');

          //To have the name
          const name = response.name;
          const nameTitle = document.createElement('h2');
          nameTitle.classList.add('title-champ');
          nameTitle.innerHTML = name;
          titleDiv.appendChild(nameTitle);

          //To have the champion's image
          const avatar = response.image.full;
          const imgChamp = document.createElement('img');
          const imgChampDiv = document.createElement('div');
          imgChamp.classList.add('img-champ');
          imgChampDiv.classList.add('img-champ-div');
          imgChamp.src = "http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/" + avatar;
          imgChampDiv.appendChild(imgChamp);
          titleDiv.appendChild(imgChampDiv);

          //To have the lore
          const loreParagraph = document.createElement('p');
          loreParagraph.classList.add('champ-p');
          loreParagraph.innerHTML = response.lore;
          
          //To have the passive
          const passive = response.passive.full;
          const namePassive = response.passive.name;
          const descPassive = response.passive.description;
          const passiveParagraph = document.createElement('p');
          const passiveTitle = document.createElement('h4');
          const passivContainer = document.createElement('div');
          //const passiveImg = document.createElement('img');
          //const passiveImgDiv = document.createElement('div');
          passiveParagraph.classList.add('passive-p');
          passiveTitle.classList.add('title-h4');
          passiveTitle.innerHTML = namePassive;
          passiveParagraph.innerHTML = descPassive;
          //passiveImgDiv.classList.add('passive-img-div');
          //passiveImg.src = "http://ddragon.leagueoflegends.com/cdn/6.24.1/img/passive/" + passive;
          passivContainer.appendChild(passiveTitle);
          //passivContainer.appendChild(passiveImgDiv);
          passivContainer.appendChild(passiveParagraph);

          //To have the 4 spells with image, name and description
          const tableSpells = response.spells;
          const spellContainerList = document.createElement('ul');
          spellContainerList.classList.add('spell-ul');
          for (let i = 0; i < tableSpells.length; i++) {
            const nameSpell = tableSpells[i].name;
            const descSpell = tableSpells[i].description;
            const spell = tableSpells[i].image.full;
            const nameSpellTitle = document.createElement('h4');
            const spellParagraph = document.createElement('p');
            const imgSpell = document.createElement('img');
            const imgSpellDiv = document.createElement('div');
            const spellList = document.createElement('li');
            nameSpellTitle.classList.add('title-h4');
            spellParagraph.classList.add('champ-p');
            imgSpell.classList.add('img-spell');
            imgSpellDiv.classList.add('img-spell-div');
            spellList.classList.add('spell');
            imgSpell.src = "http://ddragon.leagueoflegends.com/cdn/6.24.1/img/spell/" + spell;
            nameSpellTitle.innerHTML = nameSpell;
            spellParagraph.innerHTML = descSpell;
            imgSpellDiv.appendChild(imgSpell);
            spellList.appendChild(nameSpellTitle);
            spellList.appendChild(imgSpellDiv);
            spellList.appendChild(spellParagraph)
            spellContainerList.appendChild(spellList);
          }

          //Add 2 h3 to separate spells and header
          //To insert in the html document
          headerContainer.appendChild(titleDiv);
          headerContainer.appendChild(loreParagraph);
          mainContainer.appendChild(passivContainer);
          mainContainer.appendChild(spellContainerList);
          champContainer.appendChild(headerContainer);
          champContainer.appendChild(mainContainer);
          document.querySelector('#resultList').appendChild(champContainer);
        }
      });
    });
  });
});