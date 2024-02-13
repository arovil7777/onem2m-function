const express = require('express');
const conf = require('../config/conf');
const options = require('../controller/requestOptions');
const httpRequest = require('../controller/httpRequest');

const router = express.Router();

// AE 생성 (등록)
router.post('/', function (req, res) {
    const creator = req.headers['x-m2m-origin'];
    const body = {
        "m2m:ae": req.body
    };

    options.path = '/' + conf.csebasename;
    options.method = 'POST';
    options.headers['Content-Type'] = 'application/json;ty=2';
    options.headers['X-M2M-Origin'] = creator;

    try {
        httpRequest(res, options, body);
    } catch (e) {
        console.error(e);
    }
});

// AE 조회
router.get('/:ae', function (req, res) {
    const ae_resourceName = req.params.ae;
    const creator = req.headers['x-m2m-origin'];
    const body = null;

    options.path = '/' + conf.csebasename + '/' + ae_resourceName;
    options.method = 'GET';
    options.headers['Content-Type'] = 'application/json';
    options.headers['X-M2M-Origin'] = creator;

    try {
        httpRequest(res, options, body);
    } catch (e) {
        console.error(e);
    }
});

// AE 수정
router.put('/:ae', function (req, res) {
    const ae_resourceName = req.params.ae;
    const creator = req.headers['x-m2m-origin'];
    const body = {
        "m2m:ae": req.body
    };

    options.path = '/' + conf.csebasename + '/' + ae_resourceName;
    options.method = 'PUT';
    options.headers['Content-Type'] = 'application/json';
    options.headers['X-M2M-Origin'] = creator;

    try {
        httpRequest(res, options, body);
    } catch (e) {
        console.error(e);
    }
});

// AE 삭제
router.delete('/:ae', function (req, res) {
    const ae_resourceName = req.params.ae;
    const creator = req.headers['x-m2m-origin'];
    const body = null;

    options.path = '/' + conf.csebasename + '/' + ae_resourceName;
    options.method = 'DELETE';
    options.headers['Content-Type'] = 'application/json';
    options.headers['X-M2M-Origin'] = creator;

    try {
        httpRequest(res, options, body);
    } catch (e) {
        console.error(e);
    }
});

module.exports = router;