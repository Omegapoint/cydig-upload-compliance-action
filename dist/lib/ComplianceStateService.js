"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComplianceStateService = void 0;
const BodyBuilder_1 = require("./BodyBuilder");
const axios_1 = __importDefault(require("axios"));
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const core = __importStar(require("@actions/core"));
class ComplianceStateService {
    async createAndSendComplianceState(teamName, repositoryId, codeRepositoryName, subscriptionId) {
        // POST-request to Azure function
        const urlUpdate = process.env.urlUpdate;
        console.log("urlUpdate: " + urlUpdate);
        const bodyBuilder = new BodyBuilder_1.BodyBuilder();
        const responseBody = bodyBuilder.createBody(teamName, repositoryId, codeRepositoryName, subscriptionId);
        await axios_1.default
            .post(urlUpdate, responseBody, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
            .then(() => {
            const urls = bodyBuilder.getUrls();
            const outputFilePath = path.join(__dirname, 'README_badges.txt'); // Output file in the same directory as the script
            //Remove this console.log
            console.log("Debug: " + outputFilePath);
            fs.writeFileSync(outputFilePath, urls, 'utf-8');
            core.setOutput("readme-badges", urls);
            console.log(urls);
        })
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .catch((error) => {
            console.log(error);
            throw new Error(`Request failed with status code: ${error.message}`);
            //  ${error.response.data}`);
        });
    }
}
exports.ComplianceStateService = ComplianceStateService;
//# sourceMappingURL=ComplianceStateService.js.map