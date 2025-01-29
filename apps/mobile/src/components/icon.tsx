import { cn } from "unative/lib/utils";
import type { IconProps as UnativeIconProps } from "@unative/icons/icon-options";
import ChevronDownIcon from "@unative/icons/iconsax/arrow-down";
import ChevronLeftIcon from "@unative/icons/iconsax/arrow-left-1";
import ChevronRightIcon from "@unative/icons/iconsax/arrow-right-1";
import ChevronUpIcon from "@unative/icons/iconsax/arrow-up-1";
import HomeIcon from "@unative/icons/iconsax/home";
import MoonIcon from "@unative/icons/iconsax/moon";
import SettingsIcon from "@unative/icons/iconsax/setting";

const icons = {
  settings: SettingsIcon,
  home: HomeIcon,
  moon: MoonIcon,
  "chevron-left": ChevronLeftIcon,
  "chevron-right": ChevronRightIcon,
  "chevron-down": ChevronDownIcon,
  "chevron-up": ChevronUpIcon,
};

export type IconName = keyof typeof icons;
export type IconProps = UnativeIconProps & {
  name: IconName;
};

export const Icon = ({
  className,
  size = 24,
  name = "home",
  ...props
}: IconProps) => {
  const IconComponent = icons[name];

  return (
    <IconComponent
      className={cn("text-foreground", className)}
      size={size}
      {...props}
    />
  );
};
