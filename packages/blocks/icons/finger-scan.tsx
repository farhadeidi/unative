import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const FingerScanBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 9.75C21.59 9.75 21.25 9.41 21.25 9V7C21.25 4.42 19.58 2.75 17 2.75H15C14.59 2.75 14.25 2.41 14.25 2C14.25 1.59 14.59 1.25 15 1.25H17C20.44 1.25 22.75 3.56 22.75 7V9C22.75 9.41 22.41 9.75 22 9.75Z"
        fill="currentColor"
      />
      <Path
        d="M2 9.75C1.59 9.75 1.25 9.41 1.25 9V7C1.25 3.56 3.56 1.25 7 1.25H9C9.41 1.25 9.75 1.59 9.75 2C9.75 2.41 9.41 2.75 9 2.75H7C4.42 2.75 2.75 4.42 2.75 7V9C2.75 9.41 2.41 9.75 2 9.75Z"
        fill="currentColor"
      />
      <Path
        d="M17 22.75H15C14.59 22.75 14.25 22.41 14.25 22C14.25 21.59 14.59 21.25 15 21.25H17C19.58 21.25 21.25 19.58 21.25 17V15C21.25 14.59 21.59 14.25 22 14.25C22.41 14.25 22.75 14.59 22.75 15V17C22.75 20.44 20.44 22.75 17 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M9 22.75H7C3.56 22.75 1.25 20.44 1.25 17V15C1.25 14.59 1.59 14.25 2 14.25C2.41 14.25 2.75 14.59 2.75 15V17C2.75 19.58 4.42 21.25 7 21.25H9C9.41 21.25 9.75 21.59 9.75 22C9.75 22.41 9.41 22.75 9 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M12.0016 9.87109C11.5116 9.87109 11.1016 10.2711 11.1016 10.7711V13.2411C11.1016 13.7411 11.5016 14.1411 12.0016 14.1411C12.5016 14.1411 12.9016 13.7411 12.9016 13.2411V10.7711C12.9016 10.2711 12.4916 9.87109 12.0016 9.87109Z"
        fill="currentColor"
      />
      <Path
        d="M15.5317 7.39969C15.1917 7.05969 14.8017 6.76969 14.3817 6.52969C14.2417 6.45969 14.0917 6.38969 13.9417 6.31969C13.7917 6.25969 13.6417 6.19969 13.4817 6.15969C13.3217 6.10969 13.1617 6.06969 13.0017 6.02969C12.9917 6.02969 12.9717 6.02969 12.9617 6.01969C12.6517 5.95969 12.3317 5.92969 12.0117 5.92969H11.9917C11.6717 5.92969 11.3617 5.95969 11.0517 6.01969C11.0117 6.02969 10.9717 6.02969 10.9417 6.04969C10.8017 6.07969 10.6617 6.10969 10.5217 6.15969C10.3517 6.19969 10.1817 6.26969 10.0117 6.33969C9.88172 6.39969 9.75172 6.46969 9.63172 6.52969C9.48172 6.60969 9.35172 6.69969 9.21172 6.78969C8.95172 6.96969 8.70172 7.16969 8.47172 7.39969C8.36172 7.50969 8.25172 7.62969 8.15172 7.74969C8.05172 7.87969 7.95172 7.99969 7.86172 8.13969C7.77172 8.26969 7.69172 8.40969 7.61172 8.54969C7.23172 9.25969 7.01172 10.0697 7.01172 10.9297V13.0697C7.01172 14.7997 7.89172 16.3197 9.21172 17.2097C9.33172 17.2997 9.46172 17.3697 9.59172 17.4497L10.1417 17.7097C10.4217 17.8197 10.7117 17.9097 11.0017 17.9697C11.3217 18.0297 11.6517 18.0697 11.9917 18.0697C12.0017 18.0697 12.0017 18.0697 12.0117 18.0697C12.3517 18.0697 12.6817 18.0297 13.0017 17.9697C13.3017 17.9097 13.5917 17.8197 13.8717 17.7097C14.0617 17.6297 14.2417 17.5397 14.4117 17.4497C15.9517 16.5997 16.9917 14.9497 16.9917 13.0697V10.9297C16.9917 9.54969 16.4317 8.29969 15.5317 7.39969ZM14.4017 13.2397C14.4017 14.5597 13.3217 15.6397 12.0017 15.6397C10.6817 15.6397 9.60172 14.5597 9.60172 13.2397V10.7697C9.60172 9.44969 10.6817 8.36969 12.0017 8.36969C13.3217 8.36969 14.4017 9.44969 14.4017 10.7697V13.2397Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const FingerScanBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.9996 9.12C12.9096 9.12 13.6496 9.86002 13.6496 10.77V13.24C13.6496 14.15 12.9096 14.89 11.9996 14.89C11.0896 14.89 10.3496 14.15 10.3496 13.24"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M16.98 13.4699C16.78 16.0499 14.62 18.0699 12 18.0699C9.24 18.0699 7 15.8299 7 13.0699V10.9299C7 8.16993 9.24 5.92993 12 5.92993C14.59 5.92993 16.72 7.89992 16.97 10.4199"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M15 2H17C20 2 22 4 22 7V9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 9V7C2 4 4 2 7 2H9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 22H17C20 22 22 20 22 17V15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 15V17C2 20 4 22 7 22H9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const FingerScanBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.9898 10.9299V13.0699C16.9898 14.9499 15.9498 16.6 14.4098 17.45C14.2398 17.54 14.0598 17.6299 13.8698 17.7099C13.5898 17.8199 13.2998 17.9099 12.9998 17.9699C12.6798 18.0299 12.3498 18.0699 12.0098 18.0699C11.9998 18.0699 11.9998 18.0699 11.9898 18.0699C11.6498 18.0699 11.3198 18.0299 10.9998 17.9699C10.7098 17.9099 10.4198 17.8199 10.1398 17.7099L9.58976 17.45C9.45976 17.37 9.32976 17.2999 9.20976 17.2099C7.88976 16.3199 7.00977 14.7999 7.00977 13.0699V10.9299C7.00977 10.0699 7.22976 9.25993 7.60976 8.54993C7.68976 8.40993 7.76976 8.26995 7.85976 8.13995C7.94976 7.99995 8.04976 7.87994 8.14977 7.74994C8.24977 7.62994 8.35976 7.50993 8.46976 7.39993C8.69976 7.16993 8.94976 6.96995 9.20976 6.78995C9.34976 6.69995 9.47976 6.60994 9.62976 6.52994C9.74976 6.46994 9.87977 6.39994 10.0098 6.33994C10.1798 6.26994 10.3498 6.19994 10.5198 6.15994C10.6598 6.10994 10.7998 6.07993 10.9398 6.04993C10.9698 6.02993 11.0098 6.02993 11.0498 6.01993C11.3598 5.95993 11.6698 5.92993 11.9898 5.92993H12.0098C12.3298 5.92993 12.6498 5.95993 12.9598 6.01993C12.9698 6.02993 12.9898 6.02994 12.9998 6.02994C13.1598 6.06994 13.3198 6.10994 13.4798 6.15994C13.6398 6.19994 13.7898 6.25995 13.9398 6.31995C14.0898 6.38995 14.2398 6.45994 14.3798 6.52994C14.7998 6.76994 15.1898 7.05993 15.5298 7.39993C16.4298 8.29993 16.9898 9.54993 16.9898 10.9299Z"
        fill="currentColor"
      />
      <Path
        d="M22 9.75C21.59 9.75 21.25 9.41 21.25 9V7C21.25 4.42 19.58 2.75 17 2.75H15C14.59 2.75 14.25 2.41 14.25 2C14.25 1.59 14.59 1.25 15 1.25H17C20.44 1.25 22.75 3.56 22.75 7V9C22.75 9.41 22.41 9.75 22 9.75Z"
        fill="currentColor"
      />
      <Path
        d="M2 9.75C1.59 9.75 1.25 9.41 1.25 9V7C1.25 3.56 3.56 1.25 7 1.25H9C9.41 1.25 9.75 1.59 9.75 2C9.75 2.41 9.41 2.75 9 2.75H7C4.42 2.75 2.75 4.42 2.75 7V9C2.75 9.41 2.41 9.75 2 9.75Z"
        fill="currentColor"
      />
      <Path
        d="M17 22.75H15C14.59 22.75 14.25 22.41 14.25 22C14.25 21.59 14.59 21.25 15 21.25H17C19.58 21.25 21.25 19.58 21.25 17V15C21.25 14.59 21.59 14.25 22 14.25C22.41 14.25 22.75 14.59 22.75 15V17C22.75 20.44 20.44 22.75 17 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M9 22.75H7C3.56 22.75 1.25 20.44 1.25 17V15C1.25 14.59 1.59 14.25 2 14.25C2.41 14.25 2.75 14.59 2.75 15V17C2.75 19.58 4.42 21.25 7 21.25H9C9.41 21.25 9.75 21.59 9.75 22C9.75 22.41 9.41 22.75 9 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M11.9996 15.6299C10.6796 15.6299 9.59961 14.5499 9.59961 13.2299V10.7599C9.59961 9.43989 10.6796 8.35986 11.9996 8.35986C13.3196 8.35986 14.3996 9.43989 14.3996 10.7599V13.2299C14.3996 14.5599 13.3196 15.6299 11.9996 15.6299ZM11.9996 9.86987C11.5096 9.86987 11.0996 10.2699 11.0996 10.7699V13.2399C11.0996 13.7399 11.4996 14.1399 11.9996 14.1399C12.4996 14.1399 12.8996 13.7399 12.8996 13.2399V10.7699C12.8996 10.2699 12.4896 9.86987 11.9996 9.86987Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const FingerScanLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 14.88C11.09 14.88 10.35 14.14 10.35 13.23V10.76C10.35 9.85001 11.09 9.10999 12 9.10999C12.91 9.10999 13.65 9.85001 13.65 10.76V13.23C13.65 14.14 12.91 14.88 12 14.88Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M16.98 13.4699C16.78 16.0499 14.62 18.0699 12 18.0699C9.24 18.0699 7 15.8299 7 13.0699V10.9299C7 8.16993 9.24 5.92993 12 5.92993C14.59 5.92993 16.72 7.89992 16.97 10.4199"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M15 2H17C20 2 22 4 22 7V9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 9V7C2 4 4 2 7 2H9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 22H17C20 22 22 20 22 17V15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 15V17C2 20 4 22 7 22H9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const FingerScanOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.9996 15.6299C10.6796 15.6299 9.59961 14.5499 9.59961 13.2299V10.7599C9.59961 9.43989 10.6796 8.35986 11.9996 8.35986C13.3196 8.35986 14.3996 9.43989 14.3996 10.7599V13.2299C14.3996 14.5599 13.3196 15.6299 11.9996 15.6299ZM11.9996 9.86987C11.5096 9.86987 11.0996 10.2699 11.0996 10.7699V13.2399C11.0996 13.7399 11.4996 14.1399 11.9996 14.1399C12.4996 14.1399 12.8996 13.7399 12.8996 13.2399V10.7699C12.8996 10.2699 12.4896 9.86987 11.9996 9.86987Z"
        fill="currentColor"
      />
      <Path
        d="M12 18.8199C8.83 18.8199 6.25 16.2399 6.25 13.0699V10.9299C6.25 7.75993 8.83 5.17993 12 5.17993C14.96 5.17993 17.42 7.39997 17.72 10.34C17.76 10.75 17.46 11.1199 17.05 11.1599C16.64 11.2099 16.27 10.8999 16.23 10.4899C16.01 8.31993 14.19 6.67993 12 6.67993C9.66 6.67993 7.75 8.58993 7.75 10.9299V13.0699C7.75 15.4099 9.66 17.3199 12 17.3199C14.2 17.3199 16.06 15.5999 16.24 13.4099C16.27 12.9999 16.63 12.6899 17.05 12.7199C17.46 12.7499 17.77 13.11 17.74 13.53C17.5 16.5 14.98 18.8199 12 18.8199Z"
        fill="currentColor"
      />
      <Path
        d="M22 9.75C21.59 9.75 21.25 9.41 21.25 9V7C21.25 4.42 19.58 2.75 17 2.75H15C14.59 2.75 14.25 2.41 14.25 2C14.25 1.59 14.59 1.25 15 1.25H17C20.44 1.25 22.75 3.56 22.75 7V9C22.75 9.41 22.41 9.75 22 9.75Z"
        fill="currentColor"
      />
      <Path
        d="M2 9.75C1.59 9.75 1.25 9.41 1.25 9V7C1.25 3.56 3.56 1.25 7 1.25H9C9.41 1.25 9.75 1.59 9.75 2C9.75 2.41 9.41 2.75 9 2.75H7C4.42 2.75 2.75 4.42 2.75 7V9C2.75 9.41 2.41 9.75 2 9.75Z"
        fill="currentColor"
      />
      <Path
        d="M17 22.75H15C14.59 22.75 14.25 22.41 14.25 22C14.25 21.59 14.59 21.25 15 21.25H17C19.58 21.25 21.25 19.58 21.25 17V15C21.25 14.59 21.59 14.25 22 14.25C22.41 14.25 22.75 14.59 22.75 15V17C22.75 20.44 20.44 22.75 17 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M9 22.75H7C3.56 22.75 1.25 20.44 1.25 17V15C1.25 14.59 1.59 14.25 2 14.25C2.41 14.25 2.75 14.59 2.75 15V17C2.75 19.58 4.42 21.25 7 21.25H9C9.41 21.25 9.75 21.59 9.75 22C9.75 22.41 9.41 22.75 9 22.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const FingerScanTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.9996 14.8799C11.0896 14.8799 10.3496 14.1399 10.3496 13.2299V10.7599C10.3496 9.84989 11.0896 9.10986 11.9996 9.10986C12.9096 9.10986 13.6496 9.84989 13.6496 10.7599V13.2299C13.6496 14.1399 12.9096 14.8799 11.9996 14.8799Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        opacity="0.4"
        d="M16.98 13.4702C16.78 16.0502 14.62 18.0702 12 18.0702C9.24 18.0702 7 15.8302 7 13.0702V10.9302C7 8.17018 9.24 5.93018 12 5.93018C14.59 5.93018 16.72 7.90017 16.97 10.4202"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M15 2H17C20 2 22 4 22 7V9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 9V7C2 4 4 2 7 2H9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 22H17C20 22 22 20 22 17V15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 15V17C2 20 4 22 7 22H9"
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
  bold: FingerScanBold,
  broken: FingerScanBroken,
  bulk: FingerScanBulk,
  linear: FingerScanLinear,
  outline: FingerScanOutline,
  twotone: FingerScanTwotone,
};

export const FingerScanIcon = ({ variant = "linear", ...props }: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
