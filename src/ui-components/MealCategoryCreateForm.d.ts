/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MealCategoryCreateFormInputValues = {
    name?: string;
};
export declare type MealCategoryCreateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MealCategoryCreateFormOverridesProps = {
    MealCategoryCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type MealCategoryCreateFormProps = React.PropsWithChildren<{
    overrides?: MealCategoryCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MealCategoryCreateFormInputValues) => MealCategoryCreateFormInputValues;
    onSuccess?: (fields: MealCategoryCreateFormInputValues) => void;
    onError?: (fields: MealCategoryCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MealCategoryCreateFormInputValues) => MealCategoryCreateFormInputValues;
    onValidate?: MealCategoryCreateFormValidationValues;
} & React.CSSProperties>;
export default function MealCategoryCreateForm(props: MealCategoryCreateFormProps): React.ReactElement;
