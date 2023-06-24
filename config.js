import Config from 'react-native-config';

export default {
	url: Config.API_URL,
	urlImageAppAds: "http://api.felem.ma/pubs/",
	urlImageCategory: "http://api.felem.ma/categories/",
	urlImageAdvertisers: "http://api.felem.ma/advertisers/",
	apiCompanies: 'http://api.felem.ma/api/companies',
	apiFilterCompaniesByKeyword: 'http://api.felem.ma/api/companies?where=',
	apiContact: 'http://api.felem.ma/api/contacts',
	configHeaders: {
		Accept: 'application/json',
		'Content-Type': 'application/json'
	}
};