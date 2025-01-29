import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const Brush2Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.8098 3.93814C20.4998 7.20814 17.5098 11.4781 14.6598 14.2681C14.2498 11.6881 12.1898 9.66814 9.58984 9.30814C12.3898 6.44814 16.6898 3.41814 19.9698 2.09814C20.5498 1.87814 21.1298 2.04814 21.4898 2.40814C21.8698 2.78814 22.0498 3.35814 21.8098 3.93814Z"
        fill="currentColor"
      />
      <Path
        d="M13.7791 15.0909C13.5791 15.2609 13.3791 15.4309 13.1791 15.5909L11.3891 17.0209C11.3891 16.9909 11.3791 16.9509 11.3791 16.9109C11.2391 15.8409 10.7391 14.8509 9.92914 14.0409C9.10914 13.2209 8.08914 12.7209 6.96914 12.5809C6.93914 12.5809 6.89914 12.5709 6.86914 12.5709L8.31914 10.7409C8.45914 10.5609 8.60914 10.3909 8.76914 10.2109L9.44914 10.3009C11.5991 10.6009 13.3291 12.2909 13.6691 14.4309L13.7791 15.0909Z"
        fill="currentColor"
      />
      <Path
        d="M10.4298 17.6208C10.4298 18.7208 10.0098 19.7708 9.20976 20.5608C8.59976 21.1808 7.77977 21.6008 6.77977 21.7208L4.32976 21.9908C2.98976 22.1408 1.83976 20.9908 1.98976 19.6408L2.25976 17.1808C2.49976 14.9908 4.32976 13.5908 6.26976 13.5508C6.45976 13.5408 6.66976 13.5508 6.86976 13.5708C7.71976 13.6808 8.53976 14.0708 9.22976 14.7508C9.89976 15.4208 10.2798 16.2108 10.3898 17.0408C10.4098 17.2408 10.4298 17.4308 10.4298 17.6208Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Brush2Broken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.5 19.5V18H4.5C3.95 18 3.45 17.78 3.09 17.41C2.72 17.05 2.5 16.55 2.5 16C2.5 14.97 3.3 14.11 4.31 14.01C4.37 14 4.43 14 4.5 14H19.5C19.57 14 19.63 14 19.69 14.01C20.17 14.05 20.59 14.26 20.91 14.59C21.32 14.99 21.54 15.56 21.49 16.18C21.4 17.23 20.45 18 19.39 18H14.5V19.5C14.5 20.88 13.38 22 12 22C10.62 22 9.5 20.88 9.5 19.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.8002 12L19.6902 14.01C19.6302 14 19.5702 14 19.5002 14H4.50016C4.43016 14 4.37016 14 4.31016 14.01L3.83016 5.3C3.65016 3.53 5.04016 2 6.81016 2H17.1902C18.9602 2 20.3502 3.53 20.1702 5.3L20.0202 8.01"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.99023 2V7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 2V4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Brush2Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.5 19.5V18H4.5C3.95 18 3.45 17.78 3.09 17.41C2.72 17.05 2.5 16.55 2.5 16C2.5 14.97 3.3 14.11 4.31 14.01C4.37 14 4.43 14 4.5 14H19.5C19.57 14 19.63 14 19.69 14.01C20.17 14.05 20.59 14.26 20.91 14.59C21.32 14.99 21.54 15.56 21.49 16.18C21.4 17.23 20.45 18 19.39 18H14.5V19.5C14.5 20.88 13.38 22 12 22C10.62 22 9.5 20.88 9.5 19.5Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M20.1702 5.3L19.6902 14.01C19.6302 14 19.5702 14 19.5002 14H4.50016C4.43016 14 4.37016 14 4.31016 14.01L3.83016 5.3C3.65016 3.53 5.04016 2 6.81016 2H17.1902C18.9602 2 20.3502 3.53 20.1702 5.3Z"
        fill="currentColor"
      />
      <Path
        d="M8.74023 2V7C8.74023 7.41 8.40023 7.75 7.99023 7.75C7.58023 7.75 7.24023 7.41 7.24023 7V2H8.74023Z"
        fill="currentColor"
      />
      <Path
        d="M12.75 2V4C12.75 4.41 12.41 4.75 12 4.75C11.59 4.75 11.25 4.41 11.25 4V2H12.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Brush2Linear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.5 19.5V18H4.5C3.95 18 3.45 17.78 3.09 17.41C2.72 17.05 2.5 16.55 2.5 16C2.5 14.97 3.3 14.11 4.31 14.01C4.37 14 4.43 14 4.5 14H19.5C19.57 14 19.63 14 19.69 14.01C20.17 14.05 20.59 14.26 20.91 14.59C21.32 14.99 21.54 15.56 21.49 16.18C21.4 17.23 20.45 18 19.39 18H14.5V19.5C14.5 20.88 13.38 22 12 22C10.62 22 9.5 20.88 9.5 19.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.17 5.3L19.69 14.01C19.63 14 19.57 14 19.5 14H4.50001C4.43001 14 4.37001 14 4.31001 14.01L3.83001 5.3C3.65001 3.53 5.04001 2 6.81001 2H17.19C18.96 2 20.35 3.53 20.17 5.3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.98999 2V7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 2V4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Brush2Outline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 22.75C10.21 22.75 8.75 21.29 8.75 19.5V18.75H4.5C3.76 18.75 3.07 18.46 2.55 17.93C2.04 17.43 1.75 16.74 1.75 16C1.75 14.6 2.84 13.4 4.24 13.26C4.29 13.25 4.39 13.25 4.5 13.25H19.5C19.61 13.25 19.71 13.25 19.81 13.27C20.4 13.32 20.99 13.6 21.45 14.07C22.02 14.62 22.31 15.42 22.24 16.24C22.12 17.65 20.87 18.75 19.39 18.75H15.25V19.5C15.25 21.29 13.79 22.75 12 22.75ZM4.5 14.75C4.48 14.75 4.4 14.75 4.38 14.76C3.75 14.82 3.25 15.37 3.25 16C3.25 16.33 3.38 16.64 3.61 16.87C3.85 17.12 4.16 17.25 4.5 17.25H9.5C9.91 17.25 10.25 17.59 10.25 18V19.5C10.25 20.46 11.04 21.25 12 21.25C12.96 21.25 13.75 20.46 13.75 19.5V18C13.75 17.59 14.09 17.25 14.5 17.25H19.39C20.08 17.25 20.69 16.74 20.75 16.11C20.78 15.73 20.65 15.38 20.39 15.12C20.17 14.9 19.91 14.77 19.63 14.75L19.5 14.74H4.5V14.75Z"
        fill="currentColor"
      />
      <Path
        d="M19.6896 14.76C19.6496 14.76 19.6096 14.76 19.5696 14.75H4.49965C4.28965 14.79 4.03965 14.73 3.87965 14.59C3.70965 14.46 3.57965 14.26 3.56965 14.05L3.07965 5.34C2.97965 4.32 3.31965 3.27 4.02965 2.48C4.73965 1.7 5.74965 1.25 6.80965 1.25H17.1897C18.2497 1.25 19.2596 1.7 19.9696 2.49C20.6696 3.27 21.0196 4.32 20.9196 5.36L20.4396 14.05C20.4296 14.26 20.3296 14.46 20.1596 14.59C20.0296 14.7 19.8596 14.76 19.6896 14.76ZM5.01965 13.25H18.9796L19.4196 5.26C19.4196 5.25 19.4196 5.24 19.4196 5.22C19.4796 4.58 19.2796 3.96 18.8497 3.49C18.4197 3.02 17.8197 2.75 17.1797 2.75H6.80965C6.17965 2.75 5.56965 3.02 5.13965 3.49C4.70965 3.97 4.50965 4.58 4.57965 5.22L5.01965 13.25Z"
        fill="currentColor"
      />
      <Path
        d="M7.99023 7.75C7.58023 7.75 7.24023 7.41 7.24023 7V2C7.24023 1.59 7.58023 1.25 7.99023 1.25C8.40023 1.25 8.74023 1.59 8.74023 2V7C8.74023 7.41 8.40023 7.75 7.99023 7.75Z"
        fill="currentColor"
      />
      <Path
        d="M12 4.75C11.59 4.75 11.25 4.41 11.25 4V2C11.25 1.59 11.59 1.25 12 1.25C12.41 1.25 12.75 1.59 12.75 2V4C12.75 4.41 12.41 4.75 12 4.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Brush2Twotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.9707 2H8.9707C3.9707 2 1.9707 4 1.9707 9V15C1.9707 20 3.9707 22 8.9707 22H14.9707C19.9707 22 21.9707 20 21.9707 15V13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.8795 3.56022C20.6495 6.63022 17.5595 10.8102 14.9795 12.8802L13.3995 14.1402C13.1995 14.2902 12.9995 14.4102 12.7695 14.5002C12.7695 14.3502 12.7595 14.2002 12.7395 14.0402C12.6495 13.3702 12.3495 12.7402 11.8095 12.2102C11.2595 11.6602 10.5995 11.3502 9.91945 11.2602C9.75945 11.2502 9.59945 11.2402 9.43945 11.2502C9.52945 11.0002 9.65945 10.7702 9.82945 10.5802L11.0895 9.00022C13.1595 6.42022 17.3495 3.31022 20.4095 2.08022C20.8795 1.90022 21.3395 2.04022 21.6295 2.33022C21.9295 2.63022 22.0695 3.09022 21.8795 3.56022Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.7801 14.49C12.7801 15.37 12.4401 16.21 11.8101 16.85C11.3201 17.34 10.6601 17.68 9.87009 17.78L7.90009 17.99C6.83009 18.11 5.91009 17.2 6.03009 16.11L6.24009 14.14C6.43009 12.39 7.89009 11.27 9.45009 11.24C9.61009 11.23 9.77009 11.24 9.93009 11.25C10.6101 11.34 11.2701 11.65 11.8201 12.2C12.3601 12.74 12.6601 13.36 12.7501 14.03C12.7701 14.19 12.7801 14.35 12.7801 14.49Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M15.8193 11.9799C15.8193 9.88994 14.1293 8.18994 12.0293 8.18994"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: Brush2Bold,
  broken: Brush2Broken,
  bulk: Brush2Bulk,
  linear: Brush2Linear,
  outline: Brush2Outline,
  twotone: Brush2Twotone,
};

export const Brush2Icon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default Brush2Icon;
