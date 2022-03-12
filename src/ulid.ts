// Copyright 2021-2022 Shopopop. All rights reserved. ISC license.

import { randomBytes } from 'crypto'

const base32Alphabet = '0123456789ABCDEFGHJKMNPQRSTUVWXZ' // Crockord's base32 https://datatracker.ietf.org/doc/html/rfc4648#section-7
const base32AlphabetLen = base32Alphabet.length

export type Monotonic = (seedTimeInMs?: number) => string

export function encodeTime (timeInMs: number, len: number = 10): string {
  let mod: number
  let str: string = ''

  // MSB len
  for (let currentLen = len; currentLen > 0; currentLen--) {
    mod = timeInMs % base32AlphabetLen
    str = base32Alphabet.charAt(mod) + str
    timeInMs = (timeInMs - mod) / base32AlphabetLen
  }

  return str
}

/**
 * Pseudorandom number generator
 */
export function prng (): number {
  // random between 0 to 1 (random on 8 bits 0 -255)
  return randomBytes(1).readUInt8() / 0xff
}

export function randomChar (): string {
  let rand = Math.floor(prng() * base32AlphabetLen)

  if (rand === base32AlphabetLen) {
    rand = base32AlphabetLen - 1
  }

  return base32Alphabet.charAt(rand)
}

export function encodeRandom (len: number = 16): string {
  let str: string = ''

  for (; len > 0; len--) {
    str = randomChar() + str
  }

  return str
}

export function replaceChar (chars: string[]): string[] {
  let [current, ...tail] = chars
  let ret: string[]

  const indexChar = base32Alphabet.indexOf(current)

  if (indexChar >= base32AlphabetLen - 1) {
    const recursive = replaceChar(tail)

    current = base32Alphabet[0]

    ret = chars.length > 1 ? [...recursive, ...current] : recursive
  } else {
    current = base32Alphabet[indexChar + 1]
    ret = [...current, ...tail]
  }

  return ret
}

export function incrementBase32 (str: string): string {
  const chars = str.split('').reverse()

  return replaceChar(chars).reverse().join('')
}
/**
 *
 * @returns
 *
 * ```ts
 * import { monotonic } from '@stephen-shopopop/ulid'
 * const ulid = monotonic()
 *
 * ulid() // 01FWXNVK9DWNT24RR10X35F3KZ
 *
 * ulid(1646295334605) // 01FWXNVK9D0WNT24RR10X35F3M
 * ulid(1646295334605) // 01FWXNVK9D0WNT24RR10X35F3N
 * ```
 */
export function monotonic (): Monotonic {
  let lastTime: number = 0
  let lastRandom: string

  return function (seedTimeInMs: number = Date.now()): string {
    if (seedTimeInMs > 0 && seedTimeInMs <= lastTime) {
      const incrementedRandom = (lastRandom = incrementBase32(lastRandom))

      return encodeTime(lastTime) + incrementedRandom
    }

    lastTime = seedTimeInMs
    const newRandom = (lastRandom = encodeRandom())

    return encodeTime(seedTimeInMs) + newRandom
  }
}

/**
 *
 * @param {number} seedTimeInMs
 * @returns {string}
 *
 * ```ts
 * import { ulid } from '@stephen-shopopop/ulid'
 *
 * ulid()              // 01FWXNVK9D74QMWTXZ0HHTWVPK
 * ulid(1646295334605) // 01FW7DJFPDWNT24RR10X35F3KZ
 * ```
 */
export function ulid (seedTimeInMs: number = Date.now()): string {
  return encodeTime(seedTimeInMs) + encodeRandom()
}
