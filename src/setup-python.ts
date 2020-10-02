import {findAllVersions, find as findVersion} from '@actions/tool-cache';

const allCPythonVersions = findAllVersions('Python');
const allPyPyVersions = findAllVersions('PyPy');

console.log(allCPythonVersions, allPyPyVersions);

for (const version in allCPythonVersions) {
  const versionInfo = findVersion('Python', version);
  console.log(versionInfo);
}

for (const version in allPyPyVersions) {
  const versionInfo = findVersion('PyPy', version);
  console.log(versionInfo);
}
