class CrudService {
    constructor(repository) {
        this.repository = repository;
    }

    async create(data) {
        try {
            const response = await this.repository.create(data);
            return response;
        } catch (error) {
            console.log("Something went wrong in the crud service");
            throw {error}
        }
    }

    async destroy(Id) {
        try {
            const response = await this.repository.destroy(Id);
            return response;
        } catch (error) {
            console.log("Something went wrong in the crud service");
            throw {error}
        }
    }

    async get(Id) {
        try {
            const response = await this.repository.get(Id);
            return response;
        } catch (error) {
            console.log("Something went wrong in the crud service");
            throw {error}
        }
    }

    async getAll() {
        try {
            const response = await this.repository.getAll();
            return response;
        } catch (error) {
            console.log("Something went wrong in the crud service");
            throw {error}
        }
    }

    async update(id, data) {
        try {
            const response = await this.repository.update(id,data);
            return response;
        } catch (error) {
            console.log("Something went wrong in the crud service");
            throw {error}
        }
    }
}

module.exports = CrudService;