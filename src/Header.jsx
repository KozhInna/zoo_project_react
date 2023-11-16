const Header = ({ onchange }) => {
  return (
    <header className="header">
      <h1>Zoo app</h1>
      <div>
        <input type="text" placeholder="Type" onChange={onchange} />
      </div>
    </header>
  );
};
export default Header;
