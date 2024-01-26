# hexseed-from-address

Decrypts the hexseed of a Dilithium5 QRL Zond address from the wallet file

## Requirements

- NodeJS / NPM

## Install

- `npm i -g @theqrl/hexseed-from-address`

## Usage

- `hexseed-from-address -p <password> -a <address> -d <path to gzonddata folder>`

Where:

`<password>` is the password used to encrypt the keystore file
`<address>` is the target address
`<path>` is the location of the gzonddata folder, e.g. `/home/qrl/gzonddata`
