import "./index.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="container">
          <a href="/">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5c3cc04b365f02e708cdbc9d/1548124010568-LB1WV90S7PJ379XDP8P2/Rick_and_Morty_logo.png?format=2500w"
              alt="rick-and-morty"
              style={{ height: "70px" }}
            />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
