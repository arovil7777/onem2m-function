const express = require('express');
const conf = require('../config/conf');
const options = require('../controller/requestOptions');
const httpRequest = require('../controller/httpRequest');

const router = express.Router();

//-------------------------------------------------등록-------------------------------------------------------
// AE Subscription 등록
router.post('/:ae', function (req, res) {
    const ae_resourceName = req.params.ae;
    const creator = req.headers['x-m2m-origin'];
    const body = {
        "m2m:sub": req.body
    };

    options.path = '/' + conf.csebasename + '/' + ae_resourceName;
    options.method = 'POST';
    options.headers['Content-Type'] = 'application/json;ty=23';
    options.headers['X-M2M-Origin'] = creator;

    try {
        httpRequest(res, options, body);
    } catch (e) {
        console.error(e);
    }
});

// CNT Subscription 등록
router.post('/:ae/:cnt', function (req, res) {
    const ae_resourceName = req.params.ae;
    const cnt_resourceName = req.params.cnt;
    const creator = req.headers['x-m2m-origin'];
    const body = {
        "m2m:sub": req.body
    };

    options.path = '/' + conf.csebasename + '/' + ae_resourceName + '/' + cnt_resourceName;
    options.method = 'POST';
    options.headers['Content-Type'] = 'application/json;ty=23';
    options.headers['X-M2M-Origin'] = creator;

    try {
        httpRequest(res, options, body);
    } catch (e) {
        console.error(e);
    }
});

// NOD Subscription 등록
router.post('/:nod', function (req, res) {
    const nod_resourceName = req.params.nod;
    const creator = req.headers['x-m2m-origin'];
    const body = {
        "m2m:sub": req.body
    };

    options.path = '/' + conf.csebasename + '/' + nod_resourceName;
    options.method = 'POST';
    options.headers['Content-Type'] = 'application/json;ty=23';
    options.headers['X-M2M-Origin'] = creator;

    try {
        httpRequest(res, options, body);
    } catch (e) {
        console.error(e);
    }
})

// GRP Subscription 등록
router.post('/:ae/:grp', function (req, res) {
    const ae_resourceName = req.params.ae;
    const grp_resourceName = req.params.grp;
    const creator = req.headers['x-m2m-origin'];
    const body = {
        "m2m:sub": req.body
    };

    options.path = '/' + conf.csebasename + '/' + ae_resourceName + '/' + grp_resourceName;
    options.method = 'POST';
    options.headers['Content-Type'] = 'application/json;ty=23';
    options.headers['X-M2M-Origin'] = creator;

    try {
        httpRequest(res, options, body);
    } catch (e) {
        console.error(e);
    }
});

// FWR Subscription 등록
router.post('/:nod/:fwr', function (req, res) {
    const nod_resourceName = req.params.nod;
    const fwr_resourceName = req.params.fwr;
    const creator = req.headers['x-m2m-origin'];
    const body = {
        "m2m:sub": req.body
    };

    options.path = '/' + conf.csebasename + '/' + nod_resourceName + '/' + fwr_resourceName;
    options.method = 'POST';
    options.headers['Content-Type'] = 'application/json;ty=23';
    options.headers['X-M2M-Origin'] = creator;

    try {
        httpRequest(res, options, body);
    } catch (e) {
        console.error(e);
    }
});

//-------------------------------------------------조회-------------------------------------------------------
// AE Subscription 조회
router.get('/:ae/:sub', function (req, res) {
    const ae_resourceName = req.params.ae;
    const sub_resourceName = req.params.sub;
    const creator = req.headers['x-m2m-origin'];
    const body = null;

    options.path = '/' + conf.csebasename + '/' + ae_resourceName + '/' + sub_resourceName;
    options.method = 'GET';
    options.headers['Content-Type'] = 'application/json';
    options.headers['X-M2M-Origin'] = creator;

    try {
        httpRequest(res, options, body);
    } catch (e) {
        console.error(e);
    }
});

// CNT Subscription 조회
router.get('/:ae/:cnt/:sub', function (req, res) {
    const ae_resourceName = req.params.ae;
    const cnt_resourceName = req.params.cnt;
    const sub_resourceName = req.params.sub;
    const creator = req.headers['x-m2m-origin'];
    const body = null;

    options.path = '/' + conf.csebasename + '/' + ae_resourceName + '/' + cnt_resourceName + '/' + sub_resourceName;
    options.method = 'GET';
    options.headers['Content-Type'] = 'application/json';
    options.headers['X-M2M-Origin'] = creator;

    try {
        httpRequest(res, options, body);
    } catch (e) {
        console.error(e);
    }
});

