import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const ConvertCardBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 9C2 5.13 5.13 2 9 2L7.95 3.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 4.2V4.31C22 4.59 21.78 4.81 21.5 4.81H12.5C12.22 4.81 12 4.59 12 4.31V4.2C12 2.44 12.44 2 14.22 2H19.78C21.56 2 22 2.44 22 4.2Z"
        fill="currentColor"
      />
      <Path
        d="M12.5 5.80859C12.22 5.80859 12 6.02859 12 6.30859V7.30859V8.29859C12 10.0586 12.44 10.4986 14.22 10.4986H19.78C21.56 10.4986 22 10.0586 22 8.29859V7.30859V6.30859C22 6.02859 21.78 5.80859 21.5 5.80859H12.5Z"
        fill="currentColor"
      />
      <Path
        d="M12 15.7V15.81C12 16.09 11.78 16.31 11.5 16.31H2.5C2.22 16.31 2 16.09 2 15.81V15.7C2 13.94 2.44 13.5 4.22 13.5H9.78C11.56 13.5 12 13.94 12 15.7Z"
        fill="currentColor"
      />
      <Path
        d="M2.5 17.3086C2.22 17.3086 2 17.5286 2 17.8086V18.8086V19.7986C2 21.5586 2.44 21.9986 4.22 21.9986H9.78C11.56 21.9986 12 21.5586 12 19.7986V18.8086V17.8086C12 17.5286 11.78 17.3086 11.5 17.3086H2.5Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ConvertCardBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 5.56006H22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.65 10.5H14.22C12.44 10.5 12 10.06 12 8.3V4.2C12 2.44 12.44 2 14.22 2H19.78C21.56 2 22 2.44 22 4.2V8.31C22 10.07 21.56 10.51 19.78 10.51"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 17.0601H12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.5 22H4.22C2.44 22 2 21.56 2 19.8V15.7C2 13.94 2.44 13.5 4.22 13.5H9.78C11.56 13.5 12 13.94 12 15.7V19.81C12 21.57 11.56 22.01 9.78 22.01"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 9C2 5.13 5.13 2 9 2L7.95001 3.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ConvertCardBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 14.25C22.4142 14.25 22.75 14.5858 22.75 15C22.75 19.2842 19.2842 22.75 15 22.75C14.7298 22.75 14.4805 22.6047 14.3474 22.3695C14.2142 22.1344 14.2179 21.8458 14.3569 21.6141L15.4069 19.8641C15.62 19.5089 16.0807 19.3938 16.4359 19.6069C16.791 19.82 16.9062 20.2807 16.6931 20.6359L16.4218 21.0881C19.1909 20.4456 21.25 17.9666 21.25 15C21.25 14.5858 21.5858 14.25 22 14.25Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.57821 2.91194C4.8091 3.55436 2.75 6.03342 2.75 9C2.75 9.41421 2.41421 9.75 2 9.75C1.58579 9.75 1.25 9.41421 1.25 9C1.25 4.71579 4.71579 1.25 9 1.25C9.2702 1.25 9.51952 1.39534 9.65265 1.63047C9.78578 1.8656 9.78214 2.15417 9.64312 2.38587L8.59313 4.13587C8.38002 4.49105 7.91933 4.60623 7.56414 4.39312C7.20896 4.18001 7.09378 3.71932 7.30689 3.36413L7.57821 2.91194Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M12 15.7V16.31H2V15.7C2 13.94 2.44 13.5 4.22 13.5H9.78C11.56 13.5 12 13.94 12 15.7Z"
        fill="currentColor"
      />
      <Path
        d="M2 16.3101V17.8101V19.8001C2 21.5601 2.44 22.0001 4.22 22.0001H9.78C11.56 22.0001 12 21.5601 12 19.8001V17.8101V16.3101H2Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M22 4.2V4.81H12V4.2C12 2.44 12.44 2 14.22 2H19.78C21.56 2 22 2.44 22 4.2Z"
        fill="currentColor"
      />
      <Path
        d="M12 4.81006V6.31006V8.30006C12 10.0601 12.44 10.5001 14.22 10.5001H19.78C21.56 10.5001 22 10.0601 22 8.30006V6.31006V4.81006H12Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ConvertCardLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 6.31006H12C11.59 6.31006 11.25 5.97006 11.25 5.56006C11.25 5.15006 11.59 4.81006 12 4.81006H22C22.41 4.81006 22.75 5.15006 22.75 5.56006C22.75 5.98006 22.41 6.31006 22 6.31006Z"
        fill="currentColor"
      />
      <Path
        d="M19.7798 11.25H14.2298C12.0398 11.25 11.2598 10.48 11.2598 8.3V4.2C11.2598 2.02 12.0398 1.25 14.2298 1.25H19.7798C21.9698 1.25 22.7498 2.02 22.7498 4.2V8.31C22.7498 10.48 21.9698 11.25 19.7798 11.25ZM14.2198 2.75C12.8598 2.75 12.7498 2.86 12.7498 4.2V8.31C12.7498 9.65 12.8598 9.76 14.2198 9.76H19.7697C21.1297 9.76 21.2397 9.65 21.2397 8.31V4.2C21.2397 2.86 21.1297 2.75 19.7697 2.75H14.2198Z"
        fill="currentColor"
      />
      <Path
        d="M12 17.8101H2C1.59 17.8101 1.25 17.4701 1.25 17.0601C1.25 16.6501 1.59 16.3101 2 16.3101H12C12.41 16.3101 12.75 16.6501 12.75 17.0601C12.75 17.4801 12.41 17.8101 12 17.8101Z"
        fill="currentColor"
      />
      <Path
        d="M9.77975 22.75H4.22977C2.03977 22.75 1.25977 21.98 1.25977 19.8V15.7C1.25977 13.52 2.03977 12.75 4.22977 12.75H9.77975C11.9698 12.75 12.7498 13.52 12.7498 15.7V19.81C12.7498 21.98 11.9698 22.75 9.77975 22.75ZM4.21976 14.25C2.85976 14.25 2.74976 14.36 2.74976 15.7V19.81C2.74976 21.15 2.85976 21.26 4.21976 21.26H9.76974C11.1297 21.26 11.2397 21.15 11.2397 19.81V15.7C11.2397 14.36 11.1297 14.25 9.76974 14.25H4.21976Z"
        fill="currentColor"
      />
      <Path
        d="M15.0002 22.7502C14.7302 22.7502 14.4802 22.6002 14.3502 22.3702C14.2202 22.1302 14.2202 21.8502 14.3602 21.6102L15.4102 19.8602C15.6202 19.5102 16.0802 19.3902 16.4402 19.6002C16.8002 19.8102 16.9102 20.2702 16.7002 20.6302L16.4302 21.0802C19.1902 20.4302 21.2602 17.9502 21.2602 14.9902C21.2602 14.5802 21.6002 14.2402 22.0102 14.2402C22.4202 14.2402 22.7602 14.5802 22.7602 14.9902C22.7502 19.2702 19.2702 22.7502 15.0002 22.7502Z"
        fill="currentColor"
      />
      <Path
        d="M2 9.75C1.59 9.75 1.25 9.41 1.25 9C1.25 4.73 4.73 1.25 9 1.25C9.27 1.25 9.51999 1.4 9.64999 1.63C9.77999 1.87 9.78001 2.15 9.64001 2.39L8.59 4.14C8.38 4.49 7.92 4.61 7.56 4.4C7.2 4.19 7.08999 3.73 7.29999 3.37L7.57001 2.92C4.81001 3.57 2.73999 6.05 2.73999 9.01C2.74999 9.41 2.41 9.75 2 9.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ConvertCardOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 6.31006H12C11.59 6.31006 11.25 5.97006 11.25 5.56006C11.25 5.15006 11.59 4.81006 12 4.81006H22C22.41 4.81006 22.75 5.15006 22.75 5.56006C22.75 5.98006 22.41 6.31006 22 6.31006Z"
        fill="currentColor"
      />
      <Path
        d="M19.7798 11.25H14.2298C12.0398 11.25 11.2598 10.48 11.2598 8.3V4.2C11.2598 2.02 12.0398 1.25 14.2298 1.25H19.7798C21.9698 1.25 22.7498 2.02 22.7498 4.2V8.31C22.7498 10.48 21.9698 11.25 19.7798 11.25ZM14.2198 2.75C12.8598 2.75 12.7498 2.86 12.7498 4.2V8.31C12.7498 9.65 12.8598 9.76 14.2198 9.76H19.7697C21.1297 9.76 21.2397 9.65 21.2397 8.31V4.2C21.2397 2.86 21.1297 2.75 19.7697 2.75H14.2198Z"
        fill="currentColor"
      />
      <Path
        d="M12 17.8101H2C1.59 17.8101 1.25 17.4701 1.25 17.0601C1.25 16.6501 1.59 16.3101 2 16.3101H12C12.41 16.3101 12.75 16.6501 12.75 17.0601C12.75 17.4801 12.41 17.8101 12 17.8101Z"
        fill="currentColor"
      />
      <Path
        d="M9.77975 22.75H4.22977C2.03977 22.75 1.25977 21.98 1.25977 19.8V15.7C1.25977 13.52 2.03977 12.75 4.22977 12.75H9.77975C11.9698 12.75 12.7498 13.52 12.7498 15.7V19.81C12.7498 21.98 11.9698 22.75 9.77975 22.75ZM4.21976 14.25C2.85976 14.25 2.74976 14.36 2.74976 15.7V19.81C2.74976 21.15 2.85976 21.26 4.21976 21.26H9.76974C11.1297 21.26 11.2397 21.15 11.2397 19.81V15.7C11.2397 14.36 11.1297 14.25 9.76974 14.25H4.21976Z"
        fill="currentColor"
      />
      <Path
        d="M15.0002 22.7502C14.7302 22.7502 14.4802 22.6002 14.3502 22.3702C14.2202 22.1302 14.2202 21.8502 14.3602 21.6102L15.4102 19.8602C15.6202 19.5102 16.0802 19.3902 16.4402 19.6002C16.8002 19.8102 16.9102 20.2702 16.7002 20.6302L16.4302 21.0802C19.1902 20.4302 21.2602 17.9502 21.2602 14.9902C21.2602 14.5802 21.6002 14.2402 22.0102 14.2402C22.4202 14.2402 22.7602 14.5802 22.7602 14.9902C22.7502 19.2702 19.2702 22.7502 15.0002 22.7502Z"
        fill="currentColor"
      />
      <Path
        d="M2 9.75C1.59 9.75 1.25 9.41 1.25 9C1.25 4.73 4.73 1.25 9 1.25C9.27 1.25 9.51999 1.4 9.64999 1.63C9.77999 1.87 9.78001 2.15 9.64001 2.39L8.59 4.14C8.38 4.49 7.92 4.61 7.56 4.4C7.2 4.19 7.08999 3.73 7.29999 3.37L7.57001 2.92C4.81001 3.57 2.73999 6.05 2.73999 9.01C2.74999 9.41 2.41 9.75 2 9.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ConvertCardTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 5.56006H22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.22 2H19.78C21.56 2 22 2.44 22 4.2V8.31C22 10.07 21.56 10.51 19.78 10.51H14.22C12.44 10.51 12 10.07 12 8.31V4.2C12 2.44 12.44 2 14.22 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 17.0601H12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.22 13.5H9.78C11.56 13.5 12 13.94 12 15.7V19.81C12 21.57 11.56 22.01 9.78 22.01H4.22C2.44 22.01 2 21.57 2 19.81V15.7C2 13.94 2.44 13.5 4.22 13.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M2 9C2 5.13 5.13 2 9 2L7.95001 3.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: ConvertCardBold,
  broken: ConvertCardBroken,
  bulk: ConvertCardBulk,
  linear: ConvertCardLinear,
  outline: ConvertCardOutline,
  twotone: ConvertCardTwotone,
};

export const ConvertCardIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default ConvertCardIcon;
