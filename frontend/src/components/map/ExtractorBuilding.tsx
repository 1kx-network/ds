import { getGooPerSec } from '@app/helpers/tile';
import { useBlock } from '@app/hooks/use-game-state';
import { UnityComponentProps, useUnityComponentManager } from '@app/hooks/use-unity-component-manager';
import { WorldBuildingFragment } from '@downstream/core';
import { memo, useCallback, useMemo, useState } from 'react';

export interface ExtractorBuildingData {
    q: number;
    r: number;
    s: number;
    height: number;
    rotation: number;
    progress: number;
    color?: string;
    selected?: '' | 'none' | 'highlight' | 'outline';
}

export interface ExtractorBuildingProps {
    q: number;
    r: number;
    s: number;
    height: number;
    rotation: number;
    lastExtraction: number;
    gooReservoir: WorldBuildingFragment['gooReservoir'];
    gooIndex: number;
    atoms: number[]; // sorted atomic weights
    color?: string;
    selected?: '' | 'none' | 'highlight' | 'outline';
}

export const ExtractorBuilding = memo(
    ({
        id,
        q,
        r,
        s,
        height,
        color,
        selected,
        atoms,
        lastExtraction,
        gooReservoir,
        gooIndex,
        rotation,
        onPointerEnter,
        onPointerExit,
        onPointerClick,
    }: UnityComponentProps & ExtractorBuildingProps) => {
        const blockNumber = useBlock();
        const [hovered, setHovered] = useState(false);

        onPointerEnter = useCallback(() => setHovered(true), []);
        onPointerExit = useCallback(() => setHovered(false), []);

        selected = selected != 'outline' && hovered ? 'highlight' : selected;

        // Calculate extracted goo and sum with previously extracted goo
        const GOO_RESERVOIR_MAX = 500;
        const BLOCK_TIME_SECS = 2;
        const elapsedSecs = lastExtraction && blockNumber ? (blockNumber - lastExtraction) * BLOCK_TIME_SECS : 0;
        const extractedGoo = atoms
            .map((atomVal) => Math.floor(getGooPerSec(atomVal) * elapsedSecs))
            .map((calculatedGoo, index) => {
                const totalGoo =
                    gooReservoir && gooReservoir.length > index
                        ? calculatedGoo + gooReservoir[index].weight
                        : calculatedGoo;
                return Math.min(GOO_RESERVOIR_MAX, totalGoo);
            });
        const progress = Math.min(gooIndex > -1 ? extractedGoo[gooIndex] / GOO_RESERVOIR_MAX : 0, 0.9999); // dunno why but 1 doesn't work

        useUnityComponentManager<ExtractorBuildingData>({
            type: 'ExtractorBuildingData',
            id,
            data: useMemo(
                () => ({ q, r, s, height, color, selected, rotation, progress }),
                [q, r, s, height, color, selected, rotation, progress]
            ),
            onPointerEnter,
            onPointerExit,
            onPointerClick,
        });

        return null;
    }
);
