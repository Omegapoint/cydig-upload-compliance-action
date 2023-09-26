import config from '../config.json';

export class UrlBuilder {
  static createUrl(
    teamName: string,
    devopsOrgName: string,
    teamProjectName: string,
    codeRepositoryName: string,
    repositoryId: string,
    subscriptionId: string,
    states: object,
  ): string {
    //Don´t forget to implement this as github secrets in the repository
    const urlReadToReadMe: string = process.env.urlRead;
    console.log("urlRead: " + urlReadToReadMe)
    const urlDashboard: string = process.env.urlDashboard;
    console.log("urlDashboard: " + urlDashboard)
    const readToReadMeKeyAcessKey: string = process.env.readToReadMeKeyAcessKey;
    console.log("readToReadMeKeyAcessKey: " + readToReadMeKeyAcessKey)
    let urls: string = '';
    let encodedURL: string;
    let singleBadgeURL: string;
    let redirectLink: string = '';
    const readFunctionURL: string = urlReadToReadMe;

    //OP Dashboard
    encodedURL = encodeURIComponent('OP Compliance Dashboard-click here-blue');
    singleBadgeURL = '[![' + 'OP Compliance Dashboard' + '](https://img.shields.io/badge/' + encodedURL + ')]';
    redirectLink = '(' + urlDashboard + encodeURIComponent(teamName.toLowerCase()) + ')';
    urls = urls + singleBadgeURL + redirectLink + '<br/>' + '<br/>' + '\n';

    //timestamp
    encodedURL = encodeURIComponent(
      readFunctionURL +
        'code=' +
        readToReadMeKeyAcessKey +
        '&teamName=' +
        encodeURIComponent(teamName) +
        '&teamProjectName=' +
        encodeURIComponent(teamProjectName) +
        '&codeRepositoryName=' +
        encodeURIComponent(codeRepositoryName) +
        '&stateType=' +
        'timestamp',
    );
    singleBadgeURL = '![' + 'Timestamp' + '](https://img.shields.io/endpoint?url=' + encodedURL + ')';
    urls = urls + singleBadgeURL + '<br/>' + '<br/>' + '\n';

    for (const state of Object.keys(states)) {
      redirectLink = '';
      encodedURL = encodeURIComponent(
        readFunctionURL +
          'code=' +
          readToReadMeKeyAcessKey +
          '&teamName=' +
          encodeURIComponent(teamName) +
          '&teamProjectName=' +
          encodeURIComponent(teamProjectName) +
          '&codeRepositoryName=' +
          encodeURIComponent(codeRepositoryName) +
          '&stateType=' +
          state,
      );
      singleBadgeURL = '[![' + state + '](https://img.shields.io/endpoint?url=' + encodedURL + ')]';

      switch (state) {
        case 'numberOfReviewers':
          redirectLink =
            '(https://dev.azure.com/' +
            devopsOrgName +
            '/' +
            teamProjectName +
            '/_settings/repositories?repo=' +
            repositoryId +
            '&_a=policiesMid&refs=refs/heads/main)';
          break;
        case 'secureScore':
          redirectLink =
            '(https://portal.azure.com/#view/Microsoft_Azure_Security/RecommendationsBladeV2/subscriptionIds~/%5B%22' +
            subscriptionId +
            '%22%5D/source/SecurityPosture_ViewRecommendation)';
          break;
        case 'allowedLocationPolicy':
          redirectLink = '(https://portal.azure.com/#view/Microsoft_Azure_Policy/PolicyMenuBlade/~/Compliance)';
          break;
        default:
          singleBadgeURL = '![' + state + '](https://img.shields.io/endpoint?url=' + encodedURL + ')';
          break;
      }
      urls = urls + singleBadgeURL + redirectLink + '<br/>' + '\n';
    }
    return urls;
  }
}
