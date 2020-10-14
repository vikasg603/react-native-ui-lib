import React, {useMemo} from 'react';
import {ViewStyle, TextStyle} from 'react-native';
import {
  asBaseComponent,
  forwardRef,
  ForwardRefInjectedProps,
  BaseComponentInjectedProps,
  MarginModifiers,
  PaddingModifiers,
  TypographyModifiers,
  ColorsModifiers
} from '../../commons/new';
import View from '../../components/view';
import {ButtonPropTypes} from '../../components/button';
import {ValidationMessagePosition, Validator} from './types';
import Input, {InputProps} from './Input';
import AccessoryButton from './AccessoryButton';
import ValidationMessage, {ValidationMessageProps} from './ValidationMessage';
import Label, {LabelProps} from './Label';
import FieldContext from './FieldContext';
import useFieldState /* , FieldStateProps */ from './useFieldState';
import FloatingPlaceholder, {FloatingPlaceholderProps} from './FloatingPlaceholder';
import CharCounter, {CharCounterProps} from './CharCounter';

type TextFieldProps = MarginModifiers &
  PaddingModifiers &
  TypographyModifiers &
  ColorsModifiers &
  InputProps &
  LabelProps &
  FloatingPlaceholderProps &
  // We're declaring these props explicitly here for react-docgen
  // FieldStateProps &
  ValidationMessageProps &
  Omit<CharCounterProps, 'maxLength'> & {
    /**
     * Pass to render a leading button/icon
     */
    leadingButton?: ButtonPropTypes;
    /**
     * Pass to render a trailing button/icon
     */
    trailingButton?: ButtonPropTypes;
    /**
     * Pass to add floating placeholder support
     */
    floatingPlaceholder?: boolean;
    /**
     * Custom style for the floating placeholder
     */
    floatingPlaceholderStyle?: TextStyle;
    /**
     * A single or multiple validator. Can be a string (required, email) or custom function.
     */
    validate?: Validator | Validator[];
    /**
     * Should validate when the TextField mounts
     */
    validateOnStart?: boolean;
    /**
     * Should validate when the TextField value changes
     */
    validateOnChange?: boolean;
    /**
     * Should validate when losing focus of TextField
     */
    validateOnBlur?: boolean;
    /**
     * The position of the validation message (top/bottom)
     */
    validationMessagePosition?: ValidationMessagePosition;
    /**
     * Internal style for the field container
     */
    fieldStyle?: ViewStyle;
    /**
     * Container style of the whole component
     */
    containerStyle?: ViewStyle;
  };

type InternalTextFieldProps = TextFieldProps &
  // Omit<FieldStateInjectedProps, keyof InputProps> &
  BaseComponentInjectedProps &
  ForwardRefInjectedProps;

interface StaticMembers {
  validationMessagePositions: typeof ValidationMessagePosition;
}

/**
 * @description: A controlled, customizable TextField with validation support
 * @extends: TextInput
 * @extendslink: https://reactnative.dev/docs/textinput
 * @example: https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/IncubatorTextFieldScreen.tsx
 */
const TextField = ({
  modifiers,
  // General
  fieldStyle,
  containerStyle,
  floatingPlaceholder,
  floatingPlaceholderColor,
  floatingPlaceholderStyle,
  hint,
  // Label
  label,
  labelColor,
  labelStyle,
  labelProps,
  // Accessory Buttons
  leadingButton,
  trailingButton,
  // Validation
  enableErrors, // TODO: rename to enableValidation
  validationMessage,
  validationMessageStyle,
  validationMessagePosition = ValidationMessagePosition.BOTTOM,
  // Char Counter
  showCharCounter,
  charCounterStyle,
  // Input
  placeholder,
  ...props
}: InternalTextFieldProps) => {
  const {onFocus, onBlur, onChangeText, fieldState} = useFieldState(props);

  const context = useMemo(() => {
    return {...fieldState, disabled: props.editable === false};
  }, [fieldState, props.editable]);

  const {margins, paddings, typography, color} = modifiers;
  const colorStyle = useMemo(() => color && {color}, [color]);

  return (
    <FieldContext.Provider value={context}>
      <View style={[margins, containerStyle]}>
        <Label
          label={label}
          labelColor={labelColor}
          labelStyle={labelStyle}
          labelProps={labelProps}
          floatingPlaceholder={floatingPlaceholder}
          validationMessagePosition={validationMessagePosition}
        />
        {validationMessagePosition === ValidationMessagePosition.TOP && (
          <ValidationMessage
            enableErrors={enableErrors}
            validationMessage={validationMessage}
            validationMessageStyle={validationMessageStyle}
          />
        )}
        <View style={[paddings, fieldStyle]}>
          <View row centerV>
            {leadingButton && <AccessoryButton {...leadingButton} />}
            <View flex>
              {floatingPlaceholder && (
                <FloatingPlaceholder
                  placeholder={placeholder}
                  floatingPlaceholderStyle={[typography, floatingPlaceholderStyle]}
                  floatingPlaceholderColor={floatingPlaceholderColor}
                />
              )}
              <Input
                {...props}
                style={[typography, colorStyle, props.style]}
                onFocus={onFocus}
                onBlur={onBlur}
                onChangeText={onChangeText}
                placeholder={floatingPlaceholder ? undefined : placeholder}
                hint={hint}
              />
            </View>
            {trailingButton && <AccessoryButton {...trailingButton} />}
          </View>
        </View>
        <View row spread>
          {validationMessagePosition === ValidationMessagePosition.BOTTOM && (
            <ValidationMessage
              enableErrors={enableErrors}
              validationMessage={validationMessage}
              validationMessageStyle={validationMessageStyle}
              retainSpace
            />
          )}
          {showCharCounter && <CharCounter maxLength={props.maxLength} charCounterStyle={charCounterStyle} />}
        </View>
      </View>
    </FieldContext.Provider>
  );
};

TextField.displayName = 'Incubator.TextField';
TextField.validationMessagePositions = ValidationMessagePosition;

export default asBaseComponent<TextFieldProps, StaticMembers>(forwardRef(TextField as any));
