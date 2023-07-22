import * as react_jsx_runtime from 'react/jsx-runtime';

type WorkExperienceCardProps = {
    title: string;
    profession: string;
    location: string;
    duration: string;
    jobSummary: string;
};

declare function WorkExperienceCard({ title, profession, jobSummary, location, duration, }: WorkExperienceCardProps): react_jsx_runtime.JSX.Element;

export { WorkExperienceCard, WorkExperienceCardProps };
