import { findAllVersions, find as findVersion } from "@actions/tool-cache"
import { addPath } from "@actions/core"
import { execSync } from "child_process"
import { symlinkSync, readdirSync, readdir, existsSync } from "fs"

//function installPythonVersion(type: "Python" | "PyPy")

const IS_WINDOWS = process.platform === "win32"

const allCPythonVersions = findAllVersions("Python")
const allPyPyVersions = findAllVersions("PyPy")

console.log("Available CPython versions:", allCPythonVersions)
console.log("Available PyPy versions:", allPyPyVersions)

function symlinkIfNotExistsSync(target: string, link: string) {
  if (!existsSync(link)) symlinkSync(target, link)
}

for (const version of allPyPyVersions) {
  const root = findVersion("PyPy", version)
  addPath(`${root}/bin`)
  if (/^2\./.test(version)) {
    let minorVersion = /^2\.\d+/.exec(version)![0]
    symlinkIfNotExistsSync(`${root}/bin/pypy`, `${root}/bin/pypy2`)
    symlinkIfNotExistsSync(
      `${root}/bin/pypy`,
      `${root}/bin/pypy${minorVersion}`,
    )
  }
}

for (const version of allCPythonVersions) {
  const root = findVersion("Python", version)
  if (IS_WINDOWS) {
    addPath(root)
    addPath(`${root}\\Scripts`)
  } else {
    addPath(`${root}/bin`)
  }
}

const NOX_PYTHON_VERSION = allCPythonVersions[allCPythonVersions.length - 1]
console.log("Nox itself will be installed using", NOX_PYTHON_VERSION)
const NOX_PYTHON_PATH =
  findVersion("Python", NOX_PYTHON_VERSION) +
  (IS_WINDOWS ? "\\python.exe" : "/bin/python")

const NOX_BIN_PATH = execSync(
  `${NOX_PYTHON_PATH} -c "import os, sysconfig; print(sysconfig.get_path('scripts', f'{os.name}_user'))"`,
)
  .toString()
  .trim()

addPath(NOX_BIN_PATH)
execSync(`${NOX_PYTHON_PATH} -m pip install --user nox`)
