// Copyright 2021-2022 Shopopop. All rights reserved. ISC license.
import { randomBytes } from 'crypto'

const base32Alphabet = '0123456789ABCDEFGHJKMNPQRSTUVWXZ' // Crockord's base32 https://datatracker.ietf.org/doc/html/rfc4648#section-7
const base32AlphabetLen = base32Alphabet.length

export function encodeTime (timeInMs: number): string {
  let mod: number
  let str: string = ''

  // MSB len 10
  for (let currentLen = 10; currentLen > 0; currentLen--) {
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
  return randomBytes(1).readUInt8() / 0xff
}

export function randomChar (): string {
  let rand = Math.floor(prng() * base32AlphabetLen)

  if (rand === base32AlphabetLen) {
    rand = base32AlphabetLen - 1
  }

  return base32Alphabet.charAt(rand)
}

export function encodeRandom (len = 16): string {
  let str: string = ''

  for (; len > 0; len--) {
    str = randomChar() + str
  }

  return str
}

export function ulid (seedTimeInMs: number = Date.now()): string {
  return encodeTime(seedTimeInMs) + encodeRandom()
}
