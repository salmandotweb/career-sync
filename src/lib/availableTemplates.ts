import { ITemplate } from '@/stores/slices/templates/interfaces/templates';
import dynamic from 'next/dynamic';

export const AVAILABLE_TEMPLATES: ITemplate = {
    prisma: {
        id: 'prisma',
        name: 'Prisma Resume',
        thumbnail: '/templates/modern.png',
        component: dynamic(() => import("../templates/Prisma"), {
            ssr: false,
        }),
    },
};