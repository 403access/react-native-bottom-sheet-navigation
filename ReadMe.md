# Demo 1

- (Stack ->) Tabs -> Modal

# Demo 2

- (Stack ->) Stack -> Tabs -> Modal

# Demo 3

- (Stack ->) Tabs -> Stack -> Modal

# Pitfalls

- `index.[ios|android|native|web].tsx` not possible
- instead import a component that is split, see [Startup](./components/startup/).
- index.tsx needed

# Test react-native-bottom-sheet and Expo Router 3

- Expo SDK 50

## Install Expo Router

[Quick start](https://docs.expo.dev/router/installation/#quick-start)

```
npx create-expo-app@latest --template tabs@50
```

```
npx expo start
```
