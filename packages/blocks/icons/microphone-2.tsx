import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const Microphone2Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.1197 9.11938C18.7297 9.11938 18.4197 9.42938 18.4197 9.81938V11.3994C18.4197 14.9394 15.5397 17.8194 11.9997 17.8194C8.45969 17.8194 5.57969 14.9394 5.57969 11.3994V9.80938C5.57969 9.41938 5.26969 9.10938 4.87969 9.10938C4.48969 9.10938 4.17969 9.41938 4.17969 9.80938V11.3894C4.17969 15.4594 7.30969 18.8094 11.2997 19.1694V21.2994C11.2997 21.6894 11.6097 21.9994 11.9997 21.9994C12.3897 21.9994 12.6997 21.6894 12.6997 21.2994V19.1694C16.6797 18.8194 19.8197 15.4594 19.8197 11.3894V9.80938C19.8097 9.42938 19.4997 9.11938 19.1197 9.11938Z"
        fill="currentColor"
      />
      <Path
        d="M11.9981 2C9.55813 2 7.57812 3.98 7.57812 6.42V11.54C7.57812 13.98 9.55813 15.96 11.9981 15.96C14.4381 15.96 16.4181 13.98 16.4181 11.54V6.42C16.4181 3.98 14.4381 2 11.9981 2ZM13.3081 8.95C13.2381 9.21 13.0081 9.38 12.7481 9.38C12.6981 9.38 12.6481 9.37 12.5981 9.36C12.2081 9.25 11.7981 9.25 11.4081 9.36C11.0881 9.45 10.7781 9.26 10.6981 8.95C10.6081 8.64 10.7981 8.32 11.1081 8.24C11.6981 8.08 12.3181 8.08 12.9081 8.24C13.2081 8.32 13.3881 8.64 13.3081 8.95ZM13.8381 7.01C13.7481 7.25 13.5281 7.39 13.2881 7.39C13.2181 7.39 13.1581 7.38 13.0881 7.36C12.3881 7.1 11.6081 7.1 10.9081 7.36C10.6081 7.47 10.2681 7.31 10.1581 7.01C10.0481 6.71 10.2081 6.37 10.5081 6.27C11.4681 5.92 12.5281 5.92 13.4881 6.27C13.7881 6.38 13.9481 6.71 13.8381 7.01Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Microphone2Broken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8 10.02V11.5C8 13.71 9.79 15.5 12 15.5C14.21 15.5 16 13.71 16 11.5V6C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.34961 9.6499V11.3499C4.34961 15.5699 7.77961 18.9999 11.9996 18.9999C16.2196 18.9999 19.6496 15.5699 19.6496 11.3499V9.6499"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.6094 6.43012C11.5094 6.10012 12.4894 6.10012 13.3894 6.43012"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.1992 8.54982C11.7292 8.40982 12.2792 8.40982 12.8092 8.54982"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 19V22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Microphone2Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.1197 9.11986C18.7297 9.11986 18.4197 9.42986 18.4197 9.81986V11.3999C18.4197 14.9399 15.5397 17.8199 11.9997 17.8199C8.45969 17.8199 5.57969 14.9399 5.57969 11.3999V9.80986C5.57969 9.41986 5.26969 9.10986 4.87969 9.10986C4.48969 9.10986 4.17969 9.41986 4.17969 9.80986V11.3899C4.17969 15.4599 7.30969 18.8099 11.2997 19.1699V21.2999C11.2997 21.6899 11.6097 21.9999 11.9997 21.9999C12.3897 21.9999 12.6997 21.6899 12.6997 21.2999V19.1699C16.6797 18.8199 19.8197 15.4599 19.8197 11.3899V9.80986C19.8097 9.42986 19.4997 9.11986 19.1197 9.11986Z"
        fill="currentColor"
      />
      <Path
        d="M12.0001 2C9.56008 2 7.58008 3.98 7.58008 6.42V11.54C7.58008 13.98 9.56008 15.96 12.0001 15.96C14.4401 15.96 16.4201 13.98 16.4201 11.54V6.42C16.4201 3.98 14.4401 2 12.0001 2ZM13.3101 8.95C13.2401 9.21 13.0101 9.38 12.7501 9.38C12.7001 9.38 12.6501 9.37 12.6001 9.36C12.2101 9.25 11.8001 9.25 11.4101 9.36C11.0901 9.45 10.7801 9.26 10.7001 8.95C10.6101 8.64 10.8001 8.32 11.1101 8.24C11.7001 8.08 12.3201 8.08 12.9101 8.24C13.2101 8.32 13.3901 8.64 13.3101 8.95ZM13.8401 7.01C13.7501 7.25 13.5301 7.39 13.2901 7.39C13.2201 7.39 13.1601 7.38 13.0901 7.36C12.3901 7.1 11.6101 7.1 10.9101 7.36C10.6101 7.47 10.2701 7.31 10.1601 7.01C10.0501 6.71 10.2101 6.37 10.5101 6.27C11.4701 5.92 12.5301 5.92 13.4901 6.27C13.7901 6.38 13.9501 6.71 13.8401 7.01Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Microphone2Linear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 15.5C14.21 15.5 16 13.71 16 11.5V6C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6V11.5C8 13.71 9.79 15.5 12 15.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.3501 9.6499V11.3499C4.3501 15.5699 7.7801 18.9999 12.0001 18.9999C16.2201 18.9999 19.6501 15.5699 19.6501 11.3499V9.6499"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.6101 6.43012C11.5101 6.10012 12.4901 6.10012 13.3901 6.43012"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.2 8.55007C11.73 8.41007 12.28 8.41007 12.81 8.55007"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 19V22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Microphone2Outline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 16.25C9.38 16.25 7.25 14.12 7.25 11.5V6C7.25 3.38 9.38 1.25 12 1.25C14.62 1.25 16.75 3.38 16.75 6V11.5C16.75 14.12 14.62 16.25 12 16.25ZM12 2.75C10.21 2.75 8.75 4.21 8.75 6V11.5C8.75 13.29 10.21 14.75 12 14.75C13.79 14.75 15.25 13.29 15.25 11.5V6C15.25 4.21 13.79 2.75 12 2.75Z"
        fill="currentColor"
      />
      <Path
        d="M11.9996 19.7499C7.36961 19.7499 3.59961 15.9799 3.59961 11.3499V9.6499C3.59961 9.2399 3.93961 8.8999 4.34961 8.8999C4.75961 8.8999 5.09961 9.2399 5.09961 9.6499V11.3499C5.09961 15.1499 8.19961 18.2499 11.9996 18.2499C15.7996 18.2499 18.8996 15.1499 18.8996 11.3499V9.6499C18.8996 9.2399 19.2396 8.8999 19.6496 8.8999C20.0596 8.8999 20.3996 9.2399 20.3996 9.6499V11.3499C20.3996 15.9799 16.6296 19.7499 11.9996 19.7499Z"
        fill="currentColor"
      />
      <Path
        d="M13.3899 7.17982C13.3099 7.17982 13.2199 7.16982 13.1299 7.13982C12.3999 6.86982 11.5999 6.86982 10.8699 7.13982C10.4799 7.27982 10.0499 7.07982 9.90988 6.68982C9.76988 6.29982 9.96988 5.86982 10.3599 5.72982C11.4199 5.34982 12.5899 5.34982 13.6499 5.72982C14.0399 5.86982 14.2399 6.29982 14.0999 6.68982C13.9799 6.98982 13.6899 7.17982 13.3899 7.17982Z"
        fill="currentColor"
      />
      <Path
        d="M12.8001 9.29982C12.7301 9.29982 12.6701 9.28982 12.6001 9.26982C12.2001 9.15982 11.7901 9.15982 11.3901 9.26982C10.9901 9.37982 10.5801 9.13982 10.4701 8.73982C10.3601 8.34982 10.6001 7.93982 11.0001 7.82982C11.6501 7.64982 12.3501 7.64982 13.0001 7.82982C13.4001 7.93982 13.6401 8.34982 13.5301 8.74982C13.4401 9.07982 13.1301 9.29982 12.8001 9.29982Z"
        fill="currentColor"
      />
      <Path
        d="M12 22.75C11.59 22.75 11.25 22.41 11.25 22V19C11.25 18.59 11.59 18.25 12 18.25C12.41 18.25 12.75 18.59 12.75 19V22C12.75 22.41 12.41 22.75 12 22.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Microphone2Twotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 15.5C14.21 15.5 16 13.71 16 11.5V6C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6V11.5C8 13.71 9.79 15.5 12 15.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M10.6094 6.43012C11.5094 6.10012 12.4894 6.10012 13.3894 6.43012"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M11.1992 8.54982C11.7292 8.40982 12.2792 8.40982 12.8092 8.54982"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M4.34961 9.65039V11.3504C4.34961 15.5704 7.77961 19.0004 11.9996 19.0004C16.2196 19.0004 19.6496 15.5704 19.6496 11.3504V9.65039"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12 19V22"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};

const variants: IconVariants = {
  bold: Microphone2Bold,
  broken: Microphone2Broken,
  bulk: Microphone2Bulk,
  linear: Microphone2Linear,
  outline: Microphone2Outline,
  twotone: Microphone2Twotone,
};

export const Microphone2Icon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
