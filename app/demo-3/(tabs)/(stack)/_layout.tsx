import { Stack } from "expo-router";

export default function TabTwoLayout() {
  return (
    <Stack initialRouteName="stack-one">
      <Stack.Screen name="stack-one" options={{ headerShown: false }} />
      <Stack.Screen name="stack-two" options={{ headerShown: false, presentation: "card" }} />
    </Stack>
  );
}
