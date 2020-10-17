import { connect } from 'react-redux';
import Counter from '../component/Counter';
import { increment, decrement, reset } from '../action';

const mapStateToProps = (state) => ({
  counter: state
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => { dispatch(increment()) },
  decrement: () => { dispatch(decrement()) },
  reset: () => { dispatch(reset()) },
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);