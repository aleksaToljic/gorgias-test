import {render, screen} from "@testing-library/react";
import App, {TITLE} from "./App.tsx";

describe('App', () => {
    it('should render the Title', () => {
        render(<App/>)

        expect(screen.getByText(TITLE)).toBeInTheDocument()
    });
});