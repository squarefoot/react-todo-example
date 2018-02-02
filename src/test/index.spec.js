import SearchBar from "../SearchBar";

describe("<SearchBar />", () => {
  it("should render an input field", () => {
    const Wrapper = shallow(<SearchBar />);
    expect(Wrapper.find('input').exists()).to.equal(true);
  });
});
