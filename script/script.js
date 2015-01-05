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
  region.innerHTML = data.region;

  // Rarity
  var rarity = document.createElement('td');
  rarity.innerHTML = data.rarity;

  parent.appendChild(cover);
  parent.appendChild(title);
  parent.appendChild(platform);
  parent.appendChild(region);
  parent.appendChild(rarity);

  table.appendChild(parent);
};

collection.forEach(renderPosition);
