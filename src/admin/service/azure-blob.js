module.exports = class extends think.Service {
	async getAzureBlobConnectionString() {
		let connection_string = think.config('azure_blob.connection_string');
		let data = {
			connectionString: connection_string
		};
		return data;
	}
};