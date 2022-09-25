const express = require('express');
const http = require('http');
const conf = require('../config/conf');
const options = require('../controller/requestOptions');
const httpRequest = require('../controller/httpRequest');
// const bodies = require('../controller/oneM2MBodies');

const router = express.Router();

// ContentInstance 생성 (등록)
router.post('/:ae/:cnt', function (req, res) {
    const ae_resourceName = req.params.ae;
    const cnt_resourceName = req.params.cnt;
    const creator = req.headers['x-m2m-origin'];
    // const body = bodies(req, 'cinCreate');
    const body = {
        "m2m:cin": req.body
    };

    options.path = '/' + conf.csebasename + '/' + ae_resourceName + '/' + cnt_resourceName;
    options.method = 'POST';
    options.headers['Content-Type'] = 'application/json;ty=4';
    options.headers['X-M2M-Origin'] = creator;

    try {
        httpRequest(res, options, body);
    } catch (e) {
        console.error(e);
    }
});

// ContentInstance 조회
router.get('/:ae/:cnt/:cin', function (req, res) {
    const ae_resourceName = req.params.ae;
    const cnt_resourceName = req.params.cnt;
    const cin_resourceName = req.params.cin;
    const creator = req.headers['x-m2m-origin'];
    const body = null;

    options.path = '/' + conf.csebasename + '/' + ae_resourceName + '/' + cnt_resourceName + '/' + cin_resourceName;
    options.method = 'GET';
    options.headers['Content-Type'] = 'application/json';
    options.headers['X-M2M-Origin'] = creator;

    try {
        httpRequest(res, options, body);
    } catch (e) {
        console.error(e);
    }
});

// 가장 최신 ContentInstance 조회
router.get('/:ae/:cnt/latest', function (req, res) {
    const ae_resourceName = req.params.ae;
    const cnt_resourceName = req.params.cnt;
    const cin_resourceName = req.params.cin;
    const creator = req.headers['x-m2m-origin'];
    const body = null;

    options.path = '/' + conf.csebasename + '/' + ae_resourceName + '/' + cnt_resourceName + '/' + cin_resourceName + '/la';
    options.method = 'GET';
    options.headers['Content-Type'] = 'application/json';
    options.headers['X-M2M-Origin'] = creator;

    try {
        httpRequest(res, options, body);
    } catch (e) {
        console.error(e);
    }
});

// 가장 과거 ContentInstance 조회
router.get('/:ae/:cnt/oldest', function (req, res) {
    const ae_resourceName = req.params.ae;
    const cnt_resourceName = req.params.cnt;
    const cin_resourceName = req.params.cin;
    const creator = req.headers['x-m2m-origin'];
    const body = null;

    options.path = '/' + conf.csebasename + '/' + ae_resourceName + '/' + cnt_resourceName + '/' + cin_resourceName + '/ol';
    options.method = 'GET';
    options.headers['Content-Type'] = 'application/json';
    options.headers['X-M2M-Origin'] = creator;

    try {
        httpRequest(res, options, body);
    } catch (e) {
        console.error(e);
    }
});

// ContentInstance 삭제
router.delete('/:ae/:cnt/:cin', function (req, res) {
    const ae_resourceName = req.params.ae;
    const cnt_resourceName = req.params.cnt;
    const cin_resourceName = req.params.cin;
    const creator = req.headers['x-m2m-origin'];
    const body = null;

    options.path = '/' + conf.csebasename + '/' + ae_resourceName + '/' + cnt_resourceName + '/' + cin_resourceName;
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