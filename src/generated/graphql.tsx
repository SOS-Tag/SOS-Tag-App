import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

/** Assign sheet to user input */
export type AssignSheetToUserInput = {
  advanceDirectives?: InputMaybe<Scalars['Boolean']>;
  allergies?: InputMaybe<Scalars['String']>;
  bloodType?: InputMaybe<Scalars['String']>;
  currentTreatment?: InputMaybe<Scalars['String']>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']>;
  emergencyContacts?: InputMaybe<Array<InputMaybe<SheetContactInput>>>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  fname?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lname?: InputMaybe<Scalars['String']>;
  medicalHistory?: InputMaybe<Scalars['String']>;
  nationality?: InputMaybe<Scalars['String']>;
  organDonor?: InputMaybe<Scalars['Boolean']>;
  sex?: InputMaybe<Scalars['String']>;
  smoker?: InputMaybe<Scalars['Boolean']>;
  treatingDoctor?: InputMaybe<SheetDoctorContactInput>;
};

/** Boolean response */
export type BooleanResponse = {
  __typename?: 'BooleanResponse';
  error?: Maybe<ExtendedError>;
  response?: Maybe<Scalars['Boolean']>;
};

/** Change password input */
export type ChangePasswordInput = {
  password?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

/** Error with message and the associated field */
export type ExtendedError = {
  __typename?: 'ExtendedError';
  code?: Maybe<Scalars['Float']>;
  fields?: Maybe<Array<Maybe<InputError>>>;
  message?: Maybe<Scalars['String']>;
  retryAfter?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  wwwAuthenticate?: Maybe<Scalars['String']>;
};

/** Error with message */
export type InputError = {
  __typename?: 'InputError';
  detail?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** Login input */
export type LoginInput = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

/** Login response */
export type LoginResponse = {
  __typename?: 'LoginResponse';
  error?: Maybe<ExtendedError>;
  response?: Maybe<LoginResponseData>;
};

/** Login response data */
export type LoginResponseData = {
  __typename?: 'LoginResponseData';
  accessToken?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

/** Login with Google input */
export type LoginWithGoogleInput = {
  token?: InputMaybe<Scalars['String']>;
  tokenId?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Assign an unassigned sheet to the current user. */
  assignSheetToUser?: Maybe<SheetResponse>;
  /** Change the password of a specific user. It implies that the user has already made a modification request, as a token has to be generated to retrieve the user id. */
  changePassword?: Maybe<UserResponse>;
  /** Confirm and validate a user. Validation is based on the existence of the email address used during the registration process. */
  confirmUser?: Maybe<BooleanResponse>;
  /** Create a QR Code with a custom id. By default, the QR Code is not used. */
  createQRCode?: Maybe<QrCodeResponse>;
  /** Create an empty sheet. */
  createSheet?: Maybe<SheetsResponse>;
  /** Send an email containing a link that redirect to change password dedicated route on the frontend. The link contains a token that, once decoded, will reveal the user id. */
  forgotPassword?: Maybe<BooleanResponse>;
  /** Log the user in using his email address and his password. */
  login?: Maybe<LoginResponse>;
  /** Log the user in using his google account. */
  loginWithGoogle?: Maybe<LoginResponse>;
  /** Log the user out. He will no longer be authenticated and will not have access to restricted and private resources anymore. */
  logout?: Maybe<BooleanResponse>;
  /** Register a new user. To complete the registration, the user will have to confirm his account by following the link that has been sent to him by email. */
  register?: Maybe<UserResponse>;
  /** Resend an email containing a link to confirm the account of a specific user. The previous confirmation link sent to him when he registered can indeed be expired. */
  resendConfirmationLink?: Maybe<BooleanResponse>;
  /** Update the currently logged in user. */
  updateCurrentUser?: Maybe<UserResponse>;
  /** Update one of the current user sheets. */
  updateCurrentUserSheet?: Maybe<SheetResponse>;
  /** Update user. */
  updateUser?: Maybe<UserResponse>;
};


export type MutationAssignSheetToUserArgs = {
  assignSheetToUserInput?: InputMaybe<AssignSheetToUserInput>;
};


export type MutationChangePasswordArgs = {
  changePasswordInput?: InputMaybe<ChangePasswordInput>;
};


export type MutationConfirmUserArgs = {
  token?: InputMaybe<Scalars['String']>;
};


export type MutationCreateSheetArgs = {
  count?: InputMaybe<Scalars['Float']>;
};


export type MutationForgotPasswordArgs = {
  userEmail?: InputMaybe<Scalars['String']>;
};


export type MutationLoginArgs = {
  loginInput?: InputMaybe<LoginInput>;
};


export type MutationLoginWithGoogleArgs = {
  loginInput?: InputMaybe<LoginWithGoogleInput>;
};


export type MutationRegisterArgs = {
  registerInput?: InputMaybe<RegisterInput>;
};


export type MutationResendConfirmationLinkArgs = {
  userEmail?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateCurrentUserArgs = {
  updateCurrentUserInput?: InputMaybe<UpdateCurrentUserInput>;
};


export type MutationUpdateCurrentUserSheetArgs = {
  updateCurrentUserSheetInput?: InputMaybe<UpdateCurrentUserSheetInput>;
};


export type MutationUpdateUserArgs = {
  updateUserInput?: InputMaybe<UpdateUserInput>;
};

/** Paginated QR Code response */
export type PaginatedQrCodeResponse = {
  __typename?: 'PaginatedQRCodeResponse';
  currentPage?: Maybe<Scalars['Int']>;
  error?: Maybe<ExtendedError>;
  hasMore?: Maybe<Scalars['Boolean']>;
  items?: Maybe<Array<Maybe<QrCode>>>;
  totalPages?: Maybe<Scalars['Int']>;
};

/** Paginator input */
export type PaginatorInput = {
  limit?: InputMaybe<Scalars['Float']>;
  page?: InputMaybe<Scalars['Float']>;
};

/** QR Code Schema */
export type QrCode = {
  __typename?: 'QRCode';
  _id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['String']>;
  inUse?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['String']>;
};

/** QR Code response */
export type QrCodeResponse = {
  __typename?: 'QRCodeResponse';
  error?: Maybe<ExtendedError>;
  response?: Maybe<QrCode>;
};

/** QR Codes response */
export type QrCodesResponse = {
  __typename?: 'QRCodesResponse';
  error?: Maybe<ExtendedError>;
  response?: Maybe<Array<QrCode>>;
};

export type Query = {
  __typename?: 'Query';
  /** Get the user currently logged in. */
  currentUser?: Maybe<UserResponse>;
  /** Get all QR Codes. */
  qrCodes?: Maybe<QrCodesResponse>;
  /** Get QR Codes page by page (by fixing the page and the limit of QR Codes by page). */
  qrCodesWithPagination?: Maybe<PaginatedQrCodeResponse>;
  /** Get a sheet by its id as an admin. */
  sheetById?: Maybe<SheetResponse>;
  /** Get an active sheet by its id. */
  sheetByScanning?: Maybe<SheetResponse>;
  /** Get all sheets. */
  sheets?: Maybe<SheetsResponse>;
  /** Get the sheets of the specified user. */
  sheetsCurrentUser?: Maybe<SheetsResponse>;
  /** Get a user by his id. */
  userById?: Maybe<UserResponse>;
  /** Get all users. */
  users?: Maybe<UsersResponse>;
  /** Return a simple welcoming message. */
  welcome?: Maybe<Scalars['String']>;
};


export type QueryQrCodesWithPaginationArgs = {
  paginatorInput?: InputMaybe<PaginatorInput>;
};


export type QuerySheetByIdArgs = {
  sheetId?: InputMaybe<Scalars['String']>;
};


export type QuerySheetByScanningArgs = {
  sheetId?: InputMaybe<Scalars['String']>;
};


export type QueryUserByIdArgs = {
  userId?: InputMaybe<Scalars['String']>;
};

/** Register input */
export type RegisterInput = {
  email?: InputMaybe<Scalars['String']>;
  fname?: InputMaybe<Scalars['String']>;
  lname?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

/** Sheet Schema */
export type Sheet = {
  __typename?: 'Sheet';
  _id?: Maybe<Scalars['String']>;
  advanceDirectives?: Maybe<Scalars['Boolean']>;
  allergies?: Maybe<Scalars['String']>;
  bloodType?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  currentTreatment?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['String']>;
  emergencyContacts?: Maybe<Array<Maybe<SheetContact>>>;
  enabled?: Maybe<Scalars['Boolean']>;
  fname?: Maybe<Scalars['String']>;
  lname?: Maybe<Scalars['String']>;
  medicalHistory?: Maybe<Scalars['String']>;
  nationality?: Maybe<Scalars['String']>;
  organDonor?: Maybe<Scalars['Boolean']>;
  sex?: Maybe<Scalars['String']>;
  smoker?: Maybe<Scalars['Boolean']>;
  treatingDoctor?: Maybe<SheetDoctorContact>;
  updatedAt?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['String']>;
};

/** Sheet Contact Schema */
export type SheetContact = {
  __typename?: 'SheetContact';
  fname?: Maybe<Scalars['String']>;
  lname?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};

/** Sheet emergency contact field to be changed with an update operation */
export type SheetContactInput = {
  fname?: InputMaybe<Scalars['String']>;
  lname?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
};

/** Sheet Treating Doctor Contact Schema */
export type SheetDoctorContact = {
  __typename?: 'SheetDoctorContact';
  fname?: Maybe<Scalars['String']>;
  lname?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

/** Sheet doctor contact field to be changed with an update operation */
export type SheetDoctorContactInput = {
  fname?: InputMaybe<Scalars['String']>;
  lname?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

/** Sheet response */
export type SheetResponse = {
  __typename?: 'SheetResponse';
  error?: Maybe<ExtendedError>;
  response?: Maybe<Sheet>;
};

/** Sheets response */
export type SheetsResponse = {
  __typename?: 'SheetsResponse';
  error?: Maybe<ExtendedError>;
  response?: Maybe<Array<Sheet>>;
};

/** Update currently logged in user input */
export type UpdateCurrentUserInput = {
  activated?: InputMaybe<Scalars['Boolean']>;
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  fname?: InputMaybe<Scalars['String']>;
  lname?: InputMaybe<Scalars['String']>;
  nationality?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  zipCode?: InputMaybe<Scalars['String']>;
};

/** Sheet fields to be changed with an update operation */
export type UpdateCurrentUserSheetChangesInput = {
  advanceDirectives?: InputMaybe<Scalars['Boolean']>;
  allergies?: InputMaybe<Scalars['String']>;
  bloodType?: InputMaybe<Scalars['String']>;
  currentTreatment?: InputMaybe<Scalars['String']>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']>;
  emergencyContacts?: InputMaybe<Array<InputMaybe<SheetContactInput>>>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  fname?: InputMaybe<Scalars['String']>;
  lname?: InputMaybe<Scalars['String']>;
  medicalHistory?: InputMaybe<Scalars['String']>;
  nationality?: InputMaybe<Scalars['String']>;
  organDonor?: InputMaybe<Scalars['Boolean']>;
  sex?: InputMaybe<Scalars['String']>;
  smoker?: InputMaybe<Scalars['Boolean']>;
  treatingDoctor?: InputMaybe<SheetDoctorContactInput>;
};

/** Update Sheet input */
export type UpdateCurrentUserSheetInput = {
  changes?: InputMaybe<UpdateCurrentUserSheetChangesInput>;
  id?: InputMaybe<Scalars['String']>;
};

/** Update user input */
export type UpdateUserInput = {
  activated?: InputMaybe<Scalars['Boolean']>;
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  fname?: InputMaybe<Scalars['String']>;
  lname?: InputMaybe<Scalars['String']>;
  nationality?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tokenVersion?: InputMaybe<Scalars['Float']>;
  zipCode?: InputMaybe<Scalars['String']>;
};

/** User Schema */
export type User = {
  __typename?: 'User';
  _id?: Maybe<Scalars['ID']>;
  activated?: Maybe<Scalars['Boolean']>;
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  fname?: Maybe<Scalars['String']>;
  lname?: Maybe<Scalars['String']>;
  nationality?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  tokenVersion?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
};

/** User response */
export type UserResponse = {
  __typename?: 'UserResponse';
  error?: Maybe<ExtendedError>;
  response?: Maybe<User>;
};

/** Users response */
export type UsersResponse = {
  __typename?: 'UsersResponse';
  error?: Maybe<ExtendedError>;
  response?: Maybe<Array<User>>;
};

export type AssignSheetToUserMutationVariables = Exact<{
  assignSheetToUserInput?: InputMaybe<AssignSheetToUserInput>;
}>;


export type AssignSheetToUserMutation = { __typename?: 'Mutation', assignSheetToUser?: { __typename?: 'SheetResponse', response?: { __typename?: 'Sheet', _id?: string | null } | null, error?: { __typename?: 'ExtendedError', type?: string | null, code?: number | null, title?: string | null, message?: string | null, timestamp?: string | null, fields?: Array<{ __typename?: 'InputError', type?: string | null, name?: string | null, detail?: string | null } | null> | null } | null } | null };

export type ChangePasswordMutationVariables = Exact<{
  changePasswordInput?: InputMaybe<ChangePasswordInput>;
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword?: { __typename?: 'UserResponse', response?: { __typename?: 'User', email?: string | null } | null, error?: { __typename?: 'ExtendedError', type?: string | null, code?: number | null, title?: string | null, message?: string | null, timestamp?: string | null, fields?: Array<{ __typename?: 'InputError', type?: string | null, name?: string | null, detail?: string | null } | null> | null } | null } | null };

export type ConfirmUserMutationVariables = Exact<{
  token?: InputMaybe<Scalars['String']>;
}>;


export type ConfirmUserMutation = { __typename?: 'Mutation', confirmUser?: { __typename?: 'BooleanResponse', response?: boolean | null, error?: { __typename?: 'ExtendedError', type?: string | null, code?: number | null, title?: string | null, message?: string | null, timestamp?: string | null, fields?: Array<{ __typename?: 'InputError', type?: string | null, name?: string | null, detail?: string | null } | null> | null } | null } | null };

export type ForgotPasswordMutationVariables = Exact<{
  userEmail?: InputMaybe<Scalars['String']>;
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword?: { __typename?: 'BooleanResponse', response?: boolean | null } | null };

export type LoginMutationVariables = Exact<{
  loginInput?: InputMaybe<LoginInput>;
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'LoginResponse', response?: { __typename?: 'LoginResponseData', accessToken?: string | null, user?: { __typename?: 'User', email?: string | null } | null } | null, error?: { __typename?: 'ExtendedError', type?: string | null, code?: number | null, title?: string | null, message?: string | null, timestamp?: string | null, fields?: Array<{ __typename?: 'InputError', type?: string | null, name?: string | null, detail?: string | null } | null> | null } | null } | null };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout?: { __typename?: 'BooleanResponse', response?: boolean | null, error?: { __typename?: 'ExtendedError', type?: string | null, code?: number | null, title?: string | null, message?: string | null, timestamp?: string | null, fields?: Array<{ __typename?: 'InputError', type?: string | null, name?: string | null, detail?: string | null } | null> | null } | null } | null };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', currentUser?: { __typename?: 'UserResponse', response?: { __typename?: 'User', fname?: string | null, lname?: string | null, email?: string | null, nationality?: string | null, phone?: string | null, address?: string | null, zipCode?: string | null, city?: string | null, confirmed?: boolean | null, activated?: boolean | null } | null, error?: { __typename?: 'ExtendedError', type?: string | null, code?: number | null, title?: string | null, message?: string | null, timestamp?: string | null, fields?: Array<{ __typename?: 'InputError', type?: string | null, name?: string | null, detail?: string | null } | null> | null } | null } | null };

export type RegisterMutationVariables = Exact<{
  registerInput?: InputMaybe<RegisterInput>;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register?: { __typename?: 'UserResponse', response?: { __typename?: 'User', fname?: string | null, lname?: string | null, email?: string | null } | null, error?: { __typename?: 'ExtendedError', type?: string | null, code?: number | null, title?: string | null, message?: string | null, timestamp?: string | null, fields?: Array<{ __typename?: 'InputError', type?: string | null, name?: string | null, detail?: string | null } | null> | null } | null } | null };

export type SheetsCurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type SheetsCurrentUserQuery = { __typename?: 'Query', sheetsCurrentUser?: { __typename?: 'SheetsResponse', response?: Array<{ __typename?: 'Sheet', _id?: string | null, advanceDirectives?: boolean | null, allergies?: string | null, bloodType?: string | null, createdAt?: string | null, currentTreatment?: string | null, dateOfBirth?: string | null, enabled?: boolean | null, fname?: string | null, lname?: string | null, medicalHistory?: string | null, nationality?: string | null, organDonor?: boolean | null, sex?: string | null, smoker?: boolean | null, updatedAt?: string | null, user?: string | null, emergencyContacts?: Array<{ __typename?: 'SheetContact', fname?: string | null, lname?: string | null, phone?: string | null, role?: string | null } | null> | null, treatingDoctor?: { __typename?: 'SheetDoctorContact', fname?: string | null, lname?: string | null, phone?: string | null } | null }> | null, error?: { __typename?: 'ExtendedError', type?: string | null, code?: number | null, title?: string | null, message?: string | null, timestamp?: string | null, fields?: Array<{ __typename?: 'InputError', type?: string | null, name?: string | null, detail?: string | null } | null> | null } | null } | null };

export type UpdateCurrentUserMutationVariables = Exact<{
  updateCurrentUserInput?: InputMaybe<UpdateCurrentUserInput>;
}>;


export type UpdateCurrentUserMutation = { __typename?: 'Mutation', updateCurrentUser?: { __typename?: 'UserResponse', error?: { __typename?: 'ExtendedError', title?: string | null, message?: string | null } | null } | null };

export type UpdateCurrentUserSheetMutationVariables = Exact<{
  updateCurrentUserSheetInput?: InputMaybe<UpdateCurrentUserSheetInput>;
}>;


export type UpdateCurrentUserSheetMutation = { __typename?: 'Mutation', updateCurrentUserSheet?: { __typename?: 'SheetResponse', response?: { __typename?: 'Sheet', enabled?: boolean | null, fname?: string | null, lname?: string | null, sex?: string | null, dateOfBirth?: string | null, nationality?: string | null, bloodType?: string | null, smoker?: boolean | null, organDonor?: boolean | null, advanceDirectives?: boolean | null, allergies?: string | null, medicalHistory?: string | null, currentTreatment?: string | null, treatingDoctor?: { __typename?: 'SheetDoctorContact', fname?: string | null, lname?: string | null, phone?: string | null } | null, emergencyContacts?: Array<{ __typename?: 'SheetContact', fname?: string | null, lname?: string | null, role?: string | null, phone?: string | null } | null> | null } | null, error?: { __typename?: 'ExtendedError', type?: string | null, code?: number | null, title?: string | null, message?: string | null, timestamp?: string | null, fields?: Array<{ __typename?: 'InputError', type?: string | null, name?: string | null, detail?: string | null } | null> | null } | null } | null };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users?: { __typename?: 'UsersResponse', response?: Array<{ __typename?: 'User', _id?: string | null, fname?: string | null, lname?: string | null }> | null, error?: { __typename?: 'ExtendedError', type?: string | null, code?: number | null, title?: string | null, message?: string | null, timestamp?: string | null, fields?: Array<{ __typename?: 'InputError', type?: string | null, name?: string | null, detail?: string | null } | null> | null } | null } | null };

export type WelcomeQueryVariables = Exact<{ [key: string]: never; }>;


export type WelcomeQuery = { __typename?: 'Query', welcome?: string | null };


export const AssignSheetToUserDocument = gql`
    mutation AssignSheetToUser($assignSheetToUserInput: AssignSheetToUserInput) {
  assignSheetToUser(assignSheetToUserInput: $assignSheetToUserInput) {
    response {
      _id
    }
    error {
      type
      code
      title
      message
      timestamp
      fields {
        type
        name
        detail
      }
    }
  }
}
    `;
export type AssignSheetToUserMutationFn = Apollo.MutationFunction<AssignSheetToUserMutation, AssignSheetToUserMutationVariables>;

/**
 * __useAssignSheetToUserMutation__
 *
 * To run a mutation, you first call `useAssignSheetToUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAssignSheetToUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [assignSheetToUserMutation, { data, loading, error }] = useAssignSheetToUserMutation({
 *   variables: {
 *      assignSheetToUserInput: // value for 'assignSheetToUserInput'
 *   },
 * });
 */
export function useAssignSheetToUserMutation(baseOptions?: Apollo.MutationHookOptions<AssignSheetToUserMutation, AssignSheetToUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AssignSheetToUserMutation, AssignSheetToUserMutationVariables>(AssignSheetToUserDocument, options);
      }
export type AssignSheetToUserMutationHookResult = ReturnType<typeof useAssignSheetToUserMutation>;
export type AssignSheetToUserMutationResult = Apollo.MutationResult<AssignSheetToUserMutation>;
export type AssignSheetToUserMutationOptions = Apollo.BaseMutationOptions<AssignSheetToUserMutation, AssignSheetToUserMutationVariables>;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($changePasswordInput: ChangePasswordInput) {
  changePassword(changePasswordInput: $changePasswordInput) {
    response {
      email
    }
    error {
      type
      code
      title
      message
      timestamp
      fields {
        type
        name
        detail
      }
    }
  }
}
    `;
export type ChangePasswordMutationFn = Apollo.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      changePasswordInput: // value for 'changePasswordInput'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, options);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const ConfirmUserDocument = gql`
    mutation ConfirmUser($token: String) {
  confirmUser(token: $token) {
    response
    error {
      type
      code
      title
      message
      timestamp
      fields {
        type
        name
        detail
      }
    }
  }
}
    `;
export type ConfirmUserMutationFn = Apollo.MutationFunction<ConfirmUserMutation, ConfirmUserMutationVariables>;

/**
 * __useConfirmUserMutation__
 *
 * To run a mutation, you first call `useConfirmUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmUserMutation, { data, loading, error }] = useConfirmUserMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useConfirmUserMutation(baseOptions?: Apollo.MutationHookOptions<ConfirmUserMutation, ConfirmUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ConfirmUserMutation, ConfirmUserMutationVariables>(ConfirmUserDocument, options);
      }
export type ConfirmUserMutationHookResult = ReturnType<typeof useConfirmUserMutation>;
export type ConfirmUserMutationResult = Apollo.MutationResult<ConfirmUserMutation>;
export type ConfirmUserMutationOptions = Apollo.BaseMutationOptions<ConfirmUserMutation, ConfirmUserMutationVariables>;
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($userEmail: String) {
  forgotPassword(userEmail: $userEmail) {
    response
  }
}
    `;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      userEmail: // value for 'userEmail'
 *   },
 * });
 */
export function useForgotPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, options);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const LoginDocument = gql`
    mutation Login($loginInput: LoginInput) {
  login(loginInput: $loginInput) {
    response {
      accessToken
      user {
        email
      }
    }
    error {
      type
      code
      title
      message
      timestamp
      fields {
        type
        name
        detail
      }
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      loginInput: // value for 'loginInput'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout {
    response
    error {
      type
      code
      title
      message
      timestamp
      fields {
        type
        name
        detail
      }
    }
  }
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const MeDocument = gql`
    query Me {
  currentUser {
    response {
      fname
      lname
      email
      nationality
      phone
      address
      zipCode
      city
      confirmed
      activated
    }
    error {
      type
      code
      title
      message
      timestamp
      fields {
        type
        name
        detail
      }
    }
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const RegisterDocument = gql`
    mutation Register($registerInput: RegisterInput) {
  register(registerInput: $registerInput) {
    response {
      fname
      lname
      email
    }
    error {
      type
      code
      title
      message
      timestamp
      fields {
        type
        name
        detail
      }
    }
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      registerInput: // value for 'registerInput'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const SheetsCurrentUserDocument = gql`
    query SheetsCurrentUser {
  sheetsCurrentUser {
    response {
      _id
      advanceDirectives
      allergies
      bloodType
      createdAt
      currentTreatment
      dateOfBirth
      emergencyContacts {
        fname
        lname
        phone
        role
      }
      enabled
      fname
      lname
      medicalHistory
      nationality
      organDonor
      sex
      smoker
      treatingDoctor {
        fname
        lname
        phone
      }
      updatedAt
      user
    }
    error {
      type
      code
      title
      message
      timestamp
      fields {
        type
        name
        detail
      }
    }
  }
}
    `;

/**
 * __useSheetsCurrentUserQuery__
 *
 * To run a query within a React component, call `useSheetsCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useSheetsCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSheetsCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useSheetsCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<SheetsCurrentUserQuery, SheetsCurrentUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SheetsCurrentUserQuery, SheetsCurrentUserQueryVariables>(SheetsCurrentUserDocument, options);
      }
export function useSheetsCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SheetsCurrentUserQuery, SheetsCurrentUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SheetsCurrentUserQuery, SheetsCurrentUserQueryVariables>(SheetsCurrentUserDocument, options);
        }
export type SheetsCurrentUserQueryHookResult = ReturnType<typeof useSheetsCurrentUserQuery>;
export type SheetsCurrentUserLazyQueryHookResult = ReturnType<typeof useSheetsCurrentUserLazyQuery>;
export type SheetsCurrentUserQueryResult = Apollo.QueryResult<SheetsCurrentUserQuery, SheetsCurrentUserQueryVariables>;
export const UpdateCurrentUserDocument = gql`
    mutation UpdateCurrentUser($updateCurrentUserInput: UpdateCurrentUserInput) {
  updateCurrentUser(updateCurrentUserInput: $updateCurrentUserInput) {
    error {
      title
      message
    }
  }
}
    `;
export type UpdateCurrentUserMutationFn = Apollo.MutationFunction<UpdateCurrentUserMutation, UpdateCurrentUserMutationVariables>;

/**
 * __useUpdateCurrentUserMutation__
 *
 * To run a mutation, you first call `useUpdateCurrentUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCurrentUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCurrentUserMutation, { data, loading, error }] = useUpdateCurrentUserMutation({
 *   variables: {
 *      updateCurrentUserInput: // value for 'updateCurrentUserInput'
 *   },
 * });
 */
export function useUpdateCurrentUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCurrentUserMutation, UpdateCurrentUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCurrentUserMutation, UpdateCurrentUserMutationVariables>(UpdateCurrentUserDocument, options);
      }
export type UpdateCurrentUserMutationHookResult = ReturnType<typeof useUpdateCurrentUserMutation>;
export type UpdateCurrentUserMutationResult = Apollo.MutationResult<UpdateCurrentUserMutation>;
export type UpdateCurrentUserMutationOptions = Apollo.BaseMutationOptions<UpdateCurrentUserMutation, UpdateCurrentUserMutationVariables>;
export const UpdateCurrentUserSheetDocument = gql`
    mutation UpdateCurrentUserSheet($updateCurrentUserSheetInput: UpdateCurrentUserSheetInput) {
  updateCurrentUserSheet(
    updateCurrentUserSheetInput: $updateCurrentUserSheetInput
  ) {
    response {
      enabled
      fname
      lname
      sex
      dateOfBirth
      nationality
      bloodType
      smoker
      organDonor
      advanceDirectives
      allergies
      medicalHistory
      currentTreatment
      treatingDoctor {
        fname
        lname
        phone
      }
      emergencyContacts {
        fname
        lname
        role
        phone
      }
    }
    error {
      type
      code
      title
      message
      timestamp
      fields {
        type
        name
        detail
      }
    }
  }
}
    `;
export type UpdateCurrentUserSheetMutationFn = Apollo.MutationFunction<UpdateCurrentUserSheetMutation, UpdateCurrentUserSheetMutationVariables>;

/**
 * __useUpdateCurrentUserSheetMutation__
 *
 * To run a mutation, you first call `useUpdateCurrentUserSheetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCurrentUserSheetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCurrentUserSheetMutation, { data, loading, error }] = useUpdateCurrentUserSheetMutation({
 *   variables: {
 *      updateCurrentUserSheetInput: // value for 'updateCurrentUserSheetInput'
 *   },
 * });
 */
export function useUpdateCurrentUserSheetMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCurrentUserSheetMutation, UpdateCurrentUserSheetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCurrentUserSheetMutation, UpdateCurrentUserSheetMutationVariables>(UpdateCurrentUserSheetDocument, options);
      }
export type UpdateCurrentUserSheetMutationHookResult = ReturnType<typeof useUpdateCurrentUserSheetMutation>;
export type UpdateCurrentUserSheetMutationResult = Apollo.MutationResult<UpdateCurrentUserSheetMutation>;
export type UpdateCurrentUserSheetMutationOptions = Apollo.BaseMutationOptions<UpdateCurrentUserSheetMutation, UpdateCurrentUserSheetMutationVariables>;
export const UsersDocument = gql`
    query Users {
  users {
    response {
      _id
      fname
      lname
    }
    error {
      type
      code
      title
      message
      timestamp
      fields {
        type
        name
        detail
      }
    }
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;
export const WelcomeDocument = gql`
    query Welcome {
  welcome
}
    `;

/**
 * __useWelcomeQuery__
 *
 * To run a query within a React component, call `useWelcomeQuery` and pass it any options that fit your needs.
 * When your component renders, `useWelcomeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWelcomeQuery({
 *   variables: {
 *   },
 * });
 */
export function useWelcomeQuery(baseOptions?: Apollo.QueryHookOptions<WelcomeQuery, WelcomeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WelcomeQuery, WelcomeQueryVariables>(WelcomeDocument, options);
      }
export function useWelcomeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WelcomeQuery, WelcomeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WelcomeQuery, WelcomeQueryVariables>(WelcomeDocument, options);
        }
export type WelcomeQueryHookResult = ReturnType<typeof useWelcomeQuery>;
export type WelcomeLazyQueryHookResult = ReturnType<typeof useWelcomeLazyQuery>;
export type WelcomeQueryResult = Apollo.QueryResult<WelcomeQuery, WelcomeQueryVariables>;