module.exports = class extends think.Service {
	async getAzureBlobSASString() {
		let sas_string = think.config('azure_blob.sas_string');
		let data = {
			sasString: sas_string
		};
		return data;
	}
};