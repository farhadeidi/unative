import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const Home2Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.0402 6.82165L14.2802 2.79165C12.7102 1.69165 10.3002 1.75165 8.79023 2.92165L3.78023 6.83165C2.78023 7.61165 1.99023 9.21165 1.99023 10.4716V17.3716C1.99023 19.9216 4.06023 22.0016 6.61023 22.0016H17.3902C19.9402 22.0016 22.0102 19.9316 22.0102 17.3816V10.6016C22.0102 9.25165 21.1402 7.59165 20.0402 6.82165ZM12.7502 18.0016C12.7502 18.4116 12.4102 18.7516 12.0002 18.7516C11.5902 18.7516 11.2502 18.4116 11.2502 18.0016V15.0016C11.2502 14.5916 11.5902 14.2516 12.0002 14.2516C12.4102 14.2516 12.7502 14.5916 12.7502 15.0016V18.0016Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Home2Broken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 17.99V14.99"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Home2Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.0402 6.81994L14.2802 2.78994C12.7102 1.68994 10.3002 1.74994 8.79023 2.91994L3.78023 6.82994C2.78023 7.60994 1.99023 9.20994 1.99023 10.4699V17.3699C1.99023 19.9199 4.06023 21.9999 6.61023 21.9999H17.3902C19.9402 21.9999 22.0102 19.9299 22.0102 17.3799V10.5999C22.0102 9.24994 21.1402 7.58994 20.0402 6.81994Z"
        fill="currentColor"
      />
      <Path
        d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V15C11.25 14.59 11.59 14.25 12 14.25C12.41 14.25 12.75 14.59 12.75 15V18C12.75 18.41 12.41 18.75 12 18.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Home2Linear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.02 2.84004L3.63 7.04004C2.73 7.74004 2 9.23004 2 10.36V17.77C2 20.09 3.89 21.99 6.21 21.99H17.79C20.11 21.99 22 20.09 22 17.78V10.5C22 9.29004 21.19 7.74004 20.2 7.05004L14.02 2.72004C12.62 1.74004 10.37 1.79004 9.02 2.84004Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 17.99V14.99"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Home2Outline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.79 22.75H6.21C3.47 22.75 1.25 20.52 1.25 17.78V10.37C1.25 9.00997 2.09 7.29997 3.17 6.45997L8.56 2.25997C10.18 0.999974 12.77 0.939974 14.45 2.11997L20.63 6.44997C21.82 7.27997 22.75 9.05997 22.75 10.51V17.79C22.75 20.52 20.53 22.75 17.79 22.75ZM9.48 3.43997L4.09 7.63997C3.38 8.19997 2.75 9.46997 2.75 10.37V17.78C2.75 19.69 4.3 21.25 6.21 21.25H17.79C19.7 21.25 21.25 19.7 21.25 17.79V10.51C21.25 9.54997 20.56 8.21997 19.77 7.67997L13.59 3.34997C12.45 2.54997 10.57 2.58997 9.48 3.43997Z"
        fill="currentColor"
      />
      <Path
        d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V15C11.25 14.59 11.59 14.25 12 14.25C12.41 14.25 12.75 14.59 12.75 15V18C12.75 18.41 12.41 18.75 12 18.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Home2Twotone = ({ size = 24, className, ...props }: IconProps) => {
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
      <Path
        opacity="0.34"
        d="M12 17.9902V14.9902"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: Home2Bold,
  broken: Home2Broken,
  bulk: Home2Bulk,
  linear: Home2Linear,
  outline: Home2Outline,
  twotone: Home2Twotone,
};

export const Home2Icon = ({ variant = "linear", ...props }: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
