const replace = require('replace-in-file');

const options = [
  {
    files: 'public/*.html',
    from: /src="images\//g,
    to: 'src="<?php bloginfo( stylesheet_directory ); ?>/images/',
  },
  {
    files: 'public/*.html',
    from: /<link rel="stylesheet" href="tailwind/g,
    to: '<link rel="stylesheet" href="<?php bloginfo( stylesheet_directory ); ?>/tailwind',
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
