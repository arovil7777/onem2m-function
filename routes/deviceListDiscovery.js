const express = require('express');
const http = require('http');
const conf = require('../config/conf');
const options = require('../controller/requestOptions');
const httpRequest = require('../controller/httpRequest');

const router = express.Router();

// 모든 AE 목록 조회
router.get('/AEs', function (req, res) {
    const creator = req.headers['x-m2m-origin'];
    const body = null;

    options.path = '/' + conf.csebasename + '?fu=1&ty=2';
    options.method = 'GET';
    options.headers['Content-Type'] = 'application/json';
    options.headers['X-M2M-Origin'] = creator;

    try {
        httpRequest(res, options, body);
    } catch (e) {
        console.error(e);
    }
});

// 모든 Container 목록 조회
router.get('/CNTs', function (req, res) {
    const creator = req.headers['x-m2m-origin'];
    const body = null;

    options.path = '/' + conf.csebasename + '?fu=1&ty=3';
    options.method = 'GET';
    options.headers['Content-Type'] = 'application/json';
    options.headers['X-M2M-Origin'] = creator;

    try {
        httpRequest(res, options, body);
    } catch (e) {
        console.error(e);
    }
});

// 특정 AE 하위 Container 목록 조회
router.get('/:ae/CNTs', function (req, res) {
    const creator = req.headers['x-m2m-origin'];
    const ae_resourceName = req.params.ae;
    const body = null;

    options.path = '/' + conf.csebasename + '/' + ae_resourceName + '?fu=1&ty=3';
    options.method = 'GET';
    options.headers['Content-Type'] = 'application/json';
    options.headers['X-M2M-Origin'] = creator;

    try {
        httpRequest(res, options, body);
    } catch (e) {
        console.error(e);
    }
});

// 모든 contentInstance 목록 조회 (20개 한정)
router.get('/CINs', function (req, res) {
    const creator = req.headers['x-m2m-origin'];
    const body = null;

    options.path = '/' + conf.csebasename + '?fu=1&ty=4&lim=20';
    options.method = 'GET';
    options.headers['Content-Type'] = 'application/json';
    options.headers['X-M2M-Origin'] = creator;

    try {
        httpRequest(res, options, body);
    } catch (e) {
        console.error(e);
    }
});

module.exports = router;