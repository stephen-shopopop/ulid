// Copyright 2021-2022 Shopopop. All rights reserved. ISC license.
import { randomBytes } from 'crypto'

// Crockord's base32
const encoding = '0123456789ABCDEFGHJKMNPQRSTUVWXZ'
const encodingLength = encoding.length

export function encodeTime (now: number, len: number = 10): string {
  let mod: number
  let str: string = ''

  for (let currentLen = len; currentLen > 0; currentLen--) {
    mod = now % encodingLength
    str = encoding.charAt(mod) + str
    now = (now - mod) / encodingLength
  }

  return str
}

export function randomChar (): string {
  const prng = (): number => randomBytes(1).readUInt8() / 0xff

  let rand = Math.floor(prng() * encodingLength)
  if (rand === encodingLength) {
    rand = encodingLength - 1
  }

  return encoding.charAt(rand)
}

export function encodeRandom (len = 16): string {
  let str: string = ''

  for (; len > 0; len--) {
    str = randomChar() + str
  }

  return str
}

export function ulid (now: number = Date.now()): string {
  return encodeTime(now) + encodeRandom()
}
