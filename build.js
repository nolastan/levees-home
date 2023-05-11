const replace = require('replace-in-file');

const options = {
  files: 'public/*.html',
  from: /images\//g,
  to: '<?php bloginfo( stylesheet_directory ); ?>/images/',
};

try {
  const results = replace.sync(options);
  console.log('Replacement results:', results);
}
catch (error) {
  console.error('Error occurred:', error);
}
