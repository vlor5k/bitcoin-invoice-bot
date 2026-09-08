if(!process.env.BITCOIN_XPUB) {
    throw new Error("Missing BITCOIN_XPUB in environment");
}

import * as ecc from 'tiny-secp256k1';
import BIP32Factory from 'bip32';
import * as bitcoin from 'bitcoinjs-lib';

const bip32 = BIP32Factory(ecc);

const account = bip32.fromBase58(
    process.env.BITCOIN_XPUB
);

export default function derive(derivation: number) {
    return bitcoin.payments.p2wpkh({
        pubkey: Buffer.from(account.derive(0).derive(derivation).publicKey)
    });
}