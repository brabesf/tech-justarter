class mutationAPI {
  constructor() {
    this.mov_list = [];
  }

  async sendMutation(mutation) {
    try {
      console.log("Received mutation:\n" + JSON.stringify(mutation))
      this.mov_list.push(mutation)
      return {status: 'OK'};
    } catch (error) {
      console.error('Error in API call:', error);
      return {status: 'ERROR'};
    }
  }
}

export default new mutationAPI();