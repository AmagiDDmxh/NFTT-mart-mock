import { Query, Resolver,  } from "type-graphql";



@Resolver()
export class HelloWorldResolver {
  @Query(() => String)
  item() {
    return {
      a: 1,
      b: 2,
    };
  }
}
