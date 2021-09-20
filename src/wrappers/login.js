import { Redirect } from 'umi';

export default (props) => {
  const isLogin = true;
  if (isLogin) {
    return <Redirect to="/" />;
  } else {
    return <div>{props.children}</div>;
  }
};
