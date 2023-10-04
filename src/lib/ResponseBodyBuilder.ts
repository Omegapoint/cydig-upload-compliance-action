import { ResponseBody } from './ResponseBody';

export class ResponseBodyBuilder {
  responseBody: ResponseBody;

  constructor() {
    this.responseBody = new ResponseBody();
  }

  setTeamName(teamName: string): this {
    if (!teamName) {
      return this;
    } else {
      this.responseBody.teamName = teamName;
      return this;
    }
  }

  setTeamProjectName(teamProjectName: string): this {
    if (!teamProjectName) {
      return this;
    } else {
      this.responseBody.teamProjectName = teamProjectName;
      return this;
    }
  }

  setCodeRepositoryName(codeRepositoryName: string): this {
    if (!codeRepositoryName) {
      return this;
    } else {
      this.responseBody.codeRepositoryName = codeRepositoryName;
      return this;
    }
  }

  setSubscriptionId(subscriptionId: string): this {
    if (!subscriptionId) {
      return this;
    } else {
      this.responseBody.subscriptionId = subscriptionId;
      return this;
    }
  }

  setThreatModelingDate(
    threatModelingDate: string,
    tmNumberOfActiveTickets: string,
    tmNumberOfClosedTickets: string
  ): this {
    if (!threatModelingDate) {
      return this;
    } else {
      console.log("(before): tmNumberOfActiveTickets: " + tmNumberOfActiveTickets)
      console.log("(before): tmNumberOfClosedTickets" + tmNumberOfClosedTickets)
      if ((!tmNumberOfActiveTickets && !tmNumberOfClosedTickets) || ((tmNumberOfActiveTickets || tmNumberOfClosedTickets) !== '')) {
        this.responseBody.tmNumberOfActiveTickets = tmNumberOfActiveTickets;
        this.responseBody.tmNumberOfClosedTickets = tmNumberOfClosedTickets;
        console.log("(after): tmNumberOfActiveTickets: " + tmNumberOfActiveTickets)
        console.log("(after): tmNumberOfClosedTickets" + tmNumberOfClosedTickets)
      }
      this.responseBody.threatModelingDate = threatModelingDate;
      return this;
    }
  }

  setNumberOfReviewers(
    numberOfReviewers: string,
    branchPolicyUpdateDate: string,
    branchPolicyUpdateEmail: string
  ): this {
    if (!numberOfReviewers) {
      return this;
    } else {
      this.responseBody.numberOfReviewers = numberOfReviewers;
      if (branchPolicyUpdateDate && branchPolicyUpdateEmail) {
        this.responseBody.branchPolicyUpdateDate = branchPolicyUpdateDate;
        this.responseBody.branchPolicyUpdateEmail = branchPolicyUpdateEmail;
      }
      return this;
    }
  }

  setScaTool(
    scaTool: string,
    scaNumberOfSeverity1: string,
    scaNumberOfSeverity2: string,
    scaNumberOfSeverity3: string,
    scaNumberOfSeverity4: string
  ): this {
    if (!scaTool) {
      return this;
    } else if (scaTool === 'not specified') {
      this.responseBody.scaTool = scaTool;
      return this;
    } else {
      if (!scaNumberOfSeverity1 && !scaNumberOfSeverity2 && !scaNumberOfSeverity3 && !scaNumberOfSeverity4) {
        this.responseBody.scaTool = scaTool;
        this.responseBody.scaNumberOfSeverity1 = scaNumberOfSeverity1;
        this.responseBody.scaNumberOfSeverity2 = scaNumberOfSeverity2;
        this.responseBody.scaNumberOfSeverity3 = scaNumberOfSeverity3;
        this.responseBody.scaNumberOfSeverity4 = scaNumberOfSeverity4;
      } else {
        this.responseBody.scaTool = scaTool; //one or many vulnerabilities are undefined, maybe print feedback in pipeline
      }
      return this;
    }
  }

  setSecureScore(secureScore: string): this {
    if (!secureScore) {
      return this;
    } else {
      this.responseBody.secureScore = secureScore;
      return this;
    }
  }

  setAllowedLocationPolicy(
    allowedLocationPolicy: string,
    compliantResources: string,
    nonCompliantResources: string
  ): this {
    if (!allowedLocationPolicy) {
      return this;
    } else {
      if (compliantResources !== undefined && nonCompliantResources !== undefined) {
        this.responseBody.allowedLocationPolicy = allowedLocationPolicy;
        this.responseBody.compliantResources = compliantResources;
        this.responseBody.nonCompliantResources = nonCompliantResources;
      } else {
        this.responseBody.allowedLocationPolicy = allowedLocationPolicy; //one or both resources are undefined, maybe print feedback in pipeline
      }
      return this;
    }
  }

