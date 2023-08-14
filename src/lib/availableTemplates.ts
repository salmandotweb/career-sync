import { ITemplate } from '@/stores/slices/templates/interfaces/templates';
import dynamic from 'next/dynamic';

export const AVAILABLE_TEMPLATES: ITemplate = {
    prisma: {
        id: 'prisma',
        name: 'Prisma',
        thumbnail: '/templates/prisma.jpg',
        component: dynamic(() => import("../templates/Prisma"), {
            ssr: false,
        }),
    },
    spectrum: {
        id: 'spectrum',
        name: 'Spectrum',
        thumbnail: '/templates/spectrum.jpg',
        component: dynamic(() => import("../templates/Spectrum"), {
            ssr: false,
        }),
    },
};