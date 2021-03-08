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
  Name!: string;

  @Field()
  @Column()
  Address!: string;

  @Field()
  @Column()
  Describe!: string;

  @Field()
  @Column()
  PicUrl!: string;

  @Field()
  @Column()
  Metadata!: string;

  @Field()
  @Column()
  ExternalLinks!: string;

  @Field()
  @Column()
  Status!: number;

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
