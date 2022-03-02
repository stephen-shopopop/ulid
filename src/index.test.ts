import { describe, expect, test } from '@jest/globals'
import { hello } from './index'

describe('[index/hello] hello()', () => {
  test.each`
    string | expected
    ${'Shopopop'} | ${'hello Shopopop'}
  `('returns $expected when hello $string', ({ string, expected }) => {
    expect(hello(string)).toEqual(expected)
  })
})
