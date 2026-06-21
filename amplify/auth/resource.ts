import { defineAuth, secret } from '@aws-amplify/backend';
import { CfnResource, Duration } from 'aws-cdk-lib';
import type { Backend } from '../backend';

export const auth = defineAuth({
  loginWith: {
    email: {
      verificationEmailSubject:
        'Verify your email address - Tracking Your Daily Diet',
      verificationEmailBody: () =>
        "Hi there,<br/><br/>Thank you for getting started with Tracking Your Daily Diet!<br/><br/>We want to make sure it's really you.<br/>Please enter the following verification code in the app.<br/><br/>Verification code: {####}<br/><br/>Best,<br/><br/>Tracking Your Daily Diet",
    },
    externalProviders: {
      google: {
        clientId: secret('GOOGLE_CLIENT_ID'),
        clientSecret: secret('GOOGLE_CLIENT_SECRET'),
        scopes: ['openid', 'email', 'profile'],
        attributeMapping: {
          email: 'email',
          custom: {
            username: 'sub',
          },
        },
      },
      // Add the Gen2 Amplify Hosting URL (e.g. https://<branch>.<gen2-appId>.amplifyapp.com/) to the following array after the gen2-main branch is deployed.
      callbackUrls: [],
      // Add the Gen2 Amplify Hosting URL (e.g. https://<branch>.<gen2-appId>.amplifyapp.com/) to the following array after the gen2-main branch is deployed.
      logoutUrls: [],
    },
  },
  userAttributes: {
    email: {
      required: true,
      mutable: true,
    },
  },
  multifactor: {
    mode: 'OFF',
  },
});

export function applyEscapeHatches(backend: Backend) {
  const cfnUserPool = backend.auth.resources.cfnResources.cfnUserPool;
  cfnUserPool.usernameAttributes = ['email'];
  cfnUserPool.policies = {
    passwordPolicy: {
      minimumLength: 8,
      requireLowercase: false,
      requireNumbers: false,
      requireSymbols: false,
      requireUppercase: false,
      temporaryPasswordValidityDays: 7,
    },
  };
  const cfnIdentityPool = backend.auth.resources.cfnResources.cfnIdentityPool;
  cfnIdentityPool.allowUnauthenticatedIdentities = false;
  const userPool = backend.auth.resources.userPool;
  const nativeUserPoolClient = userPool.addClient('NativeAppClient', {
    refreshTokenValidity: Duration.days(30),
    enableTokenRevocation: true,
    enablePropagateAdditionalUserContextData: false,
    authSessionValidity: Duration.minutes(3),
    disableOAuth: true,
    generateSecret: false,
  });
  const cognitoProviders =
    backend.auth.resources.cfnResources.cfnIdentityPool
      .cognitoIdentityProviders;
  if (cognitoProviders && Array.isArray(cognitoProviders)) {
    cognitoProviders.push({
      clientId: nativeUserPoolClient.userPoolClientId,
      providerName: `cognito-idp.${backend.auth.stack.region}.amazonaws.com/${userPool.userPoolId}`,
    });
  }
  for (const cfnResource of backend.auth.stack.node
    .findAll()
    .filter(
      (c) =>
        CfnResource.isCfnResource(c) &&
        [
          'AWS::Cognito::UserPool',
          'AWS::Cognito::IdentityPool',
          'AWS::Cognito::UserPoolClient',
          'AWS::Cognito::IdentityPoolRoleAttachment',
          'AWS::Cognito::UserPoolGroup',
          'AWS::Cognito::UserPoolDomain',
          'AWS::Cognito::UserPoolIdentityProvider',
        ].includes(c.cfnResourceType)
    )) {
    (cfnResource as CfnResource).addOverride('UpdateReplacePolicy', 'Retain');
    (cfnResource as CfnResource).addOverride('DeletionPolicy', 'Retain');
  }
}
