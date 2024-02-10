import React, { useState } from 'react';

const Tabs = (props) => {
    const tabArr = props.tabArr;
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <>
            <ul className="nav nav-fill nav-tabs" role="tablist">
                {tabArr.map((content, idx) =>
                    <li className="nav-item" role="presentation" key={idx}>
                        <a style={{ cursor: "pointer" }} className={`nav-link ${idx === activeTab ? 'active' : ''}`} onClick={() => handleTabClick(idx)} role="tab">Tab {idx}</a>
                    </li>
                )}
            </ul>

            <div className="tab-content pt-5" id="tab-content">
                {tabArr.map((content, idx) =>
                    <div className={`tab-pane ${idx === activeTab ? 'active' : ''}`} id={`fill-tabpanel-${idx}`} role="tabpanel" aria-labelledby={`fill-tab-${idx}`} key={idx}>{content}</div>
                )}
            </div>
        </>
    );
}

export default Tabs;
