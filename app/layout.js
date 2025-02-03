import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import StoreProvider from "./StoreProvider";

 

export const metadata = {
  title: "Booth App",
  description: "generate booths",
};

export default function RootLayout({ children }) {
  return (
    <html 
    data-arp=""
    data-qb-extension-installed="true"
    data-qb-installed="true"
    >
      <body inmaintabuse="1" cz-shortcut-listen="true">
        <div className="container">
          <StoreProvider>{children}</StoreProvider>
        </div>
      </body>
    </html>
  );
}
