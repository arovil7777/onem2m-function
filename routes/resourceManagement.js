const express = require('express');
const http = require('http');
const conf = require('../config/conf');
const options = require('../controller/requestOptions');
const httpRequest = require('../controller/httpRequest');
// const bodies = require('../controller/oneM2MBodies');

const router = express.Router();

// Container 생성 (등록)
router.post('/:ae', function (req, res) {
    const ae_resourceName = req.params.ae;
    const creator = req.headers['x-m2m-origin'];
    // const body = bodies(req, 'cntCreate');
    const body = {
        "m2m:cnt": req.body
    };

    options.path = '/' + conf.csebasename + '/' + ae_resourceName;
    options.method = 'POST';
    options.headers['Content-Type'] = 'application/json;ty=3';
    options.headers['X-M2M-Origin'] = creator;

    try {
        httpRequest(res, options, body);
    } catch (e) {
        console.error(e);
    }
});

// Container 조회
router.get('/:ae/:cnt', function (req, res) {
    const ae_resourceName = req.params.ae;
    const cnt_resourceName = req.params.cnt;
    const creator = req.headers['x-m2m-origin'];
    const body = null;

    options.path = '/' + conf.csebasename + '/' + ae_resourceName + '/' + cnt_resourceName;
    options.method = 'GET';
    options.headers['Content-Type'] = 'application/json';
    options.headers['X-M2M-Origin'] = creator;

    try {
        httpRequest(res, options, body);
    } catch (e) {
        console.error(e);
    }
});

// Container 수정
router.put('/:ae/:cnt', function (req, res) {
    const ae_resourceName = req.params.ae;
    const cnt_resourceName = req.params.cnt;
    const creator = req.headers['x-m2m-origin'];
    // const body = bodies(req, 'cntUpdate');
    const body = {
        "m2m:cnt": req.body
    };

    options.path = '/' + conf.csebasename + '/' + ae_resourceName + '/' + cnt_resourceName;
    options.method = 'PUT';
    options.headers['Content-Type'] = 'application/json;ty=3';
    options.headers['X-M2M-Origin'] = creator;

    try {
        httpRequest(res, options, body);
    } catch (e) {
        console.error(e);
    }
});

// Container 삭제
router.delete('/:ae/:cnt', function (req, res) {
    const ae_resourceName = req.params.ae;
    const cnt_resourceName = req.params.cnt;
    const creator = req.headers['x-m2m-origin'];
    const body = null;

    options.path = '/' + conf.csebasename + '/' + ae_resourceName + '/' + cnt_resourceName;
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