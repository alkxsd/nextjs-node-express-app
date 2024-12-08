'use client';

import LoadingSkeleton from '@/components/LoadingSkeleton';
import { AppStore, makeStore } from '@/store/store';
import { setupListeners } from '@reduxjs/toolkit/query';
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
    setupListeners(storeRef.current.dispatch);
  }
  const persistor = persistStore(storeRef.current);

  return (
    <Provider store={storeRef.current}>
      <PersistGate loading={<LoadingSkeleton />} persistor={persistor}>
          <LoadingSkeleton />
      </PersistGate>
    </Provider>
  );
}
