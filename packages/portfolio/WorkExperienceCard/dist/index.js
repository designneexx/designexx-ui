'use strict';var jsxRuntime=require('react/jsx-runtime'),react=require('@chakra-ui/react'),icons=require('@chakra-ui/icons');function WorkExperienceCard({ title, profession, jobSummary, location, duration, }) {
    const getItalicFont = (text) => (text ? 'normal' : 'italic');
    return (jsxRuntime.jsxs(react.Card, { bg: react.useColorModeValue('brandBlue.100', 'brandBlue.950'), children: [jsxRuntime.jsx(react.CardHeader, { children: jsxRuntime.jsxs(react.Flex, { flexDirection: {
                        base: 'column', md: 'row'
                    }, gap: {
                        base: 2, md: 2
                    }, justifyContent: "space-between", children: [jsxRuntime.jsx(react.Heading, { size: "md", children: title }), jsxRuntime.jsxs(react.Text, { fontSize: "sm", display: "flex", gap: 2, alignItems: "center", children: [jsxRuntime.jsx(icons.TimeIcon, {}), duration] })] }) }), jsxRuntime.jsx(react.CardBody, { children: jsxRuntime.jsxs(react.Stack, { divider: jsxRuntime.jsx(react.StackDivider, {}), spacing: "4", children: [jsxRuntime.jsxs(react.Box, { children: [jsxRuntime.jsx(react.Heading, { size: "xs", textTransform: "uppercase", children: "\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C" }), jsxRuntime.jsx(react.Text, { fontStyle: getItalicFont(profession), pt: "2", fontSize: "sm", children: profession || 'Информация о должности отсутствует' })] }), jsxRuntime.jsxs(react.Box, { children: [jsxRuntime.jsx(react.Heading, { size: "xs", textTransform: "uppercase", children: "\u041E\u0431\u044F\u0437\u0430\u043D\u043D\u043E\u0441\u0442\u0438 \u043D\u0430 \u0440\u0430\u0431\u043E\u0447\u0435\u043C \u043C\u0435\u0441\u0442\u0435" }), jsxRuntime.jsx(react.Text, { pt: "2", fontSize: "sm", fontStyle: getItalicFont(jobSummary), children: jobSummary || 'Описание рабочего опыта отсутствует' })] }), jsxRuntime.jsxs(react.Box, { children: [jsxRuntime.jsx(react.Heading, { size: "xs", textTransform: "uppercase", children: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F" }), jsxRuntime.jsx(react.Text, { fontStyle: getItalicFont(location), pt: "2", fontSize: "sm", children: location || 'Контактная информация отсутствует' })] })] }) })] }));
}exports.WorkExperienceCard=WorkExperienceCard;//# sourceMappingURL=index.js.map