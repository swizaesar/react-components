import React, { useState, useCallback, useEffect } from "react";
import Style from "./index.style";

const TabMenu = ({
    settings = {
        color: {
            text: false,
            background: false,
            activeText: false,
            activeColor: false,
            activeBackground: false,
        },
        justifyContent: "start",
        fullTab: false,
    },
    mergesTab = false,
    data,
    backToZero = true,
    loop = false,
    tabClass = "",
    onGetPropsTab = () => {
        return false;
    },
    onGetActiveTab = () => {},
    children = false,
}) => {
    const { color, fullTab, justifyContent } = settings;
    const [activeTab, setActiveTab] = useState(0);

    const handlePropsMenuTab = useCallback(() => {
        onGetPropsTab(true);
    }, [onGetPropsTab]);
    const handleClickMenuTab = useCallback(
        (e, key) => {
            e.preventDefault();
            setActiveTab(key);
            onGetActiveTab(key);
            handlePropsMenuTab();
        },
        [handlePropsMenuTab, onGetActiveTab]
    );

    const setActiveTabContent = useCallback((key) => {
        setActiveTab(key);

        return false;
    }, []);

    useEffect(() => {
        if (backToZero) {
            setActiveTabContent(0);
        }
    }, [backToZero, setActiveTabContent]);

    return (
        <Style color={color} mergesTab={mergesTab}>
            <div className={`tab-top`}>
                <div className="tab-top-menu">
                    {data.map((item, key) => {
                        return (
                            <div
                                style={{
                                    width: fullTab ? "100%" : "unset",
                                    justifyContent: justifyContent,
                                }}
                                key={key}
                                className={`tab-top-title ${tabClass} ${
                                    key === activeTab ? "active" : ""
                                } `}
                                onClick={(e) => handleClickMenuTab(e, key)}
                            >
                                {item.title}
                                <span
                                    className={`border-active-link ${
                                        key === activeTab ? "active" : ""
                                    }`}
                                ></span>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="tab-content">
                {loop
                    ? data.map((item, key) => {
                          return (
                              <div
                                  key={key}
                                  style={{
                                      display: `${
                                          key === activeTab ? "block" : "none"
                                      }`,
                                  }}
                              >
                                  {item.render(key)}
                              </div>
                          );
                      })
                    : data[activeTab] && data[activeTab].render()
                    ? data[activeTab].render(activeTab)
                    : "No Content"}
            </div>
            {children || false}
        </Style>
    );
};
export default TabMenu;
