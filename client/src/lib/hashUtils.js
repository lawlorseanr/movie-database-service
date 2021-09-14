import crypto from 'crypto-js';

/*
===============================================
Add any hashing utility functions below
===============================================
*/

/** @module hashUtils */

/**
 * Creates a hash using the sha256 algorithm. The salt is optional.
 * @param {string} data - The data to hash.
 * @returns {string} A string with the hashed value.
 */
const createHash = (data) => crypto.SHA256(data).toString(crypto.enc.Hex);

export default createHash;
