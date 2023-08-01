import Config from 'react-native-config';

export default {
	url: Config.API_URL,
	urlImageAppAds: "https://api.felem.ma/pubs/",
	urlImageCategory: "https://api.felem.ma/categories/",
	urlImageAdvertisers: "https://api.felem.ma/advertisers/",
	apiCompanies: 'https://api.felem.ma/api/companies',
	apiFilterCompaniesByKeyword: 'https://api.felem.ma/api/companies?where=',
	apiContact: 'https://api.felem.ma/api/contacts',
	configHeaders: {
		Accept: 'application/json',
		'Content-Type': 'application/json'
	}
};