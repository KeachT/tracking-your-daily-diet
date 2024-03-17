/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { MealDate } from "../models";
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
export declare type MealDateUpdateFormInputValues = {
    date?: string;
};
export declare type MealDateUpdateFormValidationValues = {
    date?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MealDateUpdateFormOverridesProps = {
    MealDateUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MealDateUpdateFormProps = React.PropsWithChildren<{
    overrides?: MealDateUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    mealDate?: MealDate;
    onSubmit?: (fields: MealDateUpdateFormInputValues) => MealDateUpdateFormInputValues;
    onSuccess?: (fields: MealDateUpdateFormInputValues) => void;
    onError?: (fields: MealDateUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MealDateUpdateFormInputValues) => MealDateUpdateFormInputValues;
    onValidate?: MealDateUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MealDateUpdateForm(props: MealDateUpdateFormProps): React.ReactElement;
