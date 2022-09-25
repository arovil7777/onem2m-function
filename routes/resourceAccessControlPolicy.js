const express = require('express');
const http = require('http');
const conf = require('../config/conf');
const options = require('../controller/requestOptions');
const httpRequest = require('../controller/httpRequest');
// const bodies = require('../controller/oneM2MBodies');

const router = express.Router();

// AccessControlPolicy 등록 (CSE 하위)
router.post('/', function (req, res) {
    const creator = req.headers['x-m2m-origin'];
    // const body = bodies(req, 'acpCreate');
    const body = {
        "m2m:acp": req.body
    };

    options.path = '/' + conf.csebasename;
    options.method = 'POST';
    options.headers['Content-Type'] = 'application/json;ty=1';
    options.headers['X-M2M-Origin'] = creator;

    try {
        httpRequest(res, options, body);
    } catch (e) {
        console.error(e);
    }
});

// AccessControlPolicy 등록 (AE 하위)
router.post('/:ae', function (req, res) {
    const ae_resourceName = req.params.ae;
    const creator = req.headers['x-m2m-origin'];
    // const body = bodies(req, 'acpCreate');
    const body = {
        "m2m:acp": req.body
    };

    options.path = '/' + conf.csebasename + '/' + ae_resourceName;
    options.method = 'POST';
    options.headers['Content-Type'] = 'application/json;ty=1';
    options.headers['X-M2M-Origin'] = creator;

    try {
        httpRequest(res, options, body);
    } catch (e) {
        console.error(e);
    }
});

// AccessControlPolicy 조회 (CSE 하위)
router.get('/:acp', function (req, res) {
    const acp_resourceName = req.params.acp;
    const creator = req.headers['x-m2m-origin'];
    const body = null;

    options.path = '/' + conf.csebasename + '/' + acp_resourceName;
    options.method = 'GET';
    options.headers['Content-Type'] = 'application/json';
    options.headers['X-M2M-Origin'] = creator;

    try {
        httpRequest(res, options, body);
    } catch (e) {
        console.error(e);
    }
});

// AccessControlPolicy 조회 (AE 하위)
router.get('/:ae/:acp', function (req, res) {
    const ae_resourceName = req.params.ae;
    const acp_resourceName = req.params.acp;
    const creator = req.headers['x-m2m-origin'];
    const body = null;

    options.path = '/' + conf.csebasename + '/' + ae_resourceName + '/' + acp_resourceName;
    options.method = 'GET';
    options.headers['Content-Type'] = 'application/json';
    options.headers['X-M2M-Origin'] = creator;

    try {
        httpRequest(res, options, body);
    } catch (e) {
        console.error(e);
    }
});

// AccessControlPolicy 수정 (CSE 하위)
router.put('/:acp', function (req, res) {
    const acp_resourceName = req.params.acp;
    const creator = req.headers['x-m2m-origin'];
    // const body = bodies(req, 'acpUpdate');
    const body = {
        "m2m:acp": req.body
    };

    options.path = '/' + conf.csebasename + '/' + acp_resourceName;
    options.method = 'PUT';
    options.headers['Content-Type'] = 'application/json';
    options.headers['X-M2M-Origin'] = creator;

    try {
        httpRequest(res, options, body);
    } catch (e) {
        console.error(e);
    }
});

// AccessControlPolicy 수정 (AE 하위)
router.put('/:ae/:acp', function (req, res) {
    const ae_resourceName = req.params.ae;
    const acp_resourceName = req.params.acp;
    const creator = req.headers['x-m2m-origin'];
    // const body = bodies(req, 'acpUpdate');
    const body = {
        "m2m:acp": req.body
    };

    options.path = '/' + conf.csebasename + '/' + ae_resourceName + '/' + acp_resourceName;
    options.method = 'PUT';
    options.headers['Content-Type'] = 'application/json';
    options.headers['X-M2M-Origin'] = creator;

    try {
        httpRequest(res, options, body);
    } catch (e) {
        console.error(e);
    }
});

// AccessControlPolicy 삭제 (CSE 하위)
router.delete('/:acp', function (req, res) {
    const acp_resourceName = req.params.acp;
    const creator = req.headers['x-m2m-origin'];
    const body = null;

    options.path = '/' + conf.csebasename + '/' + acp_resourceName;
    options.method = 'DELETE';
    options.headers['Content-Type'] = 'application/json';
    options.headers['X-M2M-Origin'] = creator;

    try {
        httpRequest(res, options, body);
    } catch (e) {
        console.error(e);
    }
});

// AccessControlPolicy 삭제 (AE 하위)
router.delete('/:ae/:acp', function (req, res) {
    const ae_resourceName = req.params.ae;
    const acp_resourceName = req.params.acp;
    const creator = req.headers['x-m2m-origin'];
    const body = null;

    options.path = '/' + conf.csebasename + '/' + ae_resourceName + '/' + acp_resourceName;
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