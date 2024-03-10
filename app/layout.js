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
  description:
    'This is the official website of the Department of Computer Science and Engineering at IIIT Delhi.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={montserrat.className}>
        <StyledEngineProvider injectFirst>
          <CustomThemeProvider>
            <Header />
            <link
              rel="icon"
              href="https://media.licdn.com/dms/image/C4D0BAQHB2H7RAmPh5A/company-logo_200_200/0/1630546171538/cseiiitd_logo?e=1718236800&v=beta&t=MAQckcmOYWT1bihrf7FAcQKTnYUu2KDimYxlDhfpcrk"
              sizes="any"
            />
            <main className="min-h-screen">{children}</main>
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
