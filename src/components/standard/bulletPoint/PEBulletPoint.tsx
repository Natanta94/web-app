import { type ReactElement } from 'react';
import HStack from '../../utility/hStack/HStack';
import VStack from '../../utility/vStack/VStack';
import { type Icon } from '../icon/Icon';
import PEIcon from '../icon/PEIcon';

export interface PEBulletPointProps {
    icon: Icon;
    title?: string;
    text: string;
    maxWidth: string;
    width?: string;
}

export default function PEBulletPoint({ icon, title, text, maxWidth, width }: PEBulletPointProps): ReactElement {
    return (
        <>
            <HStack style={{ alignItems: 'center', justifyContent: 'left', gap: 16, maxWidth: maxWidth, width: width ?? 'auto' }}>
                <div className="bg-white shadow-primary" style={{ padding: 24, borderRadius: '50%' }}>
                    <PEIcon icon={icon} edgeLength={32} />
                </div>
                <VStack style={{ alignItems: 'flex-start' }}>
                    {title && <span>{title}</span>}
                    <span style={{ color: 'rgba(31, 31, 31, 0.8)' }}>{text}</span>
                </VStack>
            </HStack>
        </>
    );
}
