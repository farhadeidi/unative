import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const ProfileDeleteBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z"
        fill="currentColor"
      />
      <Path
        d="M17.0809 14.1489C14.2909 12.2889 9.74094 12.2889 6.93094 14.1489C5.66094 14.9989 4.96094 16.1489 4.96094 17.3789C4.96094 18.6089 5.66094 19.7489 6.92094 20.5889C8.32094 21.5289 10.1609 21.9989 12.0009 21.9989C13.8409 21.9989 15.6809 21.5289 17.0809 20.5889C18.3409 19.7389 19.0409 18.5989 19.0409 17.3589C19.0309 16.1289 18.3409 14.9889 17.0809 14.1489ZM13.9409 18.2589C14.2309 18.5489 14.2309 19.0289 13.9409 19.3189C13.7909 19.4689 13.6009 19.5389 13.4109 19.5389C13.2209 19.5389 13.0309 19.4689 12.8809 19.3189L12.0009 18.4389L11.1209 19.3189C10.9709 19.4689 10.7809 19.5389 10.5909 19.5389C10.4009 19.5389 10.2109 19.4689 10.0609 19.3189C9.77094 19.0289 9.77094 18.5489 10.0609 18.2589L10.9409 17.3789L10.0609 16.4989C9.77094 16.2089 9.77094 15.7289 10.0609 15.4389C10.3509 15.1489 10.8309 15.1489 11.1209 15.4389L12.0009 16.3189L12.8809 15.4389C13.1709 15.1489 13.6509 15.1489 13.9409 15.4389C14.2309 15.7289 14.2309 16.2089 13.9409 16.4989L13.0609 17.3789L13.9409 18.2589Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ProfileDeleteBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.4098 18.0901L15.5898 20.9101"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.4098 20.9101L15.5898 18.0901"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.0008 21.8099C10.1808 21.8099 8.37078 21.3499 6.99078 20.4299C4.57078 18.8099 4.57078 16.1699 6.99078 14.5599C9.74078 12.7199 14.2508 12.7199 17.0008 14.5599"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.6805 3.96C16.1605 4.67 16.4405 5.52 16.4405 6.44C16.4305 8.84 14.5405 10.79 12.1605 10.87C12.0605 10.86 11.9405 10.86 11.8305 10.87C9.45055 10.79 7.56055 8.84 7.56055 6.44C7.56055 3.99 9.54055 2 12.0005 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ProfileDeleteBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M17.0809 14.1499C14.2909 12.2899 9.74094 12.2899 6.93094 14.1499C5.66094 14.9999 4.96094 16.1499 4.96094 17.3799C4.96094 18.6099 5.66094 19.7499 6.92094 20.5899C8.32094 21.5299 10.1609 21.9999 12.0009 21.9999C13.8409 21.9999 15.6809 21.5299 17.0809 20.5899C18.3409 19.7399 19.0409 18.5999 19.0409 17.3599C19.0309 16.1299 18.3409 14.9899 17.0809 14.1499Z"
        fill="currentColor"
      />
      <Path
        d="M13.0593 17.3799L13.9393 16.4999C14.2293 16.2099 14.2293 15.7299 13.9393 15.4399C13.6493 15.1499 13.1693 15.1499 12.8793 15.4399L11.9993 16.3199L11.1193 15.4399C10.8293 15.1499 10.3493 15.1499 10.0593 15.4399C9.7693 15.7299 9.7693 16.2099 10.0593 16.4999L10.9393 17.3799L10.0593 18.2599C9.7693 18.5499 9.7693 19.0299 10.0593 19.3199C10.2093 19.4699 10.3993 19.5399 10.5893 19.5399C10.7793 19.5399 10.9693 19.4699 11.1193 19.3199L11.9993 18.4399L12.8793 19.3199C13.0293 19.4699 13.2193 19.5399 13.4093 19.5399C13.5993 19.5399 13.7893 19.4699 13.9393 19.3199C14.2293 19.0299 14.2293 18.5499 13.9393 18.2599L13.0593 17.3799Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ProfileDeleteLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.41 18.09L15.59 20.91"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.41 20.91L15.59 18.09"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 21.8101C10.18 21.8101 8.37005 21.3501 6.99005 20.4301C4.57005 18.8101 4.57005 16.1701 6.99005 14.5601C9.74005 12.7201 14.25 12.7201 17 14.5601"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ProfileDeleteOutline = ({
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
        d="M15.5893 21.66C15.3993 21.66 15.2093 21.59 15.0593 21.44C14.7693 21.15 14.7693 20.67 15.0593 20.38L17.8793 17.56C18.1693 17.27 18.6493 17.27 18.9393 17.56C19.2293 17.85 19.2293 18.33 18.9393 18.62L16.1193 21.44C15.9693 21.59 15.7793 21.66 15.5893 21.66Z"
        fill="currentColor"
      />
      <Path
        d="M18.4093 21.66C18.2193 21.66 18.0293 21.59 17.8793 21.44L15.0593 18.62C14.7693 18.33 14.7693 17.85 15.0593 17.56C15.3493 17.27 15.8293 17.27 16.1193 17.56L18.9393 20.38C19.2293 20.67 19.2293 21.15 18.9393 21.44C18.7893 21.59 18.5993 21.66 18.4093 21.66Z"
        fill="currentColor"
      />
      <Path
        d="M12.1605 11.62C12.1305 11.62 12.1105 11.62 12.0805 11.62C12.0305 11.61 11.9605 11.61 11.9005 11.62C9.00055 11.53 6.81055 9.25 6.81055 6.44C6.81055 3.58 9.14055 1.25 12.0005 1.25C14.8605 1.25 17.1905 3.58 17.1905 6.44C17.1805 9.25 14.9805 11.53 12.1905 11.62C12.1805 11.62 12.1705 11.62 12.1605 11.62ZM12.0005 2.75C9.97055 2.75 8.31055 4.41 8.31055 6.44C8.31055 8.44 9.87055 10.05 11.8605 10.12C11.9205 10.11 12.0505 10.11 12.1805 10.12C14.1405 10.03 15.6805 8.42 15.6905 6.44C15.6905 4.41 14.0305 2.75 12.0005 2.75Z"
        fill="currentColor"
      />
      <Path
        d="M11.9999 22.5599C9.95992 22.5599 8.02992 22.0299 6.56992 21.0499C5.17992 20.1199 4.41992 18.8499 4.41992 17.4799C4.41992 16.1099 5.18992 14.8499 6.56992 13.9299C9.55992 11.9299 14.4199 11.9299 17.4099 13.9299C17.7499 14.1599 17.8499 14.6299 17.6199 14.9699C17.3899 15.3199 16.9199 15.4099 16.5799 15.1799C14.0899 13.5199 9.88992 13.5199 7.39992 15.1799C6.43992 15.8199 5.91992 16.6299 5.91992 17.4799C5.91992 18.3299 6.44992 19.1599 7.39992 19.7999C8.60992 20.6099 10.2399 21.0499 11.9899 21.0499C12.3999 21.0499 12.7399 21.3899 12.7399 21.7999C12.7399 22.2099 12.4099 22.5599 11.9999 22.5599Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ProfileDeleteTwotone = ({
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
      <G opacity="0.4">
        <Path
          d="M18.4098 18.0898L15.5898 20.9098"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M18.4098 20.9098L15.5898 18.0898"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Path
        opacity="0.4"
        d="M12.1605 10.87C12.0605 10.86 11.9405 10.86 11.8305 10.87C9.45055 10.79 7.56055 8.84 7.56055 6.44C7.56055 3.99 9.54055 2 12.0005 2C14.4505 2 16.4405 3.99 16.4405 6.44C16.4305 8.84 14.5405 10.79 12.1605 10.87Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.0008 21.8102C10.1808 21.8102 8.37078 21.3502 6.99078 20.4302C4.57078 18.8102 4.57078 16.1702 6.99078 14.5602C9.74078 12.7202 14.2508 12.7202 17.0008 14.5602"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: ProfileDeleteBold,
  broken: ProfileDeleteBroken,
  bulk: ProfileDeleteBulk,
  linear: ProfileDeleteLinear,
  outline: ProfileDeleteOutline,
  twotone: ProfileDeleteTwotone,
};

export const ProfileDeleteIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
