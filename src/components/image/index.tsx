import _ from 'lodash';
import React from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';
import {Image as RNImage, StyleSheet, ImageBackground, ImageProps as RNImageProps} from 'react-native';
import {Constants} from '../../helpers';
//@ts-ignore
import {PureBaseComponent} from '../../commons';
import {PureBaseComponent as PureBaseComponentType} from '../../../typings/commons';
//@ts-ignore
import Assets from '../../assets';
//@ts-ignore
import Overlay from '../overlay';
//@ts-ignore
import {OverlayType} from '../../../typings/components/Overlay';

const TypedBaseComponent = PureBaseComponent as typeof PureBaseComponentType;

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
class Image extends TypedBaseComponent<PropsTypes> {
  static displayName = 'Image';
  static defaultProps = {
    assetGroup: 'icons'
  };
  static overlayTypes = Overlay.overlayTypes;
  
  getThemeProps: any; //todo: remove after migrating baseComponent to typescript

  private sourceTransformer: (props: PropsTypes) => {uri: string};
  
  constructor(props: PropsTypes) {
    super(props);
    this.sourceTransformer = this.getThemeProps().sourceTransformer;
  }

  isGif() {
    if (Constants.isAndroid) {
      const {source} = this.props;
      const url = _.get(source, 'uri');
      const isGif = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/.test(url);
      return isGif;
    }
  }

  shouldUseImageBackground() {
    const {overlayType, customOverlayContent} = this.props;

    return !!overlayType || this.isGif() || !_.isUndefined(customOverlayContent);
  }

  getImageSource() {
    const {assetName, assetGroup} = this.props;
    if (!_.isUndefined(assetName)) {
      return _.get(Assets, `${assetGroup}.${assetName}`);
    }

    if (this.sourceTransformer) {
      return this.sourceTransformer(this.props);
    }

    const {source} = this.props;
    if (typeof source === 'object' && (_.get(source, 'uri') === null || _.get(source, 'uri') === '')) {
      return {...source, uri: undefined};
    }

    return source;
  }

  render() {
    const source = this.getImageSource();
    const {
      tintColor,
      style,
      supportRTL,
      cover,
      aspectRatio,
      overlayType,
      overlayColor,
      customOverlayContent,
      ...others
    } = this.getThemeProps();
    const shouldFlipRTL = supportRTL && Constants.isRTL;
    const ImageView = (this.shouldUseImageBackground() ? ImageBackground : RNImage) as React.ElementType;

    return (
      <ImageView
        style={[
          {tintColor},
          shouldFlipRTL && styles.rtlFlipped,
          cover && styles.coverImage,
          this.isGif() && styles.gifImage,
          aspectRatio && {aspectRatio},
          style
        ]}
        accessible={false}
        accessibilityRole={'image'}
        {...others}
        source={source}
      >
        {(overlayType || customOverlayContent) && (
          <Overlay style={style} type={overlayType} color={overlayColor} customContent={customOverlayContent} />
        )}
      </ImageView>
    );
  }
}

const styles = StyleSheet.create({
  rtlFlipped: {
    transform: [{scaleX: -1}]
  },
  coverImage: {
    width: '100%',
    aspectRatio: 16 / 8
  },
  gifImage: {
    overflow: 'hidden'
  }
});

hoistNonReactStatic(Image, RNImage);
export default Image;
