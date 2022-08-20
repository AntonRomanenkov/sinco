import React, {Fragment} from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MonthlyPrice from './MonthlyPrice';
import YearlyPrice from './YearlyPrice';

const PricingTab = () => {
    return (
        <Fragment>
            <Tabs>
                <TabList className="d-flex justify-content-center pricing-nav-one style-none">
                    <Tab className="nav-item">
                        <button className="nav-link active">Monthly</button>
                    </Tab>
                    <Tab className="nav-item">
                        <button className="nav-link active">Yearly</button>
                    </Tab>
                </TabList>

                <TabPanel className="tab-pane active show">
                    <MonthlyPrice/>
                </TabPanel>
                <TabPanel className="tab-pane">
                    <YearlyPrice/>
                </TabPanel>
            </Tabs>
        </Fragment>
    )
}

export default PricingTab