import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { todo } from '../../redux/actions/toDo';
import Router from 'next/router'

interface InitialProps {
  query: string;
}

interface HelloState {
  data: string
}

interface Props extends InitialProps {
  hello: HelloState,
  todo: Function
}

class Index extends React.Component<Props> {
  public static getInitialProps({ query }: InitialProps) {
    return { query };
  }

  private handleClick = () => {
    this.props.todo();
  }

  private handleGoToCat = () => {
    Router.push('/cats/1');
  }

  public render() {
    return (
      <React.Fragment>
        {this.props.query} <br/>
        {this.props.hello.data} <br />
        <button onClick={this.handleClick}>Action Click</button> <br />
        <button onClick={this.handleGoToCat}>GoTo Cat</button>
    </React.Fragment>);
  }
}

interface StateFromRedux {
  hello: HelloState
}

const mapStateToProps = (state: StateFromRedux) => {
  return {
    hello: state.hello
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      todo
    },
    dispatch
  );
};


export default connect(mapStateToProps, mapDispatchToProps)(Index);