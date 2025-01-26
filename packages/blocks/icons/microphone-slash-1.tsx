import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const MicrophoneSlash1Bold = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M17.6189 5.72L7.00891 16.33C6.27891 15.34 5.87891 14.13 5.87891 12.82V8.11C5.87891 6.27 6.69891 4.62 7.99891 3.5V7.64C7.99891 8.03 8.31891 8.35 8.69891 8.35C9.08891 8.35 9.40891 8.03 9.40891 7.64V2.57C9.86891 2.34 10.3589 2.18 10.8689 2.09V5.75C10.8689 6.15 11.1889 6.46 11.5789 6.46C11.9689 6.46 12.2889 6.15 12.2889 5.75V2C14.6789 2.11 16.7389 3.61 17.6189 5.72Z"
        fill="currentColor"
      />
      <Path
        d="M18.1202 8.87891V12.8189C18.1202 16.1889 15.3702 18.9389 12.0002 18.9389C11.8202 18.9389 11.6402 18.9289 11.4602 18.9089C11.3802 18.9089 11.3002 18.8989 11.2302 18.8889C11.1002 18.8689 10.9702 18.8489 10.8502 18.8289C10.8002 18.8289 10.7602 18.8089 10.7002 18.7989C10.5602 18.7689 10.4202 18.7289 10.2902 18.6889C10.0702 18.6289 9.86016 18.5489 9.66016 18.4689C9.53016 18.4189 9.41016 18.3689 9.29016 18.2989C9.26016 18.2889 9.24016 18.2689 9.21016 18.2589C9.11016 18.2089 9.01016 18.1589 8.91016 18.0889L18.1202 8.87891Z"
        fill="currentColor"
      />
      <Path
        d="M21.7497 11V13C21.7497 18.38 17.3797 22.75 11.9997 22.75C9.87969 22.75 7.84969 22.07 6.17969 20.82L7.25969 19.74C8.63969 20.72 10.2797 21.25 11.9997 21.25C16.5497 21.25 20.2497 17.55 20.2497 13V11C20.2497 10.59 20.5897 10.25 20.9997 10.25C21.4097 10.25 21.7497 10.59 21.7497 11Z"
        fill="currentColor"
      />
      <Path
        d="M21.7689 2.22891C21.4689 1.92891 20.9789 1.92891 20.6789 2.22891L2.22891 20.6889C1.92891 20.9889 1.92891 21.4789 2.22891 21.7789C2.37891 21.9189 2.56891 21.9989 2.76891 21.9989C2.96891 21.9989 3.15891 21.9189 3.30891 21.7689L21.7689 3.30891C22.0789 3.00891 22.0789 2.52891 21.7689 2.22891Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MicrophoneSlash1Broken = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M16 6.3V6C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6V11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.03906 14.19C9.76906 15 10.8291 15.5 11.9991 15.5C14.2091 15.5 15.9991 13.71 15.9991 11.5V11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.7207 15.0199C19.3207 13.9299 19.6507 12.6799 19.6507 11.3499V9.6499"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.7793 16.9502C8.1493 18.2202 9.9793 19.0002 11.9993 19.0002C13.1793 19.0002 14.3093 18.7302 15.3093 18.2502"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.34961 9.6499V11.3499C4.34961 12.4099 4.55961 13.4099 4.94961 14.3299"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.0697 2.83984L3.92969 18.9898"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11 3V6"
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

