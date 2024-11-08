import { APP_NAME } from '@/lib/constants';
import { rootCertificates } from 'tls';

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="p-5 flex-center">
        2024 {APP_NAME}. All Rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
