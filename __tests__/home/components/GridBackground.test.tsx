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
});
