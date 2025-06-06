import { Provider } from "react-redux";
import Counter from "./Counter";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import store from "./redux/store";
import React from "react";
import { expect } from "vitest";

describe("Counter Component", () => {
  it("Default value should be 0", () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    const value = screen.getByText("Count 0");
    expect(value).toBeInTheDocument();
  });
  it("Should display 1 when clicking the increment button 1",()=>{

    //Arrange 
       render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    //Act 
    let IncrementBtn = screen.getByText('Increase');
    fireEvent.click(IncrementBtn);
    let result = screen.getByText('Count 1');
    //Assert
    expect(result).toBeInTheDocument();
  }),
  it("Should display the input text as entered",()=>{
      //Arrange 
       render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    let input = screen.getByPlaceholderText('Enter');
    fireEvent.change(input,{target:{value :"Kutta"}});
    let textInput = screen.getByText('You typed : Kutta');
    expect(textInput).toBeInTheDocument();
  })
});
