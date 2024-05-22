const IS_DEV = process.env.APP_VARIANT === "development";

export default {
  expo: {
    name: IS_DEV ? "Dev Museum" : "Art Museum",
    slug: "appjs24-workflows-workshop-code",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    splash: {
      image: "./assets/images/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.expo.appjs24-workflows-workshop-code" + (IS_DEV ? "-dev" : ""),
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: "com.expo.appjs24workflowsworkshopcode" + (IS_DEV ? "dev" : ""),
    },
    web: {
      bundler: "metro",
      favicon: "./assets/images/favicon.png",
    },
    plugins: [
      ["expo-router"],
      "react-native-image-marker",
      [
        "expo-quick-actions",
        {
          androidIcons: {
            fav_icon: {
              foregroundImage: "./assets/images/adaptive-icon-fav.png",
              backgroundColor: "#29cfc1",
            },
          },
          iosIcons: {
            fav_icon: "./assets/images/fav.png",
          },
        },
      ]
    ],
    experiments: {
      typedRoutes: true,
    },
    runtimeVersion: {
      policy: "appVersion",
    },
    extra: {
      router: {
        origin: false,
      },
      eas: {
        projectId: "7d3c3080-873a-4513-bde8-a56400a27adc",
      },
    },
    owner: "m.imie",
    updates: {
      url: "https://u.expo.dev/7d3c3080-873a-4513-bde8-a56400a27adc",
    },
  },
};
