# esolangs-cli [![Build Status](https://travis-ci.org/k4m4/esolangs-cli.svg?branch=master)](https://travis-ci.org/k4m4/esolangs-cli)

> Detect and execute esoteric programming language code, right from your terminal.

---

## Install

```
~ ❯❯❯ npm install -g esolangs-cli
```


## Usage

```
~ ❯❯❯ esolangs --help

  Detect and execute esoteric programming language code, right from your terminal.

  Usage
    ~ ❯❯❯ esolangs <string>
    ~ ❯❯❯ echo <string> | esolangs
    ~ ❯❯❯ cat <file> | esolangs
  Options
    -p, --plain   Display output without log symbols
  Example
    ~ ❯❯❯ esolangs '++++++++++[>+>+++>+++++++>++++++++++<<<<-]>>>>---.+++.+++++++++.----.+++++.'
    ✔ admin
```


## Supported Esoteric Programming Languages

- [`brainf*ck`](https://esolangs.org/wiki/brainfuck)
- [`ook!`](https://esolangs.org/wiki/ook!)
- [`pikalang`](https://esolangs.org/wiki/pikalang)
- [`solbofuck`](https://esolangs.org/wiki/solbofuck)
- [`triplet`](https://esolangs.org/wiki/triplet)


## Related

- [esolangs](https://github.com/k4m4/esolangs) - API for this module


## License

MIT © [Nikolaos Kamarinakis](https://nikolaskama.me)
