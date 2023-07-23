import React from 'react';
import { Stack, useColorModeValue } from '@chakra-ui/react';
import { TNavItem } from './types';
import MobileNavItem from './MobileNavItem';

type TMobileNavProps = {
  navItems: TNavItem[];
};

export default function MobileNav({ navItems }: TMobileNavProps) {
  return (
    <Stack
      bg={useColorModeValue('brandPurple.50', 'brandPurple.950')}
      p={4}
      display={{ md: 'none' }}
    >
      {navItems.map((navItem) => (
        <MobileNavItem
          key={navItem.href}
          navItem={navItem}
        />
      ))}
    </Stack>
  );
}

