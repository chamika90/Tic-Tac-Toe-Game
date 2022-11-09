import { render } from '@testing-library/react-native';
import * as React from 'react';

import { GridBackground, GridBackgroundProps } from '../../../src/screens/home/components/GridBackground';

describe('Grid', () => {
    it('should render horizontal Lines container', () => {
        const mockProps: GridBackgroundProps = {
            cellWidth: 20,
            cellContainerWidth: 60,
            numberOfHorizontalLines: 2,
            numberOfVerticalLines: 2,
        };
        const { getByTestId } = render(<GridBackground {...mockProps} />);
        expect(getByTestId('horizontalLineContainer')).toBeTruthy();
    });

    it('should render vertical Lines container', () => {
        const mockProps: GridBackgroundProps = {
            cellWidth: 20,
            cellContainerWidth: 60,
            numberOfHorizontalLines: 2,
            numberOfVerticalLines: 2,
        };
        const { getByTestId } = render(<GridBackground {...mockProps} />);
        expect(getByTestId('verticalLineContainer')).toBeTruthy();
    });

    it('should render two horizontal Lines ', () => {
        const mockProps: GridBackgroundProps = {
            cellWidth: 20,
            cellContainerWidth: 60,
            numberOfHorizontalLines: 2,
            numberOfVerticalLines: 2,
        };
        const { getAllByTestId } = render(<GridBackground {...mockProps} />);
        const numberOfHorizontalLines = getAllByTestId('horizontalLine');
        expect(numberOfHorizontalLines.length).toEqual(2);
    });

    it('should render two vertical Lines ', () => {
        const mockProps: GridBackgroundProps = {
            cellWidth: 20,
            cellContainerWidth: 60,
            numberOfHorizontalLines: 2,
            numberOfVerticalLines: 2,
        };
        const { getAllByTestId } = render(<GridBackground {...mockProps} />);
        const numberOfVerticalLines = getAllByTestId('verticalLine');
        expect(numberOfVerticalLines.length).toEqual(2);
    });
});
