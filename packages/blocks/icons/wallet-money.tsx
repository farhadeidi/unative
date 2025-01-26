import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const WalletMoneyBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.97 16.08C20.73 18.75 18.8 20.5 16 20.5H7C4.24 20.5 2 18.26 2 15.5V8.5C2 5.78 3.64 3.88 6.19 3.56C6.45 3.52 6.72 3.5 7 3.5H16C16.26 3.5 16.51 3.51 16.75 3.55C19.14 3.83 20.76 5.5 20.97 7.92C21 8.21 20.76 8.45 20.47 8.45H18.92C17.96 8.45 17.07 8.82 16.43 9.48C15.67 10.22 15.29 11.26 15.38 12.3C15.54 14.12 17.14 15.55 19.04 15.55H20.47C20.76 15.55 21 15.79 20.97 16.08Z"
        fill="currentColor"
      />
      <Path
        d="M22.0002 10.9692V13.0292C22.0002 13.5792 21.5602 14.0292 21.0002 14.0492H19.0402C17.9602 14.0492 16.9702 13.2592 16.8802 12.1792C16.8202 11.5492 17.0602 10.9592 17.4802 10.5492C17.8502 10.1692 18.3602 9.94922 18.9202 9.94922H21.0002C21.5602 9.96922 22.0002 10.4192 22.0002 10.9692Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const WalletMoneyBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.7496 16.8599V18.8899C10.7496 20.6099 9.14963 21.9999 7.17963 21.9999C5.20963 21.9999 3.59961 20.6099 3.59961 18.8899V16.8599C3.59961 18.5799 5.19963 19.7999 7.17963 19.7999C9.14963 19.7999 10.7496 18.5699 10.7496 16.8599Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.7498 14.11C10.7498 14.61 10.6098 15.07 10.3698 15.47C9.77981 16.44 8.5698 17.05 7.1698 17.05C5.7698 17.05 4.55979 16.43 3.96979 15.47C3.72979 15.07 3.58984 14.61 3.58984 14.11C3.58984 13.25 3.98982 12.48 4.62982 11.92C5.27982 11.35 6.16979 11.01 7.15979 11.01C8.14979 11.01 9.03982 11.36 9.68982 11.92C10.3498 12.47 10.7498 13.25 10.7498 14.11Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.7496 14.11V16.86C10.7496 18.58 9.14963 19.8 7.17963 19.8C5.20963 19.8 3.59961 18.57 3.59961 16.86V14.11C3.59961 12.39 5.19963 11 7.17963 11C8.16963 11 9.05966 11.35 9.70966 11.91C10.3497 12.47 10.7496 13.25 10.7496 14.11Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22.0002 10.9699V13.03C22.0002 13.58 21.5602 14.0299 21.0002 14.0499H19.0402C17.9602 14.0499 16.9702 13.2599 16.8802 12.1799C16.8202 11.5499 17.0602 10.9599 17.4802 10.5499C17.8502 10.1699 18.3602 9.94995 18.9202 9.94995H21.0002C21.5602 9.96995 22.0002 10.4199 22.0002 10.9699Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 3.5C16.26 3.5 16.51 3.50999 16.75 3.54999C19.33 3.84999 21 5.76 21 8.5V9.95001H18.92C18.36 9.95001 17.85 10.17 17.48 10.55C17.06 10.96 16.82 11.55 16.88 12.18C16.97 13.26 17.96 14.05 19.04 14.05H21V15.5C21 18.5 19 20.5 16 20.5H13.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 10.5V8.5C2 5.78 3.64 3.88 6.19 3.56C6.45 3.52 6.72 3.5 7 3.5H12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const WalletMoneyBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.48 10.55C17.06 10.96 16.82 11.55 16.88 12.18C16.97 13.26 17.96 14.05 19.04 14.05H21V15.5C21 18.5 19 20.5 16 20.5H7C4 20.5 2 18.5 2 15.5V8.5C2 5.78 3.64 3.88 6.19 3.56C6.45 3.52 6.72 3.5 7 3.5H16C16.26 3.5 16.51 3.50999 16.75 3.54999C19.33 3.84999 21 5.76 21 8.5V9.95001H18.92C18.36 9.95001 17.85 10.17 17.48 10.55Z"
        fill="currentColor"
      />
      <Path
        d="M22.0002 10.9702V13.0302C22.0002 13.5802 21.5602 14.0302 21.0002 14.0502H19.0402C17.9602 14.0502 16.9702 13.2602 16.8802 12.1802C16.8202 11.5502 17.0602 10.9602 17.4802 10.5502C17.8502 10.1702 18.3602 9.9502 18.9202 9.9502H21.0002C21.5602 9.9702 22.0002 10.4202 22.0002 10.9702Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const WalletMoneyLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.7516 16.8604V18.8904C10.7516 20.6104 9.15158 22.0004 7.18158 22.0004C5.21158 22.0004 3.60156 20.6104 3.60156 18.8904V16.8604C3.60156 18.5804 5.20158 19.8004 7.18158 19.8004C9.15158 19.8004 10.7516 18.5704 10.7516 16.8604Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.7501 14.11C10.7501 14.61 10.6101 15.07 10.3701 15.47C9.78006 16.44 8.57004 17.05 7.17004 17.05C5.77004 17.05 4.56003 16.43 3.97003 15.47C3.73003 15.07 3.59009 14.61 3.59009 14.11C3.59009 13.25 3.99007 12.48 4.63007 11.92C5.28007 11.35 6.17003 11.01 7.16003 11.01C8.15003 11.01 9.04006 11.36 9.69006 11.92C10.3501 12.47 10.7501 13.25 10.7501 14.11Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.7516 14.11V16.86C10.7516 18.58 9.15158 19.8 7.18158 19.8C5.21158 19.8 3.60156 18.57 3.60156 16.86V14.11C3.60156 12.39 5.20158 11 7.18158 11C8.17158 11 9.06161 11.35 9.71161 11.91C10.3516 12.47 10.7516 13.25 10.7516 14.11Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 10.9699V13.03C22 13.58 21.56 14.0299 21 14.0499H19.0399C17.9599 14.0499 16.97 13.2599 16.88 12.1799C16.82 11.5499 17.0599 10.9599 17.4799 10.5499C17.8499 10.1699 18.36 9.94995 18.92 9.94995H21C21.56 9.96995 22 10.4199 22 10.9699Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 10.5V8.5C2 5.78 3.64 3.88 6.19 3.56C6.45 3.52 6.72 3.5 7 3.5H16C16.26 3.5 16.51 3.50999 16.75 3.54999C19.33 3.84999 21 5.76 21 8.5V9.95001H18.92C18.36 9.95001 17.85 10.17 17.48 10.55C17.06 10.96 16.82 11.55 16.88 12.18C16.97 13.26 17.96 14.05 19.04 14.05H21V15.5C21 18.5 19 20.5 16 20.5H13.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const WalletMoneyOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7.1698 22.7501C4.7898 22.7501 2.83984 21.0201 2.83984 18.8901V16.8501C2.83984 16.4401 3.17984 16.1001 3.58984 16.1001C3.99984 16.1001 4.33984 16.4401 4.33984 16.8501C4.33984 18.1001 5.5498 19.0401 7.1698 19.0401C8.7898 19.0401 9.99982 18.1001 9.99982 16.8501C9.99982 16.4401 10.3398 16.1001 10.7498 16.1001C11.1598 16.1001 11.4998 16.4401 11.4998 16.8501V18.8901C11.4998 21.0201 9.5598 22.7501 7.1698 22.7501ZM4.59979 19.8701C5.03979 20.6901 6.0298 21.2501 7.1698 21.2501C8.3098 21.2501 9.29981 20.6801 9.73981 19.8701C9.02981 20.3001 8.1498 20.5501 7.1698 20.5501C6.1898 20.5501 5.30979 20.3001 4.59979 19.8701Z"
        fill="currentColor"
      />
      <Path
        d="M7.1698 17.7999C5.5298 17.7999 4.05983 17.0499 3.32983 15.8599C3.00983 15.3399 2.83984 14.7299 2.83984 14.1099C2.83984 13.0599 3.29983 12.0799 4.13983 11.3499C5.75983 9.92992 8.54981 9.92997 10.1798 11.34C11.0198 12.08 11.4898 13.0599 11.4898 14.1099C11.4898 14.7299 11.3198 15.3399 10.9998 15.8599C10.2798 17.0499 8.8098 17.7999 7.1698 17.7999ZM7.1698 11.7499C6.3898 11.7499 5.66982 12.0099 5.12982 12.4799C4.61982 12.9199 4.33984 13.4999 4.33984 14.1099C4.33984 14.4599 4.4298 14.78 4.6098 15.08C5.0698 15.84 6.0498 16.3099 7.1698 16.3099C8.2898 16.3099 9.26979 15.84 9.71979 15.09C9.89979 14.8 9.98981 14.4699 9.98981 14.1199C9.98981 13.5099 9.70983 12.9299 9.19983 12.4799C8.66983 12.0099 7.9498 11.7499 7.1698 11.7499Z"
        fill="currentColor"
      />
      <Path
        d="M7.1698 20.55C4.6998 20.55 2.83984 18.96 2.83984 16.86V14.11C2.83984 11.98 4.7798 10.25 7.1698 10.25C8.2998 10.25 9.37982 10.64 10.1898 11.34C11.0298 12.08 11.4998 13.06 11.4998 14.11V16.86C11.4998 18.96 9.6398 20.55 7.1698 20.55ZM7.1698 11.75C5.6098 11.75 4.33984 12.81 4.33984 14.11V16.86C4.33984 18.11 5.5498 19.05 7.1698 19.05C8.7898 19.05 9.99982 18.11 9.99982 16.86V14.11C9.99982 13.5 9.71984 12.92 9.20984 12.47C8.66984 12.01 7.9498 11.75 7.1698 11.75Z"
        fill="currentColor"
      />
      <Path
        d="M19.0399 14.8002C17.5299 14.8002 16.2499 13.6802 16.1299 12.2402C16.0499 11.4102 16.3499 10.6002 16.9499 10.0102C17.4499 9.49019 18.1599 9.2002 18.9099 9.2002H20.9999C21.9899 9.2302 22.7499 10.0102 22.7499 10.9702V13.0302C22.7499 13.9902 21.9899 14.7702 21.0299 14.8002H19.0399ZM20.9699 10.7002H18.9199C18.5699 10.7002 18.2499 10.8302 18.0199 11.0702C17.7299 11.3502 17.5899 11.7302 17.6299 12.1102C17.6799 12.7702 18.3199 13.3002 19.0399 13.3002H20.9999C21.1299 13.3002 21.2499 13.1802 21.2499 13.0302V10.9702C21.2499 10.8202 21.1299 10.7102 20.9699 10.7002Z"
        fill="currentColor"
      />
      <Path
        d="M16.0002 21.25H13.5002C13.0902 21.25 12.7502 20.91 12.7502 20.5C12.7502 20.09 13.0902 19.75 13.5002 19.75H16.0002C18.5802 19.75 20.2502 18.08 20.2502 15.5V14.8H19.0402C17.5302 14.8 16.2502 13.68 16.1302 12.24C16.0502 11.41 16.3503 10.6 16.9503 10.01C17.4503 9.49001 18.1602 9.20001 18.9102 9.20001H20.2402V8.5C20.2402 6.16 18.8703 4.54998 16.6503 4.28998C16.4103 4.24998 16.2002 4.25 15.9902 4.25H6.99023C6.75023 4.25 6.52022 4.26999 6.29022 4.29999C4.09022 4.57999 2.74023 6.18 2.74023 8.5V10.5C2.74023 10.91 2.40023 11.25 1.99023 11.25C1.58023 11.25 1.24023 10.91 1.24023 10.5V8.5C1.24023 5.42 3.14027 3.19001 6.09027 2.82001C6.36027 2.78001 6.67023 2.75 6.99023 2.75H15.9902C16.2302 2.75 16.5402 2.76 16.8602 2.81C19.8102 3.15 21.7402 5.39 21.7402 8.5V9.95001C21.7402 10.36 21.4002 10.7 20.9902 10.7H18.9102C18.5602 10.7 18.2403 10.83 18.0103 11.07C17.7203 11.35 17.5802 11.73 17.6202 12.11C17.6702 12.77 18.3103 13.3 19.0303 13.3H21.0002C21.4102 13.3 21.7502 13.64 21.7502 14.05V15.5C21.7502 18.94 19.4402 21.25 16.0002 21.25Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const WalletMoneyTwotone = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <G opacity="0.4">
        <Path
          d="M10.7496 16.8599V18.8899C10.7496 20.6099 9.14963 21.9999 7.17963 21.9999C5.20963 21.9999 3.59961 20.6099 3.59961 18.8899V16.8599C3.59961 18.5799 5.19963 19.7999 7.17963 19.7999C9.14963 19.7999 10.7496 18.5699 10.7496 16.8599Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M10.7498 14.1097C10.7498 14.6097 10.6098 15.0697 10.3698 15.4697C9.77981 16.4397 8.5698 17.0497 7.1698 17.0497C5.7698 17.0497 4.55979 16.4297 3.96979 15.4697C3.72979 15.0697 3.58984 14.6097 3.58984 14.1097C3.58984 13.2497 3.98982 12.4797 4.62982 11.9197C5.27982 11.3497 6.16979 11.0098 7.15979 11.0098C8.14979 11.0098 9.03982 11.3597 9.68982 11.9197C10.3498 12.4697 10.7498 13.2497 10.7498 14.1097Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M10.7496 14.11V16.86C10.7496 18.58 9.14963 19.8 7.17963 19.8C5.20963 19.8 3.59961 18.57 3.59961 16.86V14.11C3.59961 12.39 5.19963 11 7.17963 11C8.16963 11 9.05966 11.35 9.70966 11.91C10.3497 12.47 10.7496 13.25 10.7496 14.11Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Path
        d="M22.0002 10.9702V13.0302C22.0002 13.5802 21.5602 14.0302 21.0002 14.0502H19.0402C17.9602 14.0502 16.9702 13.2602 16.8802 12.1802C16.8202 11.5502 17.0602 10.9602 17.4802 10.5502C17.8502 10.1702 18.3602 9.9502 18.9202 9.9502H21.0002C21.5602 9.9702 22.0002 10.4202 22.0002 10.9702Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 10.5V8.5C2 5.78 3.64 3.88 6.19 3.56C6.45 3.52 6.72 3.5 7 3.5H16C16.26 3.5 16.51 3.50999 16.75 3.54999C19.33 3.84999 21 5.76 21 8.5V9.95001H18.92C18.36 9.95001 17.85 10.17 17.48 10.55C17.06 10.96 16.82 11.55 16.88 12.18C16.97 13.26 17.96 14.05 19.04 14.05H21V15.5C21 18.5 19 20.5 16 20.5H13.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: WalletMoneyBold,
  broken: WalletMoneyBroken,
  bulk: WalletMoneyBulk,
  linear: WalletMoneyLinear,
  outline: WalletMoneyOutline,
  twotone: WalletMoneyTwotone,
};

export const WalletMoneyIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
