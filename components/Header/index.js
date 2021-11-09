import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';


export default function Header() {
    return <header>
        <div className="mobile-header">
        <ul>
          <li>
            <ArrowBackIcon className="arrow-left-mobile" />
            </li> 
            <li>Billing
      </li>
      <li>
    <ContactSupportIcon />
      </li>
      </ul>
      </div>
    </header>
}