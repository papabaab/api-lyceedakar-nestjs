import { Type } from "@nestjs/common";
import { Resolver, Query, Args } from "@nestjs/graphql";
import { MongooseService } from "./mongoose.service";



export function BaseResolver<T extends Type<unknown>>(classReference:T) : any{

    @Resolver({isAbstract: true})
    abstract class BaseResolverHost  {
        private mg : MongooseService<typeof classReference>
        constructor(mongooseService: MongooseService<typeof classReference>) {
            this.mg = mongooseService
        }

        @Query(() => [classReference], { name: `findAll${classReference.name}` })
        async findAll(): Promise<typeof classReference[]> {
            return await this.mg.findAll()
        }

        @Query(() => classReference, { name: `findOne${classReference.name}` })
        async findOne(@Args('id') id: string): Promise<typeof classReference> {
            return await this.mg.findOne(id)
        }
}

return BaseResolverHost
}