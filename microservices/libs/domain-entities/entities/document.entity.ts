import { Column, Entity } from 'typeorm';
import { EntityContextEnum, TrackedBaseEntity } from '../common';

@Entity('documents')
export class Document extends TrackedBaseEntity {
	@Column({ nullable: false })
	ID: number;

	@Column('uuid', { nullable: false })
	DocumentID: string;

	@Column({ nullable: true })
	MetaDataType: string;

	@Column({ nullable: true })
	MetaDataValue: string;

	@Column('uuid', { nullable: false })
	relatedEntityGuid: string;

	@Column('int', { nullable: false })
	entityContext?: EntityContextEnum;

	@Column('int', { nullable: false })
	SourceID: number;

	@Column({ nullable: true })
	Key1: string;

	@Column({ nullable: true })
	Key2: string;

	@Column({ nullable: true })
	Key3: string;

	@Column({ nullable: false })
	DocFileName: string;

	@Column({ nullable: false })
	DocType: string;

	@Column({ nullable: true })
	FileSize: string;

	@Column({ nullable: false })
	CreatedDate: Date;

	@Column({ nullable: false })
	CreatedBy: string;

	@Column({ nullable: true })
	isDeleted: boolean;

	@Column({ nullable: true })
	DeletedDate: Date;

	@Column({ nullable: true })
	DeletedBy: string;

	@Column({ nullable: true })
	UpdatedDate: Date;

	@Column({ nullable: true })
	UpdatedBy: string;

	@Column({ nullable: false })
	Extension: string;

	@Column({ nullable: false })
	MeridianImport: boolean;

	@Column('int', { nullable: false })
	ScanStatus: number;
}
