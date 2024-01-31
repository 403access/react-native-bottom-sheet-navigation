import { DroidSansBoldText, DroidSansText } from "@/components/StyledText";
import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function First() {
  return (
    <View style={{ flex: 1 }}>
      <DroidSansBoldText>first</DroidSansBoldText>
      <Link href="/(somegroup)/second" asChild>
        <Pressable>
          <DroidSansText>navigate</DroidSansText>
        </Pressable>
      </Link>
    </View>
  );
}
