import React from "react";
import TabMenu from "../../Components/Molekul/TabMenu";
import ExampleTabFirst from "./ExampleTabFirst";
import ExampleTabThird from "./ExampleTabThird";
import ExampleTabSecond from "./ExampleTabSecond";

const Tab = () => {
    return (
        <div>
            <div>
                <TabMenu
                    color={{
                        text: "#aaa",
                        background: "#fff",
                        activeColor: "#000",
                        activeBackground: "#000",
                    }}
                    data={[
                        {
                            title: "Tab 1",
                            key: 1,
                            render: () => {
                                return <ExampleTabFirst />;
                            },
                        },
                        {
                            title: "Tab 2",
                            key: 2,
                            render: () => {
                                return <ExampleTabSecond />;
                            },
                        },
                        {
                            title: "Tab 3",
                            key: 3,
                            render: () => {
                                return <ExampleTabThird />;
                            },
                        },
                    ]}
                />
            </div>
            <div>
                <TabMenu
                    mergesTab
                    data={[
                        {
                            title: "Tab 1",
                            key: 1,
                            render: () => {
                                return <ExampleTabFirst />;
                            },
                        },
                        {
                            title: "Tab 2",
                            key: 2,
                            render: () => {
                                return <ExampleTabSecond />;
                            },
                        },
                        {
                            title: "Tab 3",
                            key: 3,
                            render: () => {
                                return <ExampleTabThird />;
                            },
                        },
                    ]}
                />
            </div>
        </div>
    );
};
export default Tab;
