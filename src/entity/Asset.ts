import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@ObjectType()
@Entity()
export class Asset extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column()
  address!: string;

  @Field()
  @Column()
  describe!: string;

  @Field()
  @Column()
  picUrl!: string;

  @Field()
  @Column()
  metadata!: string;

  @Field()
  @Column()
  externalLinks!: string;

  @Field()
  @Column()
  status!: number;

  @Field()
  @Column()
  price!: number;

  @Field()
  @Column()
  latestPrice: number;

  @Field()
  @Column()
  collectionId!: number;

  @Field()
  @Column()
  categoryId!: number;

  @Field(() => String)
  @CreateDateColumn()
  createdAt!: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt!: Date;
}
