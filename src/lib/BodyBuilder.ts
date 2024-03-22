import { UrlBuilder } from './UrlBuilder';
import { RequestBodyBuilder } from './RequestBodyBuilder';
import { UrlBodyBuilder } from './UrlBodyBuilder';
import { UrlBody } from './UrlBody';
import { RequestBody } from './RequestBody';

let urls: string | undefined;

export class BodyBuilder {
  createBody(teamName: string, codeRepositoryName: string, subscriptionId: string): RequestBody {
    const teamProjectName: string = 'not-specified';
    const allowedLocationPolicy: string | undefined = process.env?.allowedLocationPolicy;
    const secureScore: string | undefined = process.env?.secureScore;
    const numberOfDeployedVMs: string | undefined = process.env?.numberOfDeployedVMs;

    const threatModelingDate: string | undefined = process.env?.threatModelingDate;
    const scaTool: string | undefined = process.env?.scaTool;
    const sastTool: string | undefined = process.env?.sastTool;
    const pentestDate: string | undefined = process.env?.pentestDate;
    const codeQualityTool: string | undefined = process.env?.codeQualityTool;
    const numberOfExposedSecrets: string | undefined = process.env?.numberOfExposedSecrets;
    const numberOfReviewers: string | undefined = process.env?.numberOfReviewers;
    const branchPolicyUpdateDate: string | undefined = process.env?.branchPolicyUpdateDate;
    const branchPolicyUpdateEmail: string | undefined = process.env?.branchPolicyUpdateEmail;

    const compliantResources: string | undefined = process.env?.compliantResources;
    const nonCompliantResources: string | undefined = process.env?.nonCompliantResources;

    const scaNumberOfSeverity1: string | undefined = process.env?.SCAnumberOfSeverity1;
    const scaNumberOfSeverity2: string | undefined = process.env?.SCAnumberOfSeverity2;
    const scaNumberOfSeverity3: string | undefined = process.env?.SCAnumberOfSeverity3;
    const scaNumberOfSeverity4: string | undefined = process.env?.SCAnumberOfSeverity4;

    const cqNumberOfSeverity1: string | undefined = process.env?.CQnumberOfSeverity1;
    const cqNumberOfSeverity2: string | undefined = process.env?.CQnumberOfSeverity2;
    const cqNumberOfSeverity3: string | undefined = process.env?.CQnumberOfSeverity3;
    const cqNumberOfSeverity4: string | undefined = process.env?.CQnumberOfSeverity4;
    const cqNumberOfSeverity5: string | undefined = process.env?.CQnumberOfSeverity5;

    const sastNumberOfSeverity1: string | undefined = process.env?.SASTnumberOfSeverity1;
    const sastNumberOfSeverity2: string | undefined = process.env?.SASTnumberOfSeverity2;
    const sastNumberOfSeverity3: string | undefined = process.env?.SASTnumberOfSeverity3;
    const sastNumberOfSeverity4: string | undefined = process.env?.SASTnumberOfSeverity4;

    const tmNumberOfActiveTickets: string | undefined = process.env?.tmNumberOfActiveTickets;
    const tmNumberOfClosedTickets: string | undefined = process.env?.tmNumberOfClosedTickets;

    const ptNumberOfActiveTickets: string | undefined = process.env?.ptNumberOfActiveTickets;
    const ptNumberOfClosedTickets: string | undefined = process.env?.ptNumberOfClosedTickets;

    const numUserInProdSeverity1: string | undefined = process.env?.numUserInProdSeverity1;
    const numUserInProdSeverity2: string | undefined = process.env?.numUserInProdSeverity2;
    const numUserInProdSeverity3: string | undefined = process.env?.numUserInProdSeverity3;

    //For printing urls in the pipeline
    const urlBody: UrlBody = new UrlBodyBuilder()
      .setThreatModelingDate(threatModelingDate)
      .setNumberOfReviewers(numberOfReviewers)
      .setNumberOfExposedSecrets(numberOfExposedSecrets)
      .setCodeQualityTool(codeQualityTool)
      .setScaTool(scaTool)
      .setSastTool(sastTool)
      .setSecureScore(secureScore)
      .setAllowedLocationPolicy(allowedLocationPolicy)
      .setNumberOfHumansInSubscription(numUserInProdSeverity1, numUserInProdSeverity2, numUserInProdSeverity3)
      .setNumberOfDeployedVMs(numberOfDeployedVMs)
      .setPentestDate(pentestDate)
      .build();

    urls = new UrlBuilder().createUrl(
      // eslint-disable-line
      teamName,
      teamProjectName,
      codeRepositoryName,
      subscriptionId,
      urlBody
    );

    const requestBody: RequestBody = new RequestBodyBuilder()
      .setTeamName(teamName)
      .setTeamProjectName(teamProjectName)
      .setCodeRepositoryName(codeRepositoryName)
      .setSubscriptionId(subscriptionId)
      .setThreatModelingDate(threatModelingDate, tmNumberOfActiveTickets, tmNumberOfClosedTickets)
      .setNumberOfReviewers(numberOfReviewers, branchPolicyUpdateDate, branchPolicyUpdateEmail)
      .setScaTool(scaTool, scaNumberOfSeverity1, scaNumberOfSeverity2, scaNumberOfSeverity3, scaNumberOfSeverity4)
      .setSastTool(sastTool, sastNumberOfSeverity1, sastNumberOfSeverity2, sastNumberOfSeverity3, sastNumberOfSeverity4)
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
    return requestBody;
  }

  getUrls(): string | undefined {
    return urls;
  }
}
