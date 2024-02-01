// import { Text } from "@/components/Themed";

// export default function Startup_iOS() {
//   return <Text>Startup_iOS</Text>;
// }

import { DroidSansBoldText } from "@/components/StyledText";
import { View } from "@/components/Themed";
import { Redirect } from "expo-router";
import { router } from "expo-router";
import { SafeAreaView } from "react-native";

export default function IndexNative() {
  // return <Redirect href={"/demo-one/(tabs)/tab-one"} />;
  // return <Redirect href={"/demo-3/(tabs)/tab-one"} />;

  const onPressDemo1 = () => {
    router.replace("/demo-1/tab-one");
  };
  const onPressDemo2 = () => {
    router.replace("/demo-2/tab-one");
  };
  const onPressDemo3 = () => {
    router.replace("/demo-3/tab-one");
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        rowGap: 24,
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <DroidSansBoldText onPress={onPressDemo1}>Demo 1</DroidSansBoldText>
      <DroidSansBoldText onPress={onPressDemo2}>Demo 2</DroidSansBoldText>
      <DroidSansBoldText onPress={onPressDemo3}>Demo 3</DroidSansBoldText>
    </SafeAreaView>
  );
}
