/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Food } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FoodUpdateFormInputValues = {
    name?: string;
    calories?: number;
    protein?: number;
    carbohydrates?: number;
    fat?: number;
};
export declare type FoodUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    calories?: ValidationFunction<number>;
    protein?: ValidationFunction<number>;
    carbohydrates?: ValidationFunction<number>;
    fat?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FoodUpdateFormOverridesProps = {
    FoodUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    calories?: PrimitiveOverrideProps<TextFieldProps>;
    protein?: PrimitiveOverrideProps<TextFieldProps>;
    carbohydrates?: PrimitiveOverrideProps<TextFieldProps>;
    fat?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FoodUpdateFormProps = React.PropsWithChildren<{
    overrides?: FoodUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    food?: Food;
    onSubmit?: (fields: FoodUpdateFormInputValues) => FoodUpdateFormInputValues;
    onSuccess?: (fields: FoodUpdateFormInputValues) => void;
    onError?: (fields: FoodUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FoodUpdateFormInputValues) => FoodUpdateFormInputValues;
    onValidate?: FoodUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FoodUpdateForm(props: FoodUpdateFormProps): React.ReactElement;
