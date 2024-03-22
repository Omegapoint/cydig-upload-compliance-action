export class RequestBody {
  constructor() {
    this.source = 'GitHub';
  }
  repositoryName?: string;
  source: string;
  teamProjectName?: string;
  subscriptionId?: string;
  numberOfReviewers?: number;
  branchPolicyUpdateDate?: string;
  branchPolicyUpdateEmail?: string;
  secureScore?: number;
  allowedLocationPolicy?: string;
  compliantResources?: number;
  nonCompliantResources?: number;
  threatModelingDate?: string;
  tmNumberOfActiveTickets?: number;
  tmNumberOfClosedTickets?: number;
  scaTool?: string;
  scaNumberOfSeverity4?: number;
  scaNumberOfSeverity3?: number;
  scaNumberOfSeverity2?: number;
  scaNumberOfSeverity1?: number;
  sastTool?: string;
  sastNumberOfSeverity4?: number;
  sastNumberOfSeverity3?: number;
  sastNumberOfSeverity2?: number;
  sastNumberOfSeverity1?: number;
  pentestDate?: string;
  ptNumberOfActiveTickets?: number;
  ptNumberOfClosedTickets?: number;
  numberOfDeployedVMs?: number;
  numberOfExposedSecrets?: number;
  codeQualityTool?: string;
  cqNumberOfSeverity5?: number;
  cqNumberOfSeverity4?: number;
  cqNumberOfSeverity3?: number;
  cqNumberOfSeverity2?: number;
  cqNumberOfSeverity1?: number;
  numUserInProdSeverity1?: number;
  numUserInProdSeverity2?: number;
  numUserInProdSeverity3?: number;
}
