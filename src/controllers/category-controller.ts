
import CategoryService from "../services/category-service"
import * as HttpStatus from "http-status";
import EntryService from "../services/entry-service";
import Helper from "../infra/helper";

class CategoryContoller {
    async get(req, res) {
        try {
            let response = await CategoryService.get();
            Helper.sendResponse(res, HttpStatus.OK, response)

        } catch (error) {
            console.error(error);
        }
    }

    async getById(req, res) {
        try {
            const _id = req.params.id;
            let response = await CategoryService.getById(_id);
            Helper.sendResponse(res, HttpStatus.OK, response);

        } catch (error) {
            console.error(error);
        }
    }

    async createCategory(req, res) {
        try {
            let vm = req.body;
            await CategoryService.create(vm);
            Helper.sendResponse(res, HttpStatus.OK, vm);

        } catch (error) {
            console.error(error);
        }
    }

    async update(req, res) {
        try {
            const _id = req.params.id;
            let news = req.body;
            await CategoryService.update(_id, news);
            Helper.sendResponse(res, HttpStatus.OK, `Atualizado com sucesso!`);

        } catch (error) {
            console.error(error);
        }
    }

    async delete(req, res) {
        try {
            const _id = req.params.id;

            const idCatEntry = await EntryService.getByCat(_id);
            if (!idCatEntry) {
                await CategoryService.delete(_id);
                Helper.sendResponse(res, HttpStatus.OK, "Deletado com sucesso!");
            } else {
               res.status(301).json({
                   message: 'Categoria esta sendo usado em um lançamento'
               })
            }
        } catch (error) {
            Helper.sendResponse(res, HttpStatus.OK, error);
        }
    }
}

export default new CategoryContoller();