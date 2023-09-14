import { ComplianceStateService } from './lib/ComplianceStateService';
import { getContentOfFile } from './lib/JsonService';
import { CyDigConfig } from './lib/types/CyDigConfig';
import * as core from '@actions/core';
import * as github from '@actions/github';

async function runUpdateComplianceStateTask(): Promise<void> {
  try {
    //Fix these
    const codeRepositoryName: string = github.context.repo.repo;
    const repositoryId: string = core.getInput('github.repository_id');
    const subscriptionId: string = core.getInput('subscriptionId');

    const cydigConfigPath: string = core.getInput('cydigConfigPath'); //Need both string??
    const cydigConfig: CyDigConfig = getContentOfFile(cydigConfigPath);
    const teamName: string = cydigConfig.teamName;

    if (!teamName) {
      throw new Error('You need to enter a team name as a input parameter or in your cydig config file');
    } else if (teamName === 'name-of-your-team') {
      throw new Error(
        'Invalid team name. (Placeholder values are not allowed). Please update the cydigConfig with a valid team name.',
      );
    }

    const complianceStateService: ComplianceStateService = new ComplianceStateService();
    await complianceStateService.createAndSendComplianceState(
      teamName,
      repositoryId,
      codeRepositoryName,
      subscriptionId,
    );
  } catch (error: any) {
    // Fail the workflow run if an error occurs
    core.setFailed(error);
  }
}

runUpdateComplianceStateTask();
