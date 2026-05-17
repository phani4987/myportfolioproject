import Header from './components/Head';
import Footer from './components/Foot';
import { AuthProvider } from './context/AuthContext';
import './styles/App.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
