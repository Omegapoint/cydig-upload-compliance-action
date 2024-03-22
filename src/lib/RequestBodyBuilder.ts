import { RequestBody } from './RequestBody';
import { parseToNumberOrUndefined } from './parser';

export class RequestBodyBuilder {
  private requestBody: RequestBody;

  constructor() {
    this.requestBody = new RequestBody();
  }

  setTeamName(teamName: string): this {
    if (!teamName) {
      return this;
    } else {
      this.requestBody.teamProjectName = teamName;
      return this;
    }
  }

  setTeamProjectName(teamProjectName: string): this {
    if (!teamProjectName) {
      return this;
    } else {
      this.requestBody.teamProjectName = teamProjectName;
      return this;
    }
  }

  setCodeRepositoryName(codeRepositoryName: string): this {
    if (!codeRepositoryName) {
      return this;
    } else {
      this.requestBody.repositoryName = codeRepositoryName;
      return this;
    }
  }

  setSubscriptionId(subscriptionId: string): this {
    if (!subscriptionId) {
      return this;
    } else {
      this.requestBody.subscriptionId = subscriptionId;
      return this;
    }
  }

  setThreatModelingDate(
    threatModelingDate: string | undefined,
    tmNumberOfActiveTickets: string | undefined,
    tmNumberOfClosedTickets: string | undefined
  ): this {
    if (!threatModelingDate) {
      return this;
    } else {
      if (tmNumberOfActiveTickets && tmNumberOfClosedTickets) {
        this.requestBody.tmNumberOfActiveTickets = parseToNumberOrUndefined(tmNumberOfActiveTickets);
        this.requestBody.tmNumberOfClosedTickets = parseToNumberOrUndefined(tmNumberOfClosedTickets);
      }
      this.requestBody.threatModelingDate = threatModelingDate;
      return this;
    }
  }

  setNumberOfReviewers(
    numberOfReviewers: string | undefined,
    branchPolicyUpdateDate: string | undefined,
    branchPolicyUpdateEmail: string | undefined
  ): this {
    if (!numberOfReviewers) {
      return this;
    } else {
      this.requestBody.numberOfReviewers = parseToNumberOrUndefined(numberOfReviewers);
      if (branchPolicyUpdateDate && branchPolicyUpdateEmail) {
        this.requestBody.branchPolicyUpdateDate = branchPolicyUpdateDate;
        this.requestBody.branchPolicyUpdateEmail = branchPolicyUpdateEmail;
      }
      return this;
    }
  }

  setScaTool(
    scaTool: string | undefined,
    scaNumberOfSeverity1: string | undefined,
    scaNumberOfSeverity2: string | undefined,
    scaNumberOfSeverity3: string | undefined,
    scaNumberOfSeverity4: string | undefined
  ): this {
    if (!scaTool) {
      return this;
    } else if (scaTool === 'not specified') {
      this.requestBody.scaTool = scaTool;
      return this;
    } else {
      if (scaNumberOfSeverity1 && scaNumberOfSeverity2 && scaNumberOfSeverity3 && scaNumberOfSeverity4) {
        this.requestBody.scaTool = scaTool;
        this.requestBody.scaNumberOfSeverity1 = parseToNumberOrUndefined(scaNumberOfSeverity1);
        this.requestBody.scaNumberOfSeverity2 = parseToNumberOrUndefined(scaNumberOfSeverity2);
        this.requestBody.scaNumberOfSeverity3 = parseToNumberOrUndefined(scaNumberOfSeverity3);
        this.requestBody.scaNumberOfSeverity4 = parseToNumberOrUndefined(scaNumberOfSeverity4);
      } else {
        this.requestBody.scaTool = scaTool; //one or many vulnerabilities are undefined, maybe print feedback in pipeline
      }
      return this;
    }
  }

  setSecureScore(secureScore: string | undefined): this {
    if (!secureScore) {
      return this;
    } else {
      this.requestBody.secureScore = parseToNumberOrUndefined(secureScore);
      return this;
    }
  }

  setAllowedLocationPolicy(
    allowedLocationPolicy: string | undefined,
    compliantResources: string | undefined,
    nonCompliantResources: string | undefined
  ): this {
    if (!allowedLocationPolicy) {
      return this;
    } else {
      if (compliantResources && nonCompliantResources) {
        this.requestBody.allowedLocationPolicy = allowedLocationPolicy;
        this.requestBody.compliantResources = parseToNumberOrUndefined(compliantResources);
        this.requestBody.nonCompliantResources = parseToNumberOrUndefined(nonCompliantResources);
      } else {
        this.requestBody.allowedLocationPolicy = allowedLocationPolicy; //one or both resources are undefined, maybe print feedback in pipeline
      }
      return this;
    }
  }

