import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const HomeHashtagBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.6992 16.8798H13.3992C14.5492 16.8798 15.4892 15.9398 15.4892 14.7898V14.0898H12.6992V16.8798Z"
        fill="currentColor"
      />
      <Path
        d="M8.50977 14.7898C8.50977 15.9398 9.44977 16.8798 10.5998 16.8798H11.2998V14.0898H8.50977V14.7898Z"
        fill="currentColor"
      />
      <Path
        d="M8.50977 12.0002V12.7002H11.2998V9.91016H10.5998C9.44977 9.91016 8.50977 10.8502 8.50977 12.0002Z"
        fill="currentColor"
      />
      <Path
        d="M20.03 6.82165L14.28 2.79165C12.71 1.69165 10.31 1.75165 8.8 2.92165L3.79 6.83165C2.78 7.61165 2 9.21165 2 10.4716V17.3716C2 19.9216 4.07 22.0016 6.61 22.0016H17.38C19.92 22.0016 21.99 19.9316 21.99 17.3816V10.6016C22 9.25165 21.13 7.59165 20.03 6.82165ZM16.88 14.7916C16.88 16.7116 15.31 18.2816 13.39 18.2816H10.6C8.68 18.2816 7.11 16.7216 7.11 14.7916V12.0016C7.11 10.0816 8.68 8.51165 10.6 8.51165H13.39C15.31 8.51165 16.88 10.0716 16.88 12.0016V14.7916Z"
        fill="currentColor"
      />
      <Path
        d="M13.3992 9.91016H12.6992V12.7002H15.4892V12.0002C15.4892 10.8502 14.5492 9.91016 13.3992 9.91016Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HomeHashtagBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13.5 9H10.5C8.85 9 7.5 10.35 7.5 12V15C7.5 16.65 8.85 18 10.5 18H13.5C15.15 18 16.5 16.65 16.5 15V12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 9V18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.5 13.5H16.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 10.4999C22 9.28992 21.19 7.73992 20.2 7.04992L14.02 2.71992C12.62 1.73992 10.37 1.78992 9.02 2.83992L3.63 7.03992C2.73 7.73992 2 9.22992 2 10.3599V17.7699C2 20.0899 3.89 21.9899 6.21 21.9899H17.79C20.11 21.9899 22 20.0899 22 17.7799V14.6799"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const HomeHashtagBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.03 6.82018L14.28 2.79018C12.71 1.69018 10.31 1.75018 8.8 2.92018L3.79 6.83018C2.78 7.61018 2 9.21018 2 10.4702V17.3702C2 19.9202 4.07 22.0002 6.61 22.0002H17.38C19.92 22.0002 21.99 19.9302 21.99 17.3802V10.6002C22 9.25018 21.13 7.59018 20.03 6.82018Z"
        fill="currentColor"
      />
      <Path
        d="M13.3994 8.51025H10.5994C8.67938 8.51025 7.10938 10.0703 7.10938 12.0003V14.7903C7.10938 16.7103 8.67938 18.2803 10.5994 18.2803H13.3894C15.3094 18.2803 16.8794 16.7203 16.8794 14.7903V12.0003C16.8794 10.0803 15.3194 8.51025 13.3994 8.51025ZM15.4894 12.0003V12.7003H12.6994V9.91025H13.3994C14.5494 9.91025 15.4894 10.8503 15.4894 12.0003ZM10.5994 9.91025H11.2994V12.7003H8.50938V12.0003C8.50938 10.8503 9.44938 9.91025 10.5994 9.91025ZM8.50938 14.7903V14.0903H11.2994V16.8803H10.5994C9.44938 16.8803 8.50938 15.9403 8.50938 14.7903ZM13.3994 16.8803H12.6994V14.0903H15.4894V14.7903C15.4894 15.9403 14.5494 16.8803 13.3994 16.8803Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HomeHashtagLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.5 18H13.5C15.15 18 16.5 16.65 16.5 15V12C16.5 10.35 15.15 9 13.5 9H10.5C8.85 9 7.5 10.35 7.5 12V15C7.5 16.65 8.85 18 10.5 18Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 9V18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.5 13.5H16.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const HomeHashtagOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13.5 18.75H10.5C8.43 18.75 6.75 17.07 6.75 15V12C6.75 9.93 8.43 8.25 10.5 8.25H13.5C15.57 8.25 17.25 9.93 17.25 12V15C17.25 17.07 15.57 18.75 13.5 18.75ZM10.5 9.75C9.26 9.75 8.25 10.76 8.25 12V15C8.25 16.24 9.26 17.25 10.5 17.25H13.5C14.74 17.25 15.75 16.24 15.75 15V12C15.75 10.76 14.74 9.75 13.5 9.75H10.5Z"
        fill="currentColor"
      />
      <Path
        d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V9C11.25 8.59 11.59 8.25 12 8.25C12.41 8.25 12.75 8.59 12.75 9V18C12.75 18.41 12.41 18.75 12 18.75Z"
        fill="currentColor"
      />
      <Path
        d="M16.5 14.25H7.5C7.09 14.25 6.75 13.91 6.75 13.5C6.75 13.09 7.09 12.75 7.5 12.75H16.5C16.91 12.75 17.25 13.09 17.25 13.5C17.25 13.91 16.91 14.25 16.5 14.25Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HomeHashtagTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
          d="M10.5 18H13.5C15.15 18 16.5 16.65 16.5 15V12C16.5 10.35 15.15 9 13.5 9H10.5C8.85 9 7.5 10.35 7.5 12V15C7.5 16.65 8.85 18 10.5 18Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12 9V18"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M7.5 13.5H16.5"
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
  bold: HomeHashtagBold,
  broken: HomeHashtagBroken,
  bulk: HomeHashtagBulk,
  linear: HomeHashtagLinear,
  outline: HomeHashtagOutline,
  twotone: HomeHashtagTwotone,
};

export const HomeHashtagIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
