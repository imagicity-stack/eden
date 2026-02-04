import './globals.css';

export const metadata = {
  title: 'Edenwoods Eduhub Foundation',
  description: 'Edenwoods Eduhub Foundation - Empowering education in Hazaribagh, Jharkhand.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
