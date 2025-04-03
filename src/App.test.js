import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Should pass", () => {
	test("Should show react learn element that is a <a> tag </a>", () => {
		render(<App />);
		const linkElement = screen.getAllByTestId("test-link")[0];
		expect(linkElement).toBeInTheDocument();
	});
});
