import '@/styles/globals.css'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import styles from '@/styles/Home.module.css';

export default function App({ Component, pageProps }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Component {...pageProps} />
  </LocalizationProvider>
  );
}
