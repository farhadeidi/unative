import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const GrammerlyBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.1105 4.95984C15.2005 1.04984 8.85045 1.04984 4.94045 4.95984C0.960454 8.93984 1.03045 15.4298 5.14045 19.3298C8.94045 22.9198 15.1005 22.9198 18.9005 19.3298C23.0205 15.4298 23.0905 8.93984 19.1105 4.95984ZM16.3805 16.6498C15.1805 17.7898 13.6005 18.3598 12.0205 18.3598C10.4405 18.3598 8.86045 17.7898 7.66045 16.6498C7.36045 16.3598 7.35045 15.8898 7.63045 15.5898C7.92045 15.2898 8.39045 15.2798 8.69045 15.5598C10.5205 17.2898 13.5105 17.2998 15.3505 15.5598C15.6505 15.2798 16.1305 15.2898 16.4105 15.5898C16.7005 15.8898 16.6805 16.3598 16.3805 16.6498Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const GrammerlyBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.8399 16.0701C13.7199 18.0701 10.2799 18.0701 8.16992 16.0701"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.29998 7.97 2.84998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const GrammerlyBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.0707 4.95008C23.0407 8.92008 22.9707 15.4 18.8707 19.29C15.0807 22.88 8.93069 22.88 5.13069 19.29C1.02069 15.4 0.950683 8.92008 4.93068 4.95008C8.83068 1.04008 15.1707 1.04008 19.0707 4.95008Z"
        fill="currentColor"
      />
      <Path
        d="M12.0007 18.3199C10.4207 18.3199 8.85073 17.7499 7.65073 16.6199C7.35073 16.3299 7.34073 15.8599 7.62073 15.5599C7.91073 15.2599 8.38073 15.2499 8.68073 15.5299C10.5107 17.2599 13.4907 17.2599 15.3207 15.5299C15.6207 15.2499 16.1007 15.2599 16.3807 15.5599C16.6607 15.8599 16.6507 16.3399 16.3507 16.6199C15.1507 17.7499 13.5807 18.3199 12.0007 18.3199Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const GrammerlyLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.07 4.95008C23.04 8.92008 22.97 15.4 18.87 19.29C15.08 22.88 8.92996 22.88 5.12996 19.29C1.01996 15.4 0.94995 8.92008 4.92995 4.95008C8.82995 1.04008 15.17 1.04008 19.07 4.95008Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.8399 16.0701C13.7199 18.0701 10.2799 18.0701 8.16992 16.0701"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const GrammerlyOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.001 22.7198C9.33104 22.7198 6.65103 21.7599 4.62103 19.8299C2.49103 17.8099 1.29104 15.0898 1.25104 12.1698C1.21104 9.23984 2.33103 6.48984 4.40103 4.41984C8.59103 0.229844 15.411 0.229844 19.601 4.41984C21.671 6.48984 22.791 9.23984 22.751 12.1698C22.711 15.0998 21.511 17.8199 19.381 19.8299C17.351 21.7599 14.671 22.7198 12.001 22.7198ZM12.001 2.77989C9.63104 2.77989 7.26103 3.67984 5.46103 5.47984C3.68103 7.25984 2.72104 9.62988 2.75104 12.1499C2.78104 14.6699 3.81103 17.0099 5.65103 18.7399C9.15103 22.0599 14.851 22.0499 18.351 18.7399C20.181 17.0099 21.211 14.6599 21.251 12.1499C21.291 9.63988 20.321 7.25984 18.541 5.47984C16.741 3.67984 14.371 2.77989 12.001 2.77989Z"
        fill="currentColor"
      />
      <Path
        d="M12.0007 18.3199C10.4207 18.3199 8.85073 17.7499 7.65073 16.6199C7.35073 16.3299 7.34073 15.8599 7.62073 15.5599C7.91073 15.2599 8.38073 15.2499 8.68073 15.5299C10.5107 17.2599 13.4907 17.2599 15.3207 15.5299C15.6207 15.2499 16.1007 15.2599 16.3807 15.5599C16.6607 15.8599 16.6507 16.3399 16.3507 16.6199C15.1507 17.7499 13.5807 18.3199 12.0007 18.3199Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const GrammerlyTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.0707 4.95008C23.0407 8.92008 22.9707 15.4 18.8707 19.29C15.0807 22.88 8.93069 22.88 5.13069 19.29C1.02069 15.4 0.950683 8.92008 4.93068 4.95008C8.83068 1.04008 15.1707 1.04008 19.0707 4.95008Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M15.8399 16.0698C13.7199 18.0698 10.2799 18.0698 8.16992 16.0698"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: GrammerlyBold,
  broken: GrammerlyBroken,
  bulk: GrammerlyBulk,
  linear: GrammerlyLinear,
  outline: GrammerlyOutline,
  twotone: GrammerlyTwotone,
};

export const GrammerlyIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
