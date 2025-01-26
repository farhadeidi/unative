import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const HomeTrendDownBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.0402 6.82165L14.2802 2.79165C12.7102 1.69165 10.3002 1.75165 8.79023 2.92165L3.78023 6.83165C2.78023 7.61165 1.99023 9.21165 1.99023 10.4716V17.3716C1.99023 19.9216 4.06023 22.0016 6.61023 22.0016H17.3902C19.9402 22.0016 22.0102 19.9316 22.0102 17.3816V10.6016C22.0102 9.25165 21.1402 7.59165 20.0402 6.82165ZM16.8802 16.1916C16.8802 16.2816 16.8602 16.3716 16.8302 16.4616C16.7602 16.6316 16.6202 16.7716 16.4502 16.8416C16.3602 16.8816 16.2702 16.8916 16.1802 16.8916H14.3202C13.9302 16.8916 13.6202 16.5816 13.6202 16.1916C13.6202 15.8016 13.9302 15.4916 14.3202 15.4916H14.5002L12.3902 13.3816L11.3702 14.9016C11.2502 15.0716 11.0702 15.1916 10.8602 15.2116C10.6402 15.2316 10.4502 15.1616 10.3002 15.0116L7.32023 12.0316C7.05023 11.7616 7.05023 11.3216 7.32023 11.0416C7.59023 10.7616 8.03023 10.7716 8.31024 11.0416L10.6902 13.4216L11.7102 11.9016C11.8302 11.7316 12.0102 11.6116 12.2202 11.5916C12.4402 11.5716 12.6302 11.6416 12.7802 11.7916L15.5002 14.5116V14.3316C15.5002 13.9416 15.8102 13.6316 16.2002 13.6316C16.5902 13.6316 16.9002 13.9416 16.9002 14.3316V16.1916H16.8802Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HomeTrendDownBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 10.4999C22 9.28992 21.19 7.73992 20.2 7.04992L14.02 2.71992C12.62 1.73992 10.37 1.78992 9.02 2.83992L3.63 7.03992C2.73 7.73992 2 9.22992 2 10.3599V17.7699C2 20.0899 3.89 21.9899 6.21 21.9899H17.79C20.11 21.9899 22 20.0899 22 17.7799V14.6799"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.17 14L10.7 14.7L7.5 11.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.5 16.5L14.99 14.99L14 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.5 16.5H16.5V14.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const HomeTrendDownBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.0402 6.82018L14.2802 2.79018C12.7102 1.69018 10.3002 1.75018 8.79023 2.92018L3.78023 6.83018C2.78023 7.61018 1.99023 9.21018 1.99023 10.4702V17.3702C1.99023 19.9202 4.06023 22.0002 6.61023 22.0002H17.3902C19.9402 22.0002 22.0102 19.9302 22.0102 17.3802V10.6002C22.0102 9.25018 21.1402 7.59018 20.0402 6.82018Z"
        fill="currentColor"
      />
      <Path
        d="M16.8802 14.3304C16.8802 13.9404 16.5702 13.6304 16.1802 13.6304C15.7902 13.6304 15.4802 13.9404 15.4802 14.3304V14.5104L12.7602 11.7904C12.6102 11.6404 12.4102 11.5704 12.2002 11.5904C11.9902 11.6104 11.8002 11.7204 11.6902 11.9004L10.6702 13.4204L8.29016 11.0404C8.02016 10.7704 7.58016 10.7704 7.30016 11.0404C7.03016 11.3104 7.03016 11.7504 7.30016 12.0304L10.2802 15.0104C10.4302 15.1604 10.6302 15.2304 10.8402 15.2104C11.0502 15.1904 11.2402 15.0804 11.3502 14.9004L12.3702 13.3804L14.4802 15.4904H14.3002C13.9102 15.4904 13.6002 15.8004 13.6002 16.1904C13.6002 16.5804 13.9102 16.8904 14.3002 16.8904H16.1602C16.2502 16.8904 16.3402 16.8704 16.4302 16.8404C16.6002 16.7704 16.7402 16.6304 16.8102 16.4604C16.8502 16.3704 16.8602 16.2804 16.8602 16.1904V14.3304H16.8802Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HomeTrendDownLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.02 2.83992L3.63 7.03992C2.73 7.73992 2 9.22992 2 10.3599V17.7699C2 20.0899 3.89 21.9899 6.21 21.9899H17.79C20.11 21.9899 22 20.0899 22 17.7799V10.4999C22 9.28992 21.19 7.73992 20.2 7.04992L14.02 2.71992C12.62 1.73992 10.37 1.78992 9.02 2.83992Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.5 16.5L12.3 12.3L10.7 14.7L7.5 11.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.5 16.5H16.5V14.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const HomeTrendDownOutline = ({
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
        d="M17.79 22.7402H6.21C3.47 22.7402 1.25 20.5102 1.25 17.7702V10.3602C1.25 9.00021 2.09 7.29021 3.17 6.45021L8.56 2.25021C10.18 0.990208 12.77 0.930208 14.45 2.11021L20.63 6.44021C21.82 7.27021 22.75 9.05021 22.75 10.5002V17.7802C22.75 20.5102 20.53 22.7402 17.79 22.7402ZM9.48 3.43021L4.09 7.63021C3.38 8.19021 2.75 9.46021 2.75 10.3602V17.7702C2.75 19.6802 4.3 21.2402 6.21 21.2402H17.79C19.7 21.2402 21.25 19.6902 21.25 17.7802V10.5002C21.25 9.54021 20.56 8.21021 19.77 7.67021L13.59 3.34021C12.45 2.54021 10.57 2.58021 9.48 3.43021Z"
        fill="currentColor"
      />
      <Path
        d="M16.5002 17.2499C16.3102 17.2499 16.1202 17.1799 15.9702 17.0299L12.4202 13.4799L11.3302 15.1199C11.2102 15.3099 11.0002 15.4299 10.7802 15.4499C10.5502 15.4699 10.3302 15.3899 10.1802 15.2299L6.9802 12.0299C6.6902 11.7399 6.6902 11.2599 6.9802 10.9699C7.2702 10.6799 7.7502 10.6799 8.0402 10.9699L10.5902 13.5199L11.6802 11.8799C11.8002 11.6899 12.0102 11.5699 12.2302 11.5499C12.4602 11.5299 12.6802 11.6099 12.8302 11.7699L17.0302 15.9699C17.3202 16.2599 17.3202 16.7399 17.0302 17.0299C16.8802 17.1799 16.6902 17.2499 16.5002 17.2499Z"
        fill="currentColor"
      />
      <Path
        d="M16.5 17.25H14.5C14.09 17.25 13.75 16.91 13.75 16.5C13.75 16.09 14.09 15.75 14.5 15.75H15.75V14.5C15.75 14.09 16.09 13.75 16.5 13.75C16.91 13.75 17.25 14.09 17.25 14.5V16.5C17.25 16.91 16.91 17.25 16.5 17.25Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HomeTrendDownTwotone = ({
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
        d="M9.02 2.84016L3.63 7.04016C2.73 7.74016 2 9.23016 2 10.3602V17.7702C2 20.0902 3.89 21.9902 6.21 21.9902H17.79C20.11 21.9902 22 20.0902 22 17.7802V10.5002C22 9.29016 21.19 7.74016 20.2 7.05016L14.02 2.72016C12.62 1.74016 10.37 1.79016 9.02 2.84016Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M16.5 16.5L12.3 12.3L10.7 14.7L7.5 11.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M14.5 16.5H16.5V14.5"
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
  bold: HomeTrendDownBold,
  broken: HomeTrendDownBroken,
  bulk: HomeTrendDownBulk,
  linear: HomeTrendDownLinear,
  outline: HomeTrendDownOutline,
  twotone: HomeTrendDownTwotone,
};

export const HomeTrendDownIcon = ({
  variant = "linear",
  ...props
}: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
