/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { DailyGoal } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DailyGoalUpdateFormInputValues = {
    calories?: number;
    protein?: number;
    carbohydrates?: number;
    fat?: number;
};
export declare type DailyGoalUpdateFormValidationValues = {
    calories?: ValidationFunction<number>;
    protein?: ValidationFunction<number>;
    carbohydrates?: ValidationFunction<number>;
    fat?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DailyGoalUpdateFormOverridesProps = {
    DailyGoalUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    calories?: PrimitiveOverrideProps<TextFieldProps>;
    protein?: PrimitiveOverrideProps<TextFieldProps>;
    carbohydrates?: PrimitiveOverrideProps<TextFieldProps>;
    fat?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DailyGoalUpdateFormProps = React.PropsWithChildren<{
    overrides?: DailyGoalUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    dailyGoal?: DailyGoal;
    onSubmit?: (fields: DailyGoalUpdateFormInputValues) => DailyGoalUpdateFormInputValues;
    onSuccess?: (fields: DailyGoalUpdateFormInputValues) => void;
    onError?: (fields: DailyGoalUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DailyGoalUpdateFormInputValues) => DailyGoalUpdateFormInputValues;
    onValidate?: DailyGoalUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DailyGoalUpdateForm(props: DailyGoalUpdateFormProps): React.ReactElement;
