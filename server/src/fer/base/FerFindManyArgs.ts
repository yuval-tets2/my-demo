/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FerWhereInput } from "./FerWhereInput";
import { Type } from "class-transformer";
import { FerOrderByInput } from "./FerOrderByInput";

@ArgsType()
class FerFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => FerWhereInput,
  })
  @Field(() => FerWhereInput, { nullable: true })
  @Type(() => FerWhereInput)
  where?: FerWhereInput;

  @ApiProperty({
    required: false,
    type: [FerOrderByInput],
  })
  @Field(() => [FerOrderByInput], { nullable: true })
  @Type(() => FerOrderByInput)
  orderBy?: Array<FerOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { FerFindManyArgs };