  setPentestDate(
    pentestDate: string | undefined,
    ptNumberOfActiveTickets: string | undefined,
    ptNumberOfClosedTickets: string | undefined
  ): this {
    if (!pentestDate) {
      return this;
    } else {
      if (ptNumberOfActiveTickets && ptNumberOfClosedTickets) {
        this.requestBody.ptNumberOfActiveTickets = parseToNumberOrUndefined(ptNumberOfActiveTickets);
        this.requestBody.ptNumberOfClosedTickets = parseToNumberOrUndefined(ptNumberOfClosedTickets);
      }
      this.requestBody.pentestDate = pentestDate;
      return this;
    }
  }

  setNumberOfDeployedVMs(numberOfDeployedVMs: string | undefined): this {
    if (numberOfDeployedVMs) {
      this.requestBody.numberOfDeployedVMs = parseToNumberOrUndefined(numberOfDeployedVMs);
    }
    return this;
  }

  setNumberOfHumansInSubscription(
    numUserInProdSeverity1: string | undefined,
    numUserInProdSeverity2: string | undefined,
    numUserInProdSeverity3: string | undefined
  ): this {
    if (numUserInProdSeverity1 && numUserInProdSeverity2 && numUserInProdSeverity3) {
      this.requestBody.numUserInProdSeverity1 = parseToNumberOrUndefined(numUserInProdSeverity1);
      this.requestBody.numUserInProdSeverity2 = parseToNumberOrUndefined(numUserInProdSeverity2);
      this.requestBody.numUserInProdSeverity3 = parseToNumberOrUndefined(numUserInProdSeverity3);
    }
    return this;
  }

  setNumberOfExposedSecrets(numberOfExposedSecrets: string | undefined): this {
    if (numberOfExposedSecrets) {
      this.requestBody.numberOfExposedSecrets = parseToNumberOrUndefined(numberOfExposedSecrets);
    }
    return this;
  }

  setCodeQualityTool(
    codeQualityTool: string | undefined,
    cqNumberOfSeverity1: string | undefined,
    cqNumberOfSeverity2: string | undefined,
    cqNumberOfSeverity3: string | undefined,
    cqNumberOfSeverity4: string | undefined,
    cqNumberOfSeverity5: string | undefined
  ): this {
    if (!codeQualityTool) {
      return this;
    } else if (codeQualityTool === 'not specified') {
      this.requestBody.codeQualityTool = codeQualityTool;
      return this;
    } else {
      if (
        cqNumberOfSeverity1 &&
        cqNumberOfSeverity2 &&
        cqNumberOfSeverity3 &&
        cqNumberOfSeverity4 &&
        cqNumberOfSeverity5
      ) {
        this.requestBody.codeQualityTool = codeQualityTool;
        this.requestBody.cqNumberOfSeverity1 = parseToNumberOrUndefined(cqNumberOfSeverity1);
        this.requestBody.cqNumberOfSeverity2 = parseToNumberOrUndefined(cqNumberOfSeverity2);
        this.requestBody.cqNumberOfSeverity3 = parseToNumberOrUndefined(cqNumberOfSeverity3);
        this.requestBody.cqNumberOfSeverity4 = parseToNumberOrUndefined(cqNumberOfSeverity4);
        this.requestBody.cqNumberOfSeverity5 = parseToNumberOrUndefined(cqNumberOfSeverity5);
      } else {
        this.requestBody.codeQualityTool = codeQualityTool; //one or many vulnerabilities are undefined, maybe print feedback in pipeline
      }
      return this;
    }
  }

  setSastTool(
    sastTool: string | undefined,
    sastNumberOfSeverity1: string | undefined,
    sastNumberOfSeverity2: string | undefined,
    sastNumberOfSeverity3: string | undefined,
    sastNumberOfSeverity4: string | undefined
  ): this {
    if (!sastTool) {
      return this;
    } else if (sastTool === 'not specified') {
      this.requestBody.sastTool = sastTool;
      return this;
    } else {
      if (sastNumberOfSeverity4 && sastNumberOfSeverity3 && sastNumberOfSeverity2 && sastNumberOfSeverity1) {
        this.requestBody.sastTool = sastTool;
        this.requestBody.sastNumberOfSeverity3 = parseToNumberOrUndefined(sastNumberOfSeverity3);
        this.requestBody.sastNumberOfSeverity2 = parseToNumberOrUndefined(sastNumberOfSeverity2);
        this.requestBody.sastNumberOfSeverity1 = parseToNumberOrUndefined(sastNumberOfSeverity1);
        this.requestBody.sastNumberOfSeverity4 = parseToNumberOrUndefined(sastNumberOfSeverity4);
      } else {
        this.requestBody.sastTool = sastTool; //one or many vulnerabilities are undefined, maybe print feedback in pipeline
      }
      return this;
    }
  }

  build(): RequestBody {
    return this.requestBody;
  }
}
