/** @format */

import React, { FunctionComponent } from 'react';
import { ComponentProps } from '@app/types/component-props';
import { Tile } from '@core';
import { Inventory } from '@app/plugins/inventory/index';
import styled from 'styled-components';
import { useInventory } from '@app/plugins/inventory/inventory-provider';

export interface TileInventoryProps extends ComponentProps {
    title: string;
    tile: Tile;
}

const StyledTileInventory = styled('div')`
    > h3 {
        margin-bottom: 1.6rem;
    }
`;

export const TileInventory: FunctionComponent<TileInventoryProps> = (props: TileInventoryProps) => {
    const { title, tile, ...otherProps } = props;
    const { isSeekerAtLocation } = useInventory();

    return (
        <StyledTileInventory {...otherProps}>
            {title && <h3>{title}</h3>}
            {tile.bags.length > 0 ? (
                <Inventory bags={tile.bags} ownerId={tile.id} isInteractable={isSeekerAtLocation(tile)} />
            ) : (
                <span>there are no bags on this tile</span>
            )}
        </StyledTileInventory>
    );
};
