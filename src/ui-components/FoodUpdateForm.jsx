/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Food } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function FoodUpdateForm(props) {
  const {
    id: idProp,
    food: foodModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    calories: "",
    protein: "",
    carbohydrates: "",
    fat: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [calories, setCalories] = React.useState(initialValues.calories);
  const [protein, setProtein] = React.useState(initialValues.protein);
  const [carbohydrates, setCarbohydrates] = React.useState(
    initialValues.carbohydrates
  );
  const [fat, setFat] = React.useState(initialValues.fat);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = foodRecord
      ? { ...initialValues, ...foodRecord }
      : initialValues;
    setName(cleanValues.name);
    setCalories(cleanValues.calories);
    setProtein(cleanValues.protein);
    setCarbohydrates(cleanValues.carbohydrates);
    setFat(cleanValues.fat);
    setErrors({});
  };
  const [foodRecord, setFoodRecord] = React.useState(foodModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Food, idProp)
        : foodModelProp;
      setFoodRecord(record);
    };
    queryData();
  }, [idProp, foodModelProp]);
  React.useEffect(resetStateValues, [foodRecord]);
  const validations = {
    name: [{ type: "Required" }],
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
          name,
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
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Food.copyOf(foodRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "FoodUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              calories,
              protein,
              carbohydrates,
              fat,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
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
              name,
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
              name,
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
              name,
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
              name,
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
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || foodModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || foodModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
