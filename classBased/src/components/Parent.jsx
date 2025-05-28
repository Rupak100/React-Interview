import React from "react";
class Parent extends React.Component {
    constructor(props) {
        console.log("constructor called");

        super(props);
        this.state = {
            count: 0,
            age: 0
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getderived state from props");
        // this method is static because the instance is not created thats why it is static so it does not have the access to this 
        // and that is the reason why we directly use props here 
        return {
            age: props.age
        }

    }

    componentDidMount() {
        //    for api calls
        console.log("component did mount");

    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldcompont update called");
        // always return something boolean value

        if (nextState.count === this.state.count) {
            return false;
        }
        return true;

    }


    getSnapshotBeforeUpdate(prevProps, prevState) {
        return prevState;
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.state, snapshot);

    }

    componentWillUnmount() {
        console.log("unmounting called");

    }
    render() {
        console.log("render is calling");
        return (
            <>
                <p>Count: {this.state.count}</p>
                <p>Age: {this.state.age}</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increase</button>
            </>
        )
    }
}
export default Parent;