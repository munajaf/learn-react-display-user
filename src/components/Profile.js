import React, {Component} from 'react';
import { Drawer } from "antd";
import _ from 'lodash';
import ProfileList from "./ProfileList";

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataDrawer : false
        }
    }

    render() {
        return (
            <div>
                <Drawer
                    placement="right"
                    width={'50%'}
                    closable={false}
                    onClose={this.props.onClose}
                    visible={this.props.visible}
                >
                    {
                        (!_.isEmpty(this.props.dataSource)) ?
                            <ProfileList dataSource={this.props.dataSource}/>
                        :
                        ''
                    }

                </Drawer>
            </div>
        );
    }
}

export default Profile;