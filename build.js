const replace = require('replace-in-file');

const options = [
  {
    files: 'public/*.html',
    from: /src="images\//g,
    to: 'src="<?php bloginfo( stylesheet_directory ); ?>/images/',
  },
  {
    files: 'public/*.html',
    from: /<script src="\/js\/main.js"/g,
    to: '<script src="<?php bloginfo( stylesheet_directory ); ?>/js/main.js?v=' + Date.now() + '"',
  },
  {
    files: 'public/*.html',
    from: /<link rel="stylesheet" href="tailwind.min.css"/g,
    to: '<link rel="stylesheet" href="<?php bloginfo( stylesheet_directory ); ?>/tailwind.css?ver=' + Date.now() + '"'
  }
];

options.forEach((option) => {
  try {
    const results = replace.sync(option);
    console.log('Replacement results:', results);
  }
  catch (error) {
    console.error('Error occurred:', error);
  }
});
