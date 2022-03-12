import { describe, expect, test } from '@jest/globals'
import {
  ulid,
  encodeTime,
  prng,
  randomChar,
  encodeRandom,
  replaceChar,
  incrementBase32,
  monotonic
} from './ulid'

const base32Alphabet = '0123456789ABCDEFGHJKMNPQRSTUVWXZ'.split('')

describe('[ulid] generate ulid()', () => {
  test.each`
    timestamp | expected
    ${Date.now()} | ${26}
  `('returns ULID with len $expected when ulid $timestamp', ({ timestamp, expected }) => {
    expect(ulid(timestamp).length).toEqual(expected)
  })
})

describe('[ulid/encodeTime] encodeTime()', () => {
  test.each`
    timestamp | expected
    ${1646295334605} | ${'01FW7DJFPD'}
  `('returns $expected when encodeTime $timestamp', ({ timestamp, expected }) => {
    expect(encodeTime(timestamp)).toEqual(expected)
  })
})

describe('[ulid/encodeTime] encodeTime()', () => {
  test.each`
    timestamp | expected
    ${0} | ${'0000000000'}
  `('returns $expected when encodeTime $timestamp', ({ timestamp, expected }) => {
    expect(encodeTime(timestamp)).toEqual(expected)
  })
})

describe('[ulid/prng] prng()', () => {
  test('prng must be < 1', () => {
    for (let i = 0; i < 10000; i++) {
      const rand = prng()

      expect(rand <= 1).toBeTruthy()
    }
  })
})

describe('[ulid/randomChar] randomChar()', () => {
  test('randomChar generate un alphabet base 32', () => {
    const rand = randomChar()

    expect(base32Alphabet.includes(rand)).toBeTruthy()
  })
})

describe('[ulid/encodeRandom] encodeRandom()', () => {
  test('encodeRandom generate un alphabet base 32 with len 16', () => {
    const rand = encodeRandom()

    expect(rand.length).toEqual(16)
  })
})

describe('[ulid/encodeRandom] encodeRandom()', () => {
  test('encodeRandom generate un alphabet base 32 with len 32', () => {
    const rand = encodeRandom(32)

    expect(rand.length).toEqual(32)
  })
})

describe('[ulid/replaceChar] replaceChar()', () => {
  test.each`
    chars | expected
    ${['Z']} | ${['0']}
    ${['X', 'A']} | ${['Z', 'A']}
    ${['Y']} | ${['0']}
  `('returns $expected when $chars replaceChar', ({ chars, expected }) => {
    expect(replaceChar(chars)).toEqual(expected)
  })
})

describe('[ulid/incrementBase32] incrementBase32()', () => {
  test.each`
    string | expected
    ${'Z'} | ${'0'}
    ${'AX'} | ${'AZ'}
    ${'Y'} | ${'0'}
  `('returns $expected when $string incrementBase32', ({ string, expected }) => {
    expect(incrementBase32(string)).toEqual(expected)
  })
})

describe('[ulid/monotonic] monotonic()', () => {
  test.each`
    monotonic | expected
    ${monotonic()()} | ${26}
    ${monotonic()(1646295334605)} | ${26}
    ${monotonic()(5)} | ${26}
  `('returns ULID with len $expected when monotonic $monotonic', ({ monotonic, expected }) => {
    expect(monotonic.length).toEqual(expected)
  })

  const monotonicUlid = monotonic()
  test.each`
    monotonic | expected
    ${monotonicUlid(0)} | ${26}
    ${monotonicUlid()} | ${26}
    ${monotonicUlid(1646295334605)} | ${26}
    ${monotonicUlid(1646295334605)} | ${26}
  `('returns ULID with len $expected when monotonic $monotonic', ({ monotonic, expected }) => {
    expect(monotonic.length).toEqual(expected)
  })
})
