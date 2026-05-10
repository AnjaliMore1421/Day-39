import React, { useEffect } from "react";
import NetInfo from "@react-native-community/netinfo";

import API from "./src/services/api";
import { getQueue, clearQueue } from "./src/utils/offlineQueue";

import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(async (state) => {
      if (state.isConnected) {
        const queue = await getQueue();

        for (let req of queue) {
          await API.post(req.url, req.data);
        }

        await clearQueue();
      }
    });

    return () => unsubscribe();
  }, []);

  return <AppNavigator />;
}