import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const MicroscopeBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.8406 10.8986L20.5006 7.10862C21.0706 6.72862 21.2206 5.94862 20.8406 5.38862L19.0206 2.67862C18.6406 2.10862 17.8606 1.95862 17.3006 2.33862L11.6406 6.12862L14.8406 10.8986Z"
        fill="currentColor"
      />
      <Path
        d="M14.5197 10.4216L12.7597 11.6016L10.0897 13.3916L9.73969 13.6216L9.57969 13.3816L7.33969 10.0416L7.17969 9.80156L11.9597 6.60156L14.5197 10.4216Z"
        fill="currentColor"
      />
      <Path
        d="M5.63912 16.0191L9.58912 13.3791L7.34912 10.0391L3.39912 12.6791C2.93912 12.9891 2.81912 13.6091 3.12912 14.0691L4.25912 15.7491C4.55912 16.2091 5.17912 16.3291 5.63912 16.0191Z"
        fill="currentColor"
      />
      <Path
        d="M16.5594 21.8116C16.4594 21.8516 16.3494 21.8816 16.2494 21.8816C15.9594 21.8816 15.6894 21.7116 15.5594 21.4316L11.8294 13.1916L8.04941 21.4416C7.91941 21.7116 7.64941 21.8816 7.35941 21.8816C7.25941 21.8816 7.14941 21.8516 7.04941 21.8116C6.67941 21.6316 6.50941 21.1916 6.67941 20.8116L10.0894 13.3916L12.7594 11.6016L16.9294 20.8216C17.0994 21.1916 16.9294 21.6416 16.5594 21.8116Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MicroscopeBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.0401 4.51996L11.8301 5.99997L15.0301 10.78L20.6901 6.98996C21.2601 6.60996 21.4101 5.82996 21.0301 5.26996L19.2101 2.55996C18.8301 1.98996 18.0501 1.83997 17.4901 2.21997"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.1742 6.47932L7.39648 9.6792L9.95639 13.5013L14.7341 10.3015L12.1742 6.47932Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.83053 15.8999L9.78053 13.2599L7.54053 9.91992L3.59053 12.5599C3.13053 12.8699 3.01053 13.4899 3.32053 13.9499L4.45053 15.6299C4.75053 16.0799 5.37053 16.1999 5.83053 15.8999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.0506 12.2L7.56055 21.9999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 12.2L16.44 21.9999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MicroscopeBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.8387 10.9001L20.4987 7.11007C21.0687 6.73007 21.2187 5.9501 20.8387 5.3901L19.0187 2.68008C18.6387 2.11008 17.8587 1.96009 17.2987 2.34009L11.6387 6.13009L14.8387 10.9001Z"
        fill="currentColor"
      />
      <Path
        d="M14.5197 10.4201L12.7597 11.6001L10.0897 13.3901L9.73969 13.6201L9.57969 13.3801L7.33968 10.0401L7.17969 9.80008L11.9597 6.6001L14.5197 10.4201Z"
        fill="currentColor"
      />
      <Path
        d="M5.63912 16.02L9.58912 13.38L7.34912 10.04L3.39912 12.68C2.93912 12.99 2.81912 13.61 3.12912 14.07L4.25912 15.75C4.55912 16.21 5.17912 16.33 5.63912 16.02Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M16.5594 21.8101C16.4594 21.8501 16.3494 21.8801 16.2494 21.8801C15.9594 21.8801 15.6894 21.7101 15.5594 21.4301L11.8294 13.1901L8.04941 21.4401C7.91941 21.7101 7.64941 21.8801 7.35941 21.8801C7.25941 21.8801 7.14941 21.8501 7.04941 21.8101C6.67941 21.6301 6.50941 21.1901 6.67941 20.8101L10.0894 13.3901L12.7594 11.6001L16.9294 20.8201C17.0994 21.1901 16.9294 21.6401 16.5594 21.8101Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MicroscopeLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.0301 10.77L20.6901 6.97998C21.2601 6.59998 21.4101 5.81998 21.0301 5.25998L19.2101 2.54996C18.8301 1.97996 18.0501 1.82996 17.4901 2.20996L11.8301 5.99997L15.0301 10.77Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.1739 6.4792L7.39624 9.67908L9.95614 13.5012L14.7338 10.3013L12.1739 6.4792Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.83004 15.8999L9.78004 13.2599L7.54004 9.91992L3.59004 12.5599C3.13004 12.8699 3.01004 13.4899 3.32004 13.9499L4.45004 15.6299C4.75004 16.0799 5.37004 16.1999 5.83004 15.8999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.0501 12.2L7.56006 21.9999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 12.2L16.44 21.9999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MicroscopeOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.0301 11.5199C14.7901 11.5199 14.5501 11.3999 14.4101 11.1899L11.2101 6.40994C11.1001 6.23994 11.0601 6.03994 11.1001 5.84994C11.1401 5.65994 11.2501 5.47993 11.4201 5.36993L17.0801 1.57992C17.5201 1.27992 18.0501 1.17993 18.5701 1.27993C19.0901 1.37993 19.5401 1.67993 19.8401 2.11993L21.6601 4.82992C22.2701 5.73992 22.0301 6.97993 21.1101 7.58993L15.4601 11.3799C15.3201 11.4799 15.1801 11.5199 15.0301 11.5199ZM12.8801 6.19995L15.2401 9.72995L20.2701 6.35992C20.5001 6.20992 20.5601 5.89993 20.4001 5.67993L18.5801 2.96994C18.5101 2.85994 18.4001 2.78994 18.2701 2.75994C18.1401 2.72994 18.0101 2.75992 17.9001 2.82992L12.8801 6.19995Z"
        fill="currentColor"
      />
      <Path
        d="M9.93973 14.24C9.69973 14.24 9.45973 14.12 9.31973 13.91L6.75973 10.09C6.52973 9.75002 6.61973 9.28001 6.96973 9.05001L11.7497 5.85003C11.9197 5.74003 12.1197 5.70001 12.3097 5.74001C12.5097 5.78001 12.6797 5.89002 12.7897 6.06002L15.3497 9.88003C15.5797 10.22 15.4897 10.69 15.1397 10.92L10.3597 14.12C10.2297 14.2 10.0797 14.24 9.93973 14.24ZM8.41973 9.88003L10.1397 12.45L13.6697 10.09L11.9497 7.51003L8.41973 9.88003Z"
        fill="currentColor"
      />
      <Path
        d="M5.28039 16.82C4.72039 16.82 4.16039 16.55 3.82039 16.04L2.69039 14.36C2.43039 13.97 2.34039 13.51 2.43039 13.05C2.52039 12.59 2.78039 12.2 3.17039 11.94L7.12039 9.30001C7.46039 9.07001 7.9304 9.16003 8.1604 9.51003L10.4004 12.85C10.6304 13.19 10.5404 13.66 10.1904 13.89L6.24039 16.53C5.95039 16.72 5.61039 16.82 5.28039 16.82ZM7.33039 10.95L4.01039 13.17C3.90039 13.25 3.86039 13.4 3.94039 13.52L5.07039 15.2C5.15039 15.31 5.30039 15.35 5.42039 15.27L8.74039 13.05L7.33039 10.95Z"
        fill="currentColor"
      />
      <Path
        d="M7.56019 22.7498C7.46019 22.7498 7.3502 22.7298 7.2502 22.6798C6.8702 22.5098 6.71019 22.0599 6.88019 21.6899L11.3702 11.8899C11.5402 11.5099 11.9902 11.3498 12.3602 11.5198C12.7402 11.6898 12.9002 12.1399 12.7302 12.5099L8.24019 22.3098C8.11019 22.5898 7.84019 22.7498 7.56019 22.7498Z"
        fill="currentColor"
      />
      <Path
        d="M16.44 22.75C16.15 22.75 15.88 22.59 15.76 22.31L11.32 12.51C11.15 12.13 11.32 11.69 11.69 11.52C12.06 11.35 12.51 11.52 12.68 11.89L17.12 21.69C17.29 22.07 17.12 22.51 16.75 22.68C16.65 22.73 16.55 22.75 16.44 22.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MicroscopeTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.0291 10.7702L20.6891 6.98022C21.2591 6.60022 21.4091 5.82022 21.0291 5.26022L19.2091 2.5502C18.8291 1.9802 18.0491 1.8302 17.4891 2.2102L11.8291 6.00021L15.0291 10.7702Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.1732 6.47932L7.39551 9.6792L9.95541 13.5013L14.7331 10.3015L12.1732 6.47932Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.82955 15.9004L9.77955 13.2604L7.53955 9.92041L3.58955 12.5604C3.12955 12.8704 3.00955 13.4904 3.31955 13.9504L4.44955 15.6304C4.74955 16.0804 5.36955 16.2004 5.82955 15.9004Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M12.0496 12.2002L7.55957 22.0002"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M12 12.2002L16.44 22.0002"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: MicroscopeBold,
  broken: MicroscopeBroken,
  bulk: MicroscopeBulk,
  linear: MicroscopeLinear,
  outline: MicroscopeOutline,
  twotone: MicroscopeTwotone,
};

export const MicroscopeIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
