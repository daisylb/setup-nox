import os
import sys

import nox

nox.options.error_on_missing_interpreters = True
nox.options.error_on_external_run = True

pythons = {
    "win32": ["3.7", "3.8", "3.9", "3.10"],
    "linux": [
        "2.7",
        "3.6",
        "3.7",
        "3.8",
        "3.9",
        "3.10",
        "pypy2.7",
        "pypy3.6",
        "pypy3.7",
        "pypy3.8",
        "pypy3.9",
    ],
    "darwin": ["3.7", "3.8", "3.9", "3.10", "pypy2.7", "pypy3.7", "pypy3.8", "pypy3.9"],
}[sys.platform]


@nox.session(python=pythons)
def tests(session):
    print(os.environ["PATH"])
    python = session.python
    if python.startswith("pypy"):
        python = python[4:]
    session.run(
        "python",
        "-c",
        f"""
import sys
print(sys.version)
assert sys.version.startswith("{python}")
""",
    )
