import { Website } from './website';
import { Email } from './email';
import { Phone } from './phone';
export interface Contact {
    phone: Phone[];
    email: Email;
    website?: Website;
    color?: string;
}
