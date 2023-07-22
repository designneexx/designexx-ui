import { jsxs, jsx } from 'react/jsx-runtime';
import { Card, useColorModeValue, CardHeader, Flex, Heading, Text, CardBody, Stack, StackDivider, Box } from '@chakra-ui/react';
import { TimeIcon } from '@chakra-ui/icons';

function WorkExperienceCard({ title, profession, jobSummary, location, duration, }) {
    const getItalicFont = (text) => (text ? 'normal' : 'italic');
    return (jsxs(Card, { bg: useColorModeValue('brandBlue.100', 'brandBlue.950'), children: [jsx(CardHeader, { children: jsxs(Flex, { flexDirection: {
                        base: 'column', md: 'row'
                    }, gap: {
                        base: 2, md: 2
                    }, justifyContent: "space-between", children: [jsx(Heading, { size: "md", children: title }), jsxs(Text, { fontSize: "sm", display: "flex", gap: 2, alignItems: "center", children: [jsx(TimeIcon, {}), duration] })] }) }), jsx(CardBody, { children: jsxs(Stack, { divider: jsx(StackDivider, {}), spacing: "4", children: [jsxs(Box, { children: [jsx(Heading, { size: "xs", textTransform: "uppercase", children: "\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C" }), jsx(Text, { fontStyle: getItalicFont(profession), pt: "2", fontSize: "sm", children: profession || 'Информация о должности отсутствует' })] }), jsxs(Box, { children: [jsx(Heading, { size: "xs", textTransform: "uppercase", children: "\u041E\u0431\u044F\u0437\u0430\u043D\u043D\u043E\u0441\u0442\u0438 \u043D\u0430 \u0440\u0430\u0431\u043E\u0447\u0435\u043C \u043C\u0435\u0441\u0442\u0435" }), jsx(Text, { pt: "2", fontSize: "sm", fontStyle: getItalicFont(jobSummary), children: jobSummary || 'Описание рабочего опыта отсутствует' })] }), jsxs(Box, { children: [jsx(Heading, { size: "xs", textTransform: "uppercase", children: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F" }), jsx(Text, { fontStyle: getItalicFont(location), pt: "2", fontSize: "sm", children: location || 'Контактная информация отсутствует' })] })] }) })] }));
}

export { WorkExperienceCard };
//# sourceMappingURL=index.es.js.map
