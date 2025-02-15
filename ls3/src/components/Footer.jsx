

function Footer({ data }) {
  return (
    <div className="footer">
      <p>{data.text}  {data.year}</p>
    </div>
  );
}

export default Footer;