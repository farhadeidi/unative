import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const TeacherBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.8311 15.6402C17.5011 15.2002 18.3811 15.6802 18.3811 16.4802V17.7702C18.3811 19.0402 17.3911 20.4002 16.2011 20.8002L13.0111 21.8602C12.4511 22.0502 11.5411 22.0502 10.9911 21.8602L7.80109 20.8002C6.60109 20.4002 5.62109 19.0402 5.62109 17.7702V16.4702C5.62109 15.6802 6.50109 15.2002 7.16109 15.6302L9.22109 16.9702C10.0111 17.5002 11.0111 17.7602 12.0111 17.7602C13.0111 17.7602 14.0111 17.5002 14.8011 16.9702L16.8311 15.6402Z"
        fill="currentColor"
      />
      <Path
        d="M19.9795 6.45859L13.9895 2.52859C12.9095 1.81859 11.1295 1.81859 10.0495 2.52859L4.02953 6.45859C2.09953 7.70859 2.09953 10.5386 4.02953 11.7986L5.62953 12.8386L10.0495 15.7186C11.1295 16.4286 12.9095 16.4286 13.9895 15.7186L18.3795 12.8386L19.7495 11.9386V14.9986C19.7495 15.4086 20.0895 15.7486 20.4995 15.7486C20.9095 15.7486 21.2495 15.4086 21.2495 14.9986V10.0786C21.6495 8.78859 21.2395 7.28859 19.9795 6.45859Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TeacherBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M5.99953 5.17007L4.02953 6.46007C2.09953 7.72007 2.09953 10.5401 4.02953 11.8001L10.0495 15.7301C11.1295 16.4401 12.9095 16.4401 13.9895 15.7301L19.9795 11.8001C21.8995 10.5401 21.8995 7.73007 19.9795 6.47007L13.9895 2.54007C12.9095 1.83007 11.1295 1.83007 10.0495 2.54007"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.62914 13.0801L5.61914 17.7701C5.61914 19.0401 6.59914 20.4001 7.79914 20.8001L10.9891 21.8601C11.5391 22.0401 12.4491 22.0401 13.0091 21.8601L16.1991 20.8001C17.3991 20.4001 18.3791 19.0401 18.3791 17.7701V13.1301"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.4004 15V9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const TeacherBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.3791 12.8401V17.7701C18.3791 19.0401 17.3891 20.4001 16.1991 20.8001L13.0091 21.8601C12.4491 22.0501 11.5391 22.0501 10.9891 21.8601L7.79914 20.8001C6.59914 20.4001 5.61914 19.0401 5.61914 17.7701L5.62914 12.8401L10.0491 15.7201C11.1291 16.4301 12.9091 16.4301 13.9891 15.7201L18.3791 12.8401Z"
        fill="currentColor"
      />
      <Path
        d="M19.9795 6.46006L13.9895 2.53006C12.9095 1.82006 11.1295 1.82006 10.0495 2.53006L4.02953 6.46006C2.09953 7.71006 2.09953 10.5401 4.02953 11.8001L5.62953 12.8401L10.0495 15.7201C11.1295 16.4301 12.9095 16.4301 13.9895 15.7201L18.3795 12.8401L19.7495 11.9401V15.0001C19.7495 15.4101 20.0895 15.7501 20.4995 15.7501C20.9095 15.7501 21.2495 15.4101 21.2495 15.0001V10.0801C21.6495 8.79006 21.2395 7.29006 19.9795 6.46006Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TeacherLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.05 2.53004L4.03002 6.46004C2.10002 7.72004 2.10002 10.54 4.03002 11.8L10.05 15.73C11.13 16.44 12.91 16.44 13.99 15.73L19.98 11.8C21.9 10.54 21.9 7.73004 19.98 6.47004L13.99 2.54004C12.91 1.82004 11.13 1.82004 10.05 2.53004Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.63 13.08L5.62 17.77C5.62 19.04 6.6 20.4 7.8 20.8L10.99 21.86C11.54 22.04 12.45 22.04 13.01 21.86L16.2 20.8C17.4 20.4 18.38 19.04 18.38 17.77V13.13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.4 15V9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const TeacherOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.0103 17C11.1603 17 10.3003 16.78 9.63031 16.35L3.61031 12.42C2.49031 11.69 1.82031 10.46 1.82031 9.12003C1.82031 7.78003 2.49031 6.55003 3.61031 5.82003L9.64031 1.90003C10.9803 1.03003 13.0703 1.03003 14.4003 1.91003L20.3903 5.84003C21.5003 6.57003 22.1703 7.80003 22.1703 9.13003C22.1703 10.46 21.5003 11.69 20.3903 12.42L14.4003 16.35C13.7303 16.79 12.8703 17 12.0103 17ZM12.0103 2.75003C11.4403 2.75003 10.8703 2.88003 10.4603 3.16003L4.44031 7.08003C3.74031 7.54003 3.33031 8.28003 3.33031 9.12003C3.33031 9.96003 3.73031 10.7 4.44031 11.16L10.4603 15.09C11.2903 15.63 12.7503 15.63 13.5803 15.09L19.5703 11.16C20.2703 10.7 20.6703 9.96003 20.6703 9.12003C20.6703 8.28003 20.2703 7.54003 19.5703 7.08003L13.5803 3.15003C13.1603 2.89003 12.5903 2.75003 12.0103 2.75003Z"
        fill="currentColor"
      />
      <Path
        d="M11.9992 22.7501C11.5592 22.7501 11.1092 22.6901 10.7492 22.5701L7.5592 21.5101C6.0492 21.0101 4.8592 19.3601 4.8692 17.7701L4.8792 13.0801C4.8792 12.6701 5.2192 12.3301 5.6292 12.3301C6.0392 12.3301 6.3792 12.6701 6.3792 13.0801L6.3692 17.7701C6.3692 18.7101 7.1492 19.7901 8.0392 20.0901L11.2292 21.1501C11.6292 21.2801 12.3692 21.2801 12.7692 21.1501L15.9592 20.0901C16.8492 19.7901 17.6292 18.7101 17.6292 17.7801V13.1401C17.6292 12.7301 17.9692 12.3901 18.3792 12.3901C18.7892 12.3901 19.1292 12.7301 19.1292 13.1401V17.7801C19.1292 19.3701 17.9492 21.0101 16.4392 21.5201L13.2492 22.5801C12.8892 22.6901 12.4392 22.7501 11.9992 22.7501Z"
        fill="currentColor"
      />
      <Path
        d="M21.4004 15.75C20.9904 15.75 20.6504 15.41 20.6504 15V9C20.6504 8.59 20.9904 8.25 21.4004 8.25C21.8104 8.25 22.1504 8.59 22.1504 9V15C22.1504 15.41 21.8104 15.75 21.4004 15.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TeacherTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.0495 2.52979L4.02953 6.45979C2.09953 7.71979 2.09953 10.5398 4.02953 11.7998L10.0495 15.7298C11.1295 16.4398 12.9095 16.4398 13.9895 15.7298L19.9795 11.7998C21.8995 10.5398 21.8995 7.72979 19.9795 6.46979L13.9895 2.53979C12.9095 1.81979 11.1295 1.81979 10.0495 2.52979Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M5.62914 13.0801L5.61914 17.7701C5.61914 19.0401 6.59914 20.4001 7.79914 20.8001L10.9891 21.8601C11.5391 22.0401 12.4491 22.0401 13.0091 21.8601L16.1991 20.8001C17.3991 20.4001 18.3791 19.0401 18.3791 17.7701V13.1301"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M21.4004 15V9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: TeacherBold,
  broken: TeacherBroken,
  bulk: TeacherBulk,
  linear: TeacherLinear,
  outline: TeacherOutline,
  twotone: TeacherTwotone,
};

export const TeacherIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
