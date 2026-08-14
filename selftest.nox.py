import os
import sys

import nox

nox.options.error_on_missing_interpreters = True
nox.options.error_on_external_run = True

pythons = {
    "win32": ["3.10", "3.11", "3.12", "3.13", "3.14"],
    "linux": [
        "3.10",
        "3.11",
        "3.12",
        "3.13",
        "3.14",
        "pypy3.9",
        "pypy3.10",
    ],
    "darwin": ["3.10", "3.11", "3.12", "3.13", "3.14", "pypy3.10"],
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
