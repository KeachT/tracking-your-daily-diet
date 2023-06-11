/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FoodCreateFormInputValues = {
    name?: string;
    calories?: number;
    protein?: number;
    carbohydrates?: number;
    fat?: number;
};
export declare type FoodCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    calories?: ValidationFunction<number>;
    protein?: ValidationFunction<number>;
    carbohydrates?: ValidationFunction<number>;
    fat?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FoodCreateFormOverridesProps = {
    FoodCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    calories?: PrimitiveOverrideProps<TextFieldProps>;
    protein?: PrimitiveOverrideProps<TextFieldProps>;
    carbohydrates?: PrimitiveOverrideProps<TextFieldProps>;
    fat?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FoodCreateFormProps = React.PropsWithChildren<{
    overrides?: FoodCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FoodCreateFormInputValues) => FoodCreateFormInputValues;
    onSuccess?: (fields: FoodCreateFormInputValues) => void;
    onError?: (fields: FoodCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FoodCreateFormInputValues) => FoodCreateFormInputValues;
    onValidate?: FoodCreateFormValidationValues;
} & React.CSSProperties>;
export default function FoodCreateForm(props: FoodCreateFormProps): React.ReactElement;
