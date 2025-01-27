const bodyElement = document.body;

const main = document.createElement('main');
main.classList.add('main');

const header = document.createElement('header');
header.classList.add('header');

const title = document.createElement('h1');
title.textContent = 'NONOGRAMS';
title.classList.add('title');

main.append(
  header,
  title,
);

bodyElement.append(main);
