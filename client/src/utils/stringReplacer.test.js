import stringReplacer from './stringReplacer'

describe('stringReplacer()', () => {
  it('replaces a string according to a template', () => {
    const inputString = 'howdy, earth!'
    const outputTemplate = 'hello, world!'
    expect(stringReplacer(outputTemplate, inputString)).toBe('hello, world!')
  })
  it('handles input shorter than template', () => {
    const inputString = 'hi, earth!'
    const outputTemplate = 'hello, world!'
    expect(stringReplacer(outputTemplate, inputString)).toBe('hello, wor')
  })
  it('handles input longer than template', () => {
    const inputString = 'hello, world!'
    const outputTemplate = 'hi, earth!'
    expect(stringReplacer(outputTemplate, inputString)).toBe('hi, earth!')
  })
})
