import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";



@Injectable()
export class MongooseService<T>{
    private abstractModel: Model<T>;
    constructor(model: Model<T>) {
        this.abstractModel = model
    }

    async create(data: T): Promise<T> {
        return await this.abstractModel.create(data);
    }

    async findAll(): Promise<T[]> {
        return await this.abstractModel.find().exec();
    }

    async findOne(id: string): Promise<T> {
        return await this.abstractModel.findById(id).exec();
    }

    async update(id: string, data: T): Promise<T> {
        return await this.abstractModel.findByIdAndUpdate(id, data, {new: true}).exec();
    }

    async delete(id: string): Promise<T> {
        return await this.abstractModel.findByIdAndDelete(id).exec();
    }
}