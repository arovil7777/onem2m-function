const express = require('express');
const deviceRegistrationRouter = require('./routes/deviceRegistration');
const resourceManagementRouter = require('./routes/resourceManagement');
const resourceDataManagementRouter = require('./routes/resourceDataManagement');
const deviceNodeRouter = require('./routes/deviceNode');
const resourceSubscriptionRouter = require('./routes/resourceSubscription');
const resourceGroupRouter = require('./routes/resourceGroup');
const resourceAccessControlPolicyRouter = require('./routes/resourceAccessControlPolicy');
const deviceListDiscoveryRouter = require('./routes/deviceListDiscovery');
const deviceFirmwareRouter = require('./routes/deviceFirmware');
const swaggerUi = require('swagger-ui-express');
const swaggerOption = require('./swagger/swagger_output.json');
// const cors = require('cors');

const app = express();

// Express 기본 설정
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, X-M2M-RI, X-M2M-RVI, X-M2M-RSC, Accept, X-M2M-Origin, Locale');
    res.header('Access-Control-Expose-Headers', 'Origin, X-Requested-With, Content-Type, X-M2M-RI, X-M2M-RVI, X-M2M-RSC, Accept, X-M2M-Origin, Locale');
    (req.method == 'OPTIONS') ? res.sendStatus(200) : next();
});
// app.use(cors());
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerOption));

app.listen(3000, function () {
    // var value=4
    // if(value&'1'||value&'2'||value&'32'||value&'14'){
    //     console.log('통과')
    // }
    // console.log(value&'1')
    // console.log(value&'2')
    // console.log(value&'32')
    // console.log(value&'14')
    // console.log('서버 작동 중 : http://localhost:10210/swagger');
});
app.listen(3000, function () {
    console.log('서버 작동 중 : http://localhost:10210');
});

app.get('/', function (req, res) {
    res.send('테스트입니다.');
});

// 기기 등록
app.use('/api/onem2m/devices', deviceRegistrationRouter);
// 자원 관리
app.use('/api/onem2m/devices/sensors', resourceManagementRouter);
// 자원 데이터 관리
app.use('/api/onem2m/devices/data', resourceDataManagementRouter);
// 기기 노드 관리
app.use('/api/onem2m/devices/nodes', deviceNodeRouter);
// 자원 그룹 관리
app.use('/api/onem2m/devices/group', resourceGroupRouter);
// 기기 목록 조회
app.use('/api/onem2m/devices/list', deviceListDiscoveryRouter);
// 기기 펌웨어 관리
app.use('/api/onem2m/devices/firmware', deviceFirmwareRouter);
// 자원 알람 관리
app.use('/api/onem2m/noti', resourceSubscriptionRouter);
// 접근 제어 정책 관리
app.use('/api/onem2m/access-controls', resourceAccessControlPolicyRouter);