// NOD Subscription 조회
router.get('/:nod/:sub', function (req, res) {
    const nod_resourceName = req.params.nod;
    const sub_resourceName = req.params.sub;
    const creator = req.headers['x-m2m-origin'];
    const body = null;

    options.path = '/' + conf.csebasename + '/' + nod_resourceName + '/' + sub_resourceName;
    options.method = 'GET';
    options.headers['Content-Type'] = 'application/json';
    options.headers['X-M2M-Origin'] = creator;

    try {
        httpRequest(res, options, body);
    } catch (e) {
        console.error(e);
    }
});

// GRP Subscription 조회
router.get('/:ae/:grp/:sub', function (req, res) {
    const ae_resourceName = req.params.ae;
    const grp_resourceName = req.params.grp;
    const sub_resourceName = req.params.sub;
    const creator = req.headers['x-m2m-origin'];
    const body = null;

    options.path = '/' + conf.csebasename + '/' + ae_resourceName + '/' + grp_resourceName + '/' + sub_resourceName;
    options.method = 'GET';
    options.headers['Content-Type'] = 'application/json';
    options.headers['X-M2M-Origin'] = creator;

    try {
        httpRequest(res, options, body);
    } catch (e) {
        console.error(e);
    }
});

// FWR Subscription 조회
router.get('/:nod/:fwr/:sub', function (req, res) {
    const nod_resourceName = req.params.nod;
    const fwr_resourceName = req.params.fwr;
    const sub_resourceName = req.params.sub;
    const creator = req.headers['x-m2m-origin'];
    const body = null;

    options.path = '/' + conf.csebasename + '/' + nod_resourceName + '/' + fwr_resourceName + '/' + sub_resourceName;
    options.method = 'GET';
    options.headers['Content-Type'] = 'application/json';
    options.headers['X-M2M-Origin'] = creator;

    try {
        httpRequest(res, options, body);
    } catch (e) {
        console.error(e);
    }
});

//-------------------------------------------------수정-------------------------------------------------------
// AE Subscription 수정
router.put('/:ae/:sub', function (req, res) {
    const ae_resourceName = req.params.ae;
    const sub_resourceName = req.params.sub;
    const creator = req.headers['x-m2m-origin'];
    const body = {
        "m2m:sub": req.body
    };

    options.path = '/' + conf.csebasename + '/' + ae_resourceName + '/' + sub_resourceName;
    options.method = 'PUT';
    options.headers['Content-Type'] = 'application/json';
    options.headers['X-M2M-Origin'] = creator;

    try {
        httpRequest(res, options, body);
    } catch (e) {
        console.error(e);
    }
});

// CNT Subscription 수정
router.put('/:ae/:cnt/:sub', function (req, res) {
    const ae_resourceName = req.params.ae;
    const cnt_resourceName = req.params.cnt;
    const sub_resourceName = req.params.sub;
    const creator = req.headers['x-m2m-origin'];
    const body = {
        "m2m:sub": req.body
    };

    options.path = '/' + conf.csebasename + '/' + ae_resourceName + '/' + cnt_resourceName + '/' + sub_resourceName;
    options.method = 'PUT';
    options.headers['Content-Type'] = 'application/json';
    options.headers['X-M2M-Origin'] = creator;

    try {
        httpRequest(res, options, body);
    } catch (e) {
        console.error(e);
    }
});

// NOD Subscription 수정
router.put('/:nod/:sub', function (req, res) {
    const nod_resourceName = req.params.nod;
    const sub_resourceName = req.params.sub;
    const creator = req.headers['x-m2m-origin'];
    const body = {
        "m2m:sub": req.body
    };

    options.path = '/' + conf.csebasename + '/' + nod_resourceName + '/' + sub_resourceName;
    options.method = 'PUT';
    options.headers['Content-Type'] = 'application/json';
    options.headers['X-M2M-Origin'] = creator;

    try {
        httpRequest(res, options, body);
    } catch (e) {
        console.error(e);
    }
});

