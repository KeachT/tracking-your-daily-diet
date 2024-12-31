/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type MealRecordCreateFormInputValues = {
    date?: string;
    category?: string;
};
export declare type MealRecordCreateFormValidationValues = {
    date?: ValidationFunction<string>;
    category?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MealRecordCreateFormOverridesProps = {
    MealRecordCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    category?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type MealRecordCreateFormProps = React.PropsWithChildren<{
    overrides?: MealRecordCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MealRecordCreateFormInputValues) => MealRecordCreateFormInputValues;
    onSuccess?: (fields: MealRecordCreateFormInputValues) => void;
    onError?: (fields: MealRecordCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MealRecordCreateFormInputValues) => MealRecordCreateFormInputValues;
    onValidate?: MealRecordCreateFormValidationValues;
} & React.CSSProperties>;
export default function MealRecordCreateForm(props: MealRecordCreateFormProps): React.ReactElement;
