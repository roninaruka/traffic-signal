import React, { Component } from "react";
import Signal from "./Signle";

export default class App extends Component {
    constructor(props) {
        super();
        this.state = {
            signalOneColor: "green",
            signalTwoColor: "red",
            signalThreeColor: "red",
            signalFourColor: "red",
            signalOneTime: 35,
            signalTwoTime: 40,
            signalThreeTime: 45,
            signalFourTime: 50,
        };
    }
    render() {
        return (
            <div className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
                <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
                <div className="relative min-h-screen flex flex-col items-center justify-center ">
                    <div className="grid mt-8  gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
                        <Signal
                            color={this.state.signalFourColor}
                            time={this.state.signalFourTime}
                            min={121}
                            max={170}
                        />
                        <Signal
                            color={this.state.signalThreeColor}
                            time={this.state.signalThreeTime}
                            min={76}
                            max={120}
                        />
                    </div>
                    <div className="grid mt-8  gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
                        <Signal
                            color={this.state.signalTwoColor}
                            time={this.state.signalTwoTime}
                            min={36}
                            max={75}
                        />
                        <Signal
                            color={this.state.signalOneColor}
                            time={this.state.signalOneTime}
                            min={0}
                            max={35}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
