/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RemovalRequestWhereInput } from "./RemovalRequestWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class RemovalRequestCountArgs {
  @ApiProperty({
    required: false,
    type: () => RemovalRequestWhereInput,
  })
  @Field(() => RemovalRequestWhereInput, { nullable: true })
  @Type(() => RemovalRequestWhereInput)
  where?: RemovalRequestWhereInput;
}

export { RemovalRequestCountArgs as RemovalRequestCountArgs };
