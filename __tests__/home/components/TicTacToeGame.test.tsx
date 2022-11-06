import { render } from '@testing-library/react-native';
import * as React from 'react';

import { TicTacToeGame } from '../../../src/home/components/TicTacToeGame';

describe('Tic Tac Toe Game ', () => {
    it('renders game screen', () => {
        const { toJSON } = render(<TicTacToeGame />);
        expect(toJSON()).toMatchSnapshot();
    });

    it('should render player component', () => {
        const { getByTestId } = render(<TicTacToeGame />);
        expect(getByTestId('playerIcon')).toBeTruthy();
    });
});
