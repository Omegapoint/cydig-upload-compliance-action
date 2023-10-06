import { UrlBuilder } from './UrlBuilder';
import { ResponseBodyBuilder } from './ResponseBodyBuilder';
import { UrlBodyBuilder } from './UrlBodyBuilder';
import { UrlBody } from './UrlBody';
import { ResponseBody } from './ResponseBody';

let urls: string = '';

export class BodyBuilder {
  createBody(teamName: string, codeRepositoryName: string, subscriptionId: string): ResponseBody {
    const teamProjectName: string = teamName || '';
    const allowedLocationPolicy: string = process.env.allowedLocationPolicy || '';
    const secureScore: string = process.env.secureScore || '';
    const numberOfDeployedVMs: string = process.env.numberOfDeployedVMs || '';

    const threatModelingDate: string = process.env.threatModelingDate || '';
    const scaTool: string = process.env.scaTool || '';
    const sastTool: string = process.env.sastTool || '';
    const pentestDate: string = process.env.pentestDate || '';
    const codeQualityTool: string = process.env.codeQualityTool || '';
    const numberOfExposedSecrets: string = process.env.numberOfExposedSecrets || '';
    const numberOfReviewers: string = process.env.numberOfReviewers || '';
    const branchPolicyUpdateDate: string = process.env.branchPolicyUpdateDate || '';
    const branchPolicyUpdateEmail: string = process.env.branchPolicyUpdateEmail || '';

    const compliantResources: string = process.env.compliantResources || '';
    const nonCompliantResources: string = process.env.nonCompliantResources || '';

    const scaNumberOfSeverity1: string = process.env.SCAnumberOfSeverity1 || '';
    const scaNumberOfSeverity2: string = process.env.SCAnumberOfSeverity2 || '';
    const scaNumberOfSeverity3: string = process.env.SCAnumberOfSeverity3 || '';
    const scaNumberOfSeverity4: string = process.env.SCAnumberOfSeverity4 || '';

    const cqNumberOfSeverity1: string = process.env.CQnumberOfSeverity1 || '';
    const cqNumberOfSeverity2: string = process.env.CQnumberOfSeverity2 || '';
    const cqNumberOfSeverity3: string = process.env.CQnumberOfSeverity3 || '';
    const cqNumberOfSeverity4: string = process.env.CQnumberOfSeverity4 || '';
    const cqNumberOfSeverity5: string = process.env.CQnumberOfSeverity5 || '';

    const sastNumberOfSeverity1: string = process.env.SASTnumberOfSeverity1 || '';
    const sastNumberOfSeverity2: string = process.env.SASTnumberOfSeverity2 || '';
    const sastNumberOfSeverity3: string = process.env.SASTnumberOfSeverity3 || '';

    const tmNumberOfActiveTickets: string = process.env.tmNumberOfActiveTickets || '';
    const tmNumberOfClosedTickets: string = process.env.tmNumberOfClosedTickets || '';

    const ptNumberOfActiveTickets: string = process.env.ptNumberOfActiveTickets || '';
    const ptNumberOfClosedTickets: string = process.env.ptNumberOfClosedTickets || '';

    const numUserInProdSeverity1: string = process.env.numUserInProdSeverity1 || '';
    const numUserInProdSeverity2: string = process.env.numUserInProdSeverity2 || '';
    const numUserInProdSeverity3: string = process.env.numUserInProdSeverity3 || '';

    //For printing urls in the pipeline
    const urlBody: UrlBody = new UrlBodyBuilder()
      .setThreatModelingDate(threatModelingDate)
      .setNumberOfReviewers(numberOfReviewers)
      //.setNumberOfExposedSecrets(numberOfExposedSecrets)
      //.setCodeQualityTool(codeQualityTool)
      //.setScaTool(scaTool)
      //.setSastTool(sastTool)
      .setSecureScore(secureScore)
      .setAllowedLocationPolicy(allowedLocationPolicy)
      .setNumberOfHumansInSubscription(numUserInProdSeverity1, numUserInProdSeverity2, numUserInProdSeverity3)
      .setNumberOfDeployedVMs(numberOfDeployedVMs)
      .setPentestDate(pentestDate)
      .build();

    urls = UrlBuilder.createUrl(
      // eslint-disable-line
      teamName,
      teamProjectName,
      codeRepositoryName,
      subscriptionId,
      urlBody
    );

    const responseBody: ResponseBody = new ResponseBodyBuilder()
      .setTeamName(teamName)
      .setTeamProjectName(teamProjectName)
      .setCodeRepositoryName(codeRepositoryName)
      .setSubscriptionId(subscriptionId)
      .setThreatModelingDate(threatModelingDate, tmNumberOfActiveTickets, tmNumberOfClosedTickets)
      .setNumberOfReviewers(numberOfReviewers, branchPolicyUpdateDate, branchPolicyUpdateEmail)
      .setScaTool(scaTool, scaNumberOfSeverity1, scaNumberOfSeverity2, scaNumberOfSeverity3, scaNumberOfSeverity4)
      .setSastTool(sastTool, sastNumberOfSeverity1, sastNumberOfSeverity2, sastNumberOfSeverity3)
      .setSecureScore(secureScore)
      .setAllowedLocationPolicy(allowedLocationPolicy, compliantResources, nonCompliantResources)
      .setNumberOfHumansInSubscription(numUserInProdSeverity1, numUserInProdSeverity2, numUserInProdSeverity3)
      .setPentestDate(pentestDate, ptNumberOfActiveTickets, ptNumberOfClosedTickets)
      .setNumberOfDeployedVMs(numberOfDeployedVMs)
      .setNumberOfExposedSecrets(numberOfExposedSecrets)
      .setCodeQualityTool(
        codeQualityTool,
        cqNumberOfSeverity1,
        cqNumberOfSeverity2,
        cqNumberOfSeverity3,
        cqNumberOfSeverity4,
        cqNumberOfSeverity5
      )
      .build();
    return responseBody;
  }

  getUrls(): string {
    return urls;
  }
}
