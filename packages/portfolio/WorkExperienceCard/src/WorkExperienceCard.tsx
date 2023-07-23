import React from 'react';
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { TimeIcon } from '@chakra-ui/icons';
import { WorkExperienceCardProps } from './types';

export function WorkExperienceCard({
  title,
  profession,
  jobSummary,
  location,
  duration,
}: WorkExperienceCardProps) {
  const getItalicFont = (text: string) => (text ? 'normal' : 'italic');

  return (
    <Card bg={useColorModeValue('brandBlue.100', 'brandBlue.950')}>
      <CardHeader>
        <Flex
          flexDirection={{
            base: 'column', md: 'row'
          }}
          gap={{
            base: 2, md: 2
          }}
          justifyContent="space-between"
        >
          <Heading size="md">{title}</Heading>
          <Text
            fontSize="sm"
            display="flex"
            gap={2}
            alignItems="center"
          >
            <TimeIcon />
            {duration}
          </Text>
        </Flex>
      </CardHeader>

      <CardBody>
        <Stack
          divider={<StackDivider />}
          spacing="4"
        >
          <Box>
            <Heading
              size="xs"
              textTransform="uppercase"
            >
              Должность
            </Heading>
            <Text
              fontStyle={getItalicFont(profession)}
              pt="2"
              fontSize="sm"
            >
              {profession || 'Информация о должности отсутствует'}
            </Text>
          </Box>
          <Box>
            <Heading
              size="xs"
              textTransform="uppercase"
            >
              Обязанности на рабочем месте
            </Heading>
            <Text
              pt="2"
              fontSize="sm"
              fontStyle={getItalicFont(jobSummary)}
            >
              {jobSummary || 'Описание рабочего опыта отсутствует'}
            </Text>
          </Box>
          <Box>
            <Heading
              size="xs"
              textTransform="uppercase"
            >
              <span>Контактная информация</span>
            </Heading>
            <Text
              fontStyle={getItalicFont(location)}
              pt="2"
              fontSize="sm"
            >
              {location || 'Контактная информация отсутствует'}
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}

