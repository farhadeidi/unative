import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { G, Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const QuoteUpBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8.09 11.6314H3.4C3.48 6.96144 4.4 6.19144 7.27 4.49144C7.6 4.29144 7.71 3.87144 7.51 3.53144C7.32 3.20144 6.89 3.09144 6.56 3.29144C3.18 5.29144 2 6.51144 2 12.3214V17.7114C2 19.4214 3.39 20.8014 5.09 20.8014H8.09C9.85 20.8014 11.18 19.4714 11.18 17.7114V14.7114C11.18 12.9614 9.85 11.6314 8.09 11.6314Z"
        fill="currentColor"
      />
      <Path
        d="M18.9086 11.6314H14.2186C14.2986 6.96144 15.2186 6.19144 18.0886 4.49144C18.4186 4.29144 18.5286 3.87144 18.3286 3.53144C18.1286 3.20144 17.7086 3.09144 17.3686 3.29144C13.9886 5.29144 12.8086 6.51144 12.8086 12.3314V17.7214C12.8086 19.4314 14.1986 20.8114 15.8986 20.8114H18.8986C20.6586 20.8114 21.9886 19.4814 21.9886 17.7214V14.7214C21.9986 12.9614 20.6686 11.6314 18.9086 11.6314Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const QuoteUpBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.3702 18.1401C10.3702 19.5601 9.32022 20.72 7.79022 20.72H4.57025C3.15025 20.72 1.99023 19.5601 1.99023 18.1401L1.99023 12.3401"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 12.3501H7.79999C8.75999 12.3501 9.52002 12.8001 9.96002 13.4901"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 12.35C2 6.29998 3.13003 5.30003 6.53003 3.28003"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.6309 12.3501H19.4308C20.9608 12.3501 22.0109 13.5101 22.0109 14.9301V18.1501C22.0109 19.5701 20.9608 20.7301 19.4308 20.7301H16.2109C14.7909 20.7301 13.6309 19.5701 13.6309 18.1501V12.3501"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.6309 12.35C13.6309 6.29998 14.7608 5.30003 18.1608 3.28003"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const QuoteUpBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8.09027 11.63H3.40027C3.48027 6.95997 4.40026 6.18996 7.27026 4.48996C7.60026 4.28996 7.71025 3.86996 7.51025 3.52996C7.31025 3.19996 6.89023 3.08997 6.55023 3.28997C3.17023 5.28997 1.99023 6.50995 1.99023 12.33V17.72C1.99023 19.43 3.38026 20.81 5.08026 20.81H8.08026C9.84026 20.81 11.1702 19.48 11.1702 17.72V14.72C11.1802 12.96 9.85027 11.63 8.09027 11.63Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M18.9105 11.63H14.2205C14.3005 6.95997 15.2206 6.18996 18.0906 4.48996C18.4206 4.28996 18.5306 3.86996 18.3306 3.52996C18.1306 3.19996 17.7105 3.08997 17.3705 3.28997C13.9905 5.28997 12.8105 6.50995 12.8105 12.33V17.72C12.8105 19.43 14.2006 20.81 15.9006 20.81H18.9006C20.6606 20.81 21.9905 19.48 21.9905 17.72V14.72C22.0005 12.96 20.6705 11.63 18.9105 11.63Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const QuoteUpLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 12.3501H7.79999C9.32999 12.3501 10.38 13.5101 10.38 14.9301V18.1501C10.38 19.5701 9.32999 20.7301 7.79999 20.7301H4.58002C3.16002 20.7301 2 19.5701 2 18.1501V12.3501"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 12.35C2 6.29998 3.13003 5.30003 6.53003 3.28003"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.6299 12.3501H19.4299C20.9599 12.3501 22.0099 13.5101 22.0099 14.9301V18.1501C22.0099 19.5701 20.9599 20.7301 19.4299 20.7301H16.2099C14.7899 20.7301 13.6299 19.5701 13.6299 18.1501V12.3501"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.6299 12.35C13.6299 6.29998 14.7599 5.30003 18.1599 3.28003"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const QuoteUpOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7.79999 21.4698H4.58002C2.75002 21.4698 1.25 19.9798 1.25 18.1398V12.3398C1.25 11.9298 1.59 11.5898 2 11.5898H7.79999C9.69999 11.5898 11.13 13.0198 11.13 14.9198V18.1398C11.12 20.0398 9.68999 21.4698 7.79999 21.4698ZM2.75 13.0998V18.1498C2.75 19.1598 3.57002 19.9798 4.58002 19.9798H7.79999C8.85999 19.9798 9.63 19.2098 9.63 18.1498V14.9298C9.63 13.8698 8.85999 13.0998 7.79999 13.0998H2.75Z"
        fill="currentColor"
      />
      <Path
        d="M2 13.0998C1.59 13.0998 1.25 12.7598 1.25 12.3498C1.25 6.0998 2.52002 4.78984 6.15002 2.63984C6.51002 2.42984 6.96999 2.54985 7.17999 2.89985C7.38999 3.25985 7.26998 3.71982 6.91998 3.92982C3.67998 5.84981 2.75 6.6498 2.75 12.3498C2.75 12.7598 2.41 13.0998 2 13.0998Z"
        fill="currentColor"
      />
      <Path
        d="M19.4211 21.4698H16.2011C14.3711 21.4698 12.8711 19.9798 12.8711 18.1398V12.3398C12.8711 11.9298 13.2111 11.5898 13.6211 11.5898H19.4211C21.3211 11.5898 22.7511 13.0198 22.7511 14.9198V18.1398C22.7511 20.0398 21.3211 21.4698 19.4211 21.4698ZM14.3811 13.0998V18.1498C14.3811 19.1598 15.2011 19.9798 16.2111 19.9798H19.4311C20.4911 19.9798 21.2611 19.2098 21.2611 18.1498V14.9298C21.2611 13.8698 20.4911 13.0998 19.4311 13.0998H14.3811Z"
        fill="currentColor"
      />
      <Path
        d="M13.6289 13.0998C13.2189 13.0998 12.8789 12.7598 12.8789 12.3498C12.8789 6.0998 14.1489 4.78984 17.7789 2.63984C18.1389 2.42984 18.5989 2.54985 18.8089 2.89985C19.0189 3.25985 18.8989 3.71982 18.5489 3.92982C15.3089 5.84981 14.3789 6.6498 14.3789 12.3498C14.3789 12.7598 14.0389 13.0998 13.6289 13.0998Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const QuoteUpTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
          d="M2 12.3501H7.79999C9.32999 12.3501 10.38 13.5101 10.38 14.9301V18.1501C10.38 19.5701 9.32999 20.7301 7.79999 20.7301H4.58002C3.16002 20.7301 2 19.5701 2 18.1501V12.3501"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M2 12.3502C2 6.30022 3.13003 5.30027 6.53003 3.28027"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Path
        d="M13.6309 12.3501H19.4308C20.9608 12.3501 22.0109 13.5101 22.0109 14.9301V18.1501C22.0109 19.5701 20.9608 20.7301 19.4308 20.7301H16.2109C14.7909 20.7301 13.6309 19.5701 13.6309 18.1501V12.3501"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.6309 12.3502C13.6309 6.30022 14.7608 5.30027 18.1608 3.28027"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: QuoteUpBold,
  broken: QuoteUpBroken,
  bulk: QuoteUpBulk,
  linear: QuoteUpLinear,
  outline: QuoteUpOutline,
  twotone: QuoteUpTwotone,
};

export const QuoteUpIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default QuoteUpIcon;
