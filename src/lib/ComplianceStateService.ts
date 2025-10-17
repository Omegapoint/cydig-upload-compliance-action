import { BodyBuilder } from './BodyBuilder';
import axios from 'axios';
import { RequestBody } from './RequestBody';

export class ComplianceStateService {
    private updateKey: string;
    private baseUrl: string;
    constructor() {
        if (!process.env?.updateKey) {
            throw new Error('Could not find environment variable updateKey');
        }
        this.updateKey = process.env.updateKey;

        if (!process.env?.urlUpdate) {
            this.baseUrl = 'https://func-cydig-upload-comp-state-prod.azurewebsites.net/api';
            return;
        }
        this.baseUrl = process.env.urlUpdate;
    }
    public async createAndSendComplianceState(
        teamName: string,
        codeRepositoryName: string,
        subscriptionId: string,
    ): Promise<void> {
        const bodyBuilder: BodyBuilder = new BodyBuilder();
        const responseBody: RequestBody = bodyBuilder.createBody(teamName, codeRepositoryName, subscriptionId);

        const urlUpdate: string = `${this.baseUrl}/teams/${teamName}/repositories?code=${this.updateKey}`;

        await axios
            .post(urlUpdate, responseBody, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            })
            .then(() => {
                console.log('Compliance state is updated');
            })

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .catch((error: any) => {
                console.log(error);
                throw new Error(`Request failed with status code: ${error.message}`);
            });
    }
}
