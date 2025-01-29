import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { G, Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const CardRemoveBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.8984 15.0312C16.6884 15.0312 14.8984 16.8213 14.8984 19.0313C14.8984 21.2413 16.6884 23.0313 18.8984 23.0313C21.1084 23.0313 22.8984 21.2413 22.8984 19.0313C22.8984 16.8213 21.1084 15.0312 18.8984 15.0312ZM20.4984 20.6813C20.3484 20.8313 20.1584 20.9012 19.9684 20.9012C19.7784 20.9012 19.5884 20.8313 19.4384 20.6813L18.9084 20.1512L18.3584 20.7013C18.2084 20.8513 18.0184 20.9213 17.8284 20.9213C17.6384 20.9213 17.4484 20.8513 17.2984 20.7013C17.0084 20.4113 17.0084 19.9312 17.2984 19.6412L17.8484 19.0913L17.3184 18.5612C17.0284 18.2712 17.0284 17.7913 17.3184 17.5013C17.6084 17.2113 18.0884 17.2113 18.3784 17.5013L18.9084 18.0313L19.4084 17.5313C19.6984 17.2413 20.1784 17.2413 20.4684 17.5313C20.7584 17.8213 20.7584 18.3013 20.4684 18.5913L19.9684 19.0913L20.4984 19.6213C20.7884 19.9113 20.7884 20.3913 20.4984 20.6813Z"
        fill="currentColor"
      />
      <Path
        d="M22 7.54844V7.99844C22 8.54844 21.55 8.99844 21 8.99844H3C2.45 8.99844 2 8.54844 2 7.99844V7.53844C2 5.24844 3.85 3.39844 6.14 3.39844H17.85C20.14 3.39844 22 5.25844 22 7.54844Z"
        fill="currentColor"
      />
      <Path
        d="M2 11.4983V16.4583C2 18.7483 3.85 20.5983 6.14 20.5983H12.4C12.98 20.5983 13.48 20.1083 13.43 19.5283C13.29 17.9983 13.78 16.3383 15.14 15.0183C15.7 14.4683 16.39 14.0483 17.14 13.8083C18.39 13.4083 19.6 13.4583 20.67 13.8183C21.32 14.0383 22 13.5683 22 12.8783V11.4883C22 10.9383 21.55 10.4883 21 10.4883H3C2.45 10.4983 2 10.9483 2 11.4983ZM8 17.2483H6C5.59 17.2483 5.25 16.9083 5.25 16.4983C5.25 16.0883 5.59 15.7483 6 15.7483H8C8.41 15.7483 8.75 16.0883 8.75 16.4983C8.75 16.9083 8.41 17.2483 8 17.2483Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CardRemoveBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M6 10.03H21.9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.4604 20.53H6.35034C2.80034 20.53 1.90039 19.65 1.90039 16.14V7.92004C1.90039 4.74004 2.64036 3.72004 5.43036 3.56004C5.71036 3.55004 6.02034 3.54004 6.35034 3.54004H17.4604C21.0104 3.54004 21.9103 4.42004 21.9103 7.93004V12.34"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.9004 22.03C20.1095 22.03 21.9004 20.2392 21.9004 18.03C21.9004 15.8209 20.1095 14.03 17.9004 14.03C15.6913 14.03 13.9004 15.8209 13.9004 18.03C13.9004 20.2392 15.6913 22.03 17.9004 22.03Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.9694 19.15L16.8594 17.03"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.9501 17.0601L16.8301 19.1701"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.90039 16.03H9.90039"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const CardRemoveBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.9004 15.0298C16.6904 15.0298 14.9004 16.8198 14.9004 19.0298C14.9004 21.2398 16.6904 23.0298 18.9004 23.0298C21.1104 23.0298 22.9004 21.2398 22.9004 19.0298C22.9004 16.8198 21.1104 15.0298 18.9004 15.0298ZM20.5004 20.6798C20.3504 20.8298 20.1603 20.8998 19.9703 20.8998C19.7803 20.8998 19.5904 20.8298 19.4404 20.6798L18.9103 20.1498L18.3604 20.6998C18.2104 20.8498 18.0204 20.9198 17.8304 20.9198C17.6404 20.9198 17.4504 20.8498 17.3004 20.6998C17.0104 20.4098 17.0104 19.9298 17.3004 19.6398L17.8503 19.0898L17.3204 18.5598C17.0304 18.2698 17.0304 17.7898 17.3204 17.4998C17.6104 17.2098 18.0904 17.2098 18.3804 17.4998L18.9103 18.0298L19.4103 17.5298C19.7003 17.2398 20.1803 17.2398 20.4703 17.5298C20.7603 17.8198 20.7603 18.2998 20.4703 18.5898L19.9703 19.0898L20.5004 19.6198C20.7904 19.9098 20.7904 20.3898 20.5004 20.6798Z"
        fill="currentColor"
      />
      <Path
        d="M22 7.5399V8.9999H2V7.5399C2 5.2499 3.86002 3.3999 6.15002 3.3999H17.85C20.14 3.3999 22 5.2499 22 7.5399Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M2 9V16.46C2 18.75 3.85001 20.6 6.14001 20.6H12.4C12.98 20.6 13.48 20.11 13.43 19.53C13.29 18 13.78 16.34 15.14 15.02C15.7 14.47 16.39 14.05 17.14 13.81C18.39 13.41 19.6 13.46 20.67 13.82C21.32 14.04 22 13.57 22 12.88V9H2ZM8 17.25H6C5.59 17.25 5.25 16.91 5.25 16.5C5.25 16.09 5.59 15.75 6 15.75H8C8.41 15.75 8.75 16.09 8.75 16.5C8.75 16.91 8.41 17.25 8 17.25Z"
        fill="currentColor"
      />
      <Path
        d="M8.75 16.5C8.75 16.91 8.41 17.25 8 17.25H6C5.59 17.25 5.25 16.91 5.25 16.5C5.25 16.09 5.59 15.75 6 15.75H8C8.41 15.75 8.75 16.09 8.75 16.5Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CardRemoveLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M1.89844 10.0303H21.8984"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.4584 20.53H6.34839C2.79839 20.53 1.89844 19.65 1.89844 16.14V7.92004C1.89844 4.74004 2.63841 3.72004 5.42841 3.56004C5.70841 3.55004 6.01839 3.54004 6.34839 3.54004H17.4584C21.0084 3.54004 21.9084 4.42004 21.9084 7.93004V12.34"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.8984 22.0303C20.1076 22.0303 21.8984 20.2394 21.8984 18.0303C21.8984 15.8211 20.1076 14.0303 17.8984 14.0303C15.6893 14.0303 13.8984 15.8211 13.8984 18.0303C13.8984 20.2394 15.6893 22.0303 17.8984 22.0303Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.9694 19.1503L16.8594 17.0303"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.9481 17.0603L16.8281 19.1703"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.89844 16.0303H9.89844"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const CardRemoveOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.9004 10.7803H1.90039C1.49039 10.7803 1.15039 10.4403 1.15039 10.0303C1.15039 9.62027 1.49039 9.28027 1.90039 9.28027H21.9004C22.3104 9.28027 22.6504 9.62027 22.6504 10.0303C22.6504 10.4403 22.3204 10.7803 21.9004 10.7803Z"
        fill="currentColor"
      />
      <Path
        d="M11.4604 21.28H6.35034C2.37034 21.28 1.15039 20.08 1.15039 16.14V7.92004C1.15039 4.77004 1.82038 3.02004 5.39038 2.81004C5.70038 2.80004 6.01034 2.79004 6.35034 2.79004H17.4604C21.4404 2.79004 22.6603 3.99004 22.6603 7.93004V12.34C22.6603 12.75 22.3203 13.09 21.9103 13.09C21.5003 13.09 21.1603 12.75 21.1603 12.34V7.93004C21.1603 4.84004 20.6104 4.29004 17.4604 4.29004H6.35034C6.03034 4.29004 5.74039 4.30004 5.46039 4.31004C3.29039 4.44004 2.65039 4.93004 2.65039 7.93004V16.15C2.65039 19.24 3.20034 19.79 6.35034 19.79H11.4604C11.8704 19.79 12.2104 20.13 12.2104 20.54C12.2104 20.95 11.8704 21.28 11.4604 21.28Z"
        fill="currentColor"
      />
      <Path
        d="M17.9004 22.7803C15.2804 22.7803 13.1504 20.6503 13.1504 18.0303C13.1504 15.4103 15.2804 13.2803 17.9004 13.2803C20.5204 13.2803 22.6504 15.4103 22.6504 18.0303C22.6504 20.6503 20.5204 22.7803 17.9004 22.7803ZM17.9004 14.7803C16.1104 14.7803 14.6504 16.2403 14.6504 18.0303C14.6504 19.8203 16.1104 21.2803 17.9004 21.2803C19.6904 21.2803 21.1504 19.8203 21.1504 18.0303C21.1504 16.2403 19.6904 14.7803 17.9004 14.7803Z"
        fill="currentColor"
      />
      <Path
        d="M18.9707 19.9C18.7807 19.9 18.5908 19.83 18.4408 19.68L16.3308 17.57C16.0408 17.28 16.0408 16.8 16.3308 16.51C16.6208 16.22 17.1008 16.22 17.3908 16.51L19.5008 18.62C19.7908 18.91 19.7908 19.39 19.5008 19.68C19.3608 19.82 19.1607 19.9 18.9707 19.9Z"
        fill="currentColor"
      />
      <Path
        d="M16.8296 19.92C16.6396 19.92 16.4495 19.85 16.2995 19.7C16.0095 19.41 16.0095 18.93 16.2995 18.64L18.4095 16.53C18.6995 16.24 19.1795 16.24 19.4695 16.53C19.7595 16.82 19.7595 17.3 19.4695 17.59L17.3595 19.7C17.2195 19.85 17.0296 19.92 16.8296 19.92Z"
        fill="currentColor"
      />
      <Path
        d="M9.90039 16.7803H5.90039C5.49039 16.7803 5.15039 16.4403 5.15039 16.0303C5.15039 15.6203 5.49039 15.2803 5.90039 15.2803H9.90039C10.3104 15.2803 10.6504 15.6203 10.6504 16.0303C10.6504 16.4403 10.3204 16.7803 9.90039 16.7803Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CardRemoveTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M1.90039 10.0298H21.9004"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.4604 20.53H6.35034C2.80034 20.53 1.90039 19.65 1.90039 16.14V7.92004C1.90039 4.74004 2.64036 3.72004 5.43036 3.56004C5.71036 3.55004 6.02034 3.54004 6.35034 3.54004H17.4604C21.0104 3.54004 21.9103 4.42004 21.9103 7.93004V12.34"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M17.9004 22.0298C20.1095 22.0298 21.9004 20.2389 21.9004 18.0298C21.9004 15.8206 20.1095 14.0298 17.9004 14.0298C15.6913 14.0298 13.9004 15.8206 13.9004 18.0298C13.9004 20.2389 15.6913 22.0298 17.9004 22.0298Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M18.9694 19.1503L16.8594 17.0303"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M18.9501 17.0601L16.8301 19.1701"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Path
        opacity="0.4"
        d="M5.90039 16.0298H9.90039"
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
  bold: CardRemoveBold,
  broken: CardRemoveBroken,
  bulk: CardRemoveBulk,
  linear: CardRemoveLinear,
  outline: CardRemoveOutline,
  twotone: CardRemoveTwotone,
};

export const CardRemoveIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default CardRemoveIcon;
