const express = require('express');
const conf = require('../config/conf');
const options = require('../controller/requestOptions');
const httpRequest = require('../controller/httpRequest');

const router = express.Router();

// Group 생성
router.post('/:ae', function (req, res) {
    const ae_resourceName = req.params.ae;
    const creator = req.headers['x-m2m-origin'];
    const body = {
        "m2m:grp": req.body
    };

    options.path = '/' + conf.csebasename + '/' + ae_resourceName;
    options.method = 'POST';
    options.headers['Content-Type'] = 'application/json;ty=9';
    options.headers['X-M2M-Origin'] = creator;

    try {
        httpRequest(res, options, body);
    } catch (e) {
        console.error(e);
    }
});

// Group 조회
router.get('/:ae/:grp', function (req, res) {
    const ae_resourceName = req.params.ae;
    const grp_resourceName = req.params.grp;
    const creator = req.headers['x-m2m-origin'];
    const body = null;

    options.path = '/' + conf.csebasename + '/' + ae_resourceName + '/' + grp_resourceName;
    options.method = 'GET';
    options.headers['Content-Type'] = 'application/json';
    options.headers['X-M2M-Origin'] = creator;

    try {
        httpRequest(res, options, body);
    } catch (e) {
        console.error(e);
    }
});

// Group 멤버 조회
router.get('/:ae/:grp/data', function (req, res) {
    const ae_resourceName = req.params.ae;
    const grp_resourceName = req.params.grp;
    const creator = req.headers['x-m2m-origin'];
    const body = null;

    options.path = '/' + conf.csebasename + '/' + ae_resourceName + '/' + grp_resourceName + '/fopt';
    options.method = 'GET';
    options.headers['Content-Type'] = 'application/json';
    options.headers['X-M2M-Origin'] = creator;

    try {
        httpRequest(res, options, body);
    } catch (e) {
        console.error(e);
    }
});

// Group 멤버의 CIN 생성 (데이터 제어)
router.post('/:ae/:grp/data', function (req, res) {
    const ae_resourceName = req.params.ae;
    const grp_resourceName = req.params.grp;
    const creator = req.headers['x-m2m-origin'];
    const body = {
        "m2m:cin": req.body
    };

    options.path = '/' + conf.csebasename + '/' + ae_resourceName + '/' + grp_resourceName + '/fopt';
    options.method = 'POST';
    options.headers['Content-Type'] = 'application/json;ty=4';
    options.headers['X-M2M-Origin'] = creator;

    try {
        httpRequest(res, options, body);
    } catch (e) {
        console.error(e);
    }
});

// Group 수정
router.put('/:ae/:grp', function (req, res) {
    const ae_resourceName = req.params.ae;
    const grp_resourceName = req.params.grp;
    const creator = req.headers['x-m2m-origin'];
    const body = {
        "m2m:grp": req.body
    };

    options.path = '/' + conf.csebasename + '/' + ae_resourceName + '/' + grp_resourceName;
    options.method = 'PUT';
    options.headers['Content-Type'] = 'application/json';
    options.headers['X-M2M-Origin'] = creator;

    try {
        httpRequest(res, options, body);
    } catch (e) {
        console.error(e);
    }
});

// Group 삭제
router.delete('/:ae/:grp', function (req, res) {
    const ae_resourceName = req.params.ae;
    const grp_resourceName = req.params.grp;
    const creator = req.headers['x-m2m-origin'];
    const body = null;

    options.path = '/' + conf.csebasename + '/' + ae_resourceName + '/' + grp_resourceName;
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