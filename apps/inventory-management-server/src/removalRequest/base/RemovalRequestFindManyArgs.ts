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
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { RemovalRequestOrderByInput } from "./RemovalRequestOrderByInput";

@ArgsType()
class RemovalRequestFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => RemovalRequestWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => RemovalRequestWhereInput, { nullable: true })
  @Type(() => RemovalRequestWhereInput)
  where?: RemovalRequestWhereInput;

  @ApiProperty({
    required: false,
    type: [RemovalRequestOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [RemovalRequestOrderByInput], { nullable: true })
  @Type(() => RemovalRequestOrderByInput)
  orderBy?: Array<RemovalRequestOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { RemovalRequestFindManyArgs as RemovalRequestFindManyArgs };
