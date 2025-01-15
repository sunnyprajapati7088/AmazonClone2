const footerLinks = {
  "Get to Know Us": [
    { name: "About Amazon", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press Releases", href: "#" },
    { name: "Amazon Science", href: "#" },
  ],
  "Connect with Us": [
    { name: "Facebook", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "Instagram", href: "#" },
  ],
  "Make Money with Us": [
    { name: "Sell on Amazon", href: "#" },
    { name: "Sell under Amazon Accelerator", href: "#" },
    { name: "Protect and Build Your Brand", href: "#" },
    { name: "Amazon Global Selling", href: "#" },
    { name: "Supply to Amazon", href: "#" },
    { name: "Become an Affiliate", href: "#" },
    { name: "Fulfilment by Amazon", href: "#" },
    { name: "Advertise Your Products", href: "#" },
    { name: "Amazon Pay on Merchants", href: "#" },
  ],
  "Let Us Help You": [
    { name: "Your Account", href: "#" },
    { name: "Returns Centre", href: "#" },
    { name: "Recalls and Product Safety Alerts", href: "#" },
    { name: "100% Purchase Protection", href: "#" },
    { name: "Amazon App Download", href: "#" },
    { name: "Help", href: "#" },
  ],
};

function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#232F3E", color: "white", padding: "2rem 0" }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2rem",
          }}
        >
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h2
                style={{
                  fontWeight: "bold",
                  marginBottom: "1rem",
                }}
              >
                {title}
              </h2>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {links.map((link) => (
                  <li key={link.name} style={{ marginBottom: "0.5rem" }}>
                    <a
                      href={link.href}
                      style={{
                        color: "#D3D3D3",
                        textDecoration: "none",
                        fontSize: "0.875rem",
                      }}
                      onMouseOver={(e) => {
                        e.target.style.color = "white";
                        e.target.style.textDecoration = "underline";
                      }}
                      onMouseOut={(e) => {
                        e.target.style.color = "#D3D3D3";
                        e.target.style.textDecoration = "none";
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "2rem",
            paddingTop: "2rem",
            borderTop: "1px solid #3a4553",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <img
            src="https://i0.wp.com/www.dafontfree.co/wp-content/uploads/2021/11/Amazon-Logo-Font-1-scaled.jpg?resize=2560%2C1578"
            alt="Amazon Logo"
            style={{
                width: "120px",
                height:"50px",
              filter: "brightness(2)",
            }}
          />
          <div style={{ display: "flex", gap: "1rem" }}>
            <select
              style={{
                backgroundColor: "#232F3E",
                color: "white",
                border: "1px solid #3a4553",
                borderRadius: "4px",
                padding: "0.25rem 0.5rem",
                fontSize: "0.875rem",
              }}
            >
              <option>English</option>
            </select>
            <select
              style={{
                backgroundColor: "#232F3E",
                color: "white",
                border: "1px solid #3a4553",
                borderRadius: "4px",
                padding: "0.25rem 0.5rem",
                fontSize: "0.875rem",
              }}
            >
              <option>India</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
