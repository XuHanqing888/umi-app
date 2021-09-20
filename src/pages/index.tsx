import styles from './index.less';

// export default function IndexPage() {
//   return (
//     <div>
//       <h1 className={styles.title}>Page index</h1>
//     </div>
//   );
// }
import React, { Component } from 'react';

class index extends Component {
  state = { a: 1 };
  render() {
    return (
      <div>
        <h1>{this.state.a}</h1>
      </div>
    );
  }
}

export default index;
