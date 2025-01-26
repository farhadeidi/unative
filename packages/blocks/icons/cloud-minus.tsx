import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const CloudMinusBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.17 17.5709C19.64 18.0609 19.03 18.4309 18.37 18.6809C17.71 18.9309 17 18.4509 17 17.7409V16.4209C17 14.4709 15.42 12.8909 13.47 12.8909H10.53C8.58 12.8909 7 14.4709 7 16.4209V18.0009C7 18.5509 6.55 19.0009 6 19.0009H5.55C3.1 18.6309 2 16.6409 2 14.8609C2 13.1809 2.98 11.3209 5.11 10.8009C4.52 8.47091 5.02 6.28091 6.54 4.69091C8.27 2.88091 11.03 2.16091 13.41 2.90091C15.6 3.57091 17.14 5.37091 17.69 7.87091C19.6 8.30091 21.13 9.74091 21.74 11.7409C22.4 13.9109 21.8 16.1409 20.17 17.5709Z"
        fill="currentColor"
      />
      <Path
        d="M13.47 14.3906H10.53C9.26 14.3906 8.5 15.1506 8.5 16.4206V19.3606C8.5 20.6306 9.26 21.3906 10.53 21.3906H13.47C14.74 21.3906 15.5 20.6306 15.5 19.3606V16.4206C15.5 15.1506 14.74 14.3906 13.47 14.3906ZM13.71 18.4606H10.3C9.94 18.4606 9.65 18.1706 9.65 17.8106C9.65 17.4606 9.94 17.1706 10.3 17.1706H13.72C14.07 17.1706 14.36 17.4606 14.36 17.8106C14.35 18.1806 14.06 18.4606 13.71 18.4606Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CloudMinusBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.9707 20H8.9707"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.0001 3.98007C8.01007 3.64007 3.66007 7.09007 5.62007 12.5601"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.6109 20C17.9509 20.01 19.2409 19.51 20.2309 18.61C23.5009 15.75 21.7509 10.01 17.4409 9.47002C17.2009 8.02002 16.6709 6.88002 15.9609 6.02002"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.27938 12.9701C6.74938 12.7001 6.15938 12.5601 5.56938 12.5701C0.909376 12.9001 0.919376 19.6801 5.56938 20.0101"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.8203 9.88998C16.3403 9.62998 16.9003 9.48998 17.4803 9.47998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const CloudMinusBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.74 11.7401C21.13 9.74005 19.61 8.30005 17.7 7.87005C17.14 5.37005 15.6 3.58005 13.42 2.90005C11.04 2.17005 8.28 2.88005 6.55 4.69005C5.02 6.28005 4.52 8.47005 5.11 10.8001C2.98 11.3201 2 13.1801 2 14.8601C2 16.7401 3.23 18.8501 5.97 19.0401H8.5V16.4101C8.5 15.1401 9.26 14.3801 10.53 14.3801H13.47C14.74 14.3801 15.5 15.1401 15.5 16.4101V19.0401H16.31C16.32 19.0401 16.34 19.0401 16.35 19.0401C17.77 19.0401 19.13 18.5101 20.17 17.5601C21.8 16.1401 22.4 13.9101 21.74 11.7401Z"
        fill="currentColor"
      />
      <Path
        d="M13.47 14.3899H10.53C9.26 14.3899 8.5 15.1499 8.5 16.4199V19.3599C8.5 20.6299 9.26 21.3899 10.53 21.3899H13.47C14.74 21.3899 15.5 20.6299 15.5 19.3599V16.4199C15.5 15.1499 14.74 14.3899 13.47 14.3899ZM13.71 18.4599H10.3C9.94 18.4599 9.65 18.1699 9.65 17.8099C9.65 17.4599 9.94 17.1699 10.3 17.1699H13.72C14.07 17.1699 14.36 17.4599 14.36 17.8099C14.35 18.1799 14.06 18.4599 13.71 18.4599Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CloudMinusLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.97 20H8.96997"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.61 19.9999C17.95 20.0099 19.24 19.5099 20.23 18.6099C23.5 15.7499 21.75 10.0099 17.44 9.46995C15.9 0.129949 2.42998 3.66995 5.61998 12.5599"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.28011 12.97C6.75011 12.7 6.16011 12.56 5.57011 12.57C0.910109 12.9 0.920108 19.68 5.57011 20.01"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.8201 9.88998C16.3401 9.62998 16.9001 9.48998 17.4801 9.47998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const CloudMinusOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.9707 20.75H8.9707C8.5607 20.75 8.2207 20.41 8.2207 20C8.2207 19.59 8.5607 19.25 8.9707 19.25H12.9707C13.3807 19.25 13.7207 19.59 13.7207 20C13.7207 20.41 13.3907 20.75 12.9707 20.75Z"
        fill="currentColor"
      />
      <Path
        d="M16.6497 20.75C16.6397 20.75 16.6197 20.75 16.6097 20.75C16.1997 20.75 15.8597 20.41 15.8697 19.99C15.8697 19.58 16.2097 19.25 16.6197 19.25C16.6297 19.25 16.6497 19.25 16.6597 19.25C17.7997 19.25 18.8897 18.83 19.7297 18.05C21.2797 16.69 21.3897 14.75 20.9697 13.38C20.5497 12.01 19.3897 10.46 17.3597 10.2C17.0297 10.16 16.7697 9.91001 16.7097 9.58001C16.3097 7.19001 15.0197 5.54001 13.0797 4.94001C11.0597 4.32001 8.72973 4.93001 7.26973 6.46001C5.84973 7.95002 5.51973 10.02 6.33973 12.31C6.47973 12.7 6.27973 13.13 5.88973 13.27C5.49973 13.41 5.06973 13.21 4.92973 12.82C3.91973 10.01 4.37973 7.32001 6.18973 5.43001C8.03973 3.50001 10.9897 2.73001 13.5297 3.52001C15.8597 4.24001 17.5097 6.16001 18.0997 8.82001C20.1397 9.28001 21.7697 10.82 22.4197 12.95C23.1297 15.27 22.4797 17.65 20.7497 19.17C19.6097 20.19 18.1597 20.75 16.6497 20.75Z"
        fill="currentColor"
      />
      <Path
        d="M5.57008 20.75C5.55008 20.75 5.53008 20.75 5.52008 20.75C2.64008 20.55 1.33008 18.29 1.33008 16.28C1.33008 14.27 2.64008 12.02 5.52008 11.81C6.26008 11.8 6.99008 11.97 7.63008 12.29C8.00008 12.48 8.14008 12.93 7.96008 13.3C7.77008 13.67 7.32008 13.81 6.95008 13.63C6.53008 13.41 6.05008 13.32 5.59008 13.31C3.70008 13.45 2.84008 14.9 2.84008 16.28C2.84008 17.66 3.70008 19.11 5.64008 19.25C6.05008 19.28 6.36008 19.64 6.33008 20.05C6.29008 20.45 5.96008 20.75 5.57008 20.75Z"
        fill="currentColor"
      />
      <Path
        d="M15.8206 10.64C15.5506 10.64 15.2806 10.49 15.1506 10.22C14.9606 9.84997 15.1106 9.39997 15.4906 9.20997C16.1006 8.89997 16.7906 8.72997 17.4706 8.71997C17.8606 8.73997 18.2306 9.03997 18.2306 9.45997C18.2406 9.86997 17.9106 10.22 17.4906 10.22C17.0306 10.23 16.5706 10.34 16.1506 10.55C16.0506 10.62 15.9306 10.64 15.8206 10.64Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CloudMinusTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.9707 20H8.9707"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.6097 19.9999C17.9497 20.0099 19.2397 19.5099 20.2297 18.6099C23.4997 15.7499 21.7497 10.0099 17.4397 9.46995C15.8997 0.129949 2.42973 3.66995 5.61973 12.5599"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.27938 12.9698C6.74938 12.6998 6.15938 12.5598 5.56938 12.5698C0.909376 12.8998 0.919376 19.6798 5.56938 20.0098"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.8203 9.88998C16.3403 9.62998 16.9003 9.48998 17.4803 9.47998"
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
  bold: CloudMinusBold,
  broken: CloudMinusBroken,
  bulk: CloudMinusBulk,
  linear: CloudMinusLinear,
  outline: CloudMinusOutline,
  twotone: CloudMinusTwotone,
};

export const CloudMinusIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
