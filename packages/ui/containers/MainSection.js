import { connect } from "react-redux";
import * as TodoActions from "store/actions";
import { bindActionCreators } from "redux";
import MainSection from "../components/MainSection";
import { getCompletedTodoCount } from "store/selectors";

const mapStateToProps = state => ({
    todosCount: state.todos.length,
    completedCount: getCompletedTodoCount(state)
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainSection);
