import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const Simcard2Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16 12.6919V18.0819C16 20.4219 14.44 21.9719 12.11 21.9719H5.89C3.56 21.9719 2 20.4219 2 18.0819V10.3119C2 7.97188 3.56 6.42188 5.89 6.42188H9.72C10.75 6.42188 11.74 6.83187 12.47 7.56187L14.86 9.94187C15.59 10.6719 16 11.6619 16 12.6919Z"
        fill="currentColor"
      />
      <Path
        d="M21.9995 8.24875V13.6388C21.9995 15.9688 20.4395 17.5288 18.1095 17.5288H16.9995V12.6887C16.9995 11.3987 16.4795 10.1387 15.5695 9.22875L13.1795 6.84875C12.2695 5.93875 11.0095 5.41875 9.71953 5.41875H8.01953C8.19953 3.33875 9.70953 1.96875 11.8895 1.96875H15.7195C16.7495 1.96875 17.7395 2.37875 18.4695 3.10875L20.8595 5.49875C21.5895 6.22875 21.9995 7.21875 21.9995 8.24875Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Simcard2Broken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 14.0299V10.3099C2 7.96992 3.56 6.41992 5.89 6.41992H9.72C10.75 6.41992 11.74 6.82992 12.47 7.55992L14.86 9.93992C15.59 10.6699 16 11.6599 16 12.6899V18.0799C16 20.4199 14.44 21.9699 12.11 21.9699H5.89C3.56 21.9699 2 20.4199 2 18.0799"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 8.24997V13.64C22 15.97 20.44 17.53 18.11 17.53H16V12.69C16 11.66 15.59 10.67 14.86 9.93997L12.47 7.55997C11.74 6.82997 10.75 6.41997 9.72 6.41997H8V5.85997C8 3.52997 9.56 1.96997 11.89 1.96997H15.72C16.75 1.96997 17.74 2.37997 18.47 3.10997L20.86 5.49997C21.59 6.22997 22 7.21997 22 8.24997Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Simcard2Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16 12.6899V18.0799C16 20.4199 14.44 21.9699 12.11 21.9699H5.89C3.56 21.9699 2 20.4199 2 18.0799V10.3099C2 7.96992 3.56 6.41992 5.89 6.41992H9.72C10.75 6.41992 11.74 6.82992 12.47 7.55992L14.86 9.93992C15.59 10.6699 16 11.6599 16 12.6899Z"
        fill="currentColor"
      />
      <Path
        d="M22 8.24997V13.64C22 15.97 20.44 17.53 18.11 17.53H16V12.69C16 11.66 15.59 10.67 14.86 9.93997L12.47 7.55997C11.74 6.82997 10.75 6.41997 9.72 6.41997H8V5.85997C8 3.52997 9.56 1.96997 11.89 1.96997H15.72C16.75 1.96997 17.74 2.37997 18.47 3.10997L20.86 5.49997C21.59 6.22997 22 7.21997 22 8.24997Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Simcard2Linear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16 12.69V18.08C16 20.42 14.44 21.97 12.11 21.97H5.89C3.56 21.97 2 20.42 2 18.08V10.31C2 7.97004 3.56 6.42004 5.89 6.42004H9.72C10.75 6.42004 11.74 6.83004 12.47 7.56004L14.86 9.94004C15.59 10.67 16 11.66 16 12.69Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 8.24997V13.64C22 15.97 20.44 17.53 18.11 17.53H16V12.69C16 11.66 15.59 10.67 14.86 9.93997L12.47 7.55997C11.74 6.82997 10.75 6.41997 9.72 6.41997H8V5.85997C8 3.52997 9.56 1.96997 11.89 1.96997H15.72C16.75 1.96997 17.74 2.37997 18.47 3.10997L20.86 5.49997C21.59 6.22997 22 7.21997 22 8.24997Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Simcard2Outline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.11 22.7199H5.89C3.16 22.7199 1.25 20.8099 1.25 18.0799V10.3099C1.25 7.57992 3.16 5.66992 5.89 5.66992H9.72C10.94 5.66992 12.14 6.16992 13 7.02992L15.39 9.40992C16.26 10.2799 16.75 11.4699 16.75 12.6899V18.0799C16.75 20.8099 14.84 22.7199 12.11 22.7199ZM5.89 7.16992C3.98 7.16992 2.75 8.39992 2.75 10.3099V18.0799C2.75 19.9899 3.98 21.2199 5.89 21.2199H12.11C14.02 21.2199 15.25 19.9899 15.25 18.0799V12.6899C15.25 11.8599 14.91 11.0599 14.33 10.4699L11.94 8.08992C11.35 7.49992 10.54 7.16992 9.72 7.16992H5.89Z"
        fill="currentColor"
      />
      <Path
        d="M18.11 18.28H16C15.59 18.28 15.25 17.94 15.25 17.53V12.69C15.25 11.86 14.91 11.06 14.33 10.47L11.94 8.08997C11.35 7.49997 10.54 7.16997 9.72 7.16997H8C7.59 7.16997 7.25 6.82997 7.25 6.41997V5.85997C7.25 3.12997 9.16 1.21997 11.89 1.21997H15.72C16.94 1.21997 18.14 1.71997 19 2.57997L21.39 4.96997C22.27 5.84997 22.75 7.00997 22.75 8.24997V13.64C22.75 16.37 20.84 18.28 18.11 18.28ZM16.75 16.78H18.11C20.02 16.78 21.25 15.55 21.25 13.64V8.24997C21.25 7.40997 20.92 6.61997 20.33 6.02997L17.94 3.63997C17.36 3.05997 16.55 2.71997 15.72 2.71997H11.89C10.05 2.71997 8.83 3.86997 8.75 5.66997H9.72C10.94 5.66997 12.14 6.16997 13 7.02997L15.39 9.40997C16.26 10.28 16.75 11.47 16.75 12.69V16.78Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Simcard2Twotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16 12.6899V18.0799C16 20.4199 14.44 21.9699 12.11 21.9699H5.89C3.56 21.9699 2 20.4199 2 18.0799V10.3099C2 7.96992 3.56 6.41992 5.89 6.41992H9.72C10.75 6.41992 11.74 6.82992 12.47 7.55992L14.86 9.93992C15.59 10.6699 16 11.6599 16 12.6899Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M22 8.25021V13.6402C22 15.9702 20.44 17.5302 18.11 17.5302H16V12.6902C16 11.6602 15.59 10.6702 14.86 9.94021L12.47 7.56021C11.74 6.83021 10.75 6.42021 9.72 6.42021H8V5.86021C8 3.53022 9.56 1.97021 11.89 1.97021H15.72C16.75 1.97021 17.74 2.38021 18.47 3.11021L20.86 5.50021C21.59 6.23021 22 7.22021 22 8.25021Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: Simcard2Bold,
  broken: Simcard2Broken,
  bulk: Simcard2Bulk,
  linear: Simcard2Linear,
  outline: Simcard2Outline,
  twotone: Simcard2Twotone,
};

export const Simcard2Icon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
