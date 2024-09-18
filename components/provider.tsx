'use client';

import { UIProvider } from '@yamada-ui/react';
import { FC, ReactNode } from 'react';

export const Providers: FC<{ children: ReactNode }> = ({ children }) => {
  return <UIProvider>{children}</UIProvider>;
};
