var md5 = require('md5');
var sha1 = require('js-sha1');
var sha256 = require('js-sha256');
const { v4: uuidv4 } = require('uuid');


const cryptoService = () => {
    const getMD5Hash = (password) => {
        const hash = md5(password);
        return hash;
    };

    const getSHA1Hash = (password) => {
        const hash = sha1(password);
        return hash;
    };

    const getSHA256Hash = (password) => {
        const hash = sha256(password);
        return hash;
    };

    const getBase64 = (password) => {
        const b64hash = btoa(password)
        return b64hash;
    }

    const getUUID = () => {
        const id = uuidv4();
        return id;
    }

    return {
        getMD5Hash,
        getSHA1Hash,
        getSHA256Hash,
        getBase64,
        getUUID
    }
}

module.exports = cryptoService;