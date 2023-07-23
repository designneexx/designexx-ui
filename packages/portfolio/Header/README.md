# WorkExperienceCard
##### Компонент для отображения шапки портфолио сайта (навигация по разделам и контакты)

### Установка
`npm i @designexx-ui/work-experience-card`
### Использование
```
import React from 'react';
import { Header, HeaderProps } from '@designexx-ui/header';

export default function MyHeader() {
	return (
		<Header
			title="Google"
			profession="Front-end developer"
			location="Kazan",
			duration="12.05.2015 - 12.05.2022"
			jobSummary="Build, refactor, editing storybook components"
		/> 
	);
}
```
### Peer-dependencies
Предполагается, что эти зависимости уже есть в вашем проекте
1. react
2. react-dom
3. @chakra-ui/react
4. @chakra-ui/icons