const MicrophoneSlash1Bulk = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M17.6209 5.72L7.01086 16.33C6.28086 15.34 5.88086 14.13 5.88086 12.82V8.11C5.88086 6.27 6.70086 4.62 8.00086 3.5V7.64C8.00086 8.03 8.32086 8.35 8.70086 8.35C9.09086 8.35 9.41086 8.03 9.41086 7.64V2.57C9.87086 2.34 10.3609 2.18 10.8709 2.09V5.75C10.8709 6.15 11.1909 6.46 11.5809 6.46C11.9709 6.46 12.2909 6.15 12.2909 5.75V2C14.6809 2.11 16.7409 3.61 17.6209 5.72Z"
        fill="currentColor"
      />
      <Path
        d="M18.1202 8.87988V12.8199C18.1202 16.1899 15.3702 18.9399 12.0002 18.9399C11.8202 18.9399 11.6402 18.9299 11.4602 18.9099C11.3802 18.9099 11.3002 18.8999 11.2302 18.8899C11.1002 18.8699 10.9702 18.8499 10.8502 18.8299C10.8002 18.8299 10.7602 18.8099 10.7002 18.7999C10.5602 18.7699 10.4202 18.7299 10.2902 18.6899C10.0702 18.6299 9.86016 18.5499 9.66016 18.4699C9.53016 18.4199 9.41016 18.3699 9.29016 18.2999C9.26016 18.2899 9.24016 18.2699 9.21016 18.2599C9.11016 18.2099 9.01016 18.1599 8.91016 18.0899L18.1202 8.87988Z"
        fill="currentColor"
      />
      <Path
        d="M21.7497 11V13C21.7497 18.38 17.3797 22.75 11.9997 22.75C9.87969 22.75 7.84969 22.07 6.17969 20.82L7.25969 19.74C8.63969 20.72 10.2797 21.25 11.9997 21.25C16.5497 21.25 20.2497 17.55 20.2497 13V11C20.2497 10.59 20.5897 10.25 20.9997 10.25C21.4097 10.25 21.7497 10.59 21.7497 11Z"
        fill="currentColor"
      />
      <Path
        d="M21.7709 2.22988C21.4709 1.92988 20.9809 1.92988 20.6809 2.22988L2.23086 20.6899C1.93086 20.9899 1.93086 21.4799 2.23086 21.7799C2.38086 21.9199 2.57086 21.9999 2.77086 21.9999C2.97086 21.9999 3.16086 21.9199 3.31086 21.7699L21.7709 3.30988C22.0809 3.00988 22.0809 2.52988 21.7709 2.22988Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MicrophoneSlash1Linear = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M17.82 6.53C17.16 3.93 14.81 2 12 2C8.69 2 6 4.69 6 8V13C6 14.46 6.52 15.8 7.39 16.84"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.9999 9.97998V13C17.9999 16.31 15.3099 19 11.9999 19C11.2699 19 10.5599 18.87 9.91992 18.63"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.86011 19.58C7.47011 21.08 9.63011 22 12.0001 22C16.9701 22 21.0001 17.97 21.0001 13V11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.5 2.98999L2.5 21.99"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.55 5.50001V2.26001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.5 3.5V7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MicrophoneSlash1Outline = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M8 11.75C7.59 11.75 7.25 11.41 7.25 11V6C7.25 3.38 9.38 1.25 12 1.25C14.62 1.25 16.75 3.38 16.75 6V6.3C16.75 6.71 16.41 7.05 16 7.05C15.59 7.05 15.25 6.71 15.25 6.3V6C15.25 4.21 13.79 2.75 12 2.75C10.21 2.75 8.75 4.21 8.75 6V11C8.75 11.41 8.41 11.75 8 11.75Z"
        fill="currentColor"
      />
      <Path
        d="M12.0006 16.25C10.6606 16.25 9.38064 15.68 8.48064 14.69C8.20064 14.38 8.23064 13.91 8.53064 13.63C8.84064 13.35 9.31064 13.38 9.59064 13.68C10.2006 14.36 11.0806 14.75 12.0006 14.75C13.7906 14.75 15.2506 13.29 15.2506 11.5V11C15.2506 10.59 15.5906 10.25 16.0006 10.25C16.4106 10.25 16.7506 10.59 16.7506 11V11.5C16.7506 14.12 14.6206 16.25 12.0006 16.25Z"
        fill="currentColor"
      />
      <Path
        d="M11.9993 19.7499C9.86933 19.7499 7.82933 18.9499 6.26933 17.4999C5.96933 17.2199 5.94933 16.7399 6.22933 16.4399C6.51933 16.1299 6.99933 16.1199 7.29933 16.3999C8.57933 17.5899 10.2493 18.2499 11.9993 18.2499C15.7993 18.2499 18.8993 15.1499 18.8993 11.3499V9.6499C18.8993 9.2399 19.2393 8.8999 19.6493 8.8999C20.0593 8.8999 20.3993 9.2399 20.3993 9.6499V11.3499C20.3993 15.9799 16.6293 19.7499 11.9993 19.7499Z"
        fill="currentColor"
      />
      <Path
        d="M4.94961 15.0799C4.65961 15.0799 4.37961 14.9099 4.25961 14.6199C3.81961 13.5799 3.59961 12.4899 3.59961 11.3499V9.6499C3.59961 9.2399 3.93961 8.8999 4.34961 8.8999C4.75961 8.8999 5.09961 9.2399 5.09961 9.6499V11.3499C5.09961 12.2799 5.27961 13.1799 5.63961 14.0299C5.79961 14.4099 5.61961 14.8499 5.23961 15.0099C5.14961 15.0599 5.04961 15.0799 4.94961 15.0799Z"
        fill="currentColor"
      />
      <Path
        d="M3.91937 19.7398C3.72937 19.7398 3.53938 19.6698 3.38938 19.5198C3.09938 19.2298 3.09938 18.7498 3.38938 18.4598L19.5394 2.30979C19.8294 2.01979 20.3094 2.01979 20.5994 2.30979C20.8894 2.59979 20.8894 3.07979 20.5994 3.36979L4.45937 19.5198C4.30937 19.6698 4.11937 19.7398 3.91937 19.7398Z"
        fill="currentColor"
      />
      <Path
        d="M11 6.75C10.59 6.75 10.25 6.41 10.25 6V3C10.25 2.59 10.59 2.25 11 2.25C11.41 2.25 11.75 2.59 11.75 3V6C11.75 6.41 11.41 6.75 11 6.75Z"
        fill="currentColor"
      />
      <Path
        d="M12 22.75C11.59 22.75 11.25 22.41 11.25 22V19C11.25 18.59 11.59 18.25 12 18.25C12.41 18.25 12.75 18.59 12.75 19V22C12.75 22.41 12.41 22.75 12 22.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MicrophoneSlash1Twotone = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M17.82 6.53C17.16 3.93 14.81 2 12 2C8.69 2 6 4.69 6 8V13C6 14.46 6.52 15.8 7.39 16.84"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M17.9999 9.97998V13C17.9999 16.31 15.3099 19 11.9999 19C11.2699 19 10.5599 18.87 9.91992 18.63"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M5.85938 19.58C7.46938 21.08 9.62937 22 11.9994 22C16.9694 22 20.9994 17.97 20.9994 13V11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.5 2.99023L2.5 21.9902"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.5508 5.49977V2.25977"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.5 3.5V7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: MicrophoneSlash1Bold,
  broken: MicrophoneSlash1Broken,
  bulk: MicrophoneSlash1Bulk,
  linear: MicrophoneSlash1Linear,
  outline: MicrophoneSlash1Outline,
  twotone: MicrophoneSlash1Twotone,
};

export const MicrophoneSlash1Icon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
