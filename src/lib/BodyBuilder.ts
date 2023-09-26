import { UrlBuilder } from './UrlBuilder';
import { ResponseBodyBuilder } from './ResponseBodyBuilder';
import { UrlBodyBuilder } from './UrlBodyBuilder';
import { UrlBody } from './UrlBody';
import { ResponseBody } from './ResponseBody';
import * as core from '@actions/core';

let urls: string = '';

export class BodyBuilder {
  createBody(teamName: string, repositoryId: string, codeRepositoryName: string, subscriptionId: string): ResponseBody {
    let devopsOrgName: string = process.env.System_TeamFoundationCollectionUri || '';
    //TODO: teamProjectName will be null.
    //const teamProjectName: string = process.env.System_TeamProject || '';
    const teamProjectName: string = process.env.System_TeamProject || teamName;
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

    console.log('devopsOrgName:', devopsOrgName);
    console.log('teamProjectName:', process.env.teamProjectName);
    console.log('allowedLocationPolicy:', process.env.allowedLocationPolicy);
    console.log('secureScore:', process.env.secureScore);
    console.log('numberOfDeployedVMs:', process.env.numberOfDeployedVMs);
    console.log('threatModelingDate:', process.env.threatModelingDate);
    console.log('scaTool:', process.env.scaTool);
    console.log('sastTool:', process.env.sastTool);
    console.log('pentestDate:', process.env.pentestDate);
    console.log('codeQualityTool:', process.env.codeQualityTool);
    console.log('numberOfExposedSecrets:', process.env.numberOfExposedSecrets);
    console.log('numberOfReviewers:', process.env.numberOfReviewers);
    console.log('branchPolicyUpdateDate:', process.env.branchPolicyUpdateDate);
    console.log('branchPolicyUpdateEmail:', process.env.branchPolicyUpdateEmail);
    console.log('compliantResources:', process.env.compliantResources);
    console.log('nonCompliantResources:', process.env.nonCompliantResources);
    console.log('scaNumberOfSeverity1:', process.env.scaNumberOfSeverity1);
    console.log('scaNumberOfSeverity2:', process.env.scaNumberOfSeverity2);
    console.log('scaNumberOfSeverity3:', process.env.scaNumberOfSeverity3);
    console.log('scaNumberOfSeverity4:', process.env.scaNumberOfSeverity4);
    console.log('cqNumberOfSeverity1:', process.env.cqNumberOfSeverity1);
    console.log('cqNumberOfSeverity2:', process.env.cqNumberOfSeverity2);
    console.log('cqNumberOfSeverity3:', process.env.cqNumberOfSeverity3);
    console.log('cqNumberOfSeverity4:', process.env.cqNumberOfSeverity4);
    console.log('cqNumberOfSeverity5:', process.env.cqNumberOfSeverity5);
    console.log('sastNumberOfSeverity1:', process.env.sastNumberOfSeverity1);
    console.log('sastNumberOfSeverity2:', process.env.sastNumberOfSeverity2);
    console.log('sastNumberOfSeverity3:', process.env.sastNumberOfSeverity3);
    console.log('tmNumberOfActiveTickets:', process.env.tmNumberOfActiveTickets);
    console.log('tmNumberOfClosedTickets:', process.env.tmNumberOfClosedTickets);
    console.log('ptNumberOfActiveTickets:', process.env.ptNumberOfActiveTickets);
    console.log('ptNumberOfClosedTickets:', process.env.ptNumberOfClosedTickets);
    console.log('numUserInProdSeverity1:', process.env.numUserInProdSeverity1);
    console.log('numUserInProdSeverity2:', process.env.numUserInProdSeverity2);
    console.log('numUserInProdSeverity3:', process.env.numUserInProdSeverity3);

    devopsOrgName = this.splitUrl(devopsOrgName);

    console.log('before UrlBodyBuilder:');
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

      console.log('before UrlBuilder.createUrl:');
    urls = UrlBuilder.createUrl(
      // eslint-disable-line
      teamName,
      devopsOrgName,
      teamProjectName,
      codeRepositoryName,
      repositoryId,
      subscriptionId,
      urlBody,
    );
    console.log('before ResponseBodyBuilder:');
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
        cqNumberOfSeverity5,
      )
      .build();
    return responseBody;
  }

  splitUrl(devopsOrgName: string): string {
    if (typeof devopsOrgName === 'string') {
      const splitted: string[] = devopsOrgName.split('/');
      devopsOrgName = splitted[splitted.length - 2];
    } else {
      core.setFailed('devopsOrgName is undefined, should be string');
    }
    return devopsOrgName;
  }
  getUrls(): string {
    return urls;
  }
}

// let devopsOrgName: string = core.getInput('System.TeamFoundationCollectionUri');
// const teamProjectName: string = core.getInput('System.TeamProject');
// const allowedLocationPolicy: string = core.getInput('allowedLocationPolicy');
// const secureScore: string = core.getInput('secureScore');
// const numberOfDeployedVMs: string = core.getInput('numberOfDeployedVMs');

// const threatModelingDate: string = core.getInput('threatModelingDate');
// const scaTool: string = core.getInput('scaTool');
// const sastTool: string = core.getInput('sastTool');
// const pentestDate: string = core.getInput('pentestDate');
// const codeQualityTool: string = core.getInput('codeQualityTool');
// const numberOfExposedSecrets: string = core.getInput('numberOfExposedSecrets');
// const numberOfReviewers: string = core.getInput('numberOfReviewers');
// const branchPolicyUpdateDate: string = core.getInput('branchPolicyUpdateDate');
// const branchPolicyUpdateEmail: string = core.getInput('branchPolicyUpdateEmail');

// const compliantResources: string = core.getInput('compliantResources');
// const nonCompliantResources: string = core.getInput('nonCompliantResources');

// const scaNumberOfSeverity1: string = core.getInput('SCAnumberOfSeverity1');
// const scaNumberOfSeverity2: string = core.getInput('SCAnumberOfSeverity2');
// const scaNumberOfSeverity3: string = core.getInput('SCAnumberOfSeverity3');
// const scaNumberOfSeverity4: string = core.getInput('SCAnumberOfSeverity4');

// const cqNumberOfSeverity1: string = core.getInput('CQnumberOfSeverity1');
// const cqNumberOfSeverity2: string = core.getInput('CQnumberOfSeverity2');
// const cqNumberOfSeverity3: string = core.getInput('CQnumberOfSeverity3');
// const cqNumberOfSeverity4: string = core.getInput('CQnumberOfSeverity4');
// const cqNumberOfSeverity5: string = core.getInput('CQnumberOfSeverity5');

// const sastNumberOfSeverity1: string = core.getInput('SASTnumberOfSeverity1');
// const sastNumberOfSeverity2: string = core.getInput('SASTnumberOfSeverity2');
// const sastNumberOfSeverity3: string = core.getInput('SASTnumberOfSeverity3');

// const tmNumberOfActiveTickets: string = core.getInput('tmNumberOfActiveTickets');
// const tmNumberOfClosedTickets: string = core.getInput('tmNumberOfClosedTickets');

// const ptNumberOfActiveTickets: string = core.getInput('ptNumberOfActiveTickets');
// const ptNumberOfClosedTickets: string = core.getInput('ptNumberOfClosedTickets');

// const numUserInProdSeverity1: string = core.getInput('numUserInProdSeverity1');
// const numUserInProdSeverity2: string = core.getInput('numUserInProdSeverity2');
// const numUserInProdSeverity3: string = core.getInput('numUserInProdSeverity3');
