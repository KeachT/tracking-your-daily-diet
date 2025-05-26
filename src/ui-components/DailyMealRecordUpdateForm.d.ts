/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { DailyMealRecord } from "../models";
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
export declare type DailyMealRecordUpdateFormInputValues = {
    date?: string;
};
export declare type DailyMealRecordUpdateFormValidationValues = {
    date?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DailyMealRecordUpdateFormOverridesProps = {
    DailyMealRecordUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DailyMealRecordUpdateFormProps = React.PropsWithChildren<{
    overrides?: DailyMealRecordUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    dailyMealRecord?: DailyMealRecord;
    onSubmit?: (fields: DailyMealRecordUpdateFormInputValues) => DailyMealRecordUpdateFormInputValues;
    onSuccess?: (fields: DailyMealRecordUpdateFormInputValues) => void;
    onError?: (fields: DailyMealRecordUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DailyMealRecordUpdateFormInputValues) => DailyMealRecordUpdateFormInputValues;
    onValidate?: DailyMealRecordUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DailyMealRecordUpdateForm(props: DailyMealRecordUpdateFormProps): React.ReactElement;
