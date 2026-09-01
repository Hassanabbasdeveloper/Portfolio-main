import { getAbsoluteUrl } from "@/lib/opengraph-utils";

export const siteConfig = {
    name: 'Hassan Abbas',
    url: getAbsoluteUrl("/"),
    title: 'Hassan Abbas | Full-Stack Developer',
    description: 'I build modern web experiences and AI-powered products, turning ideas into clean, user-focused digital solutions.',
    author: 'Hassan Abbas',
    twitterHandle: '@hassanabbas',
    links: {
        github: 'https://github.com/hassanabbasdeveloper',
        twitter: 'https://x.com/hassanabbas',
    },
    ogImage: "/profile.webp?v=1",
};
