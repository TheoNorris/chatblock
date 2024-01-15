import "@styles/globals.css";
import Provider from "@components/Provider";

export const metadata = {
  title: "ChatBlock",
  description:
    "ChatBlock is a website focused on connecting people all across the world! CONNECT.CHAT.REPEAT",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="bg-gradient min-h-screen">
            <main className="app">{children}</main>
          </div>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
