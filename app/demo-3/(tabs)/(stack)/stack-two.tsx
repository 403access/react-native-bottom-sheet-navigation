import { DroidSansBoldText } from "@/components/StyledText";
import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Pressable } from "react-native";

export default function StackTwo() {
  return (
    <>
      <DroidSansBoldText>Stack Two</DroidSansBoldText>
      <Link href="/(modals)/highest-level-modal" asChild>
        <Pressable>
          {({ pressed }) => (
            <FontAwesome
              name="info-circle"
              size={25}
              // color={Colors[colorScheme ?? "light"].text}
              style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
            />
          )}
        </Pressable>
      </Link>
    </>
  );
}
