import { FC } from 'react';
import * as Primative from '@radix-ui/react-avatar';
import { cx } from '../utils';

export type Props = {
  src: string;
  name: string;
  status?: 'online' | 'offline';
  delayMs?: number;
  className?: string;
};

export const Avatar: FC<Props> = ({ src, name, delayMs, className, status = 'offline' }) => {
  return (
    <Primative.Root className={cx('relative inline-flex', className)}>
      <Primative.Image src={src} className="object-cover w-full h-full rounded-full" />
      {status === 'online' && (
        <div className="absolute bottom-0 right-0 w-2 h-2 -translate-x-1/2 -translate-y-1/2">
          <span className="block h-2.5 w-2.5 rounded-full bg-green-400" />
        </div>
      )}
      <Primative.Fallback
        className="flex items-center justify-center w-full h-full bg-white rounded-full dark:bg-gray-800"
        delayMs={delayMs}
      >
        <span className="text-sm font-medium text-gray-700 uppercase dark:text-gray-400">
          {name.match(/\b(\w)/g).join('')}
        </span>
      </Primative.Fallback>
    </Primative.Root>
  );
};
