import {findAllVersions, find as findVersion} from '@actions/tool-cache';
import {addPath} from '@actions/core';
import {execSync} from 'child_process';
import {symlinkSync} from 'fs'

const IS_WINDOWS = process.platform === 'win32';

const allCPythonVersions = findAllVersions('Python');
const allPyPyVersions = findAllVersions('PyPy');

console.log(allCPythonVersions, allPyPyVersions);

for (const version of allPyPyVersions) {
  const root = findVersion('PyPy', version);
  console.log(root);
  addPath(`${root}/bin`);
  if (/2\./.exec(version)){
    symlinkSync(`${root}/bin/pypy2`, `${root}/bin/pypy`)
  }
}

for (const version of allCPythonVersions) {
  console.log(version);
  const root = findVersion('Python', version);
  console.log(root);
  if (IS_WINDOWS) {
    addPath(`${root}\Scripts`);
  } else {
    addPath(`${root}/bin`);
  }
}

const NOX_PYTHON_VERSION = allCPythonVersions[allCPythonVersions.length - 1];

const [_, NOX_MAJOR, NOX_MINOR] = /^(\d+)\.(\d+)/.exec(NOX_PYTHON_VERSION)!;

console.log(process.platform);
const localBinPath = {
  darwin: '/Users/runner/.local/bin',
  linux: '/home/runner/.local/bin',
  win32: `C:\Users\runneradmin\AppData\Roaming\Python\Python${NOX_MAJOR}${NOX_MINOR}\Scripts`
}[process.platform as 'darwin' | 'linux' | 'win32'];
const pipPath =
  findVersion('Python', NOX_PYTHON_VERSION) +
  (IS_WINDOWS ? '\\Scripts\\pip' : '/bin/pip');

addPath(localBinPath);
execSync(`${pipPath} install --user nox`);
