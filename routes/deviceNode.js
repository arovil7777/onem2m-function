const express = require('express');
const http = require('http');
const conf = require('../config/conf');
const options = require('../controller/requestOptions');
const httpRequest = require('../controller/httpRequest');

const router = express.Router();

// Node 등록
router.post('/', function (req, res) {
    const creator = req.headers['x-m2m-origin'];
    const body = {
        "m2m:nod": req.body
    };

    options.path = '/' + conf.csebasename;
    options.method = 'POST';
    options.headers['Content-Type'] = 'application/json;ty=14';
    options.headers['X-M2M-Origin'] = creator;

    try {
        httpRequest(res, options, body);
    } catch (e) {
        console.error(e);
    }
});

// Node 조회
router.get('/:nod', function (req, res) {
    const nod_resourceName = req.params.nod;
    const creator = req.headers['x-m2m-origin'];
    const body = null;

    options.path = '/' + conf.csebasename + '/' + nod_resourceName;
    options.method = 'GET';
    options.headers['Content-Type'] = 'application/json';
    options.headers['X-M2M-Origin'] = creator;

    try {
        httpRequest(res, options, body);
    } catch (e) {
        console.error(e);
    }
});

// Node 수정
router.put('/:nod', function (req, res) {
    const nod_resourceName = req.params.nod;
    const creator = req.headers['x-m2m-origin'];
    const body = {
        "m2m:nod": req.body
    };

    options.path = '/' + conf.csebasename + '/' + nod_resourceName;
    options.method = 'PUT';
    options.headers['Content-Type'] = 'application/json';
    options.headers['X-M2M-Origin'] = creator;

    try {
        httpRequest(res, options, body);
    } catch (e) {
        console.error(e);
    }
});

// Node 삭제
router.delete('/:nod', function (req, res) {
    const nod_resourceName = req.params.nod;
    const creator = req.headers['x-m2m-origin'];
    const body = null;

    options.path = '/' + conf.csebasename + '/' + nod_resourceName;
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