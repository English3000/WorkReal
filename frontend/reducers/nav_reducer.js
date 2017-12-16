import MyStackNavigator from '../components/navigator';

// console.log(MyStackNavigator)
const _initialState = () => (
    MyStackNavigator.router.getStateForAction(
        MyStackNavigator.router.getActionForPathAndParams('home')
    )
);

export default (state = _initialState(), action) => {
  const nextState = MyStackNavigator.router.getStateForAction(action, state);
  return nextState || state;
};
