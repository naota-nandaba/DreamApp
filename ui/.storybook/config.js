// load in storybook configuration Util
const configure = require('@storybook/react').configure;

function loadStories() {
  // Require your stories dir
  require('../stories');
}

configure(loadStories, module); // Exports your stories
