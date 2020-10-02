import {findAllVersions, find as findVersion} from '@actions/tool-cache';
import {addPath} from '@actions/core';
import {execSync} from 'child_process';

const IS_WINDOWS = process.platform === 'win32';

const allCPythonVersions = findAllVersions('Python');
const allPyPyVersions = findAllVersions('PyPy');

console.log(allCPythonVersions, allPyPyVersions);

for (const version in allCPythonVersions) {
  const root = findVersion('Python', version);
  console.log(root);
  if (IS_WINDOWS) {
    addPath(`${root}\Scripts`);
  } else {
    addPath(`${root}/bin`);
  }
}

for (const version in allPyPyVersions) {
  const root = findVersion('PyPy', version);
  console.log(root);
  addPath(`${root}/bin`);
}

execSync('pip install --user nox');
