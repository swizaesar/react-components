import React from "react";
import styled from "styled-components";

const Style = styled.span`
    font-size: 40px;
    display: block;
    text-align: center;
    font-weight: bold;
    color: #f34d14;
`;

const CountDown = () => {
    const [hours, setHours] = React.useState(23);
    const [minutes, setMinutes] = React.useState(59);
    const [seconds, setSeconds] = React.useState(59);

    React.useEffect(() => {
        const today = new Date();
        const tomorrow = new Date(today);
        console.log("tumorrow", tomorrow.setDate(tomorrow.getDate()));
        var countDownDate = tomorrow.setDate(tomorrow.getDate() + 1);
        const interval = setInterval(() => {
            var now = new Date().getTime();
            var distance = countDownDate - now;
            setHours(
                Math.floor(
                    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                )
            );
            setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));

            setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <Style>
            {hours}:{minutes}:{seconds}
        </Style>
    );
};
export default CountDown;