// GRP Subscription 수정
router.put('/:ae/:grp/:sub', function (req, res) {
    const ae_resourceName = req.params.ae;
    const grp_resourceName = req.params.grp;
    const sub_resourceName = req.params.sub;
    const creator = req.headers['x-m2m-origin'];
    const body = {
        "m2m:sub": req.body
    };

    options.path = '/' + conf.csebasename + '/' + ae_resourceName + '/' + grp_resourceName + '/' + sub_resourceName;
    options.method = 'PUT';
    options.headers['Content-Type'] = 'application/json';
    options.headers['X-M2M-Origin'] = creator;

    try {
        httpRequest(res, options, body);
    } catch (e) {
        console.error(e);
    }
});

// FWR Subscription 수정
router.put('/:nod/:fwr/:sub', function (req, res) {
    const nod_resourceName = req.params.nod;
    const fwr_resourceName = req.params.fwr;
    const sub_resourceName = req.params.sub;
    const creator = req.headers['x-m2m-origin'];
    const body = {
        "m2m:sub": req.body
    };

    options.path = '/' + conf.csebasename + '/' + nod_resourceName + '/' + fwr_resourceName + '/' + sub_resourceName;
    options.method = 'PUT';
    options.headers['Content-Type'] = 'application/json';
    options.headers['X-M2M-Origin'] = creator;

    try {
        httpRequest(res, options, body);
    } catch (e) {
        console.error(e);
    }
});

//-------------------------------------------------삭제-------------------------------------------------------
// AE Subscription 삭제
router.delete('/:ae/:sub', function (req, res) {
    const ae_resourceName = req.params.ae;
    const sub_resourceName = req.params.sub;
    const creator = req.headers['x-m2m-origin'];
    const body = null;

    options.path = '/' + conf.csebasename + '/' + ae_resourceName + '/' + sub_resourceName;
    options.method = 'DELETE';
    options.headers['Content-Type'] = 'application/json';
    options.headers['X-M2M-Origin'] = creator;

    try {
        httpRequest(res, options, body);
    } catch (e) {
        console.error(e);
    }
});

// CNT Subscription 삭제
router.delete('/:ae/:cnt/:sub', function (req, res) {
    const ae_resourceName = req.params.ae;
    const cnt_resourceName = req.params.cnt;
    const sub_resourceName = req.params.sub;
    const creator = req.headers['x-m2m-origin'];
    const body = null;

    options.path = '/' + conf.csebasename + '/' + ae_resourceName + '/' + cnt_resourceName + '/' + sub_resourceName;
    options.method = 'DELETE';
    options.headers['Content-Type'] = 'application/json';
    options.headers['X-M2M-Origin'] = creator;

    try {
        httpRequest(res, options, body);
    } catch (e) {
        console.error(e);
    }
});

// NOD Subscription 삭제
router.delete('/:nod/:sub', function (req, res) {
    const nod_resourceName = req.params.nod;
    const sub_resourceName = req.params.sub;
    const creator = req.headers['x-m2m-origin'];
    const body = null;

    options.path = '/' + conf.csebasename + '/' + nod_resourceName + '/' + sub_resourceName;
    options.method = 'DELETE';
    options.headers['Content-Type'] = 'application/json';
    options.headers['X-M2M-Origin'] = creator;

    try {
        httpRequest(res, options, body);
    } catch (e) {
        console.error(e);
    }
});

// GRP Subscription 삭제
router.delete('/:ae/:grp/:sub', function (req, res) {
    const ae_resourceName = req.params.ae;
    const grp_resourceName = req.params.grp;
    const sub_resourceName = req.params.sub;
    const creator = req.headers['x-m2m-origin'];
    const body = null;

    options.path = '/' + conf.csebasename + '/' + ae_resourceName + '/' + grp_resourceName + '/' + sub_resourceName;
    options.method = 'DELETE';
    options.headers['Content-Type'] = 'application/json';
    options.headers['X-M2M-Origin'] = creator;

    try {
        httpRequest(res, options, body);
    } catch (e) {
        console.error(e);
    }
});

// FWR Subscription 삭제
router.delete('/:nod/:fwr/:sub', function (req, res) {
    const nod_resourceName = req.params.nod;
    const fwr_resourceName = req.params.fwr;
    const sub_resourceName = req.params.sub;
    const creator = req.headers['x-m2m-origin'];
    const body = null;

    options.path = '/' + conf.csebasename + '/' + nod_resourceName + '/' + fwr_resourceName + '/' + sub_resourceName;
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