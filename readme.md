<p align="center">
    <img src="./shopopop.png"
        height="130">
</p>

[![Minimal node version](https://img.shields.io/static/v1?label=node&message=%3E=14.16&logo=node.js&color)](https://nodejs.org/about/releases/)
[![Minimal npm version](https://img.shields.io/static/v1?label=npm&message=%3E=6.14.12&logo=npm&color)](https://github.com/npm/cli/releases)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)
[![Linux](https://svgshare.com/i/Zhy.svg)](https://svgshare.com/i/Zhy.svg)
[![macOS](https://svgshare.com/i/ZjP.svg)](https://svgshare.com/i/ZjP.svg)
[![Visual Studio Code](https://img.shields.io/badge/--007ACC?logo=visual%20studio%20code&logoColor=ffffff)](https://code.visualstudio.com/)

# Generate ULID

```
   01AN4Z07BY      79KA1307SR9X4MV3
  |----------|    |----------------|
  Timestamp           Entropy
    10 chars           16 chars
    48bits             80bits
    base32             base32
```

## Description

Generate ULID

- Is compatible with UUID/GUID's
- 1.21e+24 unique ULIDs per millisecond (1,208,925,819,614,629,174,706,176 to be exact)
- Lexicographically sortable
- Canonically encoded as a 26 character string, as opposed to the 36 character UUID
- Uses Crockford's base32 for better efficiency and readability (5 bits per character)
- Case insensitive
- No special characters (URL safe)

### NODEJS

[![Minimal node version](https://img.shields.io/static/v1?label=node&message=%3E=12&logo=node.js&color)](https://nodejs.org/about/releases/)

## Installation

Add .npmrc in your repository

```.npmrc
@stephen-shopopop:registry=https://npm.pkg.github.com
```

```bash
npm install @stephen-shopopop/ulid@1.1.1
```

## Usage

```bash
import { ulid } from "@stephen-shopopop/ulid"

ulid()
```

## Contributing

1. npm run build -  Build library.
2. npm run start - start project
3. npm run test - Run test with jest.
4. npm run lint - Lint your code.
5. npm run lint:fix - Lint & fix your code.
6. npm run typecheck - Run typescript check.
7. npm run doc - Generate html doc.
8. npm run release - Release library
9. npm run fix - Fix library
