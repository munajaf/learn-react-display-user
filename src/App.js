import React, {Component} from 'react';
import { Table } from 'antd';
import axios from 'axios';


import "antd/dist/antd.css";
import "./index.css";
import Profile from "./components/Profile";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            loading: true,
            tableListData: [],
            drawerData: [],
        };
    }


    componentDidMount() {
        axios
            .get("https://randomuser.me/api/?results=200&seed=924cb858eea236a2")
            .then(response => {
                this.setState({
                    loading: false,
                    tableListData: response.data.results
                })
            })
    }

    handleOnCloseDrawer = () => {
        this.setState({visible: false})
    };

    handleDrawer = (record) => {
        this.setState({
            visible: true,
            drawerData: record
        })

    };

    render() {
        const { loading, tableListData, visible, drawerData } = this.state;
        const columns = [
            {
                title: 'First Name',
                dataIndex: 'name.first',
            },
            {
                title: 'Last Name',
                dataIndex: 'name.last',
            },
            {
                title: 'Gender',
                dataIndex: 'gender',
            },
            {
                title: 'Age',
                dataIndex: 'dob.age',
            }
        ];

        return (
            <div style={{margin:'20px'}}>
                <Profile visible={visible} onClose={this.handleOnCloseDrawer} dataSource={drawerData} />

                <Table
                    columns={columns}
                    loading={loading}
                    rowKey={record => record.login.uuid}
                    dataSource={tableListData}
                    pagination={{defaultPageSize: 15}}
                    onRow={(record, rowIndex) => {
                        return {
                            onClick: event => this.handleDrawer(record), // click row
                        };
                    }}
                />
            </div>
        );
    }
}

export default App;