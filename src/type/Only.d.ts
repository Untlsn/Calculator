import { MouseEventHandler } from 'react';

export interface OnlyChildren<T = any> {
  children: T
}

export interface OnlyOnClick {
  onClick: MouseEventHandler
}