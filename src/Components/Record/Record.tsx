import * as React from 'react';
import { Input } from 'antd';
import './Index.less';


class Record extends React.Component {
  public render() {
    return (
      <div><span>血糖：</span><Input /></div>
    );
  }
}

export default Record;