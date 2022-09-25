const express = require('express');
const http = require('http');
const conf = require('../config/conf');
const options = require('../controller/requestOptions');
const httpRequest = require('../controller/httpRequest');

const router = express.Router();

// Firmware 등록
router.post('/:nod', function (req, res) {
    const nod_resourceName = req.params.nod;
    const creator = req.headers['x-m2m-origin'];
    const body = {
        "m2m:fwr": req.body
    };

    options.path = '/' + conf.csebasename + '/' + nod_resourceName;
    options.method = 'POST';
    options.headers['Content-Type'] = 'application/json;ty=13';
    options.headers['X-M2M-Origin'] = creator;

    try {
        httpRequest(res, options, body);
    } catch (e) {
        console.error(e);
    }
});

// Firmware 조회
router.get('/:nod/:fwr', function (req, res) {
    const nod_resourceName = req.params.nod;
    const fwr_resourceName = req.params.fwr;
    const creator = req.headers['x-m2m-origin'];
    const body = null;

    options.path = '/' + conf.csebasename + '/' + nod_resourceName + '/' + fwr_resourceName;
    options.method = 'GET';
    options.headers['Content-Type'] = 'application/json';
    options.headers['X-M2M-Origin'] = creator;

    try {
        httpRequest(res, options, body);
    } catch (e) {
        console.error(e);
    }
});

// Firmware 수정 (업데이트)
router.put('/:nod/:fwr', function (req, res) {
    const nod_resourceName = req.params.nod;
    const fwr_resourceName = req.params.fwr;
    const creator = req.headers['x-m2m-origin'];
    const body = {
        "m2m:fwr": req.body
    };

    options.path = '/' + conf.csebasename + '/' + nod_resourceName + '/' + fwr_resourceName;
    options.method = 'PUT';
    options.headers['Content-Type'] = 'application/json';
    options.headers['X-M2M-Origin'] = creator;

    try {
        httpRequest(res, options, body);
    } catch (e) {
        console.error(e);
    }
});

// Firmware 삭제
router.delete('/:nod/:fwr', function (req, res) {
    const nod_resourceName = req.params.nod;
    const fwr_resourceName = req.params.fwr;
    const creator = req.headers['x-m2m-origin'];
    const body = null;

    options.path = '/' + conf.csebasename + '/' + nod_resourceName + '/' + fwr_resourceName;
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