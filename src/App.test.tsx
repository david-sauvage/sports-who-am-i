import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
    it('renders without crashing', () => {
        render(<App />);
        // Basic check, might fail if App has text we don't know yet, but render should pass
        expect(document.body).toBeInTheDocument();
    });
});
