/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type DailyGoalCreateFormInputValues = {
    calories?: number;
    protein?: number;
    carbohydrates?: number;
    fat?: number;
};
export declare type DailyGoalCreateFormValidationValues = {
    calories?: ValidationFunction<number>;
    protein?: ValidationFunction<number>;
    carbohydrates?: ValidationFunction<number>;
    fat?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DailyGoalCreateFormOverridesProps = {
    DailyGoalCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    calories?: PrimitiveOverrideProps<TextFieldProps>;
    protein?: PrimitiveOverrideProps<TextFieldProps>;
    carbohydrates?: PrimitiveOverrideProps<TextFieldProps>;
    fat?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DailyGoalCreateFormProps = React.PropsWithChildren<{
    overrides?: DailyGoalCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DailyGoalCreateFormInputValues) => DailyGoalCreateFormInputValues;
    onSuccess?: (fields: DailyGoalCreateFormInputValues) => void;
    onError?: (fields: DailyGoalCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DailyGoalCreateFormInputValues) => DailyGoalCreateFormInputValues;
    onValidate?: DailyGoalCreateFormValidationValues;
} & React.CSSProperties>;
export default function DailyGoalCreateForm(props: DailyGoalCreateFormProps): React.ReactElement;
