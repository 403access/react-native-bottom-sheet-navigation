import { Stack } from "expo-router";

export default function TabTwoLayout() {
  return (
    <Stack initialRouteName="modal-stack-one">
      <Stack.Screen name="modal-stack-one" options={{ headerShown: true }} />
      <Stack.Screen name="modal-stack-two" options={{ headerShown: true, presentation: "card" }} />
    </Stack>
  );
}
