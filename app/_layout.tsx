import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Slot, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import { useColorScheme } from "@/components/useColorScheme";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    DroidSans: require("../assets/fonts/DroidSans/DroidSans.ttf"),
    DroidSansBold: require("../assets/fonts/DroidSans/DroidSans-Bold.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          {/* <Slot /> */}
          {/* stack-tabs-stack */}
          {/* <Stack initialRouteName="modal">
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="modal" options={{ presentation: "modal" }} />
            <Stack.Screen
              name="(somegroup)"
              options={{
                headerShown: true,
                // presentation: "modal",
              }}
            />
          </Stack> */}

          {/* demo-1 */}
          {/* <Stack
            initialRouteName="demo-1/(tabs)"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="demo-1/(tabs)"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="(modals)/highest-level-modal"
              options={{ presentation: "modal" }}
            />
          </Stack> */}

          {/* demo-2 */}
          {/* <Stack initialRouteName="demo-2/(tabs)">
            <Stack.Screen name="demo-2" options={{ headerShown: false }} />
            <Stack.Screen
              name="(modals)/highest-level-modal"
              options={{ presentation: "modal" }}
            />
          </Stack> */}

          {/* demo-3 */}
          <Stack
            initialRouteName="demo-3/(tabs)"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="demo-3/(tabs)"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="(modals)/highest-level-modal"
              options={{ presentation: "modal" }}
            />
            <Stack.Screen
              name="(modal-with-navigation)"
              // name="(modal-with-navigation)/modal-stack-one"
              options={{ presentation: "modal" }}
            />
          </Stack>
        </ThemeProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
