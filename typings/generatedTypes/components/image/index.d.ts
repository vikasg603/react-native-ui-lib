/// <reference types="react" />
import { ImageProps as RNImageProps } from 'react-native';
import { PureBaseComponent as PureBaseComponentType } from '../../../typings/commons';
import { OverlayType } from '../../../typings/components/Overlay';
declare const TypedBaseComponent: typeof PureBaseComponentType;
export interface PropsTypes extends Omit<RNImageProps, 'tintColor'> {
    /**
    * custom source transform handler for manipulating the image source (great for size control)
    */
    sourceTransformer?: (props: any) => any;
    /**
   * if provided image source will be driven from asset name
   */
    assetName?: string;
    /**
   * the asset group, default is "icons"
   */
    assetGroup?: string;
    /**
   * the asset tint
   */
    tintColor?: string;
    /**
   * whether the image should flip horizontally on RTL locals
   */
    supportRTL?: boolean;
    /**
   * Show image as a cover, full width, image (according to aspect ratio, default: 16:8)
   */
    cover?: boolean;
    /**
   * The aspect ratio for the image
   */
    aspectRatio?: number;
    /**
   * Pass a custom color for the overlay
   */
    overlayType?: OverlayType;
    /**
   * Pass a custom color for the overlay
   */
    overlayColor?: string;
    /**
     * Render an overlay with custom content
     */
    customOverlayContent: JSX.Element;
}
/**
 * @description: Image wrapper with extra functionality like source transform and assets support
 * @extends: Image
 * @extendslink: https://facebook.github.io/react-native/docs/image.html
 */
declare class Image extends TypedBaseComponent<PropsTypes> {
    static displayName: string;
    static defaultProps: {
        assetGroup: string;
    };
    static overlayTypes: any;
    getThemeProps: any;
    private sourceTransformer;
    constructor(props: PropsTypes);
    isGif(): boolean | undefined;
    shouldUseImageBackground(): boolean;
    getImageSource(): any;
    render(): JSX.Element;
}
export default Image;
