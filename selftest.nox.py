import nox
import sys
import os

nox.options.error_on_missing_interpreters = True
nox.options.error_on_external_run = True

pythons = ['2.7', '3.5', '3.6', '3.7', '3.8', 'pypy2', 'pypy3'] if sys.platform != "win32" else ['2.7', '3.5', '3.6', '3.7', '3.8']

@nox.session(python=pythons)
def tests(session):
    print(os.environ['PATH'])
    python = session.python
    if python.startswith('pypy'):
        python = python[4:]
    session.run(
        'python',
        '-c', 
        f'''
import sys
print(sys.version)
assert sys.version.startswith("{python}")
''')