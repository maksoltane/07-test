class ApiRestService {
    data: { items: string[] };
    constructor() {
      this.data = {
        items: []
       };
    }

    loadData() {
      this.data.items = ['one', 'two', 'three'];
      return this.data;
    }

}
export { ApiRestService };