  setPentestDate(pentestDate: string, ptNumberOfActiveTickets: string, ptNumberOfClosedTickets: string): this {
    if (!pentestDate) {
      return this;
    } else {
      console.log("(before): ptNumberOfActiveTickets: " + ptNumberOfActiveTickets)
      console.log("(before): ptNumberOfClosedTickets" + ptNumberOfClosedTickets)
      if ((!ptNumberOfActiveTickets && !ptNumberOfClosedTickets) || ((ptNumberOfActiveTickets || ptNumberOfClosedTickets) !== '')) {
        this.responseBody.ptNumberOfActiveTickets = ptNumberOfActiveTickets;
        this.responseBody.ptNumberOfClosedTickets = ptNumberOfClosedTickets;

        console.log("(after): ptNumberOfActiveTickets: " + ptNumberOfActiveTickets)
        console.log("(after): ptNumberOfClosedTickets" + ptNumberOfClosedTickets)
      }
      this.responseBody.pentestDate = pentestDate;
      return this;
    }
  }

  setNumberOfDeployedVMs(numberOfDeployedVMs: string): this {
    if (!numberOfDeployedVMs) {
      return this;
    } else {
      this.responseBody.numberOfDeployedVMs = numberOfDeployedVMs;
      return this;
    }
  }

  setNumberOfHumansInSubscription(
    numUserInProdSeverity1: string,
    numUserInProdSeverity2: string,
    numUserInProdSeverity3: string
  ): this {
    if (!numUserInProdSeverity1 || !numUserInProdSeverity2 || !numUserInProdSeverity3) {
      return this;
    } else {
      this.responseBody.numUserInProdSeverity1 = numUserInProdSeverity1;
      this.responseBody.numUserInProdSeverity2 = numUserInProdSeverity2;
      this.responseBody.numUserInProdSeverity3 = numUserInProdSeverity3;
      return this;
    }
  }

  setNumberOfExposedSecrets(numberOfExposedSecrets: string): this {
    if (!numberOfExposedSecrets) {
      return this;
    } else {
      this.responseBody.numberOfExposedSecrets = numberOfExposedSecrets;
      return this;
    }
  }

  setCodeQualityTool(
    codeQualityTool: string,
    cqNumberOfSeverity1: string,
    cqNumberOfSeverity2: string,
    cqNumberOfSeverity3: string,
    cqNumberOfSeverity4: string,
    cqNumberOfSeverity5: string
  ): this {
    if (!codeQualityTool) {
      return this;
    } else if (codeQualityTool === 'not specified') {
      this.responseBody.codeQualityTool = codeQualityTool;
      return this;
    } else {
      if (
        !cqNumberOfSeverity1 &&
        !cqNumberOfSeverity2 &&
        !cqNumberOfSeverity3 &&
        !cqNumberOfSeverity4 &&
        !cqNumberOfSeverity5
      ) {
        this.responseBody.codeQualityTool = codeQualityTool;
        this.responseBody.cqNumberOfSeverity1 = cqNumberOfSeverity1;
        this.responseBody.cqNumberOfSeverity2 = cqNumberOfSeverity2;
        this.responseBody.cqNumberOfSeverity3 = cqNumberOfSeverity3;
        this.responseBody.cqNumberOfSeverity4 = cqNumberOfSeverity4;
        this.responseBody.cqNumberOfSeverity5 = cqNumberOfSeverity5;
      } else {
        this.responseBody.codeQualityTool = codeQualityTool; //one or many vulnerabilities are undefined, maybe print feedback in pipeline
      }
      return this;
    }
  }

  setSastTool(
    sastTool: string,
    sastNumberOfSeverity1: string,
    sastNumberOfSeverity2: string,
    sastNumberOfSeverity3: string
  ): this {
    if (!sastTool) {
      return this;
    } else if (sastTool === 'not specified') {
      this.responseBody.sastTool = sastTool;
      return this;
    } else {
      if (!sastNumberOfSeverity3 && !sastNumberOfSeverity2 && !sastNumberOfSeverity1) {
        this.responseBody.sastTool = sastTool;
        this.responseBody.sastNumberOfSeverity3 = sastNumberOfSeverity3;
        this.responseBody.sastNumberOfSeverity2 = sastNumberOfSeverity2;
        this.responseBody.sastNumberOfSeverity1 = sastNumberOfSeverity1;
      } else {
        this.responseBody.sastTool = sastTool; //one or many vulnerabilities are undefined, maybe print feedback in pipeline
      }
      return this;
    }
  }

  build(): ResponseBody {
    return this.responseBody;
  }
}
