import { screen, render, waitFor } from "@testing-library/react";
import WordsCounter from "./WordsCounter/WordsCounter";
import Image from "./Image/Image";
import "@testing-library/jest-dom";
describe("File input Component Test", () => {
  test("whether word counter exists", async () => {
    render(<WordsCounter />);
    await waitFor(() => {
      expect(screen.getByTestId("wordsCounter")).toBeTruthy();
    });
  });

  test("whether file input changes state", async () => {
    render(<Image />);
    await waitFor(() => {
      expect(screen.getByTestId("pictureInput")).toBeTruthy();
    });
  });
});
