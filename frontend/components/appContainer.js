import { connect } from 'react-redux';
import StackNavigator from './navigator';
import React, { Component, ReactElement } from 'react';
import { addNavigationHelpers } from 'react-navigation';

class AppContainer extends Component {
    render(): ReactElement {
        const { dispatch, nav } = this.props;
        const navigation = addNavigationHelpers({ dispatch, state: nav.navigation });
        return (
            <StackNavigator navigation={navigation} />
        )
    }
}

const mapStateToProps = state => {
    return { nav: state }
};

export default connect(mapStateToProps)(AppContainer);
