import { BodyBuilder } from './BodyBuilder';
import axios from 'axios';
import { ResponseBody } from './ResponseBody';
import * as fs from 'fs';
import * as path from 'path';
import * as core from '@actions/core';

export class ComplianceStateService {
  public async createAndSendComplianceState(
    teamName: string,
    codeRepositoryName: string,
    subscriptionId: string
  ): Promise<void> {
    // POST-request to Azure function
    let urlUpload: string = process.env.URLUPLOADCOMPLIANCESTATE || '';
    const uploadKey: string = process.env.UPLOADKEY || '';
    urlUpload = urlUpload + uploadKey;
    
    console.log("urlUpload:: " + urlUpload)
    const bodyBuilder: BodyBuilder = new BodyBuilder();
    const responseBody: ResponseBody = bodyBuilder.createBody(
      teamName,
      codeRepositoryName,
      subscriptionId
    );
    await axios
      .post(urlUpload, responseBody, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      .then(() => {
        const urls: string = bodyBuilder.getUrls();
        const outputFilePath: string = path.join(__dirname, 'README_badges.txt'); // Output file in the same directory as the script
        fs.writeFileSync(outputFilePath, urls, 'utf-8');
        core.setOutput("readme-badges", urls);
        console.log(urls);
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .catch((error: any) => {
        console.log(error);
        throw new Error(`Request failed with status code: ${error.message}`);
      });
  }
}
