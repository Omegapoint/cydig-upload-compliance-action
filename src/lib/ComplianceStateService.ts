import { BodyBuilder } from './BodyBuilder';
import axios from 'axios';
import config from '../config.json';
import { ResponseBody } from './ResponseBody';
import * as fs from 'fs';
import * as path from 'path';

export class ComplianceStateService {
  public async createAndSendComplianceState(
    teamName: string,
    repositoryId: string,
    codeRepositoryName: string,
    subscriptionId: string,
  ): Promise<void> {
    // POST-request to Azure function
    const urlUpdate: string = process.env.urlUpdate;
    console.log("urlUpdate: " + urlUpdate)
    const bodyBuilder: BodyBuilder = new BodyBuilder();
    const responseBody: ResponseBody = bodyBuilder.createBody(
      teamName,
      repositoryId,
      codeRepositoryName,
      subscriptionId,
    );

    await axios
      .post(urlUpdate, responseBody, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      .then(() => {
        const urls: string = bodyBuilder.getUrls();
        const outputFilePath: string = path.join(__dirname, 'README_badges.txt'); // Output file in the same directory as the script
        //Remove this console.log
        console.log("Debug: " + outputFilePath)
        fs.writeFileSync(outputFilePath, urls, 'utf-8');
        console.log(urls);
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .catch((error: any) => {
        console.log(error);
        throw new Error(`Request failed with status code: ${error.message}`);
        //  ${error.response.data}`);
      });
  }
}
