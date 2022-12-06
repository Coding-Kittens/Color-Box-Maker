import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

it("should renders without crashing", () => {
  render(<BoxList />);
});

it("should match snapshot", () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

describe("Logic tests", () => {
  let boxList;
  let width;
  let height;
  let color;
  let submitBtn;

  beforeEach(() => {
    boxList = render(<BoxList />);
    width = boxList.getByLabelText("Width");
    height = boxList.getByLabelText("Height");
    color = boxList.getByLabelText("Color");
    submitBtn = boxList.queryByText("Add Box");
  });

  it("should be able to edit the form and should clear the input values when the form is submitted", () => {
    //the form should be empty
    expect(width.value).toEqual("");
    expect(height.value).toEqual("");
    expect(color.value).toEqual("#000000");

    //fill out the form
    fireEvent.change(width, { target: { value: "50px" } });
    fireEvent.change(height, { target: { value: "40px" } });
    fireEvent.change(color, { target: { value: "#497e94" } });

    //the form input values should be correct
    expect(width.value).toEqual("50px");
    expect(height.value).toEqual("40px");
    expect(color.value).toEqual("#497e94");

    fireEvent.click(submitBtn);

    //the form should be empty after submit
    expect(width.value).toEqual("");
    expect(height.value).toEqual("");
    expect(color.value).toEqual("#000000");
  });

  it("should be able to make a new box", () => {
    //there should not be a box
    expect(boxList.container.querySelector(".Box")).not.toBeInTheDocument();

    //make a box
    fireEvent.change(width, { target: { value: "50px" } });
    fireEvent.change(height, { target: { value: "50px" } });
    fireEvent.change(color, { target: { value: "#497e94" } });
    fireEvent.click(submitBtn);

    //there should be a new box
    expect(boxList.container.querySelector(".Box")).toBeInTheDocument();
  });

  it("should delete the box", () => {
    //make a box
    fireEvent.change(width, { target: { value: "50px" } });
    fireEvent.change(height, { target: { value: "50px" } });
    fireEvent.change(color, { target: { value: "#497e94" } });
    fireEvent.click(submitBtn);

    //there should be a new box
    expect(boxList.container.querySelector(".Box")).toBeInTheDocument();

    //delete the box
    const deleteBtn = boxList.queryByText("X");
    fireEvent.click(deleteBtn);


      //there should nolonger be a box
    expect(boxList.container.querySelector(".Box")).not.toBeInTheDocument();
  });
});
