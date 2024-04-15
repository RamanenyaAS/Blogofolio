import './User.css'

function User({ username }: { username: string }) {

  let initial = username.split(" ").reduce(((res, item) => res + item[0]), "");

  return (
    <>
      <div className="user-block">
        <div className="user-block__initial">{initial}</div>
        <div className="user-block__name">{username}</div>
      </div>
    </>
  );
}

export default User;