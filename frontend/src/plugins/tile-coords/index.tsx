/** @format */

import { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import { ComponentProps } from '@app/types/component-props';
import { styles } from './tile-coords.styles';
import { ethers } from 'ethers';
import { SelectedTileFragment } from '@app/../../core/dist/core';

export interface TileCoordsProps extends ComponentProps {
    selectedTiles: SelectedTileFragment[];
}

const StyledTileCoords = styled('div')`
    ${styles}
`;

export const TileCoords: FunctionComponent<TileCoordsProps> = (props: TileCoordsProps) => {
    const { selectedTiles, ...otherProps } = props;
    const lastTile = selectedTiles[selectedTiles.length - 1];
    const [_, q, r, s] = lastTile.coords.map((elm) => ethers.fromTwos(elm, 16));
    const [showingIllustration, setShowingIllustration] = useState(false);
    // const [__, qHex, rHex, sHex] = lastTile.coords;

    const handleCoordinatesClick = () => {
        setShowingIllustration(!showingIllustration);
    };

    return (
        <StyledTileCoords {...otherProps}>
            <h3>Selected Tile Coordinates</h3>
            {showingIllustration && (
                <div className="tile-container">
                    <img src="empty-tile.png" alt="" width={80} />
                    <div className="element q">{`${q}`}</div>
                    <div className="element r">{`${r}`}</div>
                    <div className="element s">{`${s}`}</div>
                    <div className="axis q">{`Q`}</div>
                    <div className="axis r">{`R`}</div>
                    <div className="axis s">{`S`}</div>
                </div>
            )}
            <div className="coordinates" onClick={handleCoordinatesClick}>{`${q}, ${r}, ${s}`}</div>
            {/* <div className="coordinates">{`Q:${qHex} R:${rHex} S:${sHex}`}</div> */}
        </StyledTileCoords>
    );
};