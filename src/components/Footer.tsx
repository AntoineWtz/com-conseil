import { FaEnvelope, FaFacebook, FaLinkedin, FaPhone } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className="bg-[#344697] text-white p-8 text-center">
            <div className="flex justify-center space-x-6">
                <a href="https://www.facebook.com" className="hover:text-blue-300">
                    <FaFacebook size={30} />
                </a>
                <a href="https://www.linkedin.com" className="hover:text-blue-300">
                    <FaLinkedin size={30} />
                </a>
                <a href="tel:+330123456789" className="hover:text-blue-300">
                    <FaPhone size={30} />
                </a>
                <a href="mailto:cabinet@cccomconseil.com" className="hover:text-blue-300">
                    <FaEnvelope size={30} />
                </a>
            </div>
            <p className="mt-4">© 2023 C&C Com' Conseil. Tous droits réservés.</p>
        </footer>
    );

}

export default Footer;
