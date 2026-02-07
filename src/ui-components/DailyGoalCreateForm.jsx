/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DailyGoal } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function DailyGoalCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    calories: "",
    protein: "",
    carbohydrates: "",
    fat: "",
  };
  const [calories, setCalories] = React.useState(initialValues.calories);
  const [protein, setProtein] = React.useState(initialValues.protein);
  const [carbohydrates, setCarbohydrates] = React.useState(
    initialValues.carbohydrates
  );
  const [fat, setFat] = React.useState(initialValues.fat);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCalories(initialValues.calories);
    setProtein(initialValues.protein);
    setCarbohydrates(initialValues.carbohydrates);
    setFat(initialValues.fat);
    setErrors({});
  };
  const validations = {
    calories: [],
    protein: [],
    carbohydrates: [],
    fat: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          calories,
          protein,
          carbohydrates,
          fat,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(new DailyGoal(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "DailyGoalCreateForm")}
      {...rest}
    >
      <TextField
        label="Calories"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={calories}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              calories: value,
              protein,
              carbohydrates,
              fat,
            };
            const result = onChange(modelFields);
            value = result?.calories ?? value;
          }
          if (errors.calories?.hasError) {
            runValidationTasks("calories", value);
          }
          setCalories(value);
        }}
        onBlur={() => runValidationTasks("calories", calories)}
        errorMessage={errors.calories?.errorMessage}
        hasError={errors.calories?.hasError}
        {...getOverrideProps(overrides, "calories")}
      ></TextField>
      <TextField
        label="Protein"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={protein}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              calories,
              protein: value,
              carbohydrates,
              fat,
            };
            const result = onChange(modelFields);
            value = result?.protein ?? value;
          }
          if (errors.protein?.hasError) {
            runValidationTasks("protein", value);
          }
          setProtein(value);
        }}
        onBlur={() => runValidationTasks("protein", protein)}
        errorMessage={errors.protein?.errorMessage}
        hasError={errors.protein?.hasError}
        {...getOverrideProps(overrides, "protein")}
      ></TextField>
      <TextField
        label="Carbohydrates"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={carbohydrates}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              calories,
              protein,
              carbohydrates: value,
              fat,
            };
            const result = onChange(modelFields);
            value = result?.carbohydrates ?? value;
          }
          if (errors.carbohydrates?.hasError) {
            runValidationTasks("carbohydrates", value);
          }
          setCarbohydrates(value);
        }}
        onBlur={() => runValidationTasks("carbohydrates", carbohydrates)}
        errorMessage={errors.carbohydrates?.errorMessage}
        hasError={errors.carbohydrates?.hasError}
        {...getOverrideProps(overrides, "carbohydrates")}
      ></TextField>
      <TextField
        label="Fat"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={fat}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              calories,
              protein,
              carbohydrates,
              fat: value,
            };
            const result = onChange(modelFields);
            value = result?.fat ?? value;
          }
          if (errors.fat?.hasError) {
            runValidationTasks("fat", value);
          }
          setFat(value);
        }}
        onBlur={() => runValidationTasks("fat", fat)}
        errorMessage={errors.fat?.errorMessage}
        hasError={errors.fat?.hasError}
        {...getOverrideProps(overrides, "fat")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
