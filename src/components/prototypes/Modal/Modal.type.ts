import { ReactNode } from 'react';

export interface PropsType {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  cross?: boolean;
}
