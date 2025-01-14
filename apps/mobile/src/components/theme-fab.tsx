import React from "react";
import { PaletteIcon } from "lucide-react-native";
import { Pressable, StyleSheet, View, ViewStyle } from "react-native";
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import {
  Box,
  IconProps,
  MoonIcon,
  SunIcon,
  SystemIcon,
} from "unative/components";
import { cn } from "unative/utils";
import { ColorSchemes, useTheme } from "@unative/theme";

const schemes: {
  id: ColorSchemes;
  label: string;
  IconComponent: React.FC<IconProps>;
}[] = [
  {
    id: "system",
    label: "System",
    IconComponent: SystemIcon,
  },
  {
    id: "light",
    label: "Light",
    IconComponent: SunIcon,
  },
  {
    id: "dark",
    label: "Dark",
    IconComponent: MoonIcon,
  },
];

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const SPRING_CONFIG = {
  duration: 1200,
  overshootClamping: true,
  dampingRatio: 0.8,
};

const OFFSET = 60;

const FloatingActionButton = ({
  isExpanded,
  index,
  isActive,
  onPress,
  children,
  withActiveState = true,
  className,
  style,
}: {
  isExpanded: SharedValue<boolean>;
  index: number;
  isActive?: boolean;
  onPress?: () => void;
  children?: React.ReactNode;
  withActiveState?: boolean;
  className?: string;
  style?: ViewStyle;
}) => {
  const animatedStyles = useAnimatedStyle(() => {
    // highlight-next-line
    const moveValue = isExpanded.value ? OFFSET * index : 0;
    const translateValue = withSpring(-moveValue, SPRING_CONFIG);
    //highlight-next-line
    const delay = index * 100;

    const scaleValue = isExpanded.value ? 1 : 0;

    return {
      transform: [
        { translateY: translateValue },
        {
          scale: withDelay(delay, withTiming(scaleValue)),
        },
      ],
    };
  });

  return (
    <AnimatedPressable
      style={[animatedStyles, styles.shadow, style]}
      className={cn(
        "absolute z-20 h-12 w-12 items-center justify-center rounded-full",
        withActiveState && isActive ? "bg-primary" : "bg-secondary",
        className,
      )}
      onPress={onPress}
    >
      {children}
      {/* <Animated.Text className="text-secondary-foreground">
        {buttonLetter}
      </Animated.Text> */}
    </AnimatedPressable>
  );
};

export default function ThemeFab() {
  const { theme, setTheme, setScheme, themes, isDarkMode } = useTheme();
  const isExpanded = useSharedValue(false);

  const handlePress = () => {
    isExpanded.value = !isExpanded.value;
  };

  const plusIconStyle = useAnimatedStyle(() => {
    // highlight-next-line
    const moveValue = interpolate(Number(isExpanded.value), [0, 1], [0, 2]);
    const translateValue = withTiming(moveValue);
    const rotateValue = isExpanded.value ? "45deg" : "0deg";

    return {
      transform: [
        { translateX: translateValue },
        { rotate: withTiming(rotateValue) },
      ],
    };
  });

  return (
    <View className="bottom-safe-offset-4 right-safe-offset-4 absolute z-40">
      <View className="flex flex-col items-center">
        <AnimatedPressable
          onPress={handlePress}
          style={[styles.shadow]}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary"
        >
          <Animated.Text
            style={[plusIconStyle]}
            className="font-bold text-3xl text-secondary-foreground"
          >
            <PaletteIcon color="white" />
          </Animated.Text>
        </AnimatedPressable>

        {schemes.map((item, index) => {
          const isActive = theme.savedScheme === item.id;
          return (
            <FloatingActionButton
              isExpanded={isExpanded}
              index={index + 1}
              key={item.id}
              isActive={isActive}
              onPress={() => {
                setScheme(item.id);
              }}
            >
              <item.IconComponent
                size={16}
                className={
                  isActive
                    ? "text-primary-foreground"
                    : "text-secondary-foreground"
                }
              />
            </FloatingActionButton>
          );
        })}
        {Object.keys(themes).map((themeName, index) => {
          const isActive = theme.name === themeName;
          const activeTheme = themes[themeName][isDarkMode ? "dark" : "light"];
          return (
            <FloatingActionButton
              isExpanded={isExpanded}
              index={index + 4}
              key={themeName}
              isActive={isActive}
              withActiveState={false}
              onPress={() => {
                setTheme(themeName);
              }}
              style={{
                borderColor: isActive
                  ? activeTheme["--primary"]
                  : theme.values["--border"],
                backgroundColor: isActive
                  ? activeTheme["--primary"]
                  : theme.values["--border"],
              }}
            >
              <Box
                className="h-7 w-7 rounded-full border border-border bg-background"
                style={{
                  borderColor: isActive
                    ? activeTheme["--primary"]
                    : theme.values["--border"],
                  padding: isActive ? 4 : 8,
                }}
              >
                <Box
                  className="h-full w-full rounded-full"
                  style={{
                    backgroundColor: activeTheme["--primary"],
                  }}
                />
              </Box>
            </FloatingActionButton>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#171717",
    shadowOffset: { width: -0.5, height: 3.5 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
