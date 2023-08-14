import { ITemplate } from '@/stores/slices/templates/interfaces/templates';
import dynamic from 'next/dynamic';

export const AVAILABLE_TEMPLATES: ITemplate = {
    prisma: {
        id: 'prisma',
        name: 'Prisma Resume',
        thumbnail: '/templates/prisma.jpg',
        component: dynamic(() => import("../templates/Prisma"), {
            ssr: false,
        }),
    },
    salmandotweb: {
        id: 'salmandotweb',
        name: 'Salmandotweb Resume',
        thumbnail: '/templates/salmandotweb.jpg',
        component: dynamic(() => import("../templates/Prisma"), {
            ssr: false,
        }),
    },
};