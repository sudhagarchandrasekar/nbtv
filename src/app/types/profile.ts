import { SocialMedia } from './social-media';
import { Contact } from './contact';
import { About } from './about';
export interface Profile {
    title: string;
    about: About;
    contact: Contact;
    socialMedia: SocialMedia[];
}
