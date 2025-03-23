/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { UserMealPreset } from "../models";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserMealPresetUpdateFormInputValues = {};
export declare type UserMealPresetUpdateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserMealPresetUpdateFormOverridesProps = {
    UserMealPresetUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type UserMealPresetUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserMealPresetUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    userMealPreset?: UserMealPreset;
    onSubmit?: (fields: UserMealPresetUpdateFormInputValues) => UserMealPresetUpdateFormInputValues;
    onSuccess?: (fields: UserMealPresetUpdateFormInputValues) => void;
    onError?: (fields: UserMealPresetUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserMealPresetUpdateFormInputValues) => UserMealPresetUpdateFormInputValues;
    onValidate?: UserMealPresetUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserMealPresetUpdateForm(props: UserMealPresetUpdateFormProps): React.ReactElement;
