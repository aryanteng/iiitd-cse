import { Montserrat } from 'next/font/google';
import './globals.css';
import PropTypes from 'prop-types';
import { StyledEngineProvider } from '@mui/material';
import CustomThemeProvider from '@/theme/provider';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/Footer';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'IIITD CSE',
  description: 'IIITD CSE',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={montserrat.className}>
        <StyledEngineProvider injectFirst>
          <CustomThemeProvider>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </CustomThemeProvider>
        </StyledEngineProvider>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
