import { findAllVersions, find as findVersion } from "@actions/tool-cache"
import { addPath } from "@actions/core"
import { execSync } from "child_process"
import { symlinkSync, readdirSync } from "fs"

//function installPythonVersion(type: "Python" | "PyPy")

const IS_WINDOWS = process.platform === "win32"

const allCPythonVersions = findAllVersions("Python")
const allPyPyVersions = findAllVersions("PyPy")

console.log(allCPythonVersions, allPyPyVersions)

for (const version of allPyPyVersions) {
  const root = findVersion("PyPy", version)
  console.log(root)
  addPath(`${root}/bin`)
  if (/2\./.exec(version)) {
    symlinkSync(`${root}/bin/pypy`, `${root}/bin/pypy2`)
  }
}

for (const version of allCPythonVersions) {
  console.log(version)
  const root = findVersion("Python", version)
  console.log(root)
  console.log("root dir contents", readdirSync(root))
  if (IS_WINDOWS) {
    addPath(`${root}\\Scripts`)
  } else {
    addPath(`${root}/bin`)
  }
}

const NOX_PYTHON_VERSION = allCPythonVersions[allCPythonVersions.length - 1]
const NOX_PYTHON_PATH =
  findVersion("Python", NOX_PYTHON_VERSION) +
  (IS_WINDOWS ? "\\Scripts\\python" : "/bin/python")

const NOX_BIN_PATH = execSync(
  `${NOX_PYTHON_PATH} -c "import os, sysconfig; print(sysconfig.get_path('scripts', f'{os.name}_user'))"`,
)
  .toString()
  .trim()

addPath(NOX_BIN_PATH)
execSync(`${NOX_PYTHON_PATH} -m pip install --user nox`)
