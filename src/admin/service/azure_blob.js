module.exports = class extends think.Service {
	async getAzureBlobSASString() {
		let sas_string_base64 = think.config('azure_blob.sas_string_base64');
		let data = {
			sasStringBase64: sas_string_base64
		};
		return data;
	}
};