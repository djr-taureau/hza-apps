import { Column, Entity } from 'typeorm';
import { EntityContextEnum, TrackedBaseEntity } from '../common';


@Entity('documents')
export class Document extends TrackedBaseEntity {
	@Column({ nullable: false })
	name: string;

	@Column({ nullable: true })
	note: string;

	@Column('uuid', { nullable: false })
	relatedEntityGuid: string;

	@Column('int', { nullable: false })
	entityContext?: EntityContextEnum;

	@Column('uuid', { nullable: false })
	owner: string;

	@Column({ nullable: false })
	createdOn: Date;

	@Column({ nullable: false })
	createBy: string;

	@Column({ nullable: false })
	modifiedOn: Date;

	@Column('uuid', { nullable: false })
	modifiedBy: string;
}