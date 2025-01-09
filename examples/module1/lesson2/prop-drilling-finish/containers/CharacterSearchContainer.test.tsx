// @vitest-environment jsdom

import '@testing-library/jest-dom/vitest';
import { test, expect, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CharacterSearchContainer from './CharacterSearchContainer';

afterEach(cleanup);

const mockCharacters = [
    {
        "id": 1,
        "name": "Rick Sanchez"
    },
    {
        "id": 2,
        "name": "Morty Smith"
    },
    {
        "id": 3,
        "name": "Summer Smith"
    }
];

test('default controls are displayed', async () => {
    render(<CharacterSearchContainer />);
    
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Gender')).toBeInTheDocument();
    expect(screen.getByLabelText('Sort by')).toBeInTheDocument();
});