import SearchBar from "../SearchBar";
import Sinon from "sinon";
import Button from '../Button'

describe("<SearchBar />", () => {
    it("should render an input field", () => {
        const Wrapper = shallow(<SearchBar/>);
        expect(Wrapper.find("input").exists()).to.equal(true);
    });

    it("input field with value", () => {
        const Wrapper = shallow(<SearchBar keyword="test"/>);
        const input = Wrapper.find("input");
        const mockChangeEvent = {
            target: {
                value: "input event"
            }
        };
        expect(Wrapper.state("keyword")).to.equal("test");
        input.simulate("change", mockChangeEvent);
        expect(Wrapper.state("keyword")).to.equal("input event");
    });

    it("should render an input field", () => {
        const Wrapper = shallow(<SearchBar keyword="test"/>);
        expect(Wrapper.state("keyword")).to.equal("test");
        Wrapper.setProps({keyword: "new keyword"});
        expect(Wrapper.state("keyword")).to.equal("new keyword");
    });

    it("should invoke keyword change event when keyword changed", () => {
        const keywordChanged = Sinon.spy();
        const Wrapper = shallow(<SearchBar keywordChanged={keywordChanged}/>);
        const input = Wrapper.find("input");
        const mockChangeEvent = {
            target: {
                value: "input event"
            }
        };
        input.simulate("change", mockChangeEvent);
        expect(keywordChanged.calledOnce).to.equal(true);
        expect(keywordChanged.calledWith("input event")).to.equal(true);
    });

    it("should render an add button", () => {
        const Wrapper = shallow(<SearchBar/>);
        expect(Wrapper.find(Button).exists()).to.equal(true);
    });

    it("should clear keyword input field when add button is clicked", () => {
        const Wrapper = shallow(<SearchBar keyword="test"/>);
        const addButton = Wrapper.find(Button);
        addButton.simulate('click');
        expect(Wrapper.state("keyword")).to.equal("");
    });

    it("should invoke add todo event when add button is clicked", () => {
        const addTodo = Sinon.spy();
        const Wrapper = shallow(<SearchBar keyword="test" addTodo={addTodo}/>);
        const addButton = Wrapper.find(Button);
        addButton.simulate('click');
        expect(addTodo.calledOnce).to.equal(true);
        expect(addTodo.calledWith("test")).to.equal(true);
    });
});
