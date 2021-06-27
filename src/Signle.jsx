import React from "react";

function Signal(props) {
    const [time, setTime] = React.useState(props.time);
    const [color, setColor] = React.useState(props.color);
    const [totalTime, setTotalTime] = React.useState(170);
    React.useEffect(() => {
        const timer = setInterval(() => {
            if (totalTime === 0) {
                setTotalTime(170);
                setTime(props.time);
            } else {
                if (totalTime <= props.max && totalTime >= props.min) {
                    setTime(time - 1);
                    time <= 6 ? setColor("yellow") : setColor("green");
                } else {
                    Math.abs(totalTime - props.max) > 1
                        ? setTime(
                              totalTime - props.max < 0
                                  ? 170 - Math.abs(totalTime - props.max)
                                  : totalTime - props.max
                          )
                        : setTime(props.time);
                    setColor("red");
                }
                setTotalTime(totalTime - 1);
            }
        }, 1000);
        return () => clearInterval(timer);
    }, [time, totalTime, props.max, props.min, props.time]);
    return (
        <div className="flex flex-col">
            <div className="bg-white shadow-md  rounded-3xl p-4">
                <div className="flex-none lg:flex">
                    <div className=" h-full w-full lg:h-48 lg:w-48   lg:mb-0 mb-3">
                        <div className="container">
                            <div
                                className={`circle ${color === "red" && color}`}
                            ></div>
                            <div
                                className={`circle ${
                                    color === "yellow" && color
                                }`}
                            ></div>
                            <div
                                className={`circle ${
                                    color === "green" && color
                                }`}
                            ></div>
                        </div>
                    </div>
                    <div className="flex-auto ml-3 justify-evenly py-2">
                        <h1 className="text-9xl text-center self-center ">
                            {time}
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signal;
