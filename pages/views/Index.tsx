import * as React from 'react';

interface InitialProps {
  query: string;
  test: string
}

interface Props extends InitialProps {}

class Index extends React.Component<Props> {
  public static getInitialProps({ query }: InitialProps) {
    const test: string = '555';
    return { query, test };
  }

  public render() {
    return (<React.Fragment>{this.props.query}</React.Fragment>);
  }
}

export default Index;