import { useState } from "react";
import { ScrollView } from "react-native";
import { Box, BoxProps, HStack } from "unative/ui/box";
import { Separator } from "unative/ui/separator";
import { Text } from "unative/ui/text";

import { CustomIcon, CustomIconProps } from "@/components/custom-icon";
import {
  ExpoVectorIcon,
  ExpoVectorIconProps,
} from "@/components/expo-vector-icon";
import { Icon, IconProps } from "@/components/icon";
import { ThemeSwitch } from "@/components/theme-switch";

const HomeScreen = () => {
  const [iconSize] = useState(24);

  const RenderUniversalIcon = (props: IconProps) => {
    return (
      <IconPreview>
        <Icon size={iconSize} {...props} />
      </IconPreview>
    );
  };

  const RenderExpoIcon = (props: ExpoVectorIconProps) => {
    return (
      <IconPreview>
        <ExpoVectorIcon size={iconSize} {...props} />
      </IconPreview>
    );
  };

  const RenderCustomIcon = (props: CustomIconProps) => {
    return (
      <IconPreview>
        <CustomIcon size={iconSize} {...props} />
      </IconPreview>
    );
  };

  return (
    <ScrollView>
      <Box className="pt-safe gap-4">
        <DemoSection title="Theme Options">
          <ThemeSwitch />
        </DemoSection>

        <DemoSection title="Universal Icons (Linear)">
          <HStack className="gap-2">
            <RenderUniversalIcon name="home" variant="linear" />
            <RenderUniversalIcon name="settings" variant="linear" />
            <RenderUniversalIcon name="moon" variant="linear" />
            <RenderUniversalIcon name="chevron-up" variant="linear" />
            <RenderUniversalIcon name="chevron-down" variant="linear" />
            <RenderUniversalIcon name="chevron-left" variant="linear" />
            <RenderUniversalIcon name="chevron-right" variant="linear" />
          </HStack>
        </DemoSection>

        <DemoSection title="Universal Icons (Bold)">
          <HStack className="gap-2">
            <RenderUniversalIcon name="home" variant="bold" />
            <RenderUniversalIcon name="settings" variant="bold" />
            <RenderUniversalIcon name="moon" variant="bold" />
            <RenderUniversalIcon name="chevron-up" variant="bold" />
            <RenderUniversalIcon name="chevron-down" variant="bold" />
            <RenderUniversalIcon name="chevron-left" variant="bold" />
            <RenderUniversalIcon name="chevron-right" variant="bold" />
          </HStack>
        </DemoSection>

        <DemoSection title="Universal Icons (Broken)">
          <HStack className="gap-2">
            <RenderUniversalIcon name="home" variant="broken" />
            <RenderUniversalIcon name="settings" variant="broken" />
            <RenderUniversalIcon name="moon" variant="broken" />
            <RenderUniversalIcon name="chevron-up" variant="broken" />
            <RenderUniversalIcon name="chevron-down" variant="broken" />
            <RenderUniversalIcon name="chevron-left" variant="broken" />
            <RenderUniversalIcon name="chevron-right" variant="broken" />
          </HStack>
        </DemoSection>

        <DemoSection title="Expo Vector Icons">
          <HStack className="gap-2">
            <RenderExpoIcon name="home" />
            <RenderExpoIcon name="settings" />
            <RenderExpoIcon name="moon" />
          </HStack>
        </DemoSection>

        <DemoSection title="Custom Icons">
          <HStack className="gap-2">
            <RenderCustomIcon name="HomeIcon" />
            <RenderCustomIcon name="SettingsIcon" />
            <RenderCustomIcon name="MoonIcon" />
          </HStack>
        </DemoSection>
      </Box>
    </ScrollView>
  );
};

const DemoSection = ({
  children,
  title,
  ...props
}: BoxProps & {
  title: string;
}) => {
  return (
    <Box {...props}>
      <Box className="flex flex-row items-center gap-3 pl-4">
        <Text className="font-bold">{title}</Text>
        <Separator className="flex-1" />
      </Box>
      <Box className="p-4">{children}</Box>
    </Box>
  );
};

const IconPreview = ({ children, ...props }: BoxProps) => {
  return (
    <Box className="aspect-square rounded border border-border p-2" {...props}>
      {children}
    </Box>
  );
};

export default HomeScreen;
