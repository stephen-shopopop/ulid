import { describe, expect, test } from '@jest/globals'
import { ulid } from './index'

describe('[index/ulid] generate ulid()', () => {
  test.each`
    timestamp | expected
    ${Date.now()} | ${4}
  `('returns $expected when ulid $timestamp', ({ timestamp, expected }) => {
    expect(ulid(timestamp)).not.toEqual(expect)
  })
})
