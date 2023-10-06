
export class UrlBuilder {
  static createUrl(
    teamName: string,
    teamProjectName: string,
    codeRepositoryName: string,
    subscriptionId: string,
    states: object
  ): string {
    //Please update the url if there are any changes to the infrastructure.
    const urlDashboard: string = "https://cydig.omegapoint.cloud/";
    //Please update the func url if there are any changes to the infrastructure.
    const readFunctionURL: string = 'https://func-cydig-comp-state-prod.azurewebsites.net/api/ReadToReadme?code=';
    //Please update the url if there are any changes to the infrastructure.
    const readToReadMeKeyAcessKey: string = 'xaEvCDsaK01y2Z6SBivwOKndN4o915lpOTt1VkmULgsxgsjkml7u1DOhgULzmAPX';
  
    let urls: string = '';
    let encodedURL: string;
    let singleBadgeURL: string;
    let redirectLink: string = '';

    //OP Dashboard
    encodedURL = encodeURIComponent('OP Compliance Dashboard-click here-blue');
    singleBadgeURL = '[![' + 'OP Compliance Dashboard' + '](https://img.shields.io/badge/' + encodedURL + ')]';
    redirectLink = '(' + urlDashboard + encodeURIComponent(teamName.toLowerCase()) + ')';
    urls = urls + singleBadgeURL + redirectLink + '<br/>' + '<br/>' + '\n';

    //timestamp
    encodedURL = encodeURIComponent(
      readFunctionURL +
        readToReadMeKeyAcessKey +
        '&teamName=' +
        encodeURIComponent(teamName) +
        '&teamProjectName=' +
        encodeURIComponent(teamProjectName) +
        '&codeRepositoryName=' +
        encodeURIComponent(codeRepositoryName) +
        '&stateType=' +
        'timestamp'
    );
    singleBadgeURL = '![' + 'Timestamp' + '](https://img.shields.io/endpoint?url=' + encodedURL + ')';
    urls = urls + singleBadgeURL + '<br/>' + '<br/>' + '\n';

    for (const state of Object.keys(states)) {
      console.log("state: " + state)
      redirectLink = '';
      encodedURL = encodeURIComponent(
        readFunctionURL +
          readToReadMeKeyAcessKey +
          '&teamName=' +
          encodeURIComponent(teamName) +
          '&teamProjectName=' +
          encodeURIComponent(teamProjectName) +
          '&codeRepositoryName=' +
          encodeURIComponent(codeRepositoryName) +
          '&stateType=' +
          state
      );
      singleBadgeURL = '[![' + state + '](https://img.shields.io/endpoint?url=' + encodedURL + ')]';

      switch (state) {
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
