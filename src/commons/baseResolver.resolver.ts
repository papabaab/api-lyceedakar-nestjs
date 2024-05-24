import { Type } from "@nestjs/common";
import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { MongooseService } from "./mongoose.service";



export function BaseResolver<T extends Type<unknown>>(classEntityRef:T, classInputRef:T) : any{

    @Resolver({isAbstract: true})
    abstract class BaseResolverHost  {
        private mg : MongooseService<typeof classEntityRef>
        constructor(mongooseService: MongooseService<typeof classEntityRef>) {
            this.mg = mongooseService
        }

        @Query(() => [classEntityRef], { name: `findAll${classEntityRef.name}`.replace('Entity', '') })
        async findAll(): Promise<typeof classEntityRef[]> {
            return await this.mg.findAll()
        }

        @Query(() => classEntityRef, { name: `findOne${classEntityRef.name}`.replace('Entity', '') })
        async findOne(@Args('id') id: string): Promise<typeof classEntityRef> {
            return await this.mg.findOne(id)
        }

        @Mutation(() => classEntityRef, { name: `create${classEntityRef.name}`.replace('Entity', '') })
        async create(@Args('data',{ type: () => classInputRef}) data: typeof classInputRef): Promise<typeof classEntityRef> {
            return await this.mg.create(data)
        }

        @Mutation(() => classEntityRef, { name: `update${classEntityRef.name}`.replace('Entity', '') })
        async update(@Args('id') id: string, 
                     @Args('data',{ type: () => classInputRef}) data: typeof classInputRef): Promise<typeof classEntityRef> {
            return await this.mg.update(id, data)
        }

        @Mutation(() => classEntityRef, { name: `delete${classEntityRef.name}`.replace('Entity', '') })
        async delete(@Args('id') id: string): Promise<typeof classEntityRef> {
            return await this.mg.delete(id)
        }
}

return BaseResolverHost
}