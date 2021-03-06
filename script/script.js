'use strict';
/* global collection */
/* global List */
/* global Shadowbox */

var table = document.getElementById('table');

var renderPosition = function(data) {
  var parent = document.createElement('tr');

  if ('owned' in data && data.owned) {
    parent.className = 'owned';
  }
  // Cover
  var cover = document.createElement('td');
  cover.className = 'center';
  var anhor = document.createElement('a');
  anhor.href = 'data/covers/' + data.id + '.jpg';
  anhor.setAttribute('rel', 'shadowbox');

  var coverImg = document.createElement('img');
  coverImg.className = 'cover';
  coverImg.src = 'data/covers/' + data.id + '.jpg';

  anhor.appendChild(coverImg);
  cover.appendChild(anhor);

  coverImg.alt = data.id;

  coverImg.onerror = (function(img, anh){
    return function() {
      img.src = 'data/covers/no-cover.jpg';
      var parent = anh.parentNode;
      parent.removeChild(anh);
      parent.appendChild(img);

    };
  })(coverImg, anhor);

  // Title
  var title = document.createElement('td');
  title.innerHTML = data.title;
  title.className = 'title';

  // Platform
  var platform = document.createElement('td');
  platform.className = 'center platform';
  var platformImg = document.createElement('img');
  platformImg.className = 'platform';
  platformImg.src = 'data/platforms/' + data.platform + '.png';
  platform.appendChild(platformImg);

  // Region
  var region = document.createElement('td');
  region.className = 'center region';
  var regionImg = document.createElement('img');
  regionImg.className = 'flag';
  regionImg.src = 'data/regions/' + data.region + '.png';
  region.appendChild(regionImg);

  // Rarity
  var rarity = renderRarity(data.rarity);

  parent.appendChild(cover);
  parent.appendChild(title);
  parent.appendChild(platform);
  parent.appendChild(region);
  parent.appendChild(rarity);

  table.appendChild(parent);
};

var renderRarity = function(rarity) {
  rarity = rarity === 0 ? 6 : rarity;
  var rarityImg;
  var parent = document.createElement('td');
  parent.style.width = '120px';
  parent.className = 'center rarity';

  for (var i=0; i<rarity; i++) {
    rarityImg = document.createElement('img');
    rarityImg.className = 'rarity';
    rarityImg.src = 'data/rarities/1.png';
    parent.appendChild(rarityImg);
  }

  return parent;
};

collection.forEach(renderPosition);

var options = {
  valueNames: [ 'title', 'platform', 'region', 'rarity' ],
  page: 500
};

var gameList = new List('box', options);
var allVisible = false;

var filterList = function(){
  gameList.filter(function(item){
    return item.elm.classList.contains('owned');
  });
};

document.getElementById('show-all').addEventListener('click', function() {
  allVisible = !allVisible;
  this.innerHTML = allVisible ?
    (gameList.filter(), "Show owned only") :
    (filterList(), "Show all games");

});

window.onload = filterList;
Shadowbox.init();

document.getElementById('stats').innerHTML =
  (document.getElementsByClassName('owned').length-1) + '/' + collection.length;
