import React from 'react';
import { ViewStyle, TextStyle } from 'react-native';
import { ValidationMessagePosition, Validator } from './types';
import { InputProps } from './Input';
import { ValidationMessageProps } from './ValidationMessage';
import { LabelProps } from './Label';
import { FloatingPlaceholderProps } from './FloatingPlaceholder';
import { CharCounterProps } from './CharCounter';
interface StaticMembers {
    validationMessagePositions: typeof ValidationMessagePosition;
}
declare const _default: React.ComponentClass<(Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & Partial<Record<"padding" | "paddingL" | "paddingT" | "paddingR" | "paddingB" | "paddingH" | "paddingV", boolean>> & import("../../commons/modifiers").CustomModifier & InputProps & LabelProps & FloatingPlaceholderProps & ValidationMessageProps & Pick<CharCounterProps, "charCounterStyle" | "showCharCounter"> & {
    /**
     * Pass to render a leading button/icon
     */
    leadingButton?: (Pick<import("react-native").TouchableOpacityProps, "testID" | "hitSlop" | "onLayout" | "hasTVPreferredFocus" | "tvParallaxProperties" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "activeOpacity" | "onPress" | "onLongPress" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset"> & Partial<Record<import("../../commons/modifiers").AlignmentLiterals, boolean>> & Partial<Record<import("../../commons/modifiers").PositionLiterals, boolean>> & Partial<Record<"padding" | "paddingL" | "paddingT" | "paddingR" | "paddingB" | "paddingH" | "paddingV", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & Partial<Record<"flex" | "flexG" | "flexS", boolean>> & Partial<Record<"br0" | "br10" | "br20" | "br30" | "br40" | "br50" | "br60" | "br100", boolean>> & Partial<Record<"bg", boolean>> & {
        backgroundColor?: string | undefined;
        throttleTime?: number | undefined;
        throttleOptions?: {
            leading: boolean;
            trailing: boolean;
        } | undefined;
        activeBackgroundColor?: string | undefined;
        useNative?: boolean | undefined;
        customValue?: any;
        ref?: any; /**
         * Pass to render a leading button/icon
         */
        style?: false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | import("react-native").Animated.AnimatedProps<ViewStyle> | import("react-native").Animated.AnimatedProps<import("react-native").RegisteredStyle<ViewStyle>> | import("react-native").Animated.AnimatedProps<import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined>> | null | undefined;
    } & import("../../commons/modifiers").CustomModifier & {
        label?: string | undefined;
        color?: string | undefined;
        iconSource?: number | object | Function | undefined;
        iconStyle?: import("react-native").StyleProp<import("react-native").ImageStyle>;
        iconOnRight?: boolean | undefined;
        supportRTL?: boolean | undefined;
        backgroundColor?: string | undefined;
        disabledBackgroundColor?: string | undefined;
        size?: import("../../components/button").ButtonSize | undefined;
        borderRadius?: number | undefined;
        onPress?: ((props: any) => void) | undefined;
        disabled?: boolean | undefined;
        outline?: boolean | undefined; /**
         * Internal style for the field container
         */
        outlineColor?: string | undefined;
        outlineWidth?: number | undefined;
        link?: boolean | undefined;
        linkColor?: string | undefined;
        labelStyle?: import("react-native").StyleProp<TextStyle>;
        labelProps?: (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | undefined;
        fullWidth?: boolean | undefined;
        round?: boolean | undefined;
        enableShadow?: boolean | undefined;
        avoidInnerPadding?: boolean | undefined;
        avoidMinWidth?: boolean | undefined;
        getActiveBackgroundColor?: ((backgroundColor: string, props: any) => string) | undefined;
        animateLayout?: boolean | undefined;
        animateTo?: import("../../components/button").AnimationDirection | undefined;
    }) | (Pick<import("react-native").TouchableOpacityProps, "testID" | "hitSlop" | "onLayout" | "hasTVPreferredFocus" | "tvParallaxProperties" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "activeOpacity" | "onPress" | "onLongPress" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset"> & Partial<Record<import("../../commons/modifiers").AlignmentLiterals, boolean>> & Partial<Record<import("../../commons/modifiers").PositionLiterals, boolean>> & Partial<Record<"padding" | "paddingL" | "paddingT" | "paddingR" | "paddingB" | "paddingH" | "paddingV", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & Partial<Record<"flex" | "flexG" | "flexS", boolean>> & Partial<Record<"br0" | "br10" | "br20" | "br30" | "br40" | "br50" | "br60" | "br100", boolean>> & Partial<Record<"bg", boolean>> & {
        backgroundColor?: string | undefined;
        throttleTime?: number | undefined;
        throttleOptions?: {
            leading: boolean;
            trailing: boolean;
        } | undefined;
        activeBackgroundColor?: string | undefined;
        useNative?: boolean | undefined;
        customValue?: any;
        ref?: any; /**
         * Pass to render a leading button/icon
         */
        style?: false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | import("react-native").Animated.AnimatedProps<ViewStyle> | import("react-native").Animated.AnimatedProps<import("react-native").RegisteredStyle<ViewStyle>> | import("react-native").Animated.AnimatedProps<import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined>> | null | undefined;
    } & import("../../commons/modifiers").CustomModifier & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & {
        label?: string | undefined;
        color?: string | undefined;
        iconSource?: number | object | Function | undefined;
        iconStyle?: import("react-native").StyleProp<import("react-native").ImageStyle>;
        iconOnRight?: boolean | undefined;
        supportRTL?: boolean | undefined;
        backgroundColor?: string | undefined;
        disabledBackgroundColor?: string | undefined;
        size?: import("../../components/button").ButtonSize | undefined;
        borderRadius?: number | undefined;
        onPress?: ((props: any) => void) | undefined;
        disabled?: boolean | undefined;
        outline?: boolean | undefined; /**
         * Internal style for the field container
         */
        outlineColor?: string | undefined;
        outlineWidth?: number | undefined;
        link?: boolean | undefined;
        linkColor?: string | undefined;
        labelStyle?: import("react-native").StyleProp<TextStyle>;
        labelProps?: (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | undefined;
        fullWidth?: boolean | undefined;
        round?: boolean | undefined;
        enableShadow?: boolean | undefined;
        avoidInnerPadding?: boolean | undefined;
        avoidMinWidth?: boolean | undefined;
        getActiveBackgroundColor?: ((backgroundColor: string, props: any) => string) | undefined;
        animateLayout?: boolean | undefined;
        animateTo?: import("../../components/button").AnimationDirection | undefined;
    }) | (Pick<import("react-native").TouchableOpacityProps, "testID" | "hitSlop" | "onLayout" | "hasTVPreferredFocus" | "tvParallaxProperties" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "activeOpacity" | "onPress" | "onLongPress" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset"> & Partial<Record<import("../../commons/modifiers").AlignmentLiterals, boolean>> & Partial<Record<import("../../commons/modifiers").PositionLiterals, boolean>> & Partial<Record<"padding" | "paddingL" | "paddingT" | "paddingR" | "paddingB" | "paddingH" | "paddingV", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & Partial<Record<"flex" | "flexG" | "flexS", boolean>> & Partial<Record<"br0" | "br10" | "br20" | "br30" | "br40" | "br50" | "br60" | "br100", boolean>> & Partial<Record<"bg", boolean>> & {
        backgroundColor?: string | undefined;
        throttleTime?: number | undefined;
        throttleOptions?: {
            leading: boolean;
            trailing: boolean;
        } | undefined;
        activeBackgroundColor?: string | undefined;
        useNative?: boolean | undefined;
        customValue?: any;
        ref?: any; /**
         * Pass to render a leading button/icon
         */
        style?: false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | import("react-native").Animated.AnimatedProps<ViewStyle> | import("react-native").Animated.AnimatedProps<import("react-native").RegisteredStyle<ViewStyle>> | import("react-native").Animated.AnimatedProps<import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined>> | null | undefined;
    } & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & import("../../commons/modifiers").CustomModifier & {
        label?: string | undefined;
        color?: string | undefined;
        iconSource?: number | object | Function | undefined;
        iconStyle?: import("react-native").StyleProp<import("react-native").ImageStyle>;
        iconOnRight?: boolean | undefined;
        supportRTL?: boolean | undefined;
        backgroundColor?: string | undefined;
        disabledBackgroundColor?: string | undefined;
        size?: import("../../components/button").ButtonSize | undefined;
        borderRadius?: number | undefined;
        onPress?: ((props: any) => void) | undefined;
        disabled?: boolean | undefined;
        outline?: boolean | undefined; /**
         * Internal style for the field container
         */
        outlineColor?: string | undefined;
        outlineWidth?: number | undefined;
        link?: boolean | undefined;
        linkColor?: string | undefined;
        labelStyle?: import("react-native").StyleProp<TextStyle>;
        labelProps?: (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | undefined;
        fullWidth?: boolean | undefined;
        round?: boolean | undefined;
        enableShadow?: boolean | undefined;
        avoidInnerPadding?: boolean | undefined;
        avoidMinWidth?: boolean | undefined;
        getActiveBackgroundColor?: ((backgroundColor: string, props: any) => string) | undefined;
        animateLayout?: boolean | undefined;
        animateTo?: import("../../components/button").AnimationDirection | undefined;
    }) | (Pick<import("react-native").TouchableOpacityProps, "testID" | "hitSlop" | "onLayout" | "hasTVPreferredFocus" | "tvParallaxProperties" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "activeOpacity" | "onPress" | "onLongPress" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset"> & Partial<Record<import("../../commons/modifiers").AlignmentLiterals, boolean>> & Partial<Record<import("../../commons/modifiers").PositionLiterals, boolean>> & Partial<Record<"padding" | "paddingL" | "paddingT" | "paddingR" | "paddingB" | "paddingH" | "paddingV", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & Partial<Record<"flex" | "flexG" | "flexS", boolean>> & Partial<Record<"br0" | "br10" | "br20" | "br30" | "br40" | "br50" | "br60" | "br100", boolean>> & Partial<Record<"bg", boolean>> & {
        backgroundColor?: string | undefined;
        throttleTime?: number | undefined;
        throttleOptions?: {
            leading: boolean;
            trailing: boolean;
        } | undefined;
        activeBackgroundColor?: string | undefined;
        useNative?: boolean | undefined;
        customValue?: any;
        ref?: any; /**
         * Pass to render a leading button/icon
         */
        style?: false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | import("react-native").Animated.AnimatedProps<ViewStyle> | import("react-native").Animated.AnimatedProps<import("react-native").RegisteredStyle<ViewStyle>> | import("react-native").Animated.AnimatedProps<import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined>> | null | undefined;
    } & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & {
        label?: string | undefined;
        color?: string | undefined;
        iconSource?: number | object | Function | undefined;
        iconStyle?: import("react-native").StyleProp<import("react-native").ImageStyle>;
        iconOnRight?: boolean | undefined;
        supportRTL?: boolean | undefined;
        backgroundColor?: string | undefined;
        disabledBackgroundColor?: string | undefined;
        size?: import("../../components/button").ButtonSize | undefined;
        borderRadius?: number | undefined;
        onPress?: ((props: any) => void) | undefined;
        disabled?: boolean | undefined;
        outline?: boolean | undefined; /**
         * Internal style for the field container
         */
        outlineColor?: string | undefined;
        outlineWidth?: number | undefined;
        link?: boolean | undefined;
        linkColor?: string | undefined;
        labelStyle?: import("react-native").StyleProp<TextStyle>;
        labelProps?: (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | undefined;
        fullWidth?: boolean | undefined;
        round?: boolean | undefined;
        enableShadow?: boolean | undefined;
        avoidInnerPadding?: boolean | undefined;
        avoidMinWidth?: boolean | undefined;
        getActiveBackgroundColor?: ((backgroundColor: string, props: any) => string) | undefined;
        animateLayout?: boolean | undefined;
        animateTo?: import("../../components/button").AnimationDirection | undefined;
    }) | undefined;
    /**
     * Pass to render a trailing button/icon
     */
    trailingButton?: (Pick<import("react-native").TouchableOpacityProps, "testID" | "hitSlop" | "onLayout" | "hasTVPreferredFocus" | "tvParallaxProperties" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "activeOpacity" | "onPress" | "onLongPress" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset"> & Partial<Record<import("../../commons/modifiers").AlignmentLiterals, boolean>> & Partial<Record<import("../../commons/modifiers").PositionLiterals, boolean>> & Partial<Record<"padding" | "paddingL" | "paddingT" | "paddingR" | "paddingB" | "paddingH" | "paddingV", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & Partial<Record<"flex" | "flexG" | "flexS", boolean>> & Partial<Record<"br0" | "br10" | "br20" | "br30" | "br40" | "br50" | "br60" | "br100", boolean>> & Partial<Record<"bg", boolean>> & {
        backgroundColor?: string | undefined;
        throttleTime?: number | undefined;
        throttleOptions?: {
            leading: boolean;
            trailing: boolean;
        } | undefined;
        activeBackgroundColor?: string | undefined;
        useNative?: boolean | undefined;
        customValue?: any;
        ref?: any; /**
         * Pass to render a leading button/icon
         */
        style?: false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | import("react-native").Animated.AnimatedProps<ViewStyle> | import("react-native").Animated.AnimatedProps<import("react-native").RegisteredStyle<ViewStyle>> | import("react-native").Animated.AnimatedProps<import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined>> | null | undefined;
    } & import("../../commons/modifiers").CustomModifier & {
        label?: string | undefined;
        color?: string | undefined;
        iconSource?: number | object | Function | undefined;
        iconStyle?: import("react-native").StyleProp<import("react-native").ImageStyle>;
        iconOnRight?: boolean | undefined;
        supportRTL?: boolean | undefined;
        backgroundColor?: string | undefined;
        disabledBackgroundColor?: string | undefined;
        size?: import("../../components/button").ButtonSize | undefined;
        borderRadius?: number | undefined;
        onPress?: ((props: any) => void) | undefined;
        disabled?: boolean | undefined;
        outline?: boolean | undefined; /**
         * Internal style for the field container
         */
        outlineColor?: string | undefined;
        outlineWidth?: number | undefined;
        link?: boolean | undefined;
        linkColor?: string | undefined;
        labelStyle?: import("react-native").StyleProp<TextStyle>;
        labelProps?: (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | undefined;
        fullWidth?: boolean | undefined;
        round?: boolean | undefined;
        enableShadow?: boolean | undefined;
        avoidInnerPadding?: boolean | undefined;
        avoidMinWidth?: boolean | undefined;
        getActiveBackgroundColor?: ((backgroundColor: string, props: any) => string) | undefined;
        animateLayout?: boolean | undefined;
        animateTo?: import("../../components/button").AnimationDirection | undefined;
    }) | (Pick<import("react-native").TouchableOpacityProps, "testID" | "hitSlop" | "onLayout" | "hasTVPreferredFocus" | "tvParallaxProperties" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "activeOpacity" | "onPress" | "onLongPress" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset"> & Partial<Record<import("../../commons/modifiers").AlignmentLiterals, boolean>> & Partial<Record<import("../../commons/modifiers").PositionLiterals, boolean>> & Partial<Record<"padding" | "paddingL" | "paddingT" | "paddingR" | "paddingB" | "paddingH" | "paddingV", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & Partial<Record<"flex" | "flexG" | "flexS", boolean>> & Partial<Record<"br0" | "br10" | "br20" | "br30" | "br40" | "br50" | "br60" | "br100", boolean>> & Partial<Record<"bg", boolean>> & {
        backgroundColor?: string | undefined;
        throttleTime?: number | undefined;
        throttleOptions?: {
            leading: boolean;
            trailing: boolean;
        } | undefined;
        activeBackgroundColor?: string | undefined;
        useNative?: boolean | undefined;
        customValue?: any;
        ref?: any; /**
         * Pass to render a leading button/icon
         */
        style?: false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | import("react-native").Animated.AnimatedProps<ViewStyle> | import("react-native").Animated.AnimatedProps<import("react-native").RegisteredStyle<ViewStyle>> | import("react-native").Animated.AnimatedProps<import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined>> | null | undefined;
    } & import("../../commons/modifiers").CustomModifier & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & {
        label?: string | undefined;
        color?: string | undefined;
        iconSource?: number | object | Function | undefined;
        iconStyle?: import("react-native").StyleProp<import("react-native").ImageStyle>;
        iconOnRight?: boolean | undefined;
        supportRTL?: boolean | undefined;
        backgroundColor?: string | undefined;
        disabledBackgroundColor?: string | undefined;
        size?: import("../../components/button").ButtonSize | undefined;
        borderRadius?: number | undefined;
        onPress?: ((props: any) => void) | undefined;
        disabled?: boolean | undefined;
        outline?: boolean | undefined; /**
         * Internal style for the field container
         */
        outlineColor?: string | undefined;
        outlineWidth?: number | undefined;
        link?: boolean | undefined;
        linkColor?: string | undefined;
        labelStyle?: import("react-native").StyleProp<TextStyle>;
        labelProps?: (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | undefined;
        fullWidth?: boolean | undefined;
        round?: boolean | undefined;
        enableShadow?: boolean | undefined;
        avoidInnerPadding?: boolean | undefined;
        avoidMinWidth?: boolean | undefined;
        getActiveBackgroundColor?: ((backgroundColor: string, props: any) => string) | undefined;
        animateLayout?: boolean | undefined;
        animateTo?: import("../../components/button").AnimationDirection | undefined;
    }) | (Pick<import("react-native").TouchableOpacityProps, "testID" | "hitSlop" | "onLayout" | "hasTVPreferredFocus" | "tvParallaxProperties" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "activeOpacity" | "onPress" | "onLongPress" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset"> & Partial<Record<import("../../commons/modifiers").AlignmentLiterals, boolean>> & Partial<Record<import("../../commons/modifiers").PositionLiterals, boolean>> & Partial<Record<"padding" | "paddingL" | "paddingT" | "paddingR" | "paddingB" | "paddingH" | "paddingV", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & Partial<Record<"flex" | "flexG" | "flexS", boolean>> & Partial<Record<"br0" | "br10" | "br20" | "br30" | "br40" | "br50" | "br60" | "br100", boolean>> & Partial<Record<"bg", boolean>> & {
        backgroundColor?: string | undefined;
        throttleTime?: number | undefined;
        throttleOptions?: {
            leading: boolean;
            trailing: boolean;
        } | undefined;
        activeBackgroundColor?: string | undefined;
        useNative?: boolean | undefined;
        customValue?: any;
        ref?: any; /**
         * Pass to render a leading button/icon
         */
        style?: false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | import("react-native").Animated.AnimatedProps<ViewStyle> | import("react-native").Animated.AnimatedProps<import("react-native").RegisteredStyle<ViewStyle>> | import("react-native").Animated.AnimatedProps<import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined>> | null | undefined;
    } & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & import("../../commons/modifiers").CustomModifier & {
        label?: string | undefined;
        color?: string | undefined;
        iconSource?: number | object | Function | undefined;
        iconStyle?: import("react-native").StyleProp<import("react-native").ImageStyle>;
        iconOnRight?: boolean | undefined;
        supportRTL?: boolean | undefined;
        backgroundColor?: string | undefined;
        disabledBackgroundColor?: string | undefined;
        size?: import("../../components/button").ButtonSize | undefined;
        borderRadius?: number | undefined;
        onPress?: ((props: any) => void) | undefined;
        disabled?: boolean | undefined;
        outline?: boolean | undefined; /**
         * Internal style for the field container
         */
        outlineColor?: string | undefined;
        outlineWidth?: number | undefined;
        link?: boolean | undefined;
        linkColor?: string | undefined;
        labelStyle?: import("react-native").StyleProp<TextStyle>;
        labelProps?: (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | undefined;
        fullWidth?: boolean | undefined;
        round?: boolean | undefined;
        enableShadow?: boolean | undefined;
        avoidInnerPadding?: boolean | undefined;
        avoidMinWidth?: boolean | undefined;
        getActiveBackgroundColor?: ((backgroundColor: string, props: any) => string) | undefined;
        animateLayout?: boolean | undefined;
        animateTo?: import("../../components/button").AnimationDirection | undefined;
    }) | (Pick<import("react-native").TouchableOpacityProps, "testID" | "hitSlop" | "onLayout" | "hasTVPreferredFocus" | "tvParallaxProperties" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "activeOpacity" | "onPress" | "onLongPress" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset"> & Partial<Record<import("../../commons/modifiers").AlignmentLiterals, boolean>> & Partial<Record<import("../../commons/modifiers").PositionLiterals, boolean>> & Partial<Record<"padding" | "paddingL" | "paddingT" | "paddingR" | "paddingB" | "paddingH" | "paddingV", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & Partial<Record<"flex" | "flexG" | "flexS", boolean>> & Partial<Record<"br0" | "br10" | "br20" | "br30" | "br40" | "br50" | "br60" | "br100", boolean>> & Partial<Record<"bg", boolean>> & {
        backgroundColor?: string | undefined;
        throttleTime?: number | undefined;
        throttleOptions?: {
            leading: boolean;
            trailing: boolean;
        } | undefined;
        activeBackgroundColor?: string | undefined;
        useNative?: boolean | undefined;
        customValue?: any;
        ref?: any; /**
         * Pass to render a leading button/icon
         */
        style?: false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | import("react-native").Animated.AnimatedProps<ViewStyle> | import("react-native").Animated.AnimatedProps<import("react-native").RegisteredStyle<ViewStyle>> | import("react-native").Animated.AnimatedProps<import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined>> | null | undefined;
    } & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & {
        label?: string | undefined;
        color?: string | undefined;
        iconSource?: number | object | Function | undefined;
        iconStyle?: import("react-native").StyleProp<import("react-native").ImageStyle>;
        iconOnRight?: boolean | undefined;
        supportRTL?: boolean | undefined;
        backgroundColor?: string | undefined;
        disabledBackgroundColor?: string | undefined;
        size?: import("../../components/button").ButtonSize | undefined;
        borderRadius?: number | undefined;
        onPress?: ((props: any) => void) | undefined;
        disabled?: boolean | undefined;
        outline?: boolean | undefined; /**
         * Internal style for the field container
         */
        outlineColor?: string | undefined;
        outlineWidth?: number | undefined;
        link?: boolean | undefined;
        linkColor?: string | undefined;
        labelStyle?: import("react-native").StyleProp<TextStyle>;
        labelProps?: (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | undefined;
        fullWidth?: boolean | undefined;
        round?: boolean | undefined;
        enableShadow?: boolean | undefined;
        avoidInnerPadding?: boolean | undefined;
        avoidMinWidth?: boolean | undefined;
        getActiveBackgroundColor?: ((backgroundColor: string, props: any) => string) | undefined;
        animateLayout?: boolean | undefined;
        animateTo?: import("../../components/button").AnimationDirection | undefined;
    }) | undefined;
    /**
     * Pass to add floating placeholder support
     */
    floatingPlaceholder?: boolean | undefined;
    /**
     * Custom style for the floating placeholder
     */
    floatingPlaceholderStyle?: TextStyle | undefined;
    /**
     * A single or multiple validator. Can be a string (required, email) or custom function.
     */
    validate?: "number" | Function | "url" | "email" | "required" | "price" | Validator[] | undefined;
    /**
     * Should validate when the TextField mounts
     */
    validateOnStart?: boolean | undefined;
    /**
     * Should validate when the TextField value changes
     */
    validateOnChange?: boolean | undefined;
    /**
     * Should validate when losing focus of TextField
     */
    validateOnBlur?: boolean | undefined;
    /**
     * The position of the validation message (top/bottom)
     */
    validationMessagePosition?: ValidationMessagePosition | undefined;
    /**
     * Internal style for the field container
     */
    fieldStyle?: ViewStyle | undefined;
    /**
     * Container style of the whole component
     */
    containerStyle?: ViewStyle | undefined;
} & {
    useCustomTheme?: boolean | undefined;
}) | (Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & Partial<Record<"padding" | "paddingL" | "paddingT" | "paddingR" | "paddingB" | "paddingH" | "paddingV", boolean>> & import("../../commons/modifiers").CustomModifier & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & InputProps & LabelProps & FloatingPlaceholderProps & ValidationMessageProps & Pick<CharCounterProps, "charCounterStyle" | "showCharCounter"> & {
    /**
     * Pass to render a leading button/icon
     */
    leadingButton?: (Pick<import("react-native").TouchableOpacityProps, "testID" | "hitSlop" | "onLayout" | "hasTVPreferredFocus" | "tvParallaxProperties" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "activeOpacity" | "onPress" | "onLongPress" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset"> & Partial<Record<import("../../commons/modifiers").AlignmentLiterals, boolean>> & Partial<Record<import("../../commons/modifiers").PositionLiterals, boolean>> & Partial<Record<"padding" | "paddingL" | "paddingT" | "paddingR" | "paddingB" | "paddingH" | "paddingV", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & Partial<Record<"flex" | "flexG" | "flexS", boolean>> & Partial<Record<"br0" | "br10" | "br20" | "br30" | "br40" | "br50" | "br60" | "br100", boolean>> & Partial<Record<"bg", boolean>> & {
        backgroundColor?: string | undefined;
        throttleTime?: number | undefined;
        throttleOptions?: {
            leading: boolean;
            trailing: boolean;
        } | undefined;
        activeBackgroundColor?: string | undefined;
        useNative?: boolean | undefined;
        customValue?: any;
        ref?: any; /**
         * Pass to render a leading button/icon
         */
        style?: false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | import("react-native").Animated.AnimatedProps<ViewStyle> | import("react-native").Animated.AnimatedProps<import("react-native").RegisteredStyle<ViewStyle>> | import("react-native").Animated.AnimatedProps<import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined>> | null | undefined;
    } & import("../../commons/modifiers").CustomModifier & {
        label?: string | undefined;
        color?: string | undefined;
        iconSource?: number | object | Function | undefined;
        iconStyle?: import("react-native").StyleProp<import("react-native").ImageStyle>;
        iconOnRight?: boolean | undefined;
        supportRTL?: boolean | undefined;
        backgroundColor?: string | undefined;
        disabledBackgroundColor?: string | undefined;
        size?: import("../../components/button").ButtonSize | undefined;
        borderRadius?: number | undefined;
        onPress?: ((props: any) => void) | undefined;
        disabled?: boolean | undefined;
        outline?: boolean | undefined; /**
         * Internal style for the field container
         */
        outlineColor?: string | undefined;
        outlineWidth?: number | undefined;
        link?: boolean | undefined;
        linkColor?: string | undefined;
        labelStyle?: import("react-native").StyleProp<TextStyle>;
        labelProps?: (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | undefined;
        fullWidth?: boolean | undefined;
        round?: boolean | undefined;
        enableShadow?: boolean | undefined;
        avoidInnerPadding?: boolean | undefined;
        avoidMinWidth?: boolean | undefined;
        getActiveBackgroundColor?: ((backgroundColor: string, props: any) => string) | undefined;
        animateLayout?: boolean | undefined;
        animateTo?: import("../../components/button").AnimationDirection | undefined;
    }) | (Pick<import("react-native").TouchableOpacityProps, "testID" | "hitSlop" | "onLayout" | "hasTVPreferredFocus" | "tvParallaxProperties" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "activeOpacity" | "onPress" | "onLongPress" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset"> & Partial<Record<import("../../commons/modifiers").AlignmentLiterals, boolean>> & Partial<Record<import("../../commons/modifiers").PositionLiterals, boolean>> & Partial<Record<"padding" | "paddingL" | "paddingT" | "paddingR" | "paddingB" | "paddingH" | "paddingV", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & Partial<Record<"flex" | "flexG" | "flexS", boolean>> & Partial<Record<"br0" | "br10" | "br20" | "br30" | "br40" | "br50" | "br60" | "br100", boolean>> & Partial<Record<"bg", boolean>> & {
        backgroundColor?: string | undefined;
        throttleTime?: number | undefined;
        throttleOptions?: {
            leading: boolean;
            trailing: boolean;
        } | undefined;
        activeBackgroundColor?: string | undefined;
        useNative?: boolean | undefined;
        customValue?: any;
        ref?: any; /**
         * Pass to render a leading button/icon
         */
        style?: false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | import("react-native").Animated.AnimatedProps<ViewStyle> | import("react-native").Animated.AnimatedProps<import("react-native").RegisteredStyle<ViewStyle>> | import("react-native").Animated.AnimatedProps<import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined>> | null | undefined;
    } & import("../../commons/modifiers").CustomModifier & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & {
        label?: string | undefined;
        color?: string | undefined;
        iconSource?: number | object | Function | undefined;
        iconStyle?: import("react-native").StyleProp<import("react-native").ImageStyle>;
        iconOnRight?: boolean | undefined;
        supportRTL?: boolean | undefined;
        backgroundColor?: string | undefined;
        disabledBackgroundColor?: string | undefined;
        size?: import("../../components/button").ButtonSize | undefined;
        borderRadius?: number | undefined;
        onPress?: ((props: any) => void) | undefined;
        disabled?: boolean | undefined;
        outline?: boolean | undefined; /**
         * Internal style for the field container
         */
        outlineColor?: string | undefined;
        outlineWidth?: number | undefined;
        link?: boolean | undefined;
        linkColor?: string | undefined;
        labelStyle?: import("react-native").StyleProp<TextStyle>;
        labelProps?: (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | undefined;
        fullWidth?: boolean | undefined;
        round?: boolean | undefined;
        enableShadow?: boolean | undefined;
        avoidInnerPadding?: boolean | undefined;
        avoidMinWidth?: boolean | undefined;
        getActiveBackgroundColor?: ((backgroundColor: string, props: any) => string) | undefined;
        animateLayout?: boolean | undefined;
        animateTo?: import("../../components/button").AnimationDirection | undefined;
    }) | (Pick<import("react-native").TouchableOpacityProps, "testID" | "hitSlop" | "onLayout" | "hasTVPreferredFocus" | "tvParallaxProperties" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "activeOpacity" | "onPress" | "onLongPress" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset"> & Partial<Record<import("../../commons/modifiers").AlignmentLiterals, boolean>> & Partial<Record<import("../../commons/modifiers").PositionLiterals, boolean>> & Partial<Record<"padding" | "paddingL" | "paddingT" | "paddingR" | "paddingB" | "paddingH" | "paddingV", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & Partial<Record<"flex" | "flexG" | "flexS", boolean>> & Partial<Record<"br0" | "br10" | "br20" | "br30" | "br40" | "br50" | "br60" | "br100", boolean>> & Partial<Record<"bg", boolean>> & {
        backgroundColor?: string | undefined;
        throttleTime?: number | undefined;
        throttleOptions?: {
            leading: boolean;
            trailing: boolean;
        } | undefined;
        activeBackgroundColor?: string | undefined;
        useNative?: boolean | undefined;
        customValue?: any;
        ref?: any; /**
         * Pass to render a leading button/icon
         */
        style?: false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | import("react-native").Animated.AnimatedProps<ViewStyle> | import("react-native").Animated.AnimatedProps<import("react-native").RegisteredStyle<ViewStyle>> | import("react-native").Animated.AnimatedProps<import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined>> | null | undefined;
    } & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & import("../../commons/modifiers").CustomModifier & {
        label?: string | undefined;
        color?: string | undefined;
        iconSource?: number | object | Function | undefined;
        iconStyle?: import("react-native").StyleProp<import("react-native").ImageStyle>;
        iconOnRight?: boolean | undefined;
        supportRTL?: boolean | undefined;
        backgroundColor?: string | undefined;
        disabledBackgroundColor?: string | undefined;
        size?: import("../../components/button").ButtonSize | undefined;
        borderRadius?: number | undefined;
        onPress?: ((props: any) => void) | undefined;
        disabled?: boolean | undefined;
        outline?: boolean | undefined; /**
         * Internal style for the field container
         */
        outlineColor?: string | undefined;
        outlineWidth?: number | undefined;
        link?: boolean | undefined;
        linkColor?: string | undefined;
        labelStyle?: import("react-native").StyleProp<TextStyle>;
        labelProps?: (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | undefined;
        fullWidth?: boolean | undefined;
        round?: boolean | undefined;
        enableShadow?: boolean | undefined;
        avoidInnerPadding?: boolean | undefined;
        avoidMinWidth?: boolean | undefined;
        getActiveBackgroundColor?: ((backgroundColor: string, props: any) => string) | undefined;
        animateLayout?: boolean | undefined;
        animateTo?: import("../../components/button").AnimationDirection | undefined;
    }) | (Pick<import("react-native").TouchableOpacityProps, "testID" | "hitSlop" | "onLayout" | "hasTVPreferredFocus" | "tvParallaxProperties" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "activeOpacity" | "onPress" | "onLongPress" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset"> & Partial<Record<import("../../commons/modifiers").AlignmentLiterals, boolean>> & Partial<Record<import("../../commons/modifiers").PositionLiterals, boolean>> & Partial<Record<"padding" | "paddingL" | "paddingT" | "paddingR" | "paddingB" | "paddingH" | "paddingV", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & Partial<Record<"flex" | "flexG" | "flexS", boolean>> & Partial<Record<"br0" | "br10" | "br20" | "br30" | "br40" | "br50" | "br60" | "br100", boolean>> & Partial<Record<"bg", boolean>> & {
        backgroundColor?: string | undefined;
        throttleTime?: number | undefined;
        throttleOptions?: {
            leading: boolean;
            trailing: boolean;
        } | undefined;
        activeBackgroundColor?: string | undefined;
        useNative?: boolean | undefined;
        customValue?: any;
        ref?: any; /**
         * Pass to render a leading button/icon
         */
        style?: false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | import("react-native").Animated.AnimatedProps<ViewStyle> | import("react-native").Animated.AnimatedProps<import("react-native").RegisteredStyle<ViewStyle>> | import("react-native").Animated.AnimatedProps<import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined>> | null | undefined;
    } & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & {
        label?: string | undefined;
        color?: string | undefined;
        iconSource?: number | object | Function | undefined;
        iconStyle?: import("react-native").StyleProp<import("react-native").ImageStyle>;
        iconOnRight?: boolean | undefined;
        supportRTL?: boolean | undefined;
        backgroundColor?: string | undefined;
        disabledBackgroundColor?: string | undefined;
        size?: import("../../components/button").ButtonSize | undefined;
        borderRadius?: number | undefined;
        onPress?: ((props: any) => void) | undefined;
        disabled?: boolean | undefined;
        outline?: boolean | undefined; /**
         * Internal style for the field container
         */
        outlineColor?: string | undefined;
        outlineWidth?: number | undefined;
        link?: boolean | undefined;
        linkColor?: string | undefined;
        labelStyle?: import("react-native").StyleProp<TextStyle>;
        labelProps?: (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | undefined;
        fullWidth?: boolean | undefined;
        round?: boolean | undefined;
        enableShadow?: boolean | undefined;
        avoidInnerPadding?: boolean | undefined;
        avoidMinWidth?: boolean | undefined;
        getActiveBackgroundColor?: ((backgroundColor: string, props: any) => string) | undefined;
        animateLayout?: boolean | undefined;
        animateTo?: import("../../components/button").AnimationDirection | undefined;
    }) | undefined;
    /**
     * Pass to render a trailing button/icon
     */
    trailingButton?: (Pick<import("react-native").TouchableOpacityProps, "testID" | "hitSlop" | "onLayout" | "hasTVPreferredFocus" | "tvParallaxProperties" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "activeOpacity" | "onPress" | "onLongPress" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset"> & Partial<Record<import("../../commons/modifiers").AlignmentLiterals, boolean>> & Partial<Record<import("../../commons/modifiers").PositionLiterals, boolean>> & Partial<Record<"padding" | "paddingL" | "paddingT" | "paddingR" | "paddingB" | "paddingH" | "paddingV", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & Partial<Record<"flex" | "flexG" | "flexS", boolean>> & Partial<Record<"br0" | "br10" | "br20" | "br30" | "br40" | "br50" | "br60" | "br100", boolean>> & Partial<Record<"bg", boolean>> & {
        backgroundColor?: string | undefined;
        throttleTime?: number | undefined;
        throttleOptions?: {
            leading: boolean;
            trailing: boolean;
        } | undefined;
        activeBackgroundColor?: string | undefined;
        useNative?: boolean | undefined;
        customValue?: any;
        ref?: any; /**
         * Pass to render a leading button/icon
         */
        style?: false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | import("react-native").Animated.AnimatedProps<ViewStyle> | import("react-native").Animated.AnimatedProps<import("react-native").RegisteredStyle<ViewStyle>> | import("react-native").Animated.AnimatedProps<import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined>> | null | undefined;
    } & import("../../commons/modifiers").CustomModifier & {
        label?: string | undefined;
        color?: string | undefined;
        iconSource?: number | object | Function | undefined;
        iconStyle?: import("react-native").StyleProp<import("react-native").ImageStyle>;
        iconOnRight?: boolean | undefined;
        supportRTL?: boolean | undefined;
        backgroundColor?: string | undefined;
        disabledBackgroundColor?: string | undefined;
        size?: import("../../components/button").ButtonSize | undefined;
        borderRadius?: number | undefined;
        onPress?: ((props: any) => void) | undefined;
        disabled?: boolean | undefined;
        outline?: boolean | undefined; /**
         * Internal style for the field container
         */
        outlineColor?: string | undefined;
        outlineWidth?: number | undefined;
        link?: boolean | undefined;
        linkColor?: string | undefined;
        labelStyle?: import("react-native").StyleProp<TextStyle>;
        labelProps?: (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | undefined;
        fullWidth?: boolean | undefined;
        round?: boolean | undefined;
        enableShadow?: boolean | undefined;
        avoidInnerPadding?: boolean | undefined;
        avoidMinWidth?: boolean | undefined;
        getActiveBackgroundColor?: ((backgroundColor: string, props: any) => string) | undefined;
        animateLayout?: boolean | undefined;
        animateTo?: import("../../components/button").AnimationDirection | undefined;
    }) | (Pick<import("react-native").TouchableOpacityProps, "testID" | "hitSlop" | "onLayout" | "hasTVPreferredFocus" | "tvParallaxProperties" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "activeOpacity" | "onPress" | "onLongPress" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset"> & Partial<Record<import("../../commons/modifiers").AlignmentLiterals, boolean>> & Partial<Record<import("../../commons/modifiers").PositionLiterals, boolean>> & Partial<Record<"padding" | "paddingL" | "paddingT" | "paddingR" | "paddingB" | "paddingH" | "paddingV", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & Partial<Record<"flex" | "flexG" | "flexS", boolean>> & Partial<Record<"br0" | "br10" | "br20" | "br30" | "br40" | "br50" | "br60" | "br100", boolean>> & Partial<Record<"bg", boolean>> & {
        backgroundColor?: string | undefined;
        throttleTime?: number | undefined;
        throttleOptions?: {
            leading: boolean;
            trailing: boolean;
        } | undefined;
        activeBackgroundColor?: string | undefined;
        useNative?: boolean | undefined;
        customValue?: any;
        ref?: any; /**
         * Pass to render a leading button/icon
         */
        style?: false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | import("react-native").Animated.AnimatedProps<ViewStyle> | import("react-native").Animated.AnimatedProps<import("react-native").RegisteredStyle<ViewStyle>> | import("react-native").Animated.AnimatedProps<import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined>> | null | undefined;
    } & import("../../commons/modifiers").CustomModifier & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & {
        label?: string | undefined;
        color?: string | undefined;
        iconSource?: number | object | Function | undefined;
        iconStyle?: import("react-native").StyleProp<import("react-native").ImageStyle>;
        iconOnRight?: boolean | undefined;
        supportRTL?: boolean | undefined;
        backgroundColor?: string | undefined;
        disabledBackgroundColor?: string | undefined;
        size?: import("../../components/button").ButtonSize | undefined;
        borderRadius?: number | undefined;
        onPress?: ((props: any) => void) | undefined;
        disabled?: boolean | undefined;
        outline?: boolean | undefined; /**
         * Internal style for the field container
         */
        outlineColor?: string | undefined;
        outlineWidth?: number | undefined;
        link?: boolean | undefined;
        linkColor?: string | undefined;
        labelStyle?: import("react-native").StyleProp<TextStyle>;
        labelProps?: (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | undefined;
        fullWidth?: boolean | undefined;
        round?: boolean | undefined;
        enableShadow?: boolean | undefined;
        avoidInnerPadding?: boolean | undefined;
        avoidMinWidth?: boolean | undefined;
        getActiveBackgroundColor?: ((backgroundColor: string, props: any) => string) | undefined;
        animateLayout?: boolean | undefined;
        animateTo?: import("../../components/button").AnimationDirection | undefined;
    }) | (Pick<import("react-native").TouchableOpacityProps, "testID" | "hitSlop" | "onLayout" | "hasTVPreferredFocus" | "tvParallaxProperties" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "activeOpacity" | "onPress" | "onLongPress" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset"> & Partial<Record<import("../../commons/modifiers").AlignmentLiterals, boolean>> & Partial<Record<import("../../commons/modifiers").PositionLiterals, boolean>> & Partial<Record<"padding" | "paddingL" | "paddingT" | "paddingR" | "paddingB" | "paddingH" | "paddingV", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & Partial<Record<"flex" | "flexG" | "flexS", boolean>> & Partial<Record<"br0" | "br10" | "br20" | "br30" | "br40" | "br50" | "br60" | "br100", boolean>> & Partial<Record<"bg", boolean>> & {
        backgroundColor?: string | undefined;
        throttleTime?: number | undefined;
        throttleOptions?: {
            leading: boolean;
            trailing: boolean;
        } | undefined;
        activeBackgroundColor?: string | undefined;
        useNative?: boolean | undefined;
        customValue?: any;
        ref?: any; /**
         * Pass to render a leading button/icon
         */
        style?: false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | import("react-native").Animated.AnimatedProps<ViewStyle> | import("react-native").Animated.AnimatedProps<import("react-native").RegisteredStyle<ViewStyle>> | import("react-native").Animated.AnimatedProps<import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined>> | null | undefined;
    } & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & import("../../commons/modifiers").CustomModifier & {
        label?: string | undefined;
        color?: string | undefined;
        iconSource?: number | object | Function | undefined;
        iconStyle?: import("react-native").StyleProp<import("react-native").ImageStyle>;
        iconOnRight?: boolean | undefined;
        supportRTL?: boolean | undefined;
        backgroundColor?: string | undefined;
        disabledBackgroundColor?: string | undefined;
        size?: import("../../components/button").ButtonSize | undefined;
        borderRadius?: number | undefined;
        onPress?: ((props: any) => void) | undefined;
        disabled?: boolean | undefined;
        outline?: boolean | undefined; /**
         * Internal style for the field container
         */
        outlineColor?: string | undefined;
        outlineWidth?: number | undefined;
        link?: boolean | undefined;
        linkColor?: string | undefined;
        labelStyle?: import("react-native").StyleProp<TextStyle>;
        labelProps?: (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | undefined;
        fullWidth?: boolean | undefined;
        round?: boolean | undefined;
        enableShadow?: boolean | undefined;
        avoidInnerPadding?: boolean | undefined;
        avoidMinWidth?: boolean | undefined;
        getActiveBackgroundColor?: ((backgroundColor: string, props: any) => string) | undefined;
        animateLayout?: boolean | undefined;
        animateTo?: import("../../components/button").AnimationDirection | undefined;
    }) | (Pick<import("react-native").TouchableOpacityProps, "testID" | "hitSlop" | "onLayout" | "hasTVPreferredFocus" | "tvParallaxProperties" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "activeOpacity" | "onPress" | "onLongPress" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset"> & Partial<Record<import("../../commons/modifiers").AlignmentLiterals, boolean>> & Partial<Record<import("../../commons/modifiers").PositionLiterals, boolean>> & Partial<Record<"padding" | "paddingL" | "paddingT" | "paddingR" | "paddingB" | "paddingH" | "paddingV", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & Partial<Record<"flex" | "flexG" | "flexS", boolean>> & Partial<Record<"br0" | "br10" | "br20" | "br30" | "br40" | "br50" | "br60" | "br100", boolean>> & Partial<Record<"bg", boolean>> & {
        backgroundColor?: string | undefined;
        throttleTime?: number | undefined;
        throttleOptions?: {
            leading: boolean;
            trailing: boolean;
        } | undefined;
        activeBackgroundColor?: string | undefined;
        useNative?: boolean | undefined;
        customValue?: any;
        ref?: any; /**
         * Pass to render a leading button/icon
         */
        style?: false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | import("react-native").Animated.AnimatedProps<ViewStyle> | import("react-native").Animated.AnimatedProps<import("react-native").RegisteredStyle<ViewStyle>> | import("react-native").Animated.AnimatedProps<import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined>> | null | undefined;
    } & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & {
        label?: string | undefined;
        color?: string | undefined;
        iconSource?: number | object | Function | undefined;
        iconStyle?: import("react-native").StyleProp<import("react-native").ImageStyle>;
        iconOnRight?: boolean | undefined;
        supportRTL?: boolean | undefined;
        backgroundColor?: string | undefined;
        disabledBackgroundColor?: string | undefined;
        size?: import("../../components/button").ButtonSize | undefined;
        borderRadius?: number | undefined;
        onPress?: ((props: any) => void) | undefined;
        disabled?: boolean | undefined;
        outline?: boolean | undefined; /**
         * Internal style for the field container
         */
        outlineColor?: string | undefined;
        outlineWidth?: number | undefined;
        link?: boolean | undefined;
        linkColor?: string | undefined;
        labelStyle?: import("react-native").StyleProp<TextStyle>;
        labelProps?: (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | undefined;
        fullWidth?: boolean | undefined;
        round?: boolean | undefined;
        enableShadow?: boolean | undefined;
        avoidInnerPadding?: boolean | undefined;
        avoidMinWidth?: boolean | undefined;
        getActiveBackgroundColor?: ((backgroundColor: string, props: any) => string) | undefined;
        animateLayout?: boolean | undefined;
        animateTo?: import("../../components/button").AnimationDirection | undefined;
    }) | undefined;
    /**
     * Pass to add floating placeholder support
     */
    floatingPlaceholder?: boolean | undefined;
    /**
     * Custom style for the floating placeholder
     */
    floatingPlaceholderStyle?: TextStyle | undefined;
    /**
     * A single or multiple validator. Can be a string (required, email) or custom function.
     */
    validate?: "number" | Function | "url" | "email" | "required" | "price" | Validator[] | undefined;
    /**
     * Should validate when the TextField mounts
     */
    validateOnStart?: boolean | undefined;
    /**
     * Should validate when the TextField value changes
     */
    validateOnChange?: boolean | undefined;
    /**
     * Should validate when losing focus of TextField
     */
    validateOnBlur?: boolean | undefined;
    /**
     * The position of the validation message (top/bottom)
     */
    validationMessagePosition?: ValidationMessagePosition | undefined;
    /**
     * Internal style for the field container
     */
    fieldStyle?: ViewStyle | undefined;
    /**
     * Container style of the whole component
     */
    containerStyle?: ViewStyle | undefined;
} & {
    useCustomTheme?: boolean | undefined;
}) | (Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & Partial<Record<"padding" | "paddingL" | "paddingT" | "paddingR" | "paddingB" | "paddingH" | "paddingV", boolean>> & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & import("../../commons/modifiers").CustomModifier & InputProps & LabelProps & FloatingPlaceholderProps & ValidationMessageProps & Pick<CharCounterProps, "charCounterStyle" | "showCharCounter"> & {
    /**
     * Pass to render a leading button/icon
     */
    leadingButton?: (Pick<import("react-native").TouchableOpacityProps, "testID" | "hitSlop" | "onLayout" | "hasTVPreferredFocus" | "tvParallaxProperties" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "activeOpacity" | "onPress" | "onLongPress" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset"> & Partial<Record<import("../../commons/modifiers").AlignmentLiterals, boolean>> & Partial<Record<import("../../commons/modifiers").PositionLiterals, boolean>> & Partial<Record<"padding" | "paddingL" | "paddingT" | "paddingR" | "paddingB" | "paddingH" | "paddingV", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & Partial<Record<"flex" | "flexG" | "flexS", boolean>> & Partial<Record<"br0" | "br10" | "br20" | "br30" | "br40" | "br50" | "br60" | "br100", boolean>> & Partial<Record<"bg", boolean>> & {
        backgroundColor?: string | undefined;
        throttleTime?: number | undefined;
        throttleOptions?: {
            leading: boolean;
            trailing: boolean;
        } | undefined;
        activeBackgroundColor?: string | undefined;
        useNative?: boolean | undefined;
        customValue?: any;
        ref?: any; /**
         * Pass to render a leading button/icon
         */
        style?: false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | import("react-native").Animated.AnimatedProps<ViewStyle> | import("react-native").Animated.AnimatedProps<import("react-native").RegisteredStyle<ViewStyle>> | import("react-native").Animated.AnimatedProps<import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined>> | null | undefined;
    } & import("../../commons/modifiers").CustomModifier & {
        label?: string | undefined;
        color?: string | undefined;
        iconSource?: number | object | Function | undefined;
        iconStyle?: import("react-native").StyleProp<import("react-native").ImageStyle>;
        iconOnRight?: boolean | undefined;
        supportRTL?: boolean | undefined;
        backgroundColor?: string | undefined;
        disabledBackgroundColor?: string | undefined;
        size?: import("../../components/button").ButtonSize | undefined;
        borderRadius?: number | undefined;
        onPress?: ((props: any) => void) | undefined;
        disabled?: boolean | undefined;
        outline?: boolean | undefined; /**
         * Internal style for the field container
         */
        outlineColor?: string | undefined;
        outlineWidth?: number | undefined;
        link?: boolean | undefined;
        linkColor?: string | undefined;
        labelStyle?: import("react-native").StyleProp<TextStyle>;
        labelProps?: (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | undefined;
        fullWidth?: boolean | undefined;
        round?: boolean | undefined;
        enableShadow?: boolean | undefined;
        avoidInnerPadding?: boolean | undefined;
        avoidMinWidth?: boolean | undefined;
        getActiveBackgroundColor?: ((backgroundColor: string, props: any) => string) | undefined;
        animateLayout?: boolean | undefined;
        animateTo?: import("../../components/button").AnimationDirection | undefined;
    }) | (Pick<import("react-native").TouchableOpacityProps, "testID" | "hitSlop" | "onLayout" | "hasTVPreferredFocus" | "tvParallaxProperties" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "activeOpacity" | "onPress" | "onLongPress" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset"> & Partial<Record<import("../../commons/modifiers").AlignmentLiterals, boolean>> & Partial<Record<import("../../commons/modifiers").PositionLiterals, boolean>> & Partial<Record<"padding" | "paddingL" | "paddingT" | "paddingR" | "paddingB" | "paddingH" | "paddingV", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & Partial<Record<"flex" | "flexG" | "flexS", boolean>> & Partial<Record<"br0" | "br10" | "br20" | "br30" | "br40" | "br50" | "br60" | "br100", boolean>> & Partial<Record<"bg", boolean>> & {
        backgroundColor?: string | undefined;
        throttleTime?: number | undefined;
        throttleOptions?: {
            leading: boolean;
            trailing: boolean;
        } | undefined;
        activeBackgroundColor?: string | undefined;
        useNative?: boolean | undefined;
        customValue?: any;
        ref?: any; /**
         * Pass to render a leading button/icon
         */
        style?: false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | import("react-native").Animated.AnimatedProps<ViewStyle> | import("react-native").Animated.AnimatedProps<import("react-native").RegisteredStyle<ViewStyle>> | import("react-native").Animated.AnimatedProps<import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined>> | null | undefined;
    } & import("../../commons/modifiers").CustomModifier & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & {
        label?: string | undefined;
        color?: string | undefined;
        iconSource?: number | object | Function | undefined;
        iconStyle?: import("react-native").StyleProp<import("react-native").ImageStyle>;
        iconOnRight?: boolean | undefined;
        supportRTL?: boolean | undefined;
        backgroundColor?: string | undefined;
        disabledBackgroundColor?: string | undefined;
        size?: import("../../components/button").ButtonSize | undefined;
        borderRadius?: number | undefined;
        onPress?: ((props: any) => void) | undefined;
        disabled?: boolean | undefined;
        outline?: boolean | undefined; /**
         * Internal style for the field container
         */
        outlineColor?: string | undefined;
        outlineWidth?: number | undefined;
        link?: boolean | undefined;
        linkColor?: string | undefined;
        labelStyle?: import("react-native").StyleProp<TextStyle>;
        labelProps?: (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | undefined;
        fullWidth?: boolean | undefined;
        round?: boolean | undefined;
        enableShadow?: boolean | undefined;
        avoidInnerPadding?: boolean | undefined;
        avoidMinWidth?: boolean | undefined;
        getActiveBackgroundColor?: ((backgroundColor: string, props: any) => string) | undefined;
        animateLayout?: boolean | undefined;
        animateTo?: import("../../components/button").AnimationDirection | undefined;
    }) | (Pick<import("react-native").TouchableOpacityProps, "testID" | "hitSlop" | "onLayout" | "hasTVPreferredFocus" | "tvParallaxProperties" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "activeOpacity" | "onPress" | "onLongPress" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset"> & Partial<Record<import("../../commons/modifiers").AlignmentLiterals, boolean>> & Partial<Record<import("../../commons/modifiers").PositionLiterals, boolean>> & Partial<Record<"padding" | "paddingL" | "paddingT" | "paddingR" | "paddingB" | "paddingH" | "paddingV", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & Partial<Record<"flex" | "flexG" | "flexS", boolean>> & Partial<Record<"br0" | "br10" | "br20" | "br30" | "br40" | "br50" | "br60" | "br100", boolean>> & Partial<Record<"bg", boolean>> & {
        backgroundColor?: string | undefined;
        throttleTime?: number | undefined;
        throttleOptions?: {
            leading: boolean;
            trailing: boolean;
        } | undefined;
        activeBackgroundColor?: string | undefined;
        useNative?: boolean | undefined;
        customValue?: any;
        ref?: any; /**
         * Pass to render a leading button/icon
         */
        style?: false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | import("react-native").Animated.AnimatedProps<ViewStyle> | import("react-native").Animated.AnimatedProps<import("react-native").RegisteredStyle<ViewStyle>> | import("react-native").Animated.AnimatedProps<import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined>> | null | undefined;
    } & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & import("../../commons/modifiers").CustomModifier & {
        label?: string | undefined;
        color?: string | undefined;
        iconSource?: number | object | Function | undefined;
        iconStyle?: import("react-native").StyleProp<import("react-native").ImageStyle>;
        iconOnRight?: boolean | undefined;
        supportRTL?: boolean | undefined;
        backgroundColor?: string | undefined;
        disabledBackgroundColor?: string | undefined;
        size?: import("../../components/button").ButtonSize | undefined;
        borderRadius?: number | undefined;
        onPress?: ((props: any) => void) | undefined;
        disabled?: boolean | undefined;
        outline?: boolean | undefined; /**
         * Internal style for the field container
         */
        outlineColor?: string | undefined;
        outlineWidth?: number | undefined;
        link?: boolean | undefined;
        linkColor?: string | undefined;
        labelStyle?: import("react-native").StyleProp<TextStyle>;
        labelProps?: (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | undefined;
        fullWidth?: boolean | undefined;
        round?: boolean | undefined;
        enableShadow?: boolean | undefined;
        avoidInnerPadding?: boolean | undefined;
        avoidMinWidth?: boolean | undefined;
        getActiveBackgroundColor?: ((backgroundColor: string, props: any) => string) | undefined;
        animateLayout?: boolean | undefined;
        animateTo?: import("../../components/button").AnimationDirection | undefined;
    }) | (Pick<import("react-native").TouchableOpacityProps, "testID" | "hitSlop" | "onLayout" | "hasTVPreferredFocus" | "tvParallaxProperties" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "activeOpacity" | "onPress" | "onLongPress" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset"> & Partial<Record<import("../../commons/modifiers").AlignmentLiterals, boolean>> & Partial<Record<import("../../commons/modifiers").PositionLiterals, boolean>> & Partial<Record<"padding" | "paddingL" | "paddingT" | "paddingR" | "paddingB" | "paddingH" | "paddingV", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & Partial<Record<"flex" | "flexG" | "flexS", boolean>> & Partial<Record<"br0" | "br10" | "br20" | "br30" | "br40" | "br50" | "br60" | "br100", boolean>> & Partial<Record<"bg", boolean>> & {
        backgroundColor?: string | undefined;
        throttleTime?: number | undefined;
        throttleOptions?: {
            leading: boolean;
            trailing: boolean;
        } | undefined;
        activeBackgroundColor?: string | undefined;
        useNative?: boolean | undefined;
        customValue?: any;
        ref?: any; /**
         * Pass to render a leading button/icon
         */
        style?: false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | import("react-native").Animated.AnimatedProps<ViewStyle> | import("react-native").Animated.AnimatedProps<import("react-native").RegisteredStyle<ViewStyle>> | import("react-native").Animated.AnimatedProps<import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined>> | null | undefined;
    } & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & {
        label?: string | undefined;
        color?: string | undefined;
        iconSource?: number | object | Function | undefined;
        iconStyle?: import("react-native").StyleProp<import("react-native").ImageStyle>;
        iconOnRight?: boolean | undefined;
        supportRTL?: boolean | undefined;
        backgroundColor?: string | undefined;
        disabledBackgroundColor?: string | undefined;
        size?: import("../../components/button").ButtonSize | undefined;
        borderRadius?: number | undefined;
        onPress?: ((props: any) => void) | undefined;
        disabled?: boolean | undefined;
        outline?: boolean | undefined; /**
         * Internal style for the field container
         */
        outlineColor?: string | undefined;
        outlineWidth?: number | undefined;
        link?: boolean | undefined;
        linkColor?: string | undefined;
        labelStyle?: import("react-native").StyleProp<TextStyle>;
        labelProps?: (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | undefined;
        fullWidth?: boolean | undefined;
        round?: boolean | undefined;
        enableShadow?: boolean | undefined;
        avoidInnerPadding?: boolean | undefined;
        avoidMinWidth?: boolean | undefined;
        getActiveBackgroundColor?: ((backgroundColor: string, props: any) => string) | undefined;
        animateLayout?: boolean | undefined;
        animateTo?: import("../../components/button").AnimationDirection | undefined;
    }) | undefined;
    /**
     * Pass to render a trailing button/icon
     */
    trailingButton?: (Pick<import("react-native").TouchableOpacityProps, "testID" | "hitSlop" | "onLayout" | "hasTVPreferredFocus" | "tvParallaxProperties" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "activeOpacity" | "onPress" | "onLongPress" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset"> & Partial<Record<import("../../commons/modifiers").AlignmentLiterals, boolean>> & Partial<Record<import("../../commons/modifiers").PositionLiterals, boolean>> & Partial<Record<"padding" | "paddingL" | "paddingT" | "paddingR" | "paddingB" | "paddingH" | "paddingV", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & Partial<Record<"flex" | "flexG" | "flexS", boolean>> & Partial<Record<"br0" | "br10" | "br20" | "br30" | "br40" | "br50" | "br60" | "br100", boolean>> & Partial<Record<"bg", boolean>> & {
        backgroundColor?: string | undefined;
        throttleTime?: number | undefined;
        throttleOptions?: {
            leading: boolean;
            trailing: boolean;
        } | undefined;
        activeBackgroundColor?: string | undefined;
        useNative?: boolean | undefined;
        customValue?: any;
        ref?: any; /**
         * Pass to render a leading button/icon
         */
        style?: false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | import("react-native").Animated.AnimatedProps<ViewStyle> | import("react-native").Animated.AnimatedProps<import("react-native").RegisteredStyle<ViewStyle>> | import("react-native").Animated.AnimatedProps<import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined>> | null | undefined;
    } & import("../../commons/modifiers").CustomModifier & {
        label?: string | undefined;
        color?: string | undefined;
        iconSource?: number | object | Function | undefined;
        iconStyle?: import("react-native").StyleProp<import("react-native").ImageStyle>;
        iconOnRight?: boolean | undefined;
        supportRTL?: boolean | undefined;
        backgroundColor?: string | undefined;
        disabledBackgroundColor?: string | undefined;
        size?: import("../../components/button").ButtonSize | undefined;
        borderRadius?: number | undefined;
        onPress?: ((props: any) => void) | undefined;
        disabled?: boolean | undefined;
        outline?: boolean | undefined; /**
         * Internal style for the field container
         */
        outlineColor?: string | undefined;
        outlineWidth?: number | undefined;
        link?: boolean | undefined;
        linkColor?: string | undefined;
        labelStyle?: import("react-native").StyleProp<TextStyle>;
        labelProps?: (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | undefined;
        fullWidth?: boolean | undefined;
        round?: boolean | undefined;
        enableShadow?: boolean | undefined;
        avoidInnerPadding?: boolean | undefined;
        avoidMinWidth?: boolean | undefined;
        getActiveBackgroundColor?: ((backgroundColor: string, props: any) => string) | undefined;
        animateLayout?: boolean | undefined;
        animateTo?: import("../../components/button").AnimationDirection | undefined;
    }) | (Pick<import("react-native").TouchableOpacityProps, "testID" | "hitSlop" | "onLayout" | "hasTVPreferredFocus" | "tvParallaxProperties" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "activeOpacity" | "onPress" | "onLongPress" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset"> & Partial<Record<import("../../commons/modifiers").AlignmentLiterals, boolean>> & Partial<Record<import("../../commons/modifiers").PositionLiterals, boolean>> & Partial<Record<"padding" | "paddingL" | "paddingT" | "paddingR" | "paddingB" | "paddingH" | "paddingV", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & Partial<Record<"flex" | "flexG" | "flexS", boolean>> & Partial<Record<"br0" | "br10" | "br20" | "br30" | "br40" | "br50" | "br60" | "br100", boolean>> & Partial<Record<"bg", boolean>> & {
        backgroundColor?: string | undefined;
        throttleTime?: number | undefined;
        throttleOptions?: {
            leading: boolean;
            trailing: boolean;
        } | undefined;
        activeBackgroundColor?: string | undefined;
        useNative?: boolean | undefined;
        customValue?: any;
        ref?: any; /**
         * Pass to render a leading button/icon
         */
        style?: false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | import("react-native").Animated.AnimatedProps<ViewStyle> | import("react-native").Animated.AnimatedProps<import("react-native").RegisteredStyle<ViewStyle>> | import("react-native").Animated.AnimatedProps<import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined>> | null | undefined;
    } & import("../../commons/modifiers").CustomModifier & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & {
        label?: string | undefined;
        color?: string | undefined;
        iconSource?: number | object | Function | undefined;
        iconStyle?: import("react-native").StyleProp<import("react-native").ImageStyle>;
        iconOnRight?: boolean | undefined;
        supportRTL?: boolean | undefined;
        backgroundColor?: string | undefined;
        disabledBackgroundColor?: string | undefined;
        size?: import("../../components/button").ButtonSize | undefined;
        borderRadius?: number | undefined;
        onPress?: ((props: any) => void) | undefined;
        disabled?: boolean | undefined;
        outline?: boolean | undefined; /**
         * Internal style for the field container
         */
        outlineColor?: string | undefined;
        outlineWidth?: number | undefined;
        link?: boolean | undefined;
        linkColor?: string | undefined;
        labelStyle?: import("react-native").StyleProp<TextStyle>;
        labelProps?: (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | undefined;
        fullWidth?: boolean | undefined;
        round?: boolean | undefined;
        enableShadow?: boolean | undefined;
        avoidInnerPadding?: boolean | undefined;
        avoidMinWidth?: boolean | undefined;
        getActiveBackgroundColor?: ((backgroundColor: string, props: any) => string) | undefined;
        animateLayout?: boolean | undefined;
        animateTo?: import("../../components/button").AnimationDirection | undefined;
    }) | (Pick<import("react-native").TouchableOpacityProps, "testID" | "hitSlop" | "onLayout" | "hasTVPreferredFocus" | "tvParallaxProperties" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "activeOpacity" | "onPress" | "onLongPress" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset"> & Partial<Record<import("../../commons/modifiers").AlignmentLiterals, boolean>> & Partial<Record<import("../../commons/modifiers").PositionLiterals, boolean>> & Partial<Record<"padding" | "paddingL" | "paddingT" | "paddingR" | "paddingB" | "paddingH" | "paddingV", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & Partial<Record<"flex" | "flexG" | "flexS", boolean>> & Partial<Record<"br0" | "br10" | "br20" | "br30" | "br40" | "br50" | "br60" | "br100", boolean>> & Partial<Record<"bg", boolean>> & {
        backgroundColor?: string | undefined;
        throttleTime?: number | undefined;
        throttleOptions?: {
            leading: boolean;
            trailing: boolean;
        } | undefined;
        activeBackgroundColor?: string | undefined;
        useNative?: boolean | undefined;
        customValue?: any;
        ref?: any; /**
         * Pass to render a leading button/icon
         */
        style?: false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | import("react-native").Animated.AnimatedProps<ViewStyle> | import("react-native").Animated.AnimatedProps<import("react-native").RegisteredStyle<ViewStyle>> | import("react-native").Animated.AnimatedProps<import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined>> | null | undefined;
    } & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & import("../../commons/modifiers").CustomModifier & {
        label?: string | undefined;
        color?: string | undefined;
        iconSource?: number | object | Function | undefined;
        iconStyle?: import("react-native").StyleProp<import("react-native").ImageStyle>;
        iconOnRight?: boolean | undefined;
        supportRTL?: boolean | undefined;
        backgroundColor?: string | undefined;
        disabledBackgroundColor?: string | undefined;
        size?: import("../../components/button").ButtonSize | undefined;
        borderRadius?: number | undefined;
        onPress?: ((props: any) => void) | undefined;
        disabled?: boolean | undefined;
        outline?: boolean | undefined; /**
         * Internal style for the field container
         */
        outlineColor?: string | undefined;
        outlineWidth?: number | undefined;
        link?: boolean | undefined;
        linkColor?: string | undefined;
        labelStyle?: import("react-native").StyleProp<TextStyle>;
        labelProps?: (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | undefined;
        fullWidth?: boolean | undefined;
        round?: boolean | undefined;
        enableShadow?: boolean | undefined;
        avoidInnerPadding?: boolean | undefined;
        avoidMinWidth?: boolean | undefined;
        getActiveBackgroundColor?: ((backgroundColor: string, props: any) => string) | undefined;
        animateLayout?: boolean | undefined;
        animateTo?: import("../../components/button").AnimationDirection | undefined;
    }) | (Pick<import("react-native").TouchableOpacityProps, "testID" | "hitSlop" | "onLayout" | "hasTVPreferredFocus" | "tvParallaxProperties" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "activeOpacity" | "onPress" | "onLongPress" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset"> & Partial<Record<import("../../commons/modifiers").AlignmentLiterals, boolean>> & Partial<Record<import("../../commons/modifiers").PositionLiterals, boolean>> & Partial<Record<"padding" | "paddingL" | "paddingT" | "paddingR" | "paddingB" | "paddingH" | "paddingV", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & Partial<Record<"flex" | "flexG" | "flexS", boolean>> & Partial<Record<"br0" | "br10" | "br20" | "br30" | "br40" | "br50" | "br60" | "br100", boolean>> & Partial<Record<"bg", boolean>> & {
        backgroundColor?: string | undefined;
        throttleTime?: number | undefined;
        throttleOptions?: {
            leading: boolean;
            trailing: boolean;
        } | undefined;
        activeBackgroundColor?: string | undefined;
        useNative?: boolean | undefined;
        customValue?: any;
        ref?: any; /**
         * Pass to render a leading button/icon
         */
        style?: false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | import("react-native").Animated.AnimatedProps<ViewStyle> | import("react-native").Animated.AnimatedProps<import("react-native").RegisteredStyle<ViewStyle>> | import("react-native").Animated.AnimatedProps<import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined>> | null | undefined;
    } & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & {
        label?: string | undefined;
        color?: string | undefined;
        iconSource?: number | object | Function | undefined;
        iconStyle?: import("react-native").StyleProp<import("react-native").ImageStyle>;
        iconOnRight?: boolean | undefined;
        supportRTL?: boolean | undefined;
        backgroundColor?: string | undefined;
        disabledBackgroundColor?: string | undefined;
        size?: import("../../components/button").ButtonSize | undefined;
        borderRadius?: number | undefined;
        onPress?: ((props: any) => void) | undefined;
        disabled?: boolean | undefined;
        outline?: boolean | undefined; /**
         * Internal style for the field container
         */
        outlineColor?: string | undefined;
        outlineWidth?: number | undefined;
        link?: boolean | undefined;
        linkColor?: string | undefined;
        labelStyle?: import("react-native").StyleProp<TextStyle>;
        labelProps?: (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | undefined;
        fullWidth?: boolean | undefined;
        round?: boolean | undefined;
        enableShadow?: boolean | undefined;
        avoidInnerPadding?: boolean | undefined;
        avoidMinWidth?: boolean | undefined;
        getActiveBackgroundColor?: ((backgroundColor: string, props: any) => string) | undefined;
        animateLayout?: boolean | undefined;
        animateTo?: import("../../components/button").AnimationDirection | undefined;
    }) | undefined;
    /**
     * Pass to add floating placeholder support
     */
    floatingPlaceholder?: boolean | undefined;
    /**
     * Custom style for the floating placeholder
     */
    floatingPlaceholderStyle?: TextStyle | undefined;
    /**
     * A single or multiple validator. Can be a string (required, email) or custom function.
     */
    validate?: "number" | Function | "url" | "email" | "required" | "price" | Validator[] | undefined;
    /**
     * Should validate when the TextField mounts
     */
    validateOnStart?: boolean | undefined;
    /**
     * Should validate when the TextField value changes
     */
    validateOnChange?: boolean | undefined;
    /**
     * Should validate when losing focus of TextField
     */
    validateOnBlur?: boolean | undefined;
    /**
     * The position of the validation message (top/bottom)
     */
    validationMessagePosition?: ValidationMessagePosition | undefined;
    /**
     * Internal style for the field container
     */
    fieldStyle?: ViewStyle | undefined;
    /**
     * Container style of the whole component
     */
    containerStyle?: ViewStyle | undefined;
} & {
    useCustomTheme?: boolean | undefined;
}) | (Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & Partial<Record<"padding" | "paddingL" | "paddingT" | "paddingR" | "paddingB" | "paddingH" | "paddingV", boolean>> & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & InputProps & LabelProps & FloatingPlaceholderProps & ValidationMessageProps & Pick<CharCounterProps, "charCounterStyle" | "showCharCounter"> & {
    /**
     * Pass to render a leading button/icon
     */
    leadingButton?: (Pick<import("react-native").TouchableOpacityProps, "testID" | "hitSlop" | "onLayout" | "hasTVPreferredFocus" | "tvParallaxProperties" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "activeOpacity" | "onPress" | "onLongPress" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset"> & Partial<Record<import("../../commons/modifiers").AlignmentLiterals, boolean>> & Partial<Record<import("../../commons/modifiers").PositionLiterals, boolean>> & Partial<Record<"padding" | "paddingL" | "paddingT" | "paddingR" | "paddingB" | "paddingH" | "paddingV", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & Partial<Record<"flex" | "flexG" | "flexS", boolean>> & Partial<Record<"br0" | "br10" | "br20" | "br30" | "br40" | "br50" | "br60" | "br100", boolean>> & Partial<Record<"bg", boolean>> & {
        backgroundColor?: string | undefined;
        throttleTime?: number | undefined;
        throttleOptions?: {
            leading: boolean;
            trailing: boolean;
        } | undefined;
        activeBackgroundColor?: string | undefined;
        useNative?: boolean | undefined;
        customValue?: any;
        ref?: any; /**
         * Pass to render a leading button/icon
         */
        style?: false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | import("react-native").Animated.AnimatedProps<ViewStyle> | import("react-native").Animated.AnimatedProps<import("react-native").RegisteredStyle<ViewStyle>> | import("react-native").Animated.AnimatedProps<import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined>> | null | undefined;
    } & import("../../commons/modifiers").CustomModifier & {
        label?: string | undefined;
        color?: string | undefined;
        iconSource?: number | object | Function | undefined;
        iconStyle?: import("react-native").StyleProp<import("react-native").ImageStyle>;
        iconOnRight?: boolean | undefined;
        supportRTL?: boolean | undefined;
        backgroundColor?: string | undefined;
        disabledBackgroundColor?: string | undefined;
        size?: import("../../components/button").ButtonSize | undefined;
        borderRadius?: number | undefined;
        onPress?: ((props: any) => void) | undefined;
        disabled?: boolean | undefined;
        outline?: boolean | undefined; /**
         * Internal style for the field container
         */
        outlineColor?: string | undefined;
        outlineWidth?: number | undefined;
        link?: boolean | undefined;
        linkColor?: string | undefined;
        labelStyle?: import("react-native").StyleProp<TextStyle>;
        labelProps?: (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | undefined;
        fullWidth?: boolean | undefined;
        round?: boolean | undefined;
        enableShadow?: boolean | undefined;
        avoidInnerPadding?: boolean | undefined;
        avoidMinWidth?: boolean | undefined;
        getActiveBackgroundColor?: ((backgroundColor: string, props: any) => string) | undefined;
        animateLayout?: boolean | undefined;
        animateTo?: import("../../components/button").AnimationDirection | undefined;
    }) | (Pick<import("react-native").TouchableOpacityProps, "testID" | "hitSlop" | "onLayout" | "hasTVPreferredFocus" | "tvParallaxProperties" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "activeOpacity" | "onPress" | "onLongPress" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset"> & Partial<Record<import("../../commons/modifiers").AlignmentLiterals, boolean>> & Partial<Record<import("../../commons/modifiers").PositionLiterals, boolean>> & Partial<Record<"padding" | "paddingL" | "paddingT" | "paddingR" | "paddingB" | "paddingH" | "paddingV", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & Partial<Record<"flex" | "flexG" | "flexS", boolean>> & Partial<Record<"br0" | "br10" | "br20" | "br30" | "br40" | "br50" | "br60" | "br100", boolean>> & Partial<Record<"bg", boolean>> & {
        backgroundColor?: string | undefined;
        throttleTime?: number | undefined;
        throttleOptions?: {
            leading: boolean;
            trailing: boolean;
        } | undefined;
        activeBackgroundColor?: string | undefined;
        useNative?: boolean | undefined;
        customValue?: any;
        ref?: any; /**
         * Pass to render a leading button/icon
         */
        style?: false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | import("react-native").Animated.AnimatedProps<ViewStyle> | import("react-native").Animated.AnimatedProps<import("react-native").RegisteredStyle<ViewStyle>> | import("react-native").Animated.AnimatedProps<import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined>> | null | undefined;
    } & import("../../commons/modifiers").CustomModifier & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & {
        label?: string | undefined;
        color?: string | undefined;
        iconSource?: number | object | Function | undefined;
        iconStyle?: import("react-native").StyleProp<import("react-native").ImageStyle>;
        iconOnRight?: boolean | undefined;
        supportRTL?: boolean | undefined;
        backgroundColor?: string | undefined;
        disabledBackgroundColor?: string | undefined;
        size?: import("../../components/button").ButtonSize | undefined;
        borderRadius?: number | undefined;
        onPress?: ((props: any) => void) | undefined;
        disabled?: boolean | undefined;
        outline?: boolean | undefined; /**
         * Internal style for the field container
         */
        outlineColor?: string | undefined;
        outlineWidth?: number | undefined;
        link?: boolean | undefined;
        linkColor?: string | undefined;
        labelStyle?: import("react-native").StyleProp<TextStyle>;
        labelProps?: (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | undefined;
        fullWidth?: boolean | undefined;
        round?: boolean | undefined;
        enableShadow?: boolean | undefined;
        avoidInnerPadding?: boolean | undefined;
        avoidMinWidth?: boolean | undefined;
        getActiveBackgroundColor?: ((backgroundColor: string, props: any) => string) | undefined;
        animateLayout?: boolean | undefined;
        animateTo?: import("../../components/button").AnimationDirection | undefined;
    }) | (Pick<import("react-native").TouchableOpacityProps, "testID" | "hitSlop" | "onLayout" | "hasTVPreferredFocus" | "tvParallaxProperties" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "activeOpacity" | "onPress" | "onLongPress" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset"> & Partial<Record<import("../../commons/modifiers").AlignmentLiterals, boolean>> & Partial<Record<import("../../commons/modifiers").PositionLiterals, boolean>> & Partial<Record<"padding" | "paddingL" | "paddingT" | "paddingR" | "paddingB" | "paddingH" | "paddingV", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & Partial<Record<"flex" | "flexG" | "flexS", boolean>> & Partial<Record<"br0" | "br10" | "br20" | "br30" | "br40" | "br50" | "br60" | "br100", boolean>> & Partial<Record<"bg", boolean>> & {
        backgroundColor?: string | undefined;
        throttleTime?: number | undefined;
        throttleOptions?: {
            leading: boolean;
            trailing: boolean;
        } | undefined;
        activeBackgroundColor?: string | undefined;
        useNative?: boolean | undefined;
        customValue?: any;
        ref?: any; /**
         * Pass to render a leading button/icon
         */
        style?: false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | import("react-native").Animated.AnimatedProps<ViewStyle> | import("react-native").Animated.AnimatedProps<import("react-native").RegisteredStyle<ViewStyle>> | import("react-native").Animated.AnimatedProps<import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined>> | null | undefined;
    } & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & import("../../commons/modifiers").CustomModifier & {
        label?: string | undefined;
        color?: string | undefined;
        iconSource?: number | object | Function | undefined;
        iconStyle?: import("react-native").StyleProp<import("react-native").ImageStyle>;
        iconOnRight?: boolean | undefined;
        supportRTL?: boolean | undefined;
        backgroundColor?: string | undefined;
        disabledBackgroundColor?: string | undefined;
        size?: import("../../components/button").ButtonSize | undefined;
        borderRadius?: number | undefined;
        onPress?: ((props: any) => void) | undefined;
        disabled?: boolean | undefined;
        outline?: boolean | undefined; /**
         * Internal style for the field container
         */
        outlineColor?: string | undefined;
        outlineWidth?: number | undefined;
        link?: boolean | undefined;
        linkColor?: string | undefined;
        labelStyle?: import("react-native").StyleProp<TextStyle>;
        labelProps?: (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | undefined;
        fullWidth?: boolean | undefined;
        round?: boolean | undefined;
        enableShadow?: boolean | undefined;
        avoidInnerPadding?: boolean | undefined;
        avoidMinWidth?: boolean | undefined;
        getActiveBackgroundColor?: ((backgroundColor: string, props: any) => string) | undefined;
        animateLayout?: boolean | undefined;
        animateTo?: import("../../components/button").AnimationDirection | undefined;
    }) | (Pick<import("react-native").TouchableOpacityProps, "testID" | "hitSlop" | "onLayout" | "hasTVPreferredFocus" | "tvParallaxProperties" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "activeOpacity" | "onPress" | "onLongPress" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset"> & Partial<Record<import("../../commons/modifiers").AlignmentLiterals, boolean>> & Partial<Record<import("../../commons/modifiers").PositionLiterals, boolean>> & Partial<Record<"padding" | "paddingL" | "paddingT" | "paddingR" | "paddingB" | "paddingH" | "paddingV", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & Partial<Record<"flex" | "flexG" | "flexS", boolean>> & Partial<Record<"br0" | "br10" | "br20" | "br30" | "br40" | "br50" | "br60" | "br100", boolean>> & Partial<Record<"bg", boolean>> & {
        backgroundColor?: string | undefined;
        throttleTime?: number | undefined;
        throttleOptions?: {
            leading: boolean;
            trailing: boolean;
        } | undefined;
        activeBackgroundColor?: string | undefined;
        useNative?: boolean | undefined;
        customValue?: any;
        ref?: any; /**
         * Pass to render a leading button/icon
         */
        style?: false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | import("react-native").Animated.AnimatedProps<ViewStyle> | import("react-native").Animated.AnimatedProps<import("react-native").RegisteredStyle<ViewStyle>> | import("react-native").Animated.AnimatedProps<import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined>> | null | undefined;
    } & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & {
        label?: string | undefined;
        color?: string | undefined;
        iconSource?: number | object | Function | undefined;
        iconStyle?: import("react-native").StyleProp<import("react-native").ImageStyle>;
        iconOnRight?: boolean | undefined;
        supportRTL?: boolean | undefined;
        backgroundColor?: string | undefined;
        disabledBackgroundColor?: string | undefined;
        size?: import("../../components/button").ButtonSize | undefined;
        borderRadius?: number | undefined;
        onPress?: ((props: any) => void) | undefined;
        disabled?: boolean | undefined;
        outline?: boolean | undefined; /**
         * Internal style for the field container
         */
        outlineColor?: string | undefined;
        outlineWidth?: number | undefined;
        link?: boolean | undefined;
        linkColor?: string | undefined;
        labelStyle?: import("react-native").StyleProp<TextStyle>;
        labelProps?: (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | undefined;
        fullWidth?: boolean | undefined;
        round?: boolean | undefined;
        enableShadow?: boolean | undefined;
        avoidInnerPadding?: boolean | undefined;
        avoidMinWidth?: boolean | undefined;
        getActiveBackgroundColor?: ((backgroundColor: string, props: any) => string) | undefined;
        animateLayout?: boolean | undefined;
        animateTo?: import("../../components/button").AnimationDirection | undefined;
    }) | undefined;
    /**
     * Pass to render a trailing button/icon
     */
    trailingButton?: (Pick<import("react-native").TouchableOpacityProps, "testID" | "hitSlop" | "onLayout" | "hasTVPreferredFocus" | "tvParallaxProperties" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "activeOpacity" | "onPress" | "onLongPress" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset"> & Partial<Record<import("../../commons/modifiers").AlignmentLiterals, boolean>> & Partial<Record<import("../../commons/modifiers").PositionLiterals, boolean>> & Partial<Record<"padding" | "paddingL" | "paddingT" | "paddingR" | "paddingB" | "paddingH" | "paddingV", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & Partial<Record<"flex" | "flexG" | "flexS", boolean>> & Partial<Record<"br0" | "br10" | "br20" | "br30" | "br40" | "br50" | "br60" | "br100", boolean>> & Partial<Record<"bg", boolean>> & {
        backgroundColor?: string | undefined;
        throttleTime?: number | undefined;
        throttleOptions?: {
            leading: boolean;
            trailing: boolean;
        } | undefined;
        activeBackgroundColor?: string | undefined;
        useNative?: boolean | undefined;
        customValue?: any;
        ref?: any; /**
         * Pass to render a leading button/icon
         */
        style?: false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | import("react-native").Animated.AnimatedProps<ViewStyle> | import("react-native").Animated.AnimatedProps<import("react-native").RegisteredStyle<ViewStyle>> | import("react-native").Animated.AnimatedProps<import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined>> | null | undefined;
    } & import("../../commons/modifiers").CustomModifier & {
        label?: string | undefined;
        color?: string | undefined;
        iconSource?: number | object | Function | undefined;
        iconStyle?: import("react-native").StyleProp<import("react-native").ImageStyle>;
        iconOnRight?: boolean | undefined;
        supportRTL?: boolean | undefined;
        backgroundColor?: string | undefined;
        disabledBackgroundColor?: string | undefined;
        size?: import("../../components/button").ButtonSize | undefined;
        borderRadius?: number | undefined;
        onPress?: ((props: any) => void) | undefined;
        disabled?: boolean | undefined;
        outline?: boolean | undefined; /**
         * Internal style for the field container
         */
        outlineColor?: string | undefined;
        outlineWidth?: number | undefined;
        link?: boolean | undefined;
        linkColor?: string | undefined;
        labelStyle?: import("react-native").StyleProp<TextStyle>;
        labelProps?: (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | undefined;
        fullWidth?: boolean | undefined;
        round?: boolean | undefined;
        enableShadow?: boolean | undefined;
        avoidInnerPadding?: boolean | undefined;
        avoidMinWidth?: boolean | undefined;
        getActiveBackgroundColor?: ((backgroundColor: string, props: any) => string) | undefined;
        animateLayout?: boolean | undefined;
        animateTo?: import("../../components/button").AnimationDirection | undefined;
    }) | (Pick<import("react-native").TouchableOpacityProps, "testID" | "hitSlop" | "onLayout" | "hasTVPreferredFocus" | "tvParallaxProperties" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "activeOpacity" | "onPress" | "onLongPress" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset"> & Partial<Record<import("../../commons/modifiers").AlignmentLiterals, boolean>> & Partial<Record<import("../../commons/modifiers").PositionLiterals, boolean>> & Partial<Record<"padding" | "paddingL" | "paddingT" | "paddingR" | "paddingB" | "paddingH" | "paddingV", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & Partial<Record<"flex" | "flexG" | "flexS", boolean>> & Partial<Record<"br0" | "br10" | "br20" | "br30" | "br40" | "br50" | "br60" | "br100", boolean>> & Partial<Record<"bg", boolean>> & {
        backgroundColor?: string | undefined;
        throttleTime?: number | undefined;
        throttleOptions?: {
            leading: boolean;
            trailing: boolean;
        } | undefined;
        activeBackgroundColor?: string | undefined;
        useNative?: boolean | undefined;
        customValue?: any;
        ref?: any; /**
         * Pass to render a leading button/icon
         */
        style?: false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | import("react-native").Animated.AnimatedProps<ViewStyle> | import("react-native").Animated.AnimatedProps<import("react-native").RegisteredStyle<ViewStyle>> | import("react-native").Animated.AnimatedProps<import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined>> | null | undefined;
    } & import("../../commons/modifiers").CustomModifier & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & {
        label?: string | undefined;
        color?: string | undefined;
        iconSource?: number | object | Function | undefined;
        iconStyle?: import("react-native").StyleProp<import("react-native").ImageStyle>;
        iconOnRight?: boolean | undefined;
        supportRTL?: boolean | undefined;
        backgroundColor?: string | undefined;
        disabledBackgroundColor?: string | undefined;
        size?: import("../../components/button").ButtonSize | undefined;
        borderRadius?: number | undefined;
        onPress?: ((props: any) => void) | undefined;
        disabled?: boolean | undefined;
        outline?: boolean | undefined; /**
         * Internal style for the field container
         */
        outlineColor?: string | undefined;
        outlineWidth?: number | undefined;
        link?: boolean | undefined;
        linkColor?: string | undefined;
        labelStyle?: import("react-native").StyleProp<TextStyle>;
        labelProps?: (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | undefined;
        fullWidth?: boolean | undefined;
        round?: boolean | undefined;
        enableShadow?: boolean | undefined;
        avoidInnerPadding?: boolean | undefined;
        avoidMinWidth?: boolean | undefined;
        getActiveBackgroundColor?: ((backgroundColor: string, props: any) => string) | undefined;
        animateLayout?: boolean | undefined;
        animateTo?: import("../../components/button").AnimationDirection | undefined;
    }) | (Pick<import("react-native").TouchableOpacityProps, "testID" | "hitSlop" | "onLayout" | "hasTVPreferredFocus" | "tvParallaxProperties" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "activeOpacity" | "onPress" | "onLongPress" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset"> & Partial<Record<import("../../commons/modifiers").AlignmentLiterals, boolean>> & Partial<Record<import("../../commons/modifiers").PositionLiterals, boolean>> & Partial<Record<"padding" | "paddingL" | "paddingT" | "paddingR" | "paddingB" | "paddingH" | "paddingV", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & Partial<Record<"flex" | "flexG" | "flexS", boolean>> & Partial<Record<"br0" | "br10" | "br20" | "br30" | "br40" | "br50" | "br60" | "br100", boolean>> & Partial<Record<"bg", boolean>> & {
        backgroundColor?: string | undefined;
        throttleTime?: number | undefined;
        throttleOptions?: {
            leading: boolean;
            trailing: boolean;
        } | undefined;
        activeBackgroundColor?: string | undefined;
        useNative?: boolean | undefined;
        customValue?: any;
        ref?: any; /**
         * Pass to render a leading button/icon
         */
        style?: false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | import("react-native").Animated.AnimatedProps<ViewStyle> | import("react-native").Animated.AnimatedProps<import("react-native").RegisteredStyle<ViewStyle>> | import("react-native").Animated.AnimatedProps<import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined>> | null | undefined;
    } & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & import("../../commons/modifiers").CustomModifier & {
        label?: string | undefined;
        color?: string | undefined;
        iconSource?: number | object | Function | undefined;
        iconStyle?: import("react-native").StyleProp<import("react-native").ImageStyle>;
        iconOnRight?: boolean | undefined;
        supportRTL?: boolean | undefined;
        backgroundColor?: string | undefined;
        disabledBackgroundColor?: string | undefined;
        size?: import("../../components/button").ButtonSize | undefined;
        borderRadius?: number | undefined;
        onPress?: ((props: any) => void) | undefined;
        disabled?: boolean | undefined;
        outline?: boolean | undefined; /**
         * Internal style for the field container
         */
        outlineColor?: string | undefined;
        outlineWidth?: number | undefined;
        link?: boolean | undefined;
        linkColor?: string | undefined;
        labelStyle?: import("react-native").StyleProp<TextStyle>;
        labelProps?: (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | undefined;
        fullWidth?: boolean | undefined;
        round?: boolean | undefined;
        enableShadow?: boolean | undefined;
        avoidInnerPadding?: boolean | undefined;
        avoidMinWidth?: boolean | undefined;
        getActiveBackgroundColor?: ((backgroundColor: string, props: any) => string) | undefined;
        animateLayout?: boolean | undefined;
        animateTo?: import("../../components/button").AnimationDirection | undefined;
    }) | (Pick<import("react-native").TouchableOpacityProps, "testID" | "hitSlop" | "onLayout" | "hasTVPreferredFocus" | "tvParallaxProperties" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "activeOpacity" | "onPress" | "onLongPress" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset"> & Partial<Record<import("../../commons/modifiers").AlignmentLiterals, boolean>> & Partial<Record<import("../../commons/modifiers").PositionLiterals, boolean>> & Partial<Record<"padding" | "paddingL" | "paddingT" | "paddingR" | "paddingB" | "paddingH" | "paddingV", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & Partial<Record<"flex" | "flexG" | "flexS", boolean>> & Partial<Record<"br0" | "br10" | "br20" | "br30" | "br40" | "br50" | "br60" | "br100", boolean>> & Partial<Record<"bg", boolean>> & {
        backgroundColor?: string | undefined;
        throttleTime?: number | undefined;
        throttleOptions?: {
            leading: boolean;
            trailing: boolean;
        } | undefined;
        activeBackgroundColor?: string | undefined;
        useNative?: boolean | undefined;
        customValue?: any;
        ref?: any; /**
         * Pass to render a leading button/icon
         */
        style?: false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined> | import("react-native").Animated.AnimatedProps<ViewStyle> | import("react-native").Animated.AnimatedProps<import("react-native").RegisteredStyle<ViewStyle>> | import("react-native").Animated.AnimatedProps<import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined>> | null | undefined;
    } & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & {
        label?: string | undefined;
        color?: string | undefined;
        iconSource?: number | object | Function | undefined;
        iconStyle?: import("react-native").StyleProp<import("react-native").ImageStyle>;
        iconOnRight?: boolean | undefined;
        supportRTL?: boolean | undefined;
        backgroundColor?: string | undefined;
        disabledBackgroundColor?: string | undefined;
        size?: import("../../components/button").ButtonSize | undefined;
        borderRadius?: number | undefined;
        onPress?: ((props: any) => void) | undefined;
        disabled?: boolean | undefined;
        outline?: boolean | undefined; /**
         * Internal style for the field container
         */
        outlineColor?: string | undefined;
        outlineWidth?: number | undefined;
        link?: boolean | undefined;
        linkColor?: string | undefined;
        labelStyle?: import("react-native").StyleProp<TextStyle>;
        labelProps?: (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & import("../../commons/modifiers").CustomModifier & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & import("../../commons/modifiers").CustomModifier & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | (import("react-native").TextProps & Partial<Record<"text10" | "text20" | "text30" | "text40" | "text50" | "text60" | "text65" | "text70" | "text80" | "text90" | "text100" | "text10T" | "text10L" | "text10R" | "text10M" | "text10BO" | "text10H" | "text10BL" | "text20T" | "text20L" | "text20R" | "text20M" | "text20BO" | "text20H" | "text20BL" | "text30T" | "text30L" | "text30R" | "text30M" | "text30BO" | "text30H" | "text30BL" | "text40T" | "text40L" | "text40R" | "text40M" | "text40BO" | "text40H" | "text40BL" | "text50T" | "text50L" | "text50R" | "text50M" | "text50BO" | "text50H" | "text50BL" | "text60T" | "text60L" | "text60R" | "text60M" | "text60BO" | "text60H" | "text60BL" | "text65T" | "text65L" | "text65R" | "text65M" | "text65BO" | "text65H" | "text65BL" | "text70T" | "text70L" | "text70R" | "text70M" | "text70BO" | "text70H" | "text70BL" | "text80T" | "text80L" | "text80R" | "text80M" | "text80BO" | "text80H" | "text80BL" | "text90T" | "text90L" | "text90R" | "text90M" | "text90BO" | "text90H" | "text90BL" | "text100T" | "text100L" | "text100R" | "text100M" | "text100BO" | "text100H" | "text100BL", boolean>> & Partial<Record<"black" | "white" | "dark10" | "dark20" | "dark30" | "dark40" | "dark50" | "dark60" | "dark70" | "dark80" | "grey10" | "grey20" | "grey30" | "grey40" | "grey50" | "grey60" | "grey70" | "grey80" | "blue10" | "blue20" | "blue30" | "blue40" | "blue50" | "blue60" | "blue70" | "blue80" | "cyan10" | "cyan20" | "cyan30" | "cyan40" | "cyan50" | "cyan60" | "cyan70" | "cyan80" | "green10" | "green20" | "green30" | "green40" | "green50" | "green60" | "green70" | "green80" | "yellow10" | "yellow20" | "yellow30" | "yellow40" | "yellow50" | "yellow60" | "yellow70" | "yellow80" | "orange10" | "orange20" | "orange30" | "orange40" | "orange50" | "orange60" | "orange70" | "orange80" | "red10" | "red20" | "red30" | "red40" | "red50" | "red60" | "red70" | "red80" | "purple10" | "purple20" | "purple30" | "purple40" | "purple50" | "purple60" | "purple70" | "purple80" | "violet10" | "violet20" | "violet30" | "violet40" | "violet50" | "violet60" | "violet70" | "violet80", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & {
            color?: string | undefined;
            center?: boolean | undefined;
            uppercase?: boolean | undefined;
            highlightString?: string | undefined;
            highlightStyle?: TextStyle | undefined;
            animated?: boolean | undefined;
            textAlign?: string | undefined;
        }) | undefined;
        fullWidth?: boolean | undefined;
        round?: boolean | undefined;
        enableShadow?: boolean | undefined;
        avoidInnerPadding?: boolean | undefined;
        avoidMinWidth?: boolean | undefined;
        getActiveBackgroundColor?: ((backgroundColor: string, props: any) => string) | undefined;
        animateLayout?: boolean | undefined;
        animateTo?: import("../../components/button").AnimationDirection | undefined;
    }) | undefined;
    /**
     * Pass to add floating placeholder support
     */
    floatingPlaceholder?: boolean | undefined;
    /**
     * Custom style for the floating placeholder
     */
    floatingPlaceholderStyle?: TextStyle | undefined;
    /**
     * A single or multiple validator. Can be a string (required, email) or custom function.
     */
    validate?: "number" | Function | "url" | "email" | "required" | "price" | Validator[] | undefined;
    /**
     * Should validate when the TextField mounts
     */
    validateOnStart?: boolean | undefined;
    /**
     * Should validate when the TextField value changes
     */
    validateOnChange?: boolean | undefined;
    /**
     * Should validate when losing focus of TextField
     */
    validateOnBlur?: boolean | undefined;
    /**
     * The position of the validation message (top/bottom)
     */
    validationMessagePosition?: ValidationMessagePosition | undefined;
    /**
     * Internal style for the field container
     */
    fieldStyle?: ViewStyle | undefined;
    /**
     * Container style of the whole component
     */
    containerStyle?: ViewStyle | undefined;
} & {
    useCustomTheme?: boolean | undefined;
}), any> & StaticMembers;
export default _default;
