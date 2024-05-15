import { render } from "@testing-library/react";
import MyDocument from "./MyDocument";

test("рендер компонента MyDocument", () => {
  const props = {
    name: "Test Name",
    picture: new File([""], "test.jpg", { type: "image/jpeg" }),
  };
  render(<MyDocument {...props} />);
});
