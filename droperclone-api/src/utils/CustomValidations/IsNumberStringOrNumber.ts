/* eslint-disable no-unused-vars */
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments
} from "class-validator";

@ValidatorConstraint({ name: 'IsNumberStringOrNumberConstraint', async: false })
export class IsNumberStringOrNumberConstraint implements ValidatorConstraintInterface {
  validate(text: any, args: ValidationArguments) {
    return !Number.isNaN(parseFloat(text));
  }

  defaultMessage(args: ValidationArguments) {
    return "$property must be a number";
  }
}

export const IsNumberStringOrNumber = (options?: ValidationOptions) => (object: Object, propertyName: string) => {
  registerDecorator({
    target: object.constructor,
    propertyName,
    options,
    constraints: [],
    validator: IsNumberStringOrNumberConstraint
  });
};
