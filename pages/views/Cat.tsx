import * as React from 'react';

interface InitialProps {
  query: string;
}

interface HelloState {
  data: string
}

interface Props extends InitialProps {
  
}

class Cat extends React.Component<Props> {
  public static getInitialProps({ query }: InitialProps) {
    return { query };
  }

  public render() {
    return (
      <React.Fragment>
        {this.props.query} <br/>
    </React.Fragment>);
  }
}


export default Cat;