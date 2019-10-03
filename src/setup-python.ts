import * as core from '@actions/core';
import * as finder from './find-python';
import * as path from 'path';

async function run() {
  try {
    await finder.enableAllPythonVersions();

    const matchersPath = path.join(__dirname, '..', '.github');
    console.log(`##[add-matcher]${path.join(matchersPath, 'python.json')}`);
  } catch (err) {
    core.setFailed(err.message);
  }
}

run();
