import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function First() {
  return (
    <View style={{ flex: 1 }}>
      <Text>first</Text>
      <Link href="/(somegroup)/second" asChild>
        <Pressable>
          <Text>navigate</Text>
        </Pressable>
      </Link>
    </View>
  );
}
