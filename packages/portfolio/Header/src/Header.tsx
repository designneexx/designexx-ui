import React from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  useColorMode,
  Hide,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  MoonIcon,
  SunIcon,
  EmailIcon,
  PhoneIcon,
} from '@chakra-ui/icons';
import { HeaderProps } from './types';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

export function Header({
  navItems, email, phone, name
}: HeaderProps) {
  const {
    isOpen, onToggle
  } = useDisclosure();
  const {
    colorMode, toggleColorMode
  } = useColorMode();
  const variant = useBreakpointValue(
    {
      base: 'solid',
      md: 'ghost',
    },
    { fallback: 'md', }
  );
  const emailIcon = <EmailIcon className="w-4 h-4" />;
  const phoneIcon = <PhoneIcon className="w-4 h-4" />;
  const emailIconProp = useBreakpointValue({ md: emailIcon, });
  const phoneIconProp = useBreakpointValue({ md: phoneIcon, });
  const emailIconChild = useBreakpointValue({
    base: emailIcon,
    md: undefined,
  });
  const phoneIconChild = useBreakpointValue({
    base: phoneIcon,
    md: undefined,
  });

  return (
    <Box
      as="header"
      position="sticky"
      zIndex={20}
      top={0}
    >
      <Flex
        bg={useColorModeValue('brandPurple.50', 'brandPurple.950')}
        py={{
          base: 4, sm: 4
        }}
        px={{
          base: 4, sm: 4, md: 16, lg: 50, '2xl': 100
        }}
        borderBottom={1}
        borderStyle="solid"
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align="center"
      >
        <Flex
          flex={{
            base: 1, md: 'auto'
          }}
          ml={{ base: -2 }}
          display={{
            base: 'flex', md: 'none'
          }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? (
                <CloseIcon
                  w={3}
                  h={3}
                />
              ) : (
                <HamburgerIcon
                  w={5}
                  h={5}
                />
              )
            }
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        </Flex>
        <Text
          fontWeight={600}
          flexGrow={1}
        >
          {name}
        </Text>
        <Flex
          flex={{ base: 1 }}
          justify={{
            base: 'center', md: 'start'
          }}
        >
          <Flex
            display={{
              base: 'none', md: 'flex'
            }}
            ml={10}
          >
            <DesktopNav navItems={navItems} />
          </Flex>
        </Flex>

        <Stack
          flex={{
            base: 1, md: 0
          }}
          justify="flex-end"
          direction="row"
          spacing={{
            base: 2, md: 6
          }}
        >
          <Button
            as="a"
            href={`tel:${phone}`}
            size="sm"
            variant={variant}
            leftIcon={phoneIconProp}
          >
            {phoneIconChild}
            <Hide below="md">
              <Text>{phone}</Text>
            </Hide>
          </Button>
          <Button
            as="a"
            href={`mailto:${email}`}
            size="sm"
            variant={variant}
            leftIcon={emailIconProp}
          >
            {emailIconChild}
            <Hide below="md">
              <Text>{email}</Text>
            </Hide>
          </Button>
          <Button
            size="sm"
            fontWeight={600}
            onClick={toggleColorMode}
          >
            {colorMode === 'light' ? (
              <MoonIcon className="w-4 h-4" />
            ) : (
              <SunIcon className="w-4 h-4" />
            )}
          </Button>
        </Stack>
      </Flex>

      <Collapse
        in={isOpen}
        animateOpacity
      >
        <MobileNav navItems={navItems} />
      </Collapse>
    </Box>
  );
}
