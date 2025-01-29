import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const VideoOctagonBold = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <Path
        d="M19.5119 5.85L13.5719 2.42C12.6019 1.86 11.4019 1.86 10.4219 2.42L4.49187 5.85C3.52187 6.41 2.92188 7.45 2.92188 8.58V15.42C2.92188 16.54 3.52187 17.58 4.49187 18.15L10.4319 21.58C11.4019 22.14 12.6019 22.14 13.5819 21.58L19.5219 18.15C20.4919 17.59 21.0919 16.55 21.0919 15.42V8.58C21.0819 7.45 20.4819 6.42 19.5119 5.85ZM14.2519 13.4L13.2119 14L12.1719 14.6C10.8419 15.37 9.75187 14.74 9.75187 13.2V12V10.8C9.75187 9.26 10.8419 8.63 12.1719 9.4L13.2119 10L14.2519 10.6C15.5819 11.37 15.5819 12.63 14.2519 13.4Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const VideoOctagonBroken = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <Path
        d="M2.91992 8.58003C2.91992 7.46003 3.5199 6.41999 4.4899 5.84999L10.4299 2.42C11.3999 1.86 12.5999 1.86 13.5799 2.42L19.5199 5.84999C20.4899 6.40999 21.0899 7.45003 21.0899 8.58003V15.42C21.0899 16.54 20.4899 17.58 19.5199 18.15L13.5799 21.58C12.6099 22.14 11.4099 22.14 10.4299 21.58L4.4899 18.15C3.5199 17.59 2.91992 16.55 2.91992 15.42V12.66"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.75 11.9999V10.7999C9.75 9.25989 10.84 8.62993 12.17 9.39993L13.21 9.9999L14.25 10.5999C15.58 11.3699 15.58 12.6299 14.25 13.3999L13.21 13.9999L12.17 14.5999C10.84 15.3699 9.75 14.7399 9.75 13.1999V11.9999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const VideoOctagonBulk = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <Path
        opacity="0.4"
        d="M21.0801 8.58003V15.42C21.0801 16.54 20.4802 17.58 19.5102 18.15L13.5702 21.58C12.6002 22.14 11.4002 22.14 10.4202 21.58L4.48016 18.15C3.51016 17.59 2.91016 16.55 2.91016 15.42V8.58003C2.91016 7.46003 3.51016 6.41999 4.48016 5.84999L10.4202 2.42C11.3902 1.86 12.5902 1.86 13.5702 2.42L19.5102 5.84999C20.4802 6.41999 21.0801 7.45003 21.0801 8.58003Z"
        fill="currentColor"
      />
      <Path
        d="M9.75 11.9999V10.7999C9.75 9.25989 10.84 8.62993 12.17 9.39993L13.21 9.9999L14.25 10.5999C15.58 11.3699 15.58 12.6299 14.25 13.3999L13.21 13.9999L12.17 14.5999C10.84 15.3699 9.75 14.7399 9.75 13.1999V11.9999Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const VideoOctagonLinear = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <Path
        d="M21.0799 8.58003V15.42C21.0799 16.54 20.4799 17.58 19.5099 18.15L13.5699 21.58C12.5999 22.14 11.3999 22.14 10.4199 21.58L4.47992 18.15C3.50992 17.59 2.90991 16.55 2.90991 15.42V8.58003C2.90991 7.46003 3.50992 6.41999 4.47992 5.84999L10.4199 2.42C11.3899 1.86 12.5899 1.86 13.5699 2.42L19.5099 5.84999C20.4799 6.41999 21.0799 7.45003 21.0799 8.58003Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.75 11.9999V10.7999C9.75 9.25989 10.84 8.62993 12.17 9.39993L13.21 9.9999L14.25 10.5999C15.58 11.3699 15.58 12.6299 14.25 13.3999L13.21 13.9999L12.17 14.5999C10.84 15.3699 9.75 14.7399 9.75 13.1999V11.9999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const VideoOctagonOutline = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <Path
        d="M12.0002 22.7501C11.3302 22.7501 10.6501 22.5801 10.0501 22.2301L4.11014 18.8001C2.91014 18.1001 2.16016 16.8101 2.16016 15.4201V8.58011C2.16016 7.19011 2.91014 5.90011 4.11014 5.20011L10.0501 1.77012C11.2501 1.07012 12.7402 1.07012 13.9502 1.77012L19.8902 5.20011C21.0902 5.90011 21.8401 7.19011 21.8401 8.58011V15.4201C21.8401 16.8101 21.0902 18.1001 19.8902 18.8001L13.9502 22.2301C13.3502 22.5801 12.6702 22.7501 12.0002 22.7501ZM12.0002 2.7501C11.5902 2.7501 11.1701 2.8601 10.8001 3.0701L4.86014 6.5001C4.12014 6.9301 3.66016 7.72011 3.66016 8.58011V15.4201C3.66016 16.2701 4.12014 17.0701 4.86014 17.5001L10.8001 20.9301C11.5401 21.3601 12.4602 21.3601 13.2002 20.9301L19.1402 17.5001C19.8802 17.0701 20.3401 16.2801 20.3401 15.4201V8.58011C20.3401 7.73011 19.8802 6.9301 19.1402 6.5001L13.2002 3.0701C12.8302 2.8601 12.4102 2.7501 12.0002 2.7501Z"
        fill="currentColor"
      />
      <Path
        d="M11.0902 15.6703C10.7302 15.6703 10.3902 15.5803 10.0802 15.4103C9.39023 15.0103 8.99023 14.2003 8.99023 13.1903V10.7903C8.99023 9.78027 9.39023 8.9703 10.0802 8.5703C10.7702 8.1703 11.6703 8.23028 12.5403 8.74028L14.6202 9.94029C15.4902 10.4403 16.0002 11.1903 16.0002 11.9903C16.0002 12.7903 15.5002 13.5303 14.6202 14.0403L12.5403 15.2403C12.0603 15.5303 11.5602 15.6703 11.0902 15.6703ZM11.1003 9.8203C11.0003 9.8203 10.9102 9.8403 10.8402 9.8803C10.6302 10.0003 10.5002 10.3403 10.5002 10.8003V13.2003C10.5002 13.6503 10.6302 13.9903 10.8402 14.1203C11.0502 14.2403 11.4102 14.1803 11.8002 13.9503L13.8802 12.7503C14.2702 12.5203 14.5002 12.2403 14.5002 12.0003C14.5002 11.7603 14.2702 11.4803 13.8802 11.2503L11.8002 10.0503C11.5402 9.90028 11.2903 9.8203 11.1003 9.8203Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const VideoOctagonTwotone = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <Path
        d="M21.0801 8.58003V15.42C21.0801 16.54 20.4802 17.58 19.5102 18.15L13.5702 21.58C12.6002 22.14 11.4002 22.14 10.4202 21.58L4.48016 18.15C3.51016 17.59 2.91016 16.55 2.91016 15.42V8.58003C2.91016 7.46003 3.51016 6.41999 4.48016 5.84999L10.4202 2.42C11.3902 1.86 12.5902 1.86 13.5702 2.42L19.5102 5.84999C20.4802 6.41999 21.0801 7.45003 21.0801 8.58003Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M9.75 11.9999V10.7999C9.75 9.25989 10.84 8.62993 12.17 9.39993L13.21 9.9999L14.25 10.5999C15.58 11.3699 15.58 12.6299 14.25 13.3999L13.21 13.9999L12.17 14.5999C10.84 15.3699 9.75 14.7399 9.75 13.1999V11.9999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: VideoOctagonBold,
  broken: VideoOctagonBroken,
  bulk: VideoOctagonBulk,
  linear: VideoOctagonLinear,
  outline: VideoOctagonOutline,
  twotone: VideoOctagonTwotone,
};

export const VideoOctagonIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default VideoOctagonIcon;
