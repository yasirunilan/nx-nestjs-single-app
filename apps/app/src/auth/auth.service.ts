import { Injectable } from '@nestjs/common';
import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserAttribute,
  CognitoUserPool,
} from 'amazon-cognito-identity-js';
import { AuthLoginUserDto } from './dtos/authLoginUserDto';
import { AuthRegisterUserDto } from './dtos/authRegisterUserDto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  private userPool: CognitoUserPool;

  constructor(private configService: ConfigService) {
    this.userPool = new CognitoUserPool({
      UserPoolId: this.configService.get<string>('AWS_COGNITO_USER_POOL_ID'),
      ClientId: this.configService.get<string>('AWS_COGNITO_CLIENT_ID'),
    });
  }

  async registerUser(authRegisterUserDto: AuthRegisterUserDto) {
    const { name, email, password } = authRegisterUserDto;

    return new Promise((resolve, reject) => {
      this.userPool.signUp(
        email,
        password,
        [
          new CognitoUserAttribute({
            Name: 'name',
            Value: name,
          }),
        ],
        null,
        (err, result) => {
          if (!result) {
            reject(err);
          } else {
            resolve(result.user);
          }
        }
      );
    });
  }

  async authenticateUser(authLoginUserDto: AuthLoginUserDto) {
    const { email, password } = authLoginUserDto;
    const userData = {
      Username: email,
      Pool: this.userPool,
    };

    const authenticationDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    const userCognito = new CognitoUser(userData);

    return new Promise((resolve, reject) => {
      userCognito.authenticateUser(authenticationDetails, {
        onSuccess: (result) => {
          resolve({
            accessToken: result.getAccessToken().getJwtToken(),
            refreshToken: result.getRefreshToken().getToken(),
          });
        },
        onFailure: (err) => {
          reject(err);
        },
      });
    });
  }
}
