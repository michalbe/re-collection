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

  parent.appendChild(cover);
  parent.appendChild(title);

  table.appendChild(parent);
};

renderPosition(collection[0]);
