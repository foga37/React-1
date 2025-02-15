

function Sidebar({ data }) {
  return (
    <div className="sidebar">
      <ul>
        {data.links.map((link, index) => (
          <li key={index}>{link}</li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;