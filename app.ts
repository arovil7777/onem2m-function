import express, { Request, Response, json, urlencoded } from 'express';
import {
    deviceRegistrationRouter,
    resourceManagementRouter,
    resourceDataManagementRouter,
    resourceSubscriptionRouter,
    resourceGroupRouter,
    resourceAccessControlPolicyRouter
} from './routes';
export class Server {
    protected app: any;

    constructor() {
        this.app = express();
        const serverPort = process.env.PORT || 3000;

        this.app.use(json());
        this.app.use(urlencoded({
            extended: false
        }));
        this.app.use((request: Request, response: Response, next: Function) => {
            response.header('Access-Control-Allow-Origin', '*');
            response.header('Access-Control-Allow-Methods', 'POST, GET, PUT, PATCH, DELETE, OPTIONS');
            response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, X-M2M-RI, X-M2M-RVI, X-M2M-RSC, Accept, X-M2M-Origin, Locale');
            response.header('Access-Control-Expose-Headers', 'Origin, X-Requested-With, Content-Type, X-M2M-RI, X-M2M-RVI, X-M2M-RSC, Accept, X-M2M-Origin, Locale');
            (request.method == 'OPTIONS') ? response.sendStatus(200) : next();
        });

        this.app.listen(serverPort, () => {
            console.log(`서버 작동 중: http://localhost:${serverPort}`);
        }).on('error', (error: Error) => {
            console.error(error);
        });
    }

    protected router() {
        this.app.use(deviceRegistrationRouter.API_PATH, deviceRegistrationRouter);
        this.app.use(resourceManagementRouter.API_PATH, resourceManagementRouter);
        this.app.use(resourceDataManagementRouter.API_PATH, resourceDataManagementRouter);
        this.app.use(resourceSubscriptionRouter.API_PATH, resourceSubscriptionRouter);
        this.app.use(resourceGroupRouter.API_PATH, resourceGroupRouter);
        this.app.use(resourceAccessControlPolicyRouter.API_PATH, resourceAccessControlPolicyRouter);
    }
}
