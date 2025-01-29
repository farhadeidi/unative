import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const BuildingBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.7507 4.64035L6.3207 2.45035C3.9307 1.28035 1.9707 2.47035 1.9707 5.09035V19.9303C1.9707 21.0703 2.9207 22.0003 4.0807 22.0003H11.5007C12.0507 22.0003 12.5007 21.5503 12.5007 21.0003V7.41035C12.5007 6.36035 11.7107 5.11035 10.7507 4.64035ZM8.9707 13.7503H5.5007C5.0907 13.7503 4.7507 13.4103 4.7507 13.0003C4.7507 12.5903 5.0907 12.2503 5.5007 12.2503H8.9707C9.3807 12.2503 9.7207 12.5903 9.7207 13.0003C9.7207 13.4103 9.3907 13.7503 8.9707 13.7503ZM8.9707 9.75035H5.5007C5.0907 9.75035 4.7507 9.41035 4.7507 9.00035C4.7507 8.59035 5.0907 8.25035 5.5007 8.25035H8.9707C9.3807 8.25035 9.7207 8.59035 9.7207 9.00035C9.7207 9.41035 9.3907 9.75035 8.9707 9.75035Z"
        fill="currentColor"
      />
      <Path
        d="M22 18.0391V19.4991C22 20.8791 20.88 21.9991 19.5 21.9991H14.97C14.43 21.9991 14 21.5691 14 21.0291V18.8691C15.07 18.9991 16.2 18.6891 17.01 18.0391C17.69 18.5891 18.56 18.9191 19.51 18.9191C20.44 18.9191 21.31 18.5891 22 18.0391Z"
        fill="currentColor"
      />
      <Path
        d="M22 15.0505V15.0605C21.92 16.3705 20.85 17.4205 19.51 17.4205C18.12 17.4205 17.01 16.2905 17.01 14.9205C17.01 16.4505 15.6 17.6805 14 17.3705V12.0005C14 11.3605 14.59 10.8805 15.22 11.0205L17.01 11.4205L17.49 11.5305L19.53 11.9905C20.02 12.0905 20.47 12.2605 20.86 12.5105C20.86 12.5205 20.87 12.5205 20.87 12.5205C20.97 12.5905 21.07 12.6705 21.16 12.7605C21.62 13.2205 21.92 13.8905 21.99 14.8705C21.99 14.9305 22 14.9905 22 15.0505Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BuildingBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M1.9707 5.9501V5.09011C1.9707 2.47011 3.9207 1.2801 6.3107 2.4501L10.7507 4.63011C11.7107 5.10011 12.5007 6.3501 12.5007 7.4101V22.0001H4.0807C2.9207 22.0001 1.9707 21.0701 1.9707 19.9301V10.0201"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.97 15.0599V18.8399C21.97 20.9999 20.97 21.9999 18.81 21.9999H12.5V10.4199L12.97 10.5199L17.47 11.5299L19.5 11.9799C20.82 12.2699 21.9 12.9499 21.96 14.8699C21.97 14.9299 21.97 14.9899 21.97 15.0599Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.5 9H8.97"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.5 13H8.97"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.4707 11.53V14.75C17.4707 15.99 16.4607 17 15.2207 17C13.9807 17 12.9707 15.99 12.9707 14.75V10.52L17.4707 11.53Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.9607 14.87C21.9007 16.05 20.9207 17 19.7207 17C18.4807 17 17.4707 15.99 17.4707 14.75V11.53L19.5007 11.98C20.8207 12.27 21.9007 12.95 21.9607 14.87Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const BuildingBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.5007 7.40986V21.9999H4.0807C2.9207 21.9999 1.9707 21.0699 1.9707 19.9299V5.08986C1.9707 2.46986 3.9307 1.27986 6.3207 2.44986L10.7507 4.63986C11.7107 5.10986 12.5007 6.35986 12.5007 7.40986Z"
        fill="currentColor"
      />
      <Path
        d="M8.97 9.75H5.5C5.09 9.75 4.75 9.41 4.75 9C4.75 8.59 5.09 8.25 5.5 8.25H8.97C9.38 8.25 9.72 8.59 9.72 9C9.72 9.41 9.39 9.75 8.97 9.75Z"
        fill="currentColor"
      />
      <Path
        d="M8.97 13.75H5.5C5.09 13.75 4.75 13.41 4.75 13C4.75 12.59 5.09 12.25 5.5 12.25H8.97C9.38 12.25 9.72 12.59 9.72 13C9.72 13.41 9.39 13.75 8.97 13.75Z"
        fill="currentColor"
      />
      <Path
        opacity="0.6"
        d="M22 15.0499V19.4999C22 20.8799 20.88 21.9999 19.5 21.9999H12.5V10.4199L12.97 10.5199L17.01 11.4199L17.49 11.5299L19.53 11.9899C20.02 12.0899 20.47 12.2599 20.86 12.5099C20.86 12.5199 20.87 12.5199 20.87 12.5199C20.97 12.5899 21.07 12.6699 21.16 12.7599C21.62 13.2199 21.92 13.8899 21.99 14.8699C21.99 14.9299 22 14.9899 22 15.0499Z"
        fill="currentColor"
      />
      <Path
        d="M12.5 10.4199V16.4199C12.96 17.0299 13.68 17.4199 14.5 17.4199C15.89 17.4199 17.01 16.2999 17.01 14.9199V11.4299L12.97 10.5299L12.5 10.4199Z"
        fill="currentColor"
      />
      <Path
        d="M21.9898 14.8699C21.9198 13.8899 21.6198 13.2199 21.1598 12.7599C21.0698 12.6699 20.9698 12.5899 20.8698 12.5199C20.8698 12.5199 20.8598 12.5199 20.8598 12.5099C20.4698 12.2599 20.0198 12.0899 19.5298 11.9899L17.4898 11.5299L17.0098 11.4199V14.9199C17.0098 16.2899 18.1198 17.4199 19.5098 17.4199C20.8498 17.4199 21.9198 16.3699 21.9998 15.0599V15.0499C21.9998 14.9899 21.9898 14.9299 21.9898 14.8699Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BuildingLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.5 22.0001H4.07997C2.91997 22.0001 1.96997 21.0701 1.96997 19.9301V5.09011C1.96997 2.47011 3.91997 1.2801 6.30997 2.4501L10.75 4.63011C11.71 5.10011 12.5 6.3501 12.5 7.4101V22.0001Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.97 15.0602V18.8402C21.97 21.0002 20.97 22.0002 18.81 22.0002H12.5V10.4202L12.97 10.5202L17.47 11.5302L19.5 11.9802C20.82 12.2702 21.9 12.9502 21.96 14.8702C21.97 14.9302 21.97 14.9902 21.97 15.0602Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.5 9H8.97"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.5 13H8.97"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.47 11.53V14.75C17.47 15.99 16.46 17 15.22 17C13.98 17 12.97 15.99 12.97 14.75V10.52L17.47 11.53Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.96 14.87C21.9 16.05 20.92 17 19.72 17C18.48 17 17.47 15.99 17.47 14.75V11.53L19.5 11.98C20.82 12.27 21.9 12.95 21.96 14.87Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const BuildingOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.4997 22.7502H4.07973C2.50973 22.7502 1.21973 21.4902 1.21973 19.9302V5.09019C1.21973 3.56019 1.78973 2.37019 2.82973 1.72019C3.87973 1.06019 5.23973 1.08019 6.64973 1.78019L11.0897 3.96019C12.2997 4.56019 13.2497 6.07019 13.2497 7.41019V22.0002C13.2497 22.4102 12.9097 22.7502 12.4997 22.7502ZM4.55973 2.75019C4.20973 2.75019 3.88973 2.83019 3.61973 3.00019C3.03973 3.36019 2.71973 4.11019 2.71973 5.09019V19.9302C2.71973 20.6602 3.32973 21.2502 4.07973 21.2502H11.7497V7.41019C11.7497 6.64019 11.1297 5.65019 10.4197 5.31019L5.97973 3.13019C5.46973 2.88019 4.98973 2.75019 4.55973 2.75019Z"
        fill="currentColor"
      />
      <Path
        d="M18.81 22.7498H12.5C12.09 22.7498 11.75 22.4098 11.75 21.9998V10.4198C11.75 10.1898 11.85 9.97978 12.03 9.83978C12.21 9.69978 12.43 9.63978 12.66 9.68978L13.13 9.78978L19.67 11.2498C21.66 11.6898 22.66 12.8598 22.72 14.8498C22.73 14.8498 22.73 14.9498 22.73 15.0598V18.8398C22.72 21.3998 21.37 22.7498 18.81 22.7498ZM13.25 21.2498H18.81C20.57 21.2498 21.22 20.5998 21.22 18.8398V14.9798C21.17 13.6098 20.65 12.9998 19.34 12.7098L13.25 11.3498V21.2498Z"
        fill="currentColor"
      />
      <Path
        d="M8.97 9.75H5.5C5.09 9.75 4.75 9.41 4.75 9C4.75 8.59 5.09 8.25 5.5 8.25H8.97C9.38 8.25 9.72 8.59 9.72 9C9.72 9.41 9.39 9.75 8.97 9.75Z"
        fill="currentColor"
      />
      <Path
        d="M8.97 13.75H5.5C5.09 13.75 4.75 13.41 4.75 13C4.75 12.59 5.09 12.25 5.5 12.25H8.97C9.38 12.25 9.72 12.59 9.72 13C9.72 13.41 9.39 13.75 8.97 13.75Z"
        fill="currentColor"
      />
      <Path
        d="M15.2197 17.75C13.5697 17.75 12.2197 16.4 12.2197 14.75V10.52C12.2197 10.29 12.3197 10.08 12.4997 9.92998C12.6797 9.77998 12.9097 9.72998 13.1297 9.77998L17.6297 10.79C17.9697 10.87 18.2197 11.17 18.2197 11.52V14.74C18.2197 16.4 16.8797 17.75 15.2197 17.75ZM13.7197 11.46V14.75C13.7197 15.58 14.3897 16.25 15.2197 16.25C16.0497 16.25 16.7197 15.58 16.7197 14.75V12.13L13.7197 11.46Z"
        fill="currentColor"
      />
      <Path
        d="M19.7197 17.7501C18.0697 17.7501 16.7197 16.4001 16.7197 14.7501V11.5301C16.7197 11.3001 16.8197 11.0901 16.9997 10.9501C17.1797 10.8101 17.4097 10.7501 17.6297 10.8001L19.6597 11.2501C21.6497 11.6901 22.6497 12.8601 22.7097 14.8501C22.7097 14.8701 22.7097 14.8901 22.7097 14.9101C22.6297 16.5001 21.3197 17.7501 19.7197 17.7501ZM18.2197 12.4601V14.7501C18.2197 15.5801 18.8897 16.2501 19.7197 16.2501C20.5097 16.2501 21.1597 15.6401 21.2097 14.8601C21.1597 13.6001 20.6397 13.0001 19.3397 12.7101L18.2197 12.4601Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BuildingTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.4997 22.0003H4.07973C2.91973 22.0003 1.96973 21.0703 1.96973 19.9303V5.09035C1.96973 2.47035 3.91973 1.28035 6.30973 2.45035L10.7497 4.63035C11.7097 5.10035 12.4997 6.35035 12.4997 7.41035V22.0003Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.97 15.0604V18.8404C21.97 21.0004 20.97 22.0004 18.81 22.0004H12.5V10.4204L12.97 10.5204L17.47 11.5304L19.5 11.9804C20.82 12.2704 21.9 12.9504 21.96 14.8704C21.97 14.9304 21.97 14.9904 21.97 15.0604Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M5.5 9.00049H8.97"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M5.5 13.0005H8.97"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.4697 11.5305V14.7505C17.4697 15.9905 16.4597 17.0005 15.2197 17.0005C13.9797 17.0005 12.9697 15.9905 12.9697 14.7505V10.5205L17.4697 11.5305Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.9597 14.8703C21.8997 16.0503 20.9197 17.0003 19.7197 17.0003C18.4797 17.0003 17.4697 15.9903 17.4697 14.7503V11.5303L19.4997 11.9803C20.8197 12.2703 21.8997 12.9503 21.9597 14.8703Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: BuildingBold,
  broken: BuildingBroken,
  bulk: BuildingBulk,
  linear: BuildingLinear,
  outline: BuildingOutline,
  twotone: BuildingTwotone,
};

export const BuildingIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default BuildingIcon;
