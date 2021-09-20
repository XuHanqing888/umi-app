import { history, Link } from 'umi';
export default (props) => {
  console.log(props.location.query);
  return (
    <div>
      <div>
        <p>top</p>
        <div>
          <button
            onClick={() => {
              history.push('/user');
            }}
          >
            user
          </button>
          <button
            onClick={() => {
              history.push('/user?name=xuyuan');
            }}
          >
            user name:xuyuan
          </button>
          <button
            onClick={() => {
              history.push({ pathname: '/user', query: { age: 20 } });
            }}
          >
            user
          </button>
        </div>
        <hr />
        <div>
          <Link to="/user?a=1">user</Link>
        </div>
      </div>
      <hr />
      <div>
        <p>bottom</p>
        <div>{props.children}</div>
      </div>
    </div>
  );
};
