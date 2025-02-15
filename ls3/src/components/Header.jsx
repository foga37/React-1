

function Header({ data }) {
  return (
    <div className="header">
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
}

export default Header;