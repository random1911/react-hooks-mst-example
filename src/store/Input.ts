import { Instance, SnapshotIn, types } from "mobx-state-tree";
import { ChangeEvent } from "react";
import Validator from "validatorjs";

const INPUT_TYPES: string[] = ["text", "email", "tel"];

export const rules = {
  email: "email|min:3",
  text: "string",
  name: "required|string|max:60",
  tel: "string|regex:/^[^A-ZA-z]*$/g"
};

const Input = types
  .model("InputModel", {
    id: types.identifier,
    name: types.maybe(types.string),
    label: types.maybe(types.string),
    value: "",
    error: types.maybe(types.string),
    customRules: types.maybe(types.string),
    inputType: types.optional(
      types.enumeration("InputType", INPUT_TYPES),
      "text"
    ),
    isDirty: false
  })
  .actions(self => {
    const setDirty = () => {
      self.isDirty = true;
    };
    const setValue = (value: string) => {
      self.value = value;
      self.error = "";
    };
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      !self.isDirty && setDirty();
      setValue(e.target.value);
    };
    const setError = (error: string) => {
      self.error = error;
    };

    const validate = () => {
      const validation = new Validator(
        { [self.id]: self.value },
        // @ts-ignore
        { [self.id]: self.customRules || rules[self.inputType] }
      );
      const isValid = validation.passes();
      const error = validation.errors.first(self.id);
      error && setError(error);
      return isValid;
    };

    const reset = () => {
      self.value = "";
      self.error = "";
      self.isDirty = false;
    };
    return {
      setValue,
      onChange,
      setError,
      validate,
      reset
    };
  });

export interface IInput extends Instance<typeof Input> {}
export interface IInputSnapshotIn extends SnapshotIn<typeof Input> {}
export default Input;
