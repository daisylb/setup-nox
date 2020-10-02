import {findAllVersions} from '@actions/tool-cache';

const allCPythonVersions = findAllVersions('Python');
const allPyPyVersions = findAllVersions('PyPy');

console.log(allCPythonVersions, allPyPyVersions);
