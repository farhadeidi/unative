import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const Bag2Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.9597 8.95844C19.2897 8.21844 18.2797 7.78844 16.8797 7.63844V6.87844C16.8797 5.50844 16.2997 4.18844 15.2797 3.26844C14.2497 2.32844 12.9097 1.88844 11.5197 2.01844C9.12975 2.24844 7.11975 4.55844 7.11975 7.05844V7.63844C5.71975 7.78844 4.70975 8.21844 4.03975 8.95844C3.06975 10.0384 3.09975 11.4784 3.20975 12.4784L3.90975 18.0484C4.11975 19.9984 4.90975 21.9984 9.20975 21.9984H14.7897C19.0897 21.9984 19.8797 19.9984 20.0897 18.0584L20.7897 12.4684C20.8997 11.4784 20.9197 10.0384 19.9597 8.95844ZM11.6597 3.40844C12.6597 3.31844 13.6097 3.62844 14.3497 4.29844C15.0797 4.95844 15.4897 5.89844 15.4897 6.87844V7.57844H8.50975V7.05844C8.50975 5.27844 9.97975 3.56844 11.6597 3.40844ZM8.41975 13.1484H8.40975C7.85975 13.1484 7.40975 12.6984 7.40975 12.1484C7.40975 11.5984 7.85975 11.1484 8.40975 11.1484C8.96975 11.1484 9.41975 11.5984 9.41975 12.1484C9.41975 12.6984 8.96975 13.1484 8.41975 13.1484ZM15.4197 13.1484H15.4097C14.8597 13.1484 14.4097 12.6984 14.4097 12.1484C14.4097 11.5984 14.8597 11.1484 15.4097 11.1484C15.9697 11.1484 16.4197 11.5984 16.4197 12.1484C16.4197 12.6984 15.9697 13.1484 15.4197 13.1484Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Bag2Broken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7.5 7.67001V6.70001C7.5 4.45001 9.31 2.24001 11.56 2.03001C14.24 1.77001 16.5 3.88001 16.5 6.51001V7.89001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.8108 16.56L4.0408 18.43C4.2608 20.39 4.9808 22 9.0008 22H15.0008C19.0208 22 19.7408 20.39 19.9508 18.43L20.7008 12.43C20.9708 9.99 20.2708 8 16.0008 8H8.0008C3.7308 8 3.0308 9.99 3.3008 12.43"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.4945 12H15.5035"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.49451 12H8.50349"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Bag2Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.1894 8.8599C15.7994 8.8599 15.4894 8.5499 15.4894 8.1599V6.8799C15.4894 5.8999 15.0694 4.9599 14.3494 4.2999C13.6094 3.6299 12.6594 3.3199 11.6594 3.4099C9.97937 3.5699 8.50938 5.2799 8.50938 7.0599V7.9599C8.50938 8.3499 8.19937 8.6599 7.80937 8.6599C7.41937 8.6599 7.10938 8.3499 7.10938 7.9599V7.0599C7.10938 4.5599 9.12938 2.2499 11.5194 2.0199C12.9094 1.8899 14.2494 2.3299 15.2794 3.2699C16.2994 4.1899 16.8794 5.5099 16.8794 6.8799V8.1599C16.8794 8.5499 16.5694 8.8599 16.1894 8.8599Z"
        fill="currentColor"
      />
      <Path
        d="M19.9597 8.96008C19.1197 8.03008 17.7397 7.58008 15.7197 7.58008H8.27975C6.25975 7.58008 4.87975 8.03008 4.03975 8.96008C3.06975 10.0401 3.09975 11.4801 3.20975 12.4801L3.90975 18.0501C4.11975 20.0001 4.90975 22.0001 9.20975 22.0001H14.7897C19.0897 22.0001 19.8797 20.0001 20.0897 18.0601L20.7897 12.4701C20.8997 11.4801 20.9197 10.0401 19.9597 8.96008ZM8.41975 13.1501H8.40975C7.85975 13.1501 7.40975 12.7001 7.40975 12.1501C7.40975 11.6001 7.85975 11.1501 8.40975 11.1501C8.96975 11.1501 9.41975 11.6001 9.41975 12.1501C9.41975 12.7001 8.96975 13.1501 8.41975 13.1501ZM15.4197 13.1501H15.4097C14.8597 13.1501 14.4097 12.7001 14.4097 12.1501C14.4097 11.6001 14.8597 11.1501 15.4097 11.1501C15.9697 11.1501 16.4197 11.6001 16.4197 12.1501C16.4197 12.7001 15.9697 13.1501 15.4197 13.1501Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Bag2Linear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7.5 7.67001V6.70001C7.5 4.45001 9.31 2.24001 11.56 2.03001C14.24 1.77001 16.5 3.88001 16.5 6.51001V7.89001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.99999 22H15C19.02 22 19.74 20.39 19.95 18.43L20.7 12.43C20.97 9.99 20.27 8 16 8H7.99999C3.72999 8 3.02999 9.99 3.29999 12.43L4.04999 18.43C4.25999 20.39 4.97999 22 8.99999 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.4955 12H15.5045"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.49451 12H8.50349"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Bag2Outline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.5 8.63005C16.09 8.63005 15.75 8.29005 15.75 7.88005V6.50005C15.75 5.45006 15.3 4.43005 14.52 3.72005C13.73 3.00005 12.71 2.67005 11.63 2.77005C9.83 2.94005 8.25 4.78005 8.25 6.70005V7.67005C8.25 8.08005 7.91 8.42005 7.5 8.42005C7.09 8.42005 6.75 8.08005 6.75 7.67005V6.69005C6.75 4.00005 8.92 1.52005 11.49 1.27005C12.99 1.13005 14.43 1.60005 15.53 2.61005C16.62 3.60005 17.25 5.02005 17.25 6.50005V7.88005C17.25 8.29005 16.91 8.63005 16.5 8.63005Z"
        fill="currentColor"
      />
      <Path
        d="M14.9998 22.75H8.99982C4.37982 22.75 3.51982 20.6 3.29982 18.51L2.54982 12.52C2.43982 11.44 2.39982 9.89 3.44982 8.73C4.34982 7.73 5.83982 7.25 7.99982 7.25H15.9998C18.1698 7.25 19.6598 7.74 20.5498 8.73C21.5898 9.89 21.5598 11.44 21.4498 12.5L20.6998 18.51C20.4798 20.6 19.6198 22.75 14.9998 22.75ZM7.99982 8.75C6.30982 8.75 5.14982 9.08 4.55982 9.74C4.06982 10.28 3.90982 11.11 4.03982 12.35L4.78982 18.34C4.95982 19.94 5.39982 21.26 8.99982 21.26H14.9998C18.5998 21.26 19.0398 19.95 19.2098 18.36L19.9598 12.35C20.0898 11.13 19.9298 10.3 19.4398 9.75C18.8498 9.08 17.6898 8.75 15.9998 8.75H7.99982Z"
        fill="currentColor"
      />
      <Path
        d="M15.4202 13.1499C14.8602 13.1499 14.4102 12.6999 14.4102 12.1499C14.4102 11.5999 14.8602 11.1499 15.4102 11.1499C15.9602 11.1499 16.4102 11.5999 16.4102 12.1499C16.4102 12.6999 15.9702 13.1499 15.4202 13.1499Z"
        fill="currentColor"
      />
      <Path
        d="M8.42016 13.1499C7.86016 13.1499 7.41016 12.6999 7.41016 12.1499C7.41016 11.5999 7.86016 11.1499 8.41016 11.1499C8.96016 11.1499 9.41016 11.5999 9.41016 12.1499C9.41016 12.6999 8.97016 13.1499 8.42016 13.1499Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Bag2Twotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7.5 7.67001V6.70001C7.5 4.45001 9.31 2.24001 11.56 2.03001C14.24 1.77001 16.5 3.88001 16.5 6.51001V7.89001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.0008 22H15.0008C19.0208 22 19.7408 20.39 19.9508 18.43L20.7008 12.43C20.9708 9.99 20.2708 8 16.0008 8H8.0008C3.7308 8 3.0308 9.99 3.3008 12.43L4.0508 18.43C4.2608 20.39 4.9808 22 9.0008 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M15.4945 12H15.5035"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M8.49451 12H8.50349"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: Bag2Bold,
  broken: Bag2Broken,
  bulk: Bag2Bulk,
  linear: Bag2Linear,
  outline: Bag2Outline,
  twotone: Bag2Twotone,
};

export const Bag2Icon = ({ variant = "linear", ...props }: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
