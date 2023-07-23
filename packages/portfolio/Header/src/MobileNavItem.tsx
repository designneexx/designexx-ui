import React from 'react';
import {
  Collapse,
  Flex,
  Icon,
  Link,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { TNavItem } from './types';

type TMobileNavItemProps = {
    navItem: TNavItem;
};

export default function MobileNavItem({
  navItem: {
    label, items, href
  },
}: TMobileNavItemProps) {
  const {
    isOpen, onToggle
  } = useDisclosure();
  const borderColor = useColorModeValue('brandBlue.100', 'brandBlue.900');

  const isExistChild = items.length > 0;

  const onExpand = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    onToggle();
  };

  return (
    <Stack spacing={4}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify="space-between"
        align="center"
        _hover={{ textDecoration: 'none', }}
      >
        <Text fontWeight={600}>{label}</Text>
        {isExistChild && (
          <Icon
            as={ChevronDownIcon}
            transition="all .25s ease-in-out"
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
            onClick={onExpand}
          />
        )}
      </Flex>

      {isExistChild && (
        <Collapse
          in={isOpen}
          animateOpacity
          style={{ marginTop: '0!important' }}
        >
          <Stack
            pl={4}
            borderLeft={1}
            borderStyle="solid"
            borderColor={borderColor}
            align="start"
          >
            {items.map((child) => (
              <Link
                key={child.label}
                py={2}
                href={child.href}
              >
                {child.label}
              </Link>
            ))}
          </Stack>
        </Collapse>
      )}
    </Stack>
  );
}
