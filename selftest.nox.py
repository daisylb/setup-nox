import nox

nox.options.error_on_missing_interpreters = True
nox.options.error_on_external_run = True

@nox.session(python=['2.7', '3.5', '3.6', '3.7', 'pypy', 'pypy3'])
def tests(session):
    python = session.python
    if python == 'pypy':
        python = '2'
    if python == 'pypy3':
        python = '3'
    session.run(
        'python',
        '-c', 
        f'''
import sys
print(sys.version)
assert sys.version.startswith("{python}")
''')