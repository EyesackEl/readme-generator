const fs = require("fs");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function getLicenseBadge(license) {
  if (license === 'Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'BSD 2-Clause') {
    return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
  } else if (license === 'Do What the Fuck You Want to Public') {
    return '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)';
  } else if (license === 'Unlicense') {
    return  '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
  } else {
    console.error('Unexpected License');
  };
};

function getLicenseLink(license) {
  if (license === 'Apache') {
    return 'https://opensource.org/licenses/Apache-2.0';
  } else if (license === 'BSD 2-Clause') {
    return 'https://opensource.org/licenses/BSD-2-Clause';
  } else if (license === 'Do What the Fuck You Want to Public') {
    return 'http://www.wtfpl.net/about/';
  } else if (license === 'Unlicense') {
    return  'https://unlicense.org/';
  } else {
    console.error('Unexpected License');
  };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'N/A') {
    fs.appendFile('README.md', `\n\n## License\nToo cool for a license 😎`, err =>
      err ? console.error(err) : console.log('\n\tUpdated License Section\n')
    );
    return;
  };

  let licenseBadge = getLicenseBadge(license);

  let licenseLink = getLicenseLink(license);

  let licenseSection = `## License\n${licenseBadge}\n\nThis project is licensed under the ${license} license, it's documentation can be found [Here](${licenseLink})`;

  fs.appendFile('README.md', `\n\n${licenseSection}`, err =>
    err ? console.error(err) : console.log('\n\tUpdated License Section\n')
  );
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const tOfC = '- [Installation](#installation)\n- [Usage](#usage)\n- [Credits](#contributing)\n- [Test Instructions](#test-instructions)\n- [License](#license)';
  const title = `# ${data.title}`;
  const description = `## Description\n${data.description}`;
  const installation = `## Installation\n${data.installation}`;
  const usage = `## Usage\n${data.usage}`;
  const contributing = `## Contributing\n${data.contributing}`;
  const test = `## Test Instructions\n${data.test}`;

  const fullMarkdown = `${title}\n\n${tOfC}\n\n${description}\n\n${installation}\n\n${usage}\n\n${contributing}\n\n${test}`;

  fs.appendFile('README.md', fullMarkdown, err =>
    err ? console.error(err) : console.log('\n\tUpdated README\n')
  );

  renderLicenseSection(data.license);
};

module.exports = generateMarkdown;