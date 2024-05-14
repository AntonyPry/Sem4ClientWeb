import { render } from "@testing-library/react";
import App from "./App";
import "intersection-observer";

test("рендер компонента App", () => {
  const { getByText } = render(<App />);
  console.log(getByText);
});
