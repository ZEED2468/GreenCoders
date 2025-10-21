import { HttpStatus } from '@nestjs/common';

export type Role = 'CUSTOMER' | 'VENDOR' | 'ADMIN';

export interface BaseResponse<T = any> {
  statusCode: HttpStatus;
  message: string;
  data: T;
}

export interface AuthUserResponse {
  id: string;
  username: string;
  email: string;
  isNumberVerified: boolean;
  authMethod?: string; // 'email' | 'google'
  role?: Role;
  isActive?: boolean;
  createdAt?: string;
}

export interface LoginResponse {
  user: AuthUserResponse;
}

export interface RegisterResponse {
  user: AuthUserResponse;
}

export interface OtpResponse {
  phoneNumber: string;
  message: string;
}

export interface OtpVerificationResponse {
  phoneNumber: string;
  verified: boolean;
}
export interface RequestResetPasswordResponse {
  message: string;
}

export interface PasswordResetResponse {
  email: string;
  message: string;
}

export interface WelcomeEmailResponse {
  message: string;
}

export interface TokenValidationResponse {
  isValid: boolean;
  user: AuthUserResponse | null;
}