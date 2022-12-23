var md5 = require('md5');
var sha1 = require('js-sha1');
var sha256 = require('js-sha256');


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

    return {
        getMD5Hash,
        getSHA1Hash,
        getSHA256Hash
    }
}

module.exports = cryptoService;