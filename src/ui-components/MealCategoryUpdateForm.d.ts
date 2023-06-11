/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { MealCategory } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MealCategoryUpdateFormInputValues = {
    name?: string;
};
export declare type MealCategoryUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MealCategoryUpdateFormOverridesProps = {
    MealCategoryUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type MealCategoryUpdateFormProps = React.PropsWithChildren<{
    overrides?: MealCategoryUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    mealCategory?: MealCategory;
    onSubmit?: (fields: MealCategoryUpdateFormInputValues) => MealCategoryUpdateFormInputValues;
    onSuccess?: (fields: MealCategoryUpdateFormInputValues) => void;
    onError?: (fields: MealCategoryUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MealCategoryUpdateFormInputValues) => MealCategoryUpdateFormInputValues;
    onValidate?: MealCategoryUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MealCategoryUpdateForm(props: MealCategoryUpdateFormProps): React.ReactElement;
