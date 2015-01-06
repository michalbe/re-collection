'use strict';
/* global collection */

var table = document.getElementById('table');

var renderPosition = function(data) {
  var parent = document.createElement('tr');

  // Cover
  var cover = document.createElement('td');
  cover.style.backgroundImage = 'url(data/covers/no-cover.jpg)';

  // Title
  var title = document.createElement('td');
  title.innerHTML = data.title;

  // Platform
  var platform = document.createElement('td');
  platform.className = 'center';
  var platformImg = document.createElement('img');
  platformImg.className = 'platform';
  platformImg.src = 'data/platforms/' + data.platform + '.png';
  platform.appendChild(platformImg);

  // Region
  var region = document.createElement('td');
  region.className = 'center';
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
  parent.className = 'center';

  for (var i=0; i<rarity; i++) {
    rarityImg = document.createElement('img');
    rarityImg.className = 'rarity';
    rarityImg.src = 'data/rarities/1.png';
    parent.appendChild(rarityImg);
  }

  return parent;
};

collection.forEach(renderPosition);
