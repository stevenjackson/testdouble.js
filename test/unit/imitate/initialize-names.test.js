import subject from '../../../src/imitate/initialize-names'

module.exports = {
  'passed a non-null names': () => {
    assert.equal(subject(null, 'foo'), 'foo')
  },
  'an array type': () => {
    assert.deepEqual(subject(['lol']), [])
  },
  'an arguments type': () => {
    let args = (function () { return arguments })(1,2,3)
    assert.deepEqual(subject(args), [])
  },
  'an anon function': () => {
    assert.deepEqual(subject(function () {}), [])
  },
  'a named function': () => {
    assert.deepEqual(subject(function blah () {}), ['blah'])
  },
  'a plain object': () => {
    assert.deepEqual(subject({}), [])
  }
}