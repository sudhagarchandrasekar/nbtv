import { UrlSource } from './url-source';
import { Profile } from './profile';
export interface AppData {
    title: string;
    description: string;
    description1: string;
    liveTvURL: UrlSource[];
    nakkubetta: Profile;
    developer: Profile;
}
