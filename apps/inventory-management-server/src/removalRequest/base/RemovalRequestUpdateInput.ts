/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsOptional, IsString, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { EnumRemovalRequestStatus } from "./EnumRemovalRequestStatus";

@InputType()
class RemovalRequestUpdateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  deleteField?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  item?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  requestedBy?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumRemovalRequestStatus,
  })
  @IsEnum(EnumRemovalRequestStatus)
  @IsOptional()
  @Field(() => EnumRemovalRequestStatus, {
    nullable: true,
  })
  status?: "Option1" | null;
}

export { RemovalRequestUpdateInput as RemovalRequestUpdateInput };
